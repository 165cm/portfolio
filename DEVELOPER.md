# 165cm の作りもの — Developer Guide

> ユーザー向け説明は [README.md](./README.md) を参照。

## 技術スタック

| レイヤ | 採用技術 |
|---|---|
| 言語 / フレームワーク | TypeScript / Astro 4 |
| データ | `src/data/apps.ts`（静的データ） |
| 外部API | なし |
| デプロイ | GitHub Pages（GitHub Actions） |

## セットアップ

```bash
git clone https://github.com/165cm/portfolio.git
cd portfolio
npm install
npm run dev      # 開発サーバ (http://localhost:4321/portfolio)
```

## スクリプト

| コマンド | 役割 |
|---|---|
| `npm run dev` | 開発サーバ |
| `npm run build` | 本番ビルド |
| `npm run preview` | 本番ビルドのプレビュー |

## ディレクトリ構成

```
src/
  ├ pages/        ルーティング（index.astro / about.astro / apps/[slug].astro）
  ├ components/   UIコンポーネント（AppCard / CategorySection）
  ├ layouts/      共通レイアウト（BaseLayout）
  ├ data/         apps.ts — 全アプリ情報の単一ソース
  └ styles/       global.css
docs/
  └ standards/    全リポ共通の統一運用マニュアル
.github/
  └ workflows/    deploy.yml — GitHub Pages 自動デプロイ
```

## アプリ情報の追加・編集

`src/data/apps.ts` を編集するだけで、トップページのカードと詳細ページが両方更新されます。
新規アプリ追加時は `App` 型に従ってオブジェクトを追加してください。

## デプロイ手順

- ホスティング: GitHub Pages
- トリガー: `main` への push で自動デプロイ（`.github/workflows/deploy.yml`）
- 公開URL: https://165cm.github.io/portfolio/
- **設定**: リポジトリ Settings → Pages → Source = **GitHub Actions**

## 統一運用マニュアルについて

このリポジトリは 165cm アカウント全リポジトリの運用マニュアルを一元管理しています。
他リポへのロールアウト手順は [`docs/standards/rollout/`](./docs/standards/rollout/) を参照。

## AI 開発メモ

- このリポジトリは Claude Code で開発
- リポジトリ固有の作法は [.github/AGENTS.md](./.github/AGENTS.md)
- 中央マニュアル: https://github.com/165cm/portfolio/tree/main/docs/standards

## ライセンス

MIT
