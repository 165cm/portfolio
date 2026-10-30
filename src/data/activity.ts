// 「小さな改善をコツコツ積み上げている」ことを数字で見せるため、ビルド時に
// この1年で 165cm が作成し、取り込まれた（マージされた）プルリクエストの数を数える。
// GitHub Actions では GITHUB_TOKEN で認証される。取得できない時は null を返し、
// 呼び出し側で数字なしの文言に切り替える。

const DAY = 24 * 60 * 60 * 1000;

let cache: Promise<number | null> | undefined;

export function fetchMergedPrCountLastYear(user = '165cm'): Promise<number | null> {
  cache ??= (async () => {
    const since = new Date(Date.now() - 365 * DAY).toISOString().slice(0, 10);
    const q = encodeURIComponent(`author:${user} type:pr is:merged merged:>=${since}`);
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'portfolio-build',
    };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;
    try {
      const res = await fetch(`https://api.github.com/search/issues?q=${q}&per_page=1`, {
        headers,
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as { total_count?: number };
      return typeof data.total_count === 'number' ? data.total_count : null;
    } catch {
      return null;
    }
  })();
  return cache;
}
