# README.md 統一テンプレ（一般ユーザー向け）

README は **「初めてこのリポジトリを開いた人」** が読むもの。
技術詳細・ビルド手順は [DEVELOPER.md](./developer-template.md) に分離する。

## 見出し順序（全ティア共通）

```markdown
# <アプリ名> ![Tier Badge]

> <一行キャッチコピー>

<スクリーンショット or デモGIF> ※T2以上必須、T1推奨

## これは何？
2〜3行で。

## こんな時に使えます
- ユースケース1
- ユースケース2
- ユースケース3

## 使い方
- 🌐 デモ: https://...
- インストール手順 or 起動方法（最短経路）

## 技術・開発について
開発者向け情報は [DEVELOPER.md](./DEVELOPER.md) を参照。
※ DEVELOPER.md が無い場合（T0/T1）はこの節ごと省略

## ライセンス
MIT（または該当ライセンス）

## 関連リンク
- 🗂 ポートフォリオ: https://165cm.github.io/portfolio/apps/<slug>
- 📝 ブログ記事: <あれば>
```

## ルール

### 絶対に書く
- 「これは何？」「こんな時に使える」「デモ / 使い方」
- ライセンス（T0 は省略可）

### 絶対に書かない
- ビルド手順詳細、API キー、内部実装、TODO リスト
- → これらはすべて [DEVELOPER.md](./developer-template.md) に分離

### 言語
- **日本語のみ**（海外向けは個別判断、英訳は併記ではなく別ファイル `README.en.md`）

### 画像
- スクリーンショットは `docs/screenshots/` に格納
- 推奨サイズ: 横 1200〜1600px、ファイルサイズ < 500KB
- 重要動作は GIF（< 3 MB）

### DEVELOPER.md との相互リンク
- README → DEVELOPER への **行き** と、DEVELOPER → README への **戻り** を必ず双方向で書く

## サンプル: T2 リポジトリの README 完成形

```markdown
# Talkative Camera ![Tier](https://img.shields.io/badge/tier-utility-orange)

> カメラで写したモノが、キャラ化して電話してくる

![demo](docs/screenshots/demo.gif)

## これは何？

カメラを向けたモノを AI が認識し、キャラクターとして音声で会話してくれる
Web アプリです。日本語・英語など6言語に対応しています。

## こんな時に使えます

- 子どもがおもちゃに話しかけたいと言ったとき
- 果物やぬいぐるみを擬人化して遊びたいとき
- 海外の言語で擬人化キャラと会話したいとき

## 使い方

- 🌐 デモ: https://165cm.github.io/Talkative-Camera/
- カメラと音声入出力の権限を許可してご利用ください。

## 技術・開発について

開発者向け情報は [DEVELOPER.md](./DEVELOPER.md) を参照。

## ライセンス

Apache-2.0

## 関連リンク

- 🗂 ポートフォリオ: https://165cm.github.io/portfolio/apps/Talkative-Camera
```
