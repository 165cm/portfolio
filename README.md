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
