# AI Coding Agent Guide — 165cm Portfolio

このリポジトリは、165cm アカウントで開発しているすべてのリポジトリの
**運用ルールの本家** です。Claude Code をはじめとする AI 開発エージェントは、
新規開発・既存リポジトリの改修を問わず、本マニュアルに従って作業してください。

## ⚡ よく使う入口

- 🛠 **他リポへ規約を適用する指示文テンプレ** → [docs/standards/rollout/apply-procedure.md](./docs/standards/rollout/apply-procedure.md)
- 📋 **各リポの設定値（Tagline/Topics/Website）一覧** → [docs/standards/rollout/repositories.md](./docs/standards/rollout/repositories.md)
- 📘 **規約本体（目次）** → [docs/standards/README.md](./docs/standards/README.md)

## 📘 マニュアル本体

すべての規約は [`docs/standards/`](./docs/standards/) に集約しています。

| ドキュメント | 内容 |
|---|---|
| [tiers.md](./docs/standards/tiers.md) | 作品ティア分類（T0〜T3） — 規約強度の基準 |
| [commits.md](./docs/standards/commits.md) | コミットメッセージ規約（Conventional Commits） |
| [readme-template.md](./docs/standards/readme-template.md) | `README.md` 統一テンプレ（一般ユーザー向け） |
| [developer-template.md](./docs/standards/developer-template.md) | `DEVELOPER.md` テンプレ（開発者向け） |
| [topics.md](./docs/standards/topics.md) | GitHub Topics（カテゴリタグ）規約 |
| [about.md](./docs/standards/about.md) | リポジトリ "About" 欄の規約 |
| [ops.md](./docs/standards/ops.md) | その他運用ルール（ファイル標準・ブランチ・Pages 等） |
| [templates/](./docs/standards/templates/) | 貼り付け用の生テンプレート |

## 🎯 作業時の最低限の心得

1. **まずティアを確認**: 作業対象リポジトリが T0〜T3 のどれかを `tiers.md` で判定する
2. **ティアに応じた成果物を出す**: T0 にエンタープライズ品質は不要、T3 を雑に扱わない
3. **README は一般ユーザー向け / DEVELOPER は開発者向け** — 役割を混ぜない
4. **コミットは Conventional Commits**: `commits.md` の形式で
5. **公開作品なら portfolio に登録**: T1 以上を新規公開する際は `src/data/apps.ts` への追加 PR をセットで作る

## 🗂 portfolio リポジトリ固有のメモ

- Tier: **T2（実用ツール）**
- カテゴリ: meta（運用基盤）
- 技術: Astro + TypeScript、GitHub Pages
- 主要データ: `src/data/apps.ts` — このファイルが「公開作品一覧」の単一の真実の源
