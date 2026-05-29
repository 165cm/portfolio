# その他運用ルール

ティア横断で押さえておく実務ルールをまとめる。

## 1. リポジトリ標準ファイル

| ファイル | T0 | T1 | T2 | T3 |
|---|---|---|---|---|
| `README.md` | ✓ | ✓ | ✓ | ✓ |
| `LICENSE`（既定 MIT） | 任意 | ✓ | ✓ | ✓ |
| `.gitignore` | ✓ | ✓ | ✓ | ✓ |
| `.github/AGENTS.md` | — | ✓ | ✓ | ✓ |
| `DEVELOPER.md` | — | — | ✓ | ✓ |
| `.env.example` | — | 必要時 | ✓ | ✓ |
| `CHANGELOG.md` + リリースタグ | — | — | — | ✓ |
| `PRIVACY.md` | — | — | — | 個人情報を扱うなら ✓ |
| `TERMS.md` | — | — | — | 有償なら ✓ |

## 2. ブランチ・PR 運用

- **デフォルトブランチ**: `main`
- **AI 開発ブランチ命名**: `claude/<topic-XXX>`（既存運用に準拠）
- **直接 push 禁止**: T2 以上は PR 経由でマージする
- **PR タイトル**: コミット規約に準拠（Conventional Commits）
- **マージ方式**: 通常 merge commit、小さい修正は squash

## 3. GitHub Pages

- **有効化基準**: T1 以上の **デモ可能なフロントエンドアプリ**
- **Source**: GitHub Actions（Legacy の "Deploy from branch" は使わない）
- **ワークフロー名**: `Deploy to GitHub Pages` で統一
- **ベースパス**: モノレポでない限り `/<repo-name>` で揃える

## 4. セキュリティ

- **API キー禁止**: 絶対にコミットしない。`.env` は必ず `.gitignore`
- **個人情報禁止**: テストデータも実名を避ける（特に T3）
- **依存自動更新**: T2 以上で **Dependabot** を有効化
- **Secret Scanning**: GitHub の Secret Scanning は全リポでオン

## 5. .gitignore 共通プレフィックス

技術別の最小セットを [`templates/`](./templates/) に用意。
カスタマイズは各リポで自由だが、以下は必ず入れる:
```
.env
.env.local
node_modules/
dist/
.DS_Store
```

## 6. ライセンス

- **既定**: MIT
- **例外**: Apache-2.0（Talkative-Camera の前例あり、特許条項が欲しい時）
- **配布物**: GPL は避ける（プロプライエタリ統合の自由を残す）

## 7. portfolio サイトとの連動ルール

- **公開作品として正式扱い** ⇔ `portfolio/src/data/apps.ts` に登録されている
- 新規 T1 以上アプリを公開する際は、**同じ作業の中で apps.ts への追加 PR を作る**
- Topics / About / apps.ts の **3点が同じ顔をしている** ことを定期的にチェック

## 8. リリースタグ（T3 のみ）

- 形式: SemVer `vMAJOR.MINOR.PATCH`（例: `v0.3.1`）
- 初回公開は `v0.1.0` から
- 破壊的変更は MAJOR を上げる
- CHANGELOG は [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/) 形式

## 9. AI 開発フロー

1. 作業開始時、対象リポの `.github/AGENTS.md` を読む
2. リンク先の中央マニュアル（このフォルダ）を必要箇所だけ参照
3. ティアを判定 → ティアに応じた成果物・規約適用
4. PR 作成時は本マニュアルへのリンクを Body に貼ると親切

## 10. 自分のためのチェックリスト

新規リポジトリを作ったら、以下を満たしているか確認:

- [ ] README.md が共通テンプレに沿っている
- [ ] ティアを決め、Topics の `tier-*` を設定
- [ ] `category-*` を設定
- [ ] About の Description / Website を入れた
- [ ] LICENSE を置いた（T1 以上）
- [ ] `.github/AGENTS.md` を置いた（T1 以上）
- [ ] `DEVELOPER.md` を置いた（T2 以上）
- [ ] `portfolio/src/data/apps.ts` に登録した（T1 以上）
