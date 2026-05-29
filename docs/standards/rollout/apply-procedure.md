# 1リポジトリへの適用手順

別 Claude Code セッションで対象リポを開き、下記をそのまま指示として渡せば適用が完了する想定。

---

## 手順テンプレ（AIへの指示文）

⚠️ **使い方**: 下のテンプレを丸ごとコピーし、`<...>` の各プレースホルダを
[repositories.md](./repositories.md) の対象リポの行から埋めて、別セッションに投入してください。

````markdown
このリポジトリに 165cm/portfolio の中央運用マニュアルを適用してください。

参照:
- https://github.com/165cm/portfolio/blob/main/docs/standards/README.md
- https://github.com/165cm/portfolio/blob/main/docs/standards/rollout/repositories.md

## このリポジトリの設定値（repositories.md の該当行から）

- Tier: <T0/T1/T2/T3>
- Category: <work/family/money/tool>
- Tagline: <一行キャッチ>
- About Website: <URL>
- Topics（カンマ区切り）: <tier-xxx, category-xxx, tech1, tech2, meta1>

## 作業内容

1. ブランチ `claude/standards-rollout` を切る
2. README.md を https://github.com/165cm/portfolio/blob/main/docs/standards/readme-template.md に沿って整理
   - 冒頭にTierバッジ、一行キャッチ
   - 「これは何 / こんな時に / 使い方 / 関連リンク」
   - 既存の技術詳細・ビルド手順は DEVELOPER.md へ移動
3. `.github/AGENTS.md` を作成（templates/AGENTS.md.template を元に、Tier/Category/制約を埋める）
4. T2以上なら DEVELOPER.md を作成（templates/DEVELOPER.md.template を元に）
5. LICENSE が無ければ MIT を追加
6. README↔DEVELOPER の双方向リンクを確認
7. コミット `docs(standards): 統一運用マニュアルに準拠` で PR を作成

## ⚠️ PR Body には必ず以下の「手動設定リマインダ」を **そのまま** 含めてください

PR をマージした後、リポジトリオーナーが GitHub UI で行う作業の指示です。
**値はコードブロックで明記**してコピペできるようにしてください（プレースホルダのまま貼らない）。

---

### GitHub UI で設定が必要な項目

#### 1. About → Description（リポ右上の歯車）

```
<ここに Tagline をそのまま貼る>
```

#### 2. About → Website

```
<ここに About Website URL をそのまま貼る>
```

#### 3. About → Topics（**スペース区切り一括入力推奨**）

GitHub のトピック入力欄は、下記をそのまま貼り付けて Enter で一括追加できます:

```
<tier-xxx> <category-xxx> <tech1> <tech2> <meta1>
```

うまく分割されない場合は1つずつ入力（個別コードブロック）:

```
tier-xxx
```
```
category-xxx
```
```
tech1
```
```
tech2
```
```
meta1
```

#### 4. Pages（T1+ のフロントエンドアプリのみ）

Settings → Pages → Source = **GitHub Actions**

#### 5. Dependabot（T2+ のみ）

Settings → Code security and analysis → Dependabot alerts / security updates を ON

---
````

### 投入時のサンプル（Talkative-Camera）

`<...>` を埋めた完成版イメージ:

````markdown
このリポジトリに 165cm/portfolio の中央運用マニュアルを適用してください。
...
## このリポジトリの設定値

- Tier: T2
- Category: family
- Tagline: カメラで写したモノが、キャラ化して電話してくる
- About Website: https://165cm.github.io/Talkative-Camera/
- Topics（カンマ区切り）: tier-utility, category-family, typescript, ai, gemini, ai-assisted, for-family
...
````

これを投入した AI が PR Body に出力すべき手動設定リマインダはこうなります（値が埋まった状態）:

````markdown
### GitHub UI で設定が必要な項目

#### 1. About → Description
```
カメラで写したモノが、キャラ化して電話してくる
```

#### 2. About → Website
```
https://165cm.github.io/Talkative-Camera/
```

#### 3. About → Topics（スペース区切り一括入力推奨）
```
tier-utility category-family typescript ai gemini ai-assisted for-family
```

うまく分割されない場合は1つずつ:
```
tier-utility
```
```
category-family
```
```
typescript
```
```
ai
```
```
gemini
```
```
ai-assisted
```
```
for-family
```
````

---

## 手動でやるパート（GitHub UI）

AI に任せられない部分。AI が PR Body に出してくれた値をそのまま貼り付けるだけで完了します。

### Step 1: About を設定
1. リポジトリページ右上の "About" 横の歯車をクリック
2. **Description**: PR Body のコードブロックをコピペ
3. **Website**: PR Body のコードブロックをコピペ
4. **Topics**: PR Body の「スペース区切り」コードブロックをコピペして Enter
5. Save changes

### Step 2: Pages を有効化（T1+ の Web アプリ）
Settings → Pages → Source = **GitHub Actions**

### Step 3: Dependabot を有効化（T2+）
Settings → Code security and analysis → Dependabot 両方 ON

### Step 4: マージ
AI が作った PR を確認してマージ。

---

## トラブルシュート

- **既存の README に思い入れがある内容がある** → 「これは何？」「こんな時に」へ要約して残す
- **DEVELOPER.md がそもそも何も書けない（実装が薄い T0）** → ティア判定を T0/T1 に下げる
- **Topics が10個超える** → tier/category 必須 + tech 上位3つ + 必要な domain だけに絞る
- **Pages の base path がぶつかる** → モノレポでない限り `/<repo-name>` で揃える
- **Topics 一括貼り付けで分割されない** → スペース区切りを試す → ダメなら個別コードブロックを順に貼る
