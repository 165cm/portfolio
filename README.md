# 165cm の作りもの (Portfolio)

趣味で作っているアプリの紹介サイト。GitHub Pages にデプロイされます。

公開URL: https://165cm.github.io/portfolio/

## 開発

```bash
npm install
npm run dev      # ローカルプレビュー (http://localhost:4321/portfolio)
npm run build    # 本番ビルド
npm run preview  # 本番ビルドのプレビュー
```

## アプリ情報の追加・編集

`src/data/apps.ts` を編集するだけで、トップページのカードと詳細ページが両方更新されます。

## デプロイ

`main` ブランチに push すると、GitHub Actions が自動的にビルドして Pages に公開します。
リポジトリ設定の `Pages > Build and deployment > Source` を **GitHub Actions** に設定してください。

## 📘 統一運用マニュアル（全リポ共通）

165cm の他リポジトリでも使う規約（コミット・README・Topics 等）はこのリポジトリで一元管理しています。

- [AGENTS.md](./AGENTS.md) — AI 開発エージェント向けの入り口
- [docs/standards/](./docs/standards/) — マニュアル本体（ティア、コミット、README、Topics、Pages 運用ほか）
- 🛠 [docs/standards/rollout/apply-procedure.md](./docs/standards/rollout/apply-procedure.md) — **他リポへ規約を適用する際にコピペする指示文テンプレ**
- 📋 [docs/standards/rollout/repositories.md](./docs/standards/rollout/repositories.md) — 各リポの設定値一覧
