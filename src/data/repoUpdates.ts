import type { App } from './apps';

// slug -> リポジトリ最終更新日（ISO 文字列）
export type RepoUpdateMap = Record<string, string>;

// "https://github.com/owner/repo" → "owner/repo"
function parseRepo(url: string): string | null {
  const m = url.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git)?\/?$/);
  return m ? m[1] : null;
}

// ビルド時に各リポジトリの pushed_at（最後にコミットが push された日時）を取得する。
// GitHub Actions では GITHUB_TOKEN で認証されレート制限を回避できる。
// 取得できなかったものは結果に含めず、呼び出し側で date フィールドにフォールバックする。
export async function fetchRepoUpdates(apps: App[]): Promise<RepoUpdateMap> {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'portfolio-build',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const entries = await Promise.all(
    apps.map(async (app) => {
      const repo = parseRepo(app.links.repo);
      if (!repo) return null;
      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
          headers,
          signal: AbortSignal.timeout(10000),
        });
        if (!res.ok) return null;
        const data = (await res.json()) as { pushed_at?: string };
        return data.pushed_at ? ([app.slug, data.pushed_at] as const) : null;
      } catch {
        return null;
      }
    })
  );

  const map: RepoUpdateMap = {};
  for (const e of entries) if (e) map[e[0]] = e[1];
  return map;
}
