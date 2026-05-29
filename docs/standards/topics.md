# GitHub Topics 規約

GitHub UI 右上の "About" 歯車から、各リポジトリに以下のグループから Topics を設定する。

## 必須グループ

### tier-*（必須・1個）
| Topic | 意味 |
|---|---|
| `tier-learning` | 習作・実験（T0） |
| `tier-hobby` | 趣味公開（T1） |
| `tier-utility` | 実用ツール（T2） |
| `tier-product` | プロダクト（T3） |

### category-*（必須・1個）
| Topic | 意味 |
|---|---|
| `category-work` | 仕事・現場で使うツール |
| `category-family` | 家族・育児・学習 |
| `category-money` | 投資・お金 |
| `category-tool` | ちょっと便利なツール / 拡張 |

## 推奨グループ

### tech（2〜4個推奨）
主要技術のみ。すべて書かなくてよい。
- `astro` `nextjs` `react` `typescript` `vanilla-js` `python` `chrome-extension`

### domain（任意）
- `ai` `pwa` `static-site` `gas` `firebase` `supabase` `gemini` `openai`

### meta（任意）
- `ai-assisted` — Claude Code 等の AI 支援で開発
- `personal-use` — 自分専用に作った
- `for-family` — 家族向けに作った

## 一致のルール

GitHub Topics と `portfolio/src/data/apps.ts` の `category` / `tech` は **必ず一致** させる。
食い違いが見つかったら GitHub Topics 側を直す（apps.ts が真の source of truth）。

## 設定の確認

検索で意図通りに絞れるかチェック:
- `user:165cm topic:tier-utility` → T2 が並ぶ
- `user:165cm topic:category-family` → 家族向けが並ぶ
- `user:165cm topic:ai-assisted` → AI 支援で作ったもの
