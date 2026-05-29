# 1リポジトリへの適用手順

別 Claude Code セッションで対象リポを開き、下記をそのまま指示として渡せば適用が完了する想定。

---

## 手順テンプレ（AIへの指示文）

```
このリポジトリに 165cm/portfolio の中央運用マニュアルを適用してください。

参照:
- https://github.com/165cm/portfolio/blob/main/docs/standards/README.md
- https://github.com/165cm/portfolio/blob/main/docs/standards/rollout/repositories.md

このリポジトリの設定（repositories.md の該当行から）:
- Tier: <T0/T1/T2/T3>
- Category: <work/family/money/tool>
- Tagline: <一行キャッチ>
- About Website: <URL>
- Topics: <list>

作業内容:
1. ブランチ `claude/standards-rollout` を切る
2. README.md を docs/standards/readme-template.md に沿って整理
   - 冒頭にTierバッジ、一行キャッチ、これは何/こんな時に/使い方/関連リンク
   - 既存の技術詳細・ビルド手順は DEVELOPER.md へ移動
3. .github/AGENTS.md を作成（templates/AGENTS.md.template を元に、Tier/Category/制約を埋める）
4. T2以上の場合、DEVELOPER.md を作成（templates/DEVELOPER.md.template を元に）
5. LICENSE が無ければ MIT を追加
6. README↔DEVELOPER の双方向リンクを確認
7. コミット `docs(standards): 統一運用マニュアルに準拠` で PR を作成
   - PR Body に中央マニュアルへのリンクと、適用したテンプレ一覧を記載

GitHub UI 設定（私が手動でやる作業のリマインドとして PR Body に書いて）:
- About → Description / Website / Topics
- Pages → Source = "GitHub Actions"（該当する場合）
```

---

## 手動でやるパート（GitHub UI）

AI に任せられない部分。各リポで以下を順に:

### Step 1: About を設定
1. リポジトリページ右上の "About" 横の歯車をクリック
2. **Description**: repositories.md の Tagline を貼る
3. **Website**: repositories.md の About Website URL を入れる
4. **Topics**: repositories.md の Topics を1つずつ追加（カンマ区切りで一気入力可）
5. 保存

### Step 2: Pages を有効化（T1+ の Web アプリ）
1. Settings → Pages
2. Source = **GitHub Actions** に設定
3. デプロイ用ワークフローが存在しない場合は AI に追加してもらう

### Step 3: Dependabot を有効化（T2+）
1. Settings → Code security and analysis
2. Dependabot alerts と Dependabot security updates をオン

### Step 4: マージ
AI が作った PR を確認してマージ。

---

## トラブルシュート

- **既存の README に思い入れがある内容がある** → 「これは何？」「こんな時に」へ要約して残す
- **DEVELOPER.md がそもそも何も書けない（実装が薄い T0）** → ティア判定を T0/T1 に下げる
- **Topics が10個超える** → tier/category 必須 + tech 上位3つ + 必要な domain だけに絞る
- **Pages の base path がぶつかる** → モノレポでない限り `/<repo-name>` で揃える
