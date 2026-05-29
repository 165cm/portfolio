# コミットメッセージ規約

採用: **Conventional Commits（日本語可）**

## 基本フォーマット

```
<type>(<scope>?): <subject>

<body, 任意>

https://claude.ai/code/session_XXXXXXXX   ← AI支援時のみ
```

## type 一覧

| type | 用途 |
|---|---|
| `feat` | 新機能追加 |
| `fix` | バグ修正 |
| `docs` | ドキュメントのみの変更 |
| `refactor` | 機能変更のないコード整理 |
| `style` | 整形・空白・セミコロン等（挙動変えない） |
| `perf` | パフォーマンス改善 |
| `test` | テスト追加・修正 |
| `chore` | ビルド設定、依存更新、雑務 |
| `ci` | CI/CD 設定の変更 |

## subject（1行目）の書き方

- **長さ**: 50 字目安、最大 72 字
- **言語**: 日本語可
- **時制**: 命令形（"Add X" / "Xを追加"）、句点なし
- **scope**: 影響範囲が明確なら `()` 内に入れる（例: `feat(import):`）

## body（任意、2行目以降）

- **何を/なぜ** を 2〜4 行で
- 改行は 72 字目安
- 詳細仕様より「意図」を残す

## 末尾

- AI（Claude Code 等）が作成したコミットには **Claude Code セッションリンクを末尾に付ける**
  ```
  https://claude.ai/code/session_01XXXXXX
  ```
- 共同作業や引き継ぎの追跡に役立てる

## 例

### feat
```
feat(import): 参考書PDFのAI自動取込を追加

OpenAI Vision で見開き2ページを1回で読み込み、問題と
解答を分離してIndexedDBに保存する。

https://claude.ai/code/session_01XXX
```

### fix
```
fix(map): 駐車場マーカーがズーム時に消える不具合を修正

Leaflet の zoom イベント中に layer.clear() が走っていたため。
zoomend 後にのみ再描画するよう変更。
```

### docs
```
docs(readme): 使い方セクションをテンプレに準拠して整理
```

### chore
```
chore: 依存パッケージを最新に更新

Astro 4.16.18 → 5.x へのメジャー更新は別PRで実施予定。
```

## やってはいけないこと

- `update` / `修正` / `WIP` だけの subject（情報量ゼロ）
- 複数の type を 1 コミットに混ぜる（小さく分ける）
- `git commit -m` をマルチライン用に重ねがけしない（heredoc を使う）
- `.amend` で過去の公開コミットを書き換えない（新コミットで対応）
