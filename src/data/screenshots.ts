import type { App, Showcase } from './apps';

// 各作品リポジトリに置かれた「ポートフォリオ用スクリーンショット」をビルド時に取りに行く。
// 置き場所のルール（docs/standards/ops.md「portfolio 用スクリーンショット」）:
//   <作品リポジトリ>/docs/portfolio/phone.(png|jpg|webp)  … 縦長のスマホ画面
//   <作品リポジトリ>/docs/portfolio/wide.(png|jpg|webp)   … 横長の画面・バナー
// 見つかればそれを、無ければ portfolio 側の showcase.image（public/works/）を使う。
// 取得した画像は src/pages/shots/[file].ts がサイトのファイルとして書き出す。
// サイトは毎日自動でビルドし直すため（deploy.yml の schedule）、作品側で画像を
// 差し替えれば、portfolio を触らなくても翌日までに反映される。

export type ShotKind = 'phone' | 'wide';
export type RemoteShot = { file: string; kind: ShotKind; data: Uint8Array };
export type Shot = { src: string; kind: ShotKind; alt: string };

const KINDS: ShotKind[] = ['phone', 'wide'];
const EXTS = ['webp', 'png', 'jpg'] as const;
const TYPES: Record<string, string> = { webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg' };
const MAX_BYTES = 3 * 1024 * 1024;

// "https://github.com/owner/repo" → "owner/repo"
function parseRepo(url: string): string | null {
  const m = url.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git)?\/?$/);
  return m ? m[1] : null;
}

async function fetchImage(url: string): Promise<Uint8Array | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    const data = new Uint8Array(await res.arrayBuffer());
    // 大きすぎる画像や、画像でない中身は使わない
    if (data.byteLength === 0 || data.byteLength > MAX_BYTES) return null;
    const type = res.headers.get('content-type') ?? '';
    if (!type.startsWith('image/') && !type.startsWith('application/octet-stream')) return null;
    return data;
  } catch {
    return null;
  }
}

async function findShot(app: App): Promise<RemoteShot | null> {
  const repo = parseRepo(app.links.repo);
  if (!repo) return null;
  for (const kind of KINDS) {
    for (const ext of EXTS) {
      const data = await fetchImage(`https://raw.githubusercontent.com/${repo}/HEAD/docs/portfolio/${kind}.${ext}`);
      if (data) return { file: `${app.slug}.${ext}`, kind, data };
    }
  }
  return null;
}

// 1回のビルドの中では1度だけ取得する（ページとファイル書き出しで同じ結果を使う）
let cache: Promise<Record<string, RemoteShot>> | undefined;

export function fetchRemoteShots(apps: App[]): Promise<Record<string, RemoteShot>> {
  cache ??= Promise.all(apps.map(async (a) => [a.slug, await findShot(a)] as const)).then(
    (entries) => {
      const map: Record<string, RemoteShot> = {};
      for (const [slug, shot] of entries) if (shot) map[slug] = shot;
      return map;
    }
  );
  return cache;
}

export const contentTypeOf = (file: string) => TYPES[file.split('.').pop() ?? ''] ?? 'application/octet-stream';

// 作品ごとに表示する画像を決める。src は BASE_URL を含まないパス。
export async function resolveShots(
  apps: (App & { showcase: Showcase })[]
): Promise<Record<string, Shot>> {
  const remote = await fetchRemoteShots(apps);
  const shots: Record<string, Shot> = {};
  for (const a of apps) {
    const r = remote[a.slug];
    if (r) shots[a.slug] = { src: `shots/${r.file}`, kind: r.kind, alt: `${a.name}の画面` };
    else if (a.showcase.image)
      shots[a.slug] = {
        src: a.showcase.image,
        kind: a.showcase.imageKind ?? 'wide',
        alt: a.showcase.imageAlt ?? `${a.name}の画面`,
      };
  }
  return shots;
}
