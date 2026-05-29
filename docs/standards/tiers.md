# 作品ティア分類

すべてのリポジトリを 4 段階に分類し、求める品質を変えます。
ティア判定は **オーナー（165cm）の意思** が最優先。AI は迷ったら下記の判定軸で当てる。

## 判定軸

| 軸 | 内容 |
|---|---|
| 利用者 | 自分だけ / 家族 / 友人 / 不特定多数 |
| 公開度 | 非公開 / GitHub 公開 / デモ公開 / ストア配布 / 有償 |
| 維持責任 | 壊れても放置可 / 必要時に直す / 継続メンテ |

## ティア定義

### T0 — 習作 / 実験
- **例**: Country-Quiz, Infographic-test, Unity（古い）
- **求めるもの**:
  - README に「これは何の練習・実験か」が3行書いてあれば十分
  - ライセンス省略可
- **Topics**: `tier-learning`
- **About**: Description のみ任意

### T1 — 趣味公開
- **例**: side-clock, OshiMemoShare, btc-simulator-widget, parts-location-search, rss-translator
- **求めるもの**:
  - 共通 README テンプレに沿う（[readme-template.md](./readme-template.md)）
  - LICENSE（既定 MIT）
  - スクリーンショット推奨
  - 軽量な `.github/AGENTS.md` 配置
- **Topics**: `tier-hobby` + category + tech
- **About**: Description / Website / Topics 必須

### T2 — 実用ツール
- **例**: aircon-repair, aircon-tool-gear, Talkative-Camera, QuizApp, mp2txt, park-park-lunch, field-engineer-route-optimizer, benkyaku-noto, **portfolio（このリポジトリ）**
- **求めるもの**:
  - T1 のすべて
  - **スクリーンショット / GIF 必須**
  - **DEVELOPER.md 必須**（[developer-template.md](./developer-template.md)）
  - デモ URL 明記（あれば）
  - Issue が来たら対応する意思
  - Dependabot 有効化
- **Topics**: `tier-utility` + category + tech
- **About**: 必須項目フル

### T3 — プロダクト
- **例**: firstrade-calculator-app（有償販売）, family-movie-review, Yamtune
- **求めるもの**:
  - T2 のすべて
  - リリースタグ（SemVer: `v0.1.0` 形式）
  - `CHANGELOG.md`
  - 個人情報を扱う場合は `PRIVACY.md`、有償なら `TERMS.md`
  - サポート窓口の明記（メール / Issue / 販売ページ）
  - 直接 push 禁止、PR 経由でマージ
- **Topics**: `tier-product` + category + tech
- **About**: 必須項目フル + 販売 / ストア URL

## ティアバッジ

README 冒頭に貼る Shields.io 形式の例:

```markdown
![Tier](https://img.shields.io/badge/tier-utility-orange)
```

| Tier | Badge |
|---|---|
| T0 | `![Tier](https://img.shields.io/badge/tier-learning-lightgrey)` |
| T1 | `![Tier](https://img.shields.io/badge/tier-hobby-blue)` |
| T2 | `![Tier](https://img.shields.io/badge/tier-utility-orange)` |
| T3 | `![Tier](https://img.shields.io/badge/tier-product-red)` |
