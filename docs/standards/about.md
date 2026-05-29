# リポジトリ "About" 欄の規約

GitHub リポジトリページの右上、歯車アイコンから設定する "About" を整える。

## 3項目すべて埋める（T1 以上）

### 1. Description
- **日本語1行**
- README の一行キャッチコピーと **同文**
- 例: 「カメラで写したモノが、キャラ化して電話してくる」

### 2. Website
優先順位:

1. **デモあり** → そのURL（例: `https://165cm.github.io/Talkative-Camera/`）
2. **ストア配布** → ストアURL（Chrome Web Store / Gumroad 等）
3. **デモなし** → ポートフォリオサイトの該当ページ（**フォールバック**）
   - 形式: `https://165cm.github.io/portfolio/apps/<slug>`

### 3. Topics
[topics.md](./topics.md) の規約に従う。
最低 **tier-* と category-*** の2つ + 主要 tech を 2〜4 個。

## チェックボックス

- ☑ **Releases** — T3 のみ表示
- ☑ **Packages** — npm 等に公開している場合
- ☐ **Deployments** — 通常はオフでよい（環境表示が雑多になる）

## 例（Talkative-Camera の場合）

```
Description: カメラで写したモノが、キャラ化して電話してくる
Website:     https://165cm.github.io/Talkative-Camera/
Topics:      tier-utility, category-family, typescript, ai, gemini, ai-assisted, for-family
```

## ティアとの対応

| Tier | Description | Website | Topics |
|---|---|---|---|
| T0 | 任意 | 任意 | `tier-learning` のみで可 |
| T1 | 必須 | 必須（デモ無ければ portfolio フォールバック） | tier + category + tech |
| T2 | 必須 | 必須 | フル |
| T3 | 必須 | 必須（販売/ストアURL推奨） | フル + Releases 表示 |
