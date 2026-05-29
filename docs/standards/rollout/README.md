# 各リポジトリへの規約適用 ロールアウト

中央マニュアル整備 ([docs/standards/](../)) を踏まえ、165cm の全リポジトリに
規約を順次適用するためのチェックリストと、リポジトリ別の適用パックです。

## 使い方

### A. 別セッションの Claude Code で適用する場合

1. 対象リポジトリを開いた Claude Code セッションを起動
2. [apply-procedure.md](./apply-procedure.md) の「手順テンプレ」をコピー
3. [repositories.md](./repositories.md) から対象リポの値（Tier / Category / Tagline / Topics / Website）を埋めて投入
4. AI が PR を作成 → レビューしてマージ

### B. 手動で適用する場合

[apply-procedure.md](./apply-procedure.md) の「手動でやるパート」に沿って:
- GitHub UI で About / Topics / Pages を設定
- [テンプレート](../templates/) をコピーして配置

## 適用順（推奨）

ティア順 + 利用頻度順:

1. **T3（プロダクト）** — 最初に整備すべき
   - firstrade-calculator-app / family-movie-review / Yamtune
2. **T2（実用ツール）**
   - aircon-repair / aircon-tool-gear / Talkative-Camera / QuizApp /
     benkyaku-noto / mp2txt / park-park-lunch / field-engineer-route-optimizer
3. **T1（趣味公開）**
   - side-clock / OshiMemoShare / btc-simulator-widget / parts-location-search / rss-translator
4. **T0（習作）** — 最小限のみ
   - Country-Quiz / Infographic-test / Unity

各リポジトリの個別設定値は [repositories.md](./repositories.md) を参照。

## 1リポあたりの作業内容（共通）

各リポに対してやること:

1. **GitHub UI 設定**
   - About → Description / Website / Topics を埋める
   - Pages → Source = "GitHub Actions"（T1+ デモ系）

2. **配置するファイル**
   - `.github/AGENTS.md` — 全リポ（T0除く）
   - `README.md` — テンプレに沿って整理
   - `DEVELOPER.md` — T2+
   - `LICENSE` — 無ければ MIT を追加
   - `.gitignore` — 共通テンプレで補完

3. **コミット & PR**
   - ブランチ: `claude/standards-rollout`
   - コミット: `docs(standards): 統一運用マニュアルに準拠`
   - PR Body: 中央マニュアルへのリンクを貼る

## 全体チェック

最後に全リポを一覧して、以下を満たしているか確認:

- [ ] `user:165cm topic:tier-product` で T3 が並ぶ
- [ ] `user:165cm topic:tier-utility` で T2 が並ぶ
- [ ] `user:165cm topic:tier-hobby` で T1 が並ぶ
- [ ] 各リポの About に Website が入っている（デモ無しは portfolio フォールバック）
- [ ] portfolio の `src/data/apps.ts` の category/tech と Topics が一致
