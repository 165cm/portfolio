import type { App } from './apps';

// slug -> リポジトリのメタ情報（最終更新日 / About の Website）
export type RepoMeta = { pushedAt?: string; homepage?: string };
export type RepoMetaMap = Record<string, RepoMeta>;

// "https://github.com/owner/repo" → "owner/repo"
function parseRepo(url: string): string | null {
  const m = url.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git)?\/?$/);
  return m ? m[1] : null;
}

// ビルド時に各リポジトリのメタ情報を取得する。
// - pushed_at: 最後にコミットが push された日時（「最近の更新順」に使用）
// - homepage:  GitHub の About > Website（「公開ページ」リンクに使用）
// GitHub Actions では GITHUB_TOKEN で認証されレート制限を回避できる。
// 取得できなかったものは結果に含めず、呼び出し側でフォールバックする。
export async function fetchRepoMeta(apps: App[]): Promise<RepoMetaMap> {
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
        const data = (await res.json()) as { pushed_at?: string; homepage?: string | null };
        const meta: RepoMeta = {};
        if (data.pushed_at) meta.pushedAt = data.pushed_at;
        // homepage は未設定だと "" や null になるため、値があるものだけ採用する
        if (data.homepage) meta.homepage = data.homepage;
        return [app.slug, meta] as const;
      } catch {
        return null;
      }
    })
  );

  const map: RepoMetaMap = {};
  for (const e of entries) if (e) map[e[0]] = e[1];
  return map;
}
