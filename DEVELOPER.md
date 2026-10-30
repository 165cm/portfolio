# 165cm Portfolio — Developer Guide

> ユーザー向け説明は [README.md](./README.md) を参照。

## 技術スタック

| レイヤ | 採用技術 |
|---|---|
| 言語 / フレームワーク | TypeScript / Astro 4 |
| データ | `src/data/apps.ts` / `consult.ts` / `business.ts`（静的データ） |
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
  ├ pages/        ルーティング（index.astro / about.astro / apps/[slug].astro / business/）
  ├ components/   UIコンポーネント（WorkCard — 実績1件 / ConsultChat — 開発相談チャット）
  ├ layouts/      共通レイアウト（BaseLayout / BusinessLayout）
  ├ data/         apps.ts — 全アプリ情報の単一ソース / consult.ts — 開発相談の窓口・できること・進め方 / business.ts — 事業者・有料サービス・価格
  └ styles/       global.css
docs/
  └ standards/    全リポ共通の統一運用マニュアル
.github/
  └ workflows/    deploy.yml — GitHub Pages 自動デプロイ
```

## アプリ情報の追加・編集

`src/data/apps.ts` を編集するだけで、トップページの実績と詳細ページが両方更新されます。
新規アプリ追加時は `App` 型に従ってオブジェクトを追加してください。

**サイトに表示されるのは `showcase` を持つ作品だけ**です（トップの実績・詳細ページとも）。
`showcase` の無い作品はデータとして登録済みのまま非表示になります。載せ直す時は `showcase` を足します。

- `order`: 表示順 / `proof`: 実績のひとこと / `points`: 見どころ / `skills`: 作れること
- `image`: `public/works/` に置いたスクリーンショット（`imageKind` で縦長 `phone` / 横長 `wide`）
- 画像が無い作品は `figures`（数値）を図として表示する

選定方針（2026-10）：直近1か月に更新した公開リポジトリから、趣味色の強いものを除いた精鋭のみを載せる。

## 開発相談チャット

`src/components/ConsultChat.astro`。決まった質問に答えてもらい、最後に相談内容をまとめたメールの下書き（`mailto:`）を作る自動応答。
静的サイトでサーバーを持たないため、入力内容はどこにも送信しない。宛先・返信目安は `src/data/consult.ts`（宛先は事業者ページと同じ `business.email`）。
質問や選択肢を変える時は、コンポーネント内の `stepsDef` と `kindReplies` を編集する。

## 事業者ページ（ぱぱぞんアプリ）

`/business/` 以下は有料サービスの販売者ページ（Stripe の事業者サイト審査用・購入者向け）。
トップ・特定商取引法に基づく表記・返金・キャンセルポリシー・利用規約・プライバシーポリシーの5ページ。
屋号・連絡先・サービス・価格・販売状況は `src/data/business.ts` が正本で、Stripe に登録した内容と一致させること。
規約の方針（返金・解約・期間・問い合わせ対応・個人情報）は、165cm/construction2nd の `docs/legal/DRAFT_POLICY_PACK.md`（ユーザー選択済み）に合わせる。販売開始時は `status`・`statusNote` と規約の「販売開始後に適用」の文言を見直す。
価格や規約を変えたら `business.updated`（最終更新日）も更新する。
運営者の写真は `public/business/` に置き、`owner.image` にパス（例：`business/owner.jpg`）を入れる。空ならイニシャルのアイコン。
配色は `.biz` で紺・青に上書きしていて、趣味の一覧の配色には影響しない。
注意：Astro の `<table>` の中に `{式}` を書くと HTML が崩れるため、表は `<dl class="info-list">` で作る。

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
