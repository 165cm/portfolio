# 165cm リポジトリ 統一運用マニュアル

165cm アカウントで管理する **すべてのリポジトリ共通の運用ルール** をここに集約します。
AI 開発エージェント（Claude Code 等）も、人間の開発者も、迷ったらまずここを見てください。

## 目次

| # | ドキュメント | 内容 |
|---|---|---|
| 1 | [tiers.md](./tiers.md) | **作品ティア分類（T0〜T3）** — 何にどこまで力を入れるかの基準 |
| 2 | [commits.md](./commits.md) | コミットメッセージ規約 |
| 3 | [readme-template.md](./readme-template.md) | `README.md`（一般ユーザー向け）の統一テンプレ |
| 4 | [developer-template.md](./developer-template.md) | `DEVELOPER.md`（開発者向け）の統一テンプレ |
| 5 | [topics.md](./topics.md) | GitHub Topics の付け方 |
| 6 | [about.md](./about.md) | リポジトリ "About" 欄の埋め方 |
| 7 | [ops.md](./ops.md) | その他運用ルール（ファイル標準、ブランチ、Pages、セキュリティ） |

[templates/](./templates/) には、新規リポジトリにそのまま貼れる **生テンプレート** を置いています。

## 設計思想

- **ティア制で過剰品質を避ける**: 習作（T0）に重い規約を強いない。実用（T2）・プロダクト（T3）にはきっちり求める
- **一般ユーザー / 開発者で読者を分離**: README は「これは何？」中心、DEVELOPER は技術詳細
- **中央集約**: 規約を更新したい時は、各リポを回らずこの `portfolio` 1 か所で済ませる
- **portfolio サイトと GitHub UI の見え方を一致させる**: Topics / About / `src/data/apps.ts` の3点が同じ顔をする
