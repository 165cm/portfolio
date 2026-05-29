# AI Coding Agent Guide

このリポジトリでの開発作法は、**中央マニュアル** に従ってください。

📘 中央マニュアル: https://github.com/165cm/portfolio/tree/main/docs/standards

- [tiers.md](https://github.com/165cm/portfolio/blob/main/docs/standards/tiers.md) — 作品ティア
- [commits.md](https://github.com/165cm/portfolio/blob/main/docs/standards/commits.md) — コミット規約
- [readme-template.md](https://github.com/165cm/portfolio/blob/main/docs/standards/readme-template.md) — README 規約
- [developer-template.md](https://github.com/165cm/portfolio/blob/main/docs/standards/developer-template.md) — DEVELOPER 規約
- [topics.md](https://github.com/165cm/portfolio/blob/main/docs/standards/topics.md) — Topics 規約
- [ops.md](https://github.com/165cm/portfolio/blob/main/docs/standards/ops.md) — その他運用ルール

## このリポジトリ固有の情報

- **Tier**: T2（実用ツール）
- **Category**: tool / meta（165cm 全リポジトリの運用基盤）
- **特有の制約**:
  - `docs/standards/` 配下の変更は全リポジトリに影響するため慎重に
  - `src/data/apps.ts` が全アプリ情報の**唯一のソース**。ここを変えれば一覧・詳細ページが両方更新される
  - デプロイは `main` push 自動。Settings → Pages → Source = GitHub Actions が前提

## このリポジトリでよく使うコマンド

```bash
npm run dev      # 開発サーバ (http://localhost:4321/portfolio)
npm run build    # 本番ビルド
npm run preview  # 本番ビルドのプレビュー
```
