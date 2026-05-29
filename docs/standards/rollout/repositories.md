# リポジトリ別 適用パック

各リポジトリに適用する設定を1枚にまとめた早見表。
作業時はこのファイルから対象リポの行を引き、[apply-procedure.md](./apply-procedure.md) に沿って実施する。

---

## T3 — プロダクト

### firstrade-calculator-app
- **Tagline**: 米国証券Firstradeの取引データを、日本円で損益計算
- **Topics**: `tier-product` `category-money` `typescript` `personal-use` `ai-assisted`
- **About Website**: https://165cm.github.io/portfolio/apps/firstrade-calculator-app
  （販売 Gumroad URL があればそちらを優先）
- **README 改修**: 「これは何 / こんな時に / 使い方（Gumroad購入導線） / DEVELOPER.md へのリンク」に整理
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md` / `CHANGELOG.md` / `PRIVACY.md`（取引データ扱うため）
- **Releases**: SemVer タグを切り、CHANGELOG を起こす

### family-movie-review
- **Tagline**: 「家族で観て大丈夫?」が分かる映画レビューサイト
- **Topics**: `tier-product` `category-family` `nextjs` `typescript` `for-family` `ai-assisted`
- **About Website**: 公開ドメイン or https://165cm.github.io/portfolio/apps/family-movie-review
- **README 改修**: 一般読者（家族）向けに丁寧に。スクショ必須
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md` / `PRIVACY.md`（Notion連携のため）

### Yamtune
- **Tagline**: 子どもの好き嫌い克服を、AIレシピで応援
- **Topics**: `tier-product` `category-family` `nextjs` `typescript` `ai` `supabase` `openai` `for-family` `ai-assisted`
- **About Website**: 公開URL or https://165cm.github.io/portfolio/apps/Yamtune
- **README 改修**: 親目線で「困りごと → 解決」のストーリー
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md` / `PRIVACY.md`

---

## T2 — 実用ツール

### aircon-repair
- **Tagline**: 症状から自分で原因を切り分けられる、エアコンの困った辞典
- **Topics**: `tier-utility` `category-work` `astro` `static-site`
- **About Website**: https://165cm.github.io/aircon-repair/
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

### aircon-tool-gear
- **Tagline**: エアコン修理・取付の工具を、価格だけでなく現場目線で比較
- **Topics**: `tier-utility` `category-work` `astro` `static-site`
- **About Website**: https://165cm.github.io/aircon-tool-gear/
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

### Talkative-Camera
- **Tagline**: カメラで写したモノが、キャラ化して電話してくる
- **Topics**: `tier-utility` `category-family` `typescript` `ai` `gemini` `for-family` `ai-assisted`
- **About Website**: https://165cm.github.io/Talkative-Camera/
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

### QuizApp
- **Tagline**: AIが教材から自動でクイズを作る、復習特化の学習アプリ
- **Topics**: `tier-utility` `category-family` `vanilla-js` `ai` `supabase` `openai` `ai-assisted`
- **About Website**: https://165cm.github.io/QuizApp/
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

### benkyaku-noto
- **Tagline**: 参考書をAIで取り込み、効率的に復習管理
- **Topics**: `tier-utility` `category-family` `react` `typescript` `firebase` `ai` `openai` `ai-assisted`
- **About Website**: https://165cm.github.io/portfolio/apps/benkyaku-noto
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

### mp2txt
- **Tagline**: mp3 / mp4 から文字起こし
- **Topics**: `tier-utility` `category-tool` `typescript` `ai` `gemini` `ai-assisted`
- **About Website**: https://ai.studio/apps/drive/14lPJq2hEHqxxIroWCCrXWSaDk9VHBUQh
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

### park-park-lunch
- **Tagline**: 業務ドライバー向け 昼食候補×停めやすい駐車地点マップ
- **Topics**: `tier-utility` `category-work` `vanilla-js` `pwa`
- **About Website**: https://165cm.github.io/portfolio/apps/park-park-lunch
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

### field-engineer-route-optimizer
- **Tagline**: 訪問先を「まわりやすい順」に自動で組み立て
- **Topics**: `tier-utility` `category-work` `typescript` `ai` `ai-assisted`
- **About Website**: https://165cm.github.io/portfolio/apps/field-engineer-route-optimizer
- **追加ファイル**: `.github/AGENTS.md` / `DEVELOPER.md`

---

## T1 — 趣味公開

### side-clock
- **Tagline**: フルスクリーン動画にニュース風の時計＆天気をオーバーレイ
- **Topics**: `tier-hobby` `category-tool` `chrome-extension` `vanilla-js`
- **About Website**: https://165cm.github.io/portfolio/apps/side-clock
- **追加ファイル**: `.github/AGENTS.md`

### OshiMemoShare
- **Tagline**: YouTubeにタイムスタンプ付きメモを残せるChrome拡張
- **Topics**: `tier-hobby` `category-tool` `chrome-extension` `vanilla-js`
- **About Website**: https://165cm.github.io/portfolio/apps/OshiMemoShare
- **追加ファイル**: `.github/AGENTS.md`

### btc-simulator-widget
- **Tagline**: 「あの時から積み立てていたら」を可視化するウィジェット
- **Topics**: `tier-hobby` `category-money` `vanilla-js`
- **About Website**: https://165cm.github.io/portfolio/apps/btc-simulator-widget
- **追加ファイル**: `.github/AGENTS.md`

### parts-location-search
- **Tagline**: 部品名から、倉庫のどの棚にあるかを即座に検索
- **Topics**: `tier-hobby` `category-work` `vanilla-js` `gas` `static-site`
- **About Website**: GitHub Pages URL（有効化済みなら）or portfolio
- **追加ファイル**: `.github/AGENTS.md`

### rss-translator
- **Tagline**: RSSフィードを翻訳して読む
- **Topics**: `tier-hobby` `category-tool` `typescript`
- **About Website**: https://165cm.github.io/portfolio/apps/rss-translator
- **追加ファイル**: `.github/AGENTS.md`

---

## T0 — 習作

### Country-Quiz
- **Tagline**: 国旗や地理を当てるシンプルなクイズ（初期作品）
- **Topics**: `tier-learning` `category-family` `vanilla-js`
- **About Website**: https://165cm.github.io/portfolio/apps/Country-Quiz
- **README**: 3行で「これは何の練習か」だけ書けば OK

### Infographic-test
- **Tagline**: インフォグラフィック自動生成の実験
- **Topics**: `tier-learning` `category-tool` `python`
- **About Website**: https://165cm.github.io/portfolio/apps/Infographic-test
- **README**: 同上

### Unity（古い）
- **Topics**: `tier-learning` のみ
- **README**: 「2017年の Unity 練習リポジトリ」とだけ書いて archived 推奨

---

## 一覧チェック

| Repo | Tier | Category | Website 設定 | AGENTS | README整理 | DEVELOPER |
|---|---|---|---|---|---|---|
| firstrade-calculator-app | T3 | money | ⬜ | ⬜ | ⬜ | ⬜ |
| family-movie-review | T3 | family | ⬜ | ⬜ | ⬜ | ⬜ |
| Yamtune | T3 | family | ⬜ | ⬜ | ⬜ | ⬜ |
| aircon-repair | T2 | work | ⬜ | ⬜ | ⬜ | ⬜ |
| aircon-tool-gear | T2 | work | ⬜ | ⬜ | ⬜ | ⬜ |
| Talkative-Camera | T2 | family | ⬜ | ⬜ | ⬜ | ⬜ |
| QuizApp | T2 | family | ⬜ | ⬜ | ⬜ | ⬜ |
| benkyaku-noto | T2 | family | ⬜ | ⬜ | ⬜ | ⬜ |
| mp2txt | T2 | tool | ⬜ | ⬜ | ⬜ | ⬜ |
| park-park-lunch | T2 | work | ⬜ | ⬜ | ⬜ | ⬜ |
| field-engineer-route-optimizer | T2 | work | ⬜ | ⬜ | ⬜ | ⬜ |
| side-clock | T1 | tool | ⬜ | ⬜ | ⬜ | — |
| OshiMemoShare | T1 | tool | ⬜ | ⬜ | ⬜ | — |
| btc-simulator-widget | T1 | money | ⬜ | ⬜ | ⬜ | — |
| parts-location-search | T1 | work | ⬜ | ⬜ | ⬜ | — |
| rss-translator | T1 | tool | ⬜ | ⬜ | ⬜ | — |
| Country-Quiz | T0 | family | ⬜ | — | ⬜ | — |
| Infographic-test | T0 | tool | ⬜ | — | ⬜ | — |
