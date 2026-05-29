# DEVELOPER.md 統一テンプレ（開発者向け）

T2 以上のリポジトリは必ず DEVELOPER.md を持つ。
README が「読む人」のためのものなら、DEVELOPER は「触る人」のためのもの。

## 見出し順序

```markdown
# <アプリ名> — Developer Guide

> ユーザー向け説明は [README.md](./README.md) を参照。

## 技術スタック
| レイヤ | 採用技術 |
|---|---|
| 言語 / フレームワーク | ... |
| データ | ... |
| 外部API | ... |
| デプロイ | ... |

## セットアップ
\`\`\`bash
git clone https://github.com/165cm/<repo>.git
cd <repo>
npm install
cp .env.example .env  # 必要に応じて
npm run dev
\`\`\`

## 環境変数
| 変数 | 説明 | 必須 |
|---|---|---|
| `OPENAI_API_KEY` | ... | ✓ |

## スクリプト
| コマンド | 役割 |
|---|---|
| `npm run dev` | 開発サーバ |
| `npm run build` | 本番ビルド |
| `npm run test` | テスト実行 |

## ディレクトリ構成
\`\`\`
src/
  ├ pages/        ...
  ├ components/   ...
  └ data/         ...
\`\`\`

## デプロイ手順
- ホスティング: GitHub Pages / Vercel / その他
- トリガー: `main` への push で自動デプロイ
- 公開URL: ...

## AI 開発メモ
- このリポジトリは Claude Code で開発
- リポジトリ固有の作法は [.github/AGENTS.md](./.github/AGENTS.md)
- 中央マニュアル: https://github.com/165cm/portfolio/tree/main/docs/standards

## ライセンス
README と同じ
```

## ルール

- **README に書かないもの = ここに書くもの**: ビルドコマンド、環境変数、内部構造
- 各セクションは省略可（空のテーブルを残さない）
- README ↔ DEVELOPER の **相互リンクは双方向必須**

## サンプルは省略

各リポジトリで実装に合わせて埋める。テンプレ生ファイルは
[`templates/DEVELOPER.md.template`](./templates/DEVELOPER.md.template) を参照。
