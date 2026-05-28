export type Category = 'work' | 'family' | 'money' | 'tool';

export const categories: Record<Category, { label: string; emoji: string; description: string }> = {
  work: {
    label: '仕事・現場で使うツール',
    emoji: '🔧',
    description: '自分や知人の仕事で「あったら便利」を形にしたツールたち',
  },
  family: {
    label: '家族・育児・学習',
    emoji: '👨‍👩‍👧',
    description: '家族や子どもの生活を、ちょっと楽しく・効率よくするためのアプリ',
  },
  money: {
    label: '投資・お金',
    emoji: '💴',
    description: '投資の計算や見える化を、自分用に作ったツール',
  },
  tool: {
    label: 'ちょっと便利なツール / 拡張',
    emoji: '🧩',
    description: '日常の小さな不便を、Chrome拡張や小さなアプリで解決',
  },
};

export type App = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  category: Category;
  useCases: string[];
  motivation: string;
  howTo?: string;
  tech: string[];
  links: { demo?: string; repo: string; blog?: string };
};

export const apps: App[] = [
  // ── 仕事・現場 ───────────────────────────────────────────
  {
    slug: 'aircon-repair',
    name: 'エアコン修理高等学校',
    emoji: '❄️',
    tagline: '症状から自分で原因を切り分けられる、エアコンの困った辞典',
    category: 'work',
    useCases: [
      'エアコンが冷えない・水漏れ・異音が出たとき',
      '修理を呼ぶか、買い替えるか迷ったとき',
      '応急処置の方法や安全な補助グッズを知りたいとき',
    ],
    motivation: '夏にエアコンが止まると本当に困る。業者を呼ぶ前に自分で判断できる材料が欲しくて、症状別に整理した情報サイトを作りました。',
    tech: ['Astro', 'GitHub Pages', 'GitHub Actions'],
    links: {
      demo: 'https://165cm.github.io/aircon-repair/',
      repo: 'https://github.com/165cm/aircon-repair',
    },
  },
  {
    slug: 'aircon-tool-gear',
    name: 'エアコン工具ギア',
    emoji: '🛠️',
    tagline: 'エアコン修理・取付の工具を、価格だけでなく現場目線で比較',
    category: 'work',
    useCases: [
      '初めて自分でエアコン取付に挑戦するとき',
      '安いだけでなく、安全で精度の高い工具を選びたいとき',
      'プロが現場で実際に使う道具を知りたいとき',
    ],
    motivation: 'エアコン工具は「価格・精度・耐久性・安全性」のバランスが大事。比較しやすいサイトが少なかったので作りました。',
    tech: ['静的HTML', 'GitHub Pages', 'GitHub Actions（毎日自動ビルド）'],
    links: {
      demo: 'https://165cm.github.io/aircon-tool-gear/',
      repo: 'https://github.com/165cm/aircon-tool-gear',
    },
  },
  {
    slug: 'field-engineer-route-optimizer',
    name: 'ルート最適化アプリ',
    emoji: '🗺️',
    tagline: '複数の訪問先を「まわりやすい順」に自動で組み立て',
    category: 'work',
    useCases: [
      '1日に何件もお客さん先を回るフィールドエンジニア',
      '時間指定がある訪問を含む配送・出張作業',
      '住所リストをパッと貼り付けて順番を決めたいとき',
    ],
    motivation: '移動時間と作業時間、時間指定が混ざると順番決めが地味に大変。AIに住所を読み取らせて、最適な順番と到着予定時刻まで自動で出すようにしました。',
    tech: ['TypeScript', 'Google Maps API', 'AI（住所読み取り）'],
    links: {
      repo: 'https://github.com/165cm/field-engineer-route-optimizer',
    },
  },
  {
    slug: 'park-park-lunch',
    name: 'パクパクランチ',
    emoji: '🍱',
    tagline: '業務ドライバー向け 昼食候補×停めやすい駐車地点マップ',
    category: 'work',
    useCases: [
      '東京23区で外回り中、車で寄れる昼食スポットを探したいとき',
      '「ご飯屋さんはあっても駐車場が無い…」を回避したいとき',
      '走行中の誤操作を防ぎたい（運転中は画面ロック）',
    ],
    motivation: '配送や営業で都内を回る人にとって「停められる昼食スポット」は死活問題。地図にまとめてしまえばいいと思って作りました。',
    tech: ['Web/PWA', 'Google Maps API', 'Overpass API'],
    links: {
      repo: 'https://github.com/165cm/park-park-lunch',
    },
  },
  {
    slug: 'parts-location-search',
    name: '部品在庫の棚位置検索',
    emoji: '📦',
    tagline: '部品名から、倉庫のどの棚にあるかを即座に検索',
    category: 'work',
    useCases: [
      '倉庫で部品を探すのに毎回時間がかかっているとき',
      'スプレッドシートで在庫管理している小規模チーム',
      '在庫の追加・削除も手軽にしたいとき',
    ],
    motivation: '小さな現場の在庫管理は、ExcelとGoogleスプレッドシートで十分。それを検索しやすくする薄いUIだけ被せました。',
    tech: ['HTML/JavaScript', 'Google Apps Script', 'GitHub Pages'],
    links: {
      repo: 'https://github.com/165cm/parts-location-search',
    },
  },

  // ── 家族・育児・学習 ─────────────────────────────────────
  {
    slug: 'family-movie-review',
    name: '家族で観る映画レビュー',
    emoji: '🎬',
    tagline: '「家族で観て大丈夫?」が分かる映画レビューサイト',
    category: 'family',
    useCases: [
      '週末に家族で観る映画を選ぶとき',
      '子どもに見せて良い/悪いシーンを事前に知りたいとき',
      '年齢別に楽しめる作品を探したいとき',
    ],
    motivation: '普通の映画レビューは「面白いかどうか」が中心。家族目線でのレビューがもっと欲しくて作りました。',
    tech: ['Next.js 14', 'Notion API', 'TailwindCSS', 'Vercel'],
    links: {
      repo: 'https://github.com/165cm/family-movie-review',
    },
  },
  {
    slug: 'Yamtune',
    name: 'Yamtune',
    emoji: '🥦',
    tagline: '子どもの好き嫌い克服を、AIレシピで応援',
    category: 'family',
    useCases: [
      '2〜10歳の子どもの偏食に悩む親',
      '食品パッケージをスキャンして栄養を知りたいとき',
      '苦手食材を「気付かないうちに食べてくれる」レシピが欲しいとき',
    ],
    motivation: '子どもの好き嫌いに付き合うのは大変。AIに栄養バランスごと考えてもらえれば親も少し楽になると思って作りました。',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'OpenAI GPT-4o-mini'],
    links: {
      repo: 'https://github.com/165cm/Yamtune',
    },
  },
  {
    slug: 'Talkative-Camera',
    name: 'ガチャ電話（Talkative Camera）',
    emoji: '📷',
    tagline: 'カメラで写したモノが、キャラ化して電話してくる',
    category: 'family',
    useCases: [
      '子どもがカメラを向けて「これと話したい！」と言ったとき',
      'おもちゃ・果物・ぬいぐるみを擬人化して遊びたいとき',
      '英語・中国語・韓国語など多言語で会話したいとき',
    ],
    motivation: '子どもがおもちゃに話しかけているのを見て「本当に返事してくれたら楽しそう」と思って作りました。6言語対応。',
    tech: ['Web Speech API', 'Gemini API', 'TypeScript'],
    links: {
      demo: 'https://165cm.github.io/Talkative-Camera/',
      repo: 'https://github.com/165cm/Talkative-Camera',
    },
  },
  {
    slug: 'QuizApp',
    name: 'QuizMaster',
    emoji: '🧠',
    tagline: 'AIが教材から自動でクイズを作る、復習特化の学習アプリ',
    category: 'family',
    useCases: [
      '参考書や資料を「覚える」段階に進みたいとき',
      '間隔反復で効率的に復習したいとき',
      'AIに問題を作らせて、記憶を定着させたいとき',
    ],
    motivation: '読むだけでは身に付かない。間隔反復＋検索練習という記憶定着の手法をアプリにしました。生成AI画像で記憶のフックも作ります。',
    tech: ['Vanilla JS', 'Supabase', 'OpenAI API', 'Gemini API'],
    links: {
      demo: 'https://165cm.github.io/QuizApp/',
      repo: 'https://github.com/165cm/QuizApp',
    },
  },
  {
    slug: 'benkyaku-noto',
    name: '弁却ノート',
    emoji: '📓',
    tagline: '参考書をAIで取り込み、効率的に復習管理',
    category: 'family',
    useCases: [
      '紙の参考書を解いて、間違えた問題を後で復習したいとき',
      'PDFの問題集をデジタルで管理したいとき',
      '自分専用の復習スケジュールを組みたいとき',
    ],
    motivation: '参考書の「間違えた問題だけまた解く」を仕組み化したくて。OpenAIのVision APIに問題ページを読ませて自動取り込みします。',
    tech: ['React 19', 'Vite', 'TypeScript', 'Firebase', 'GPT-4 Vision'],
    links: {
      repo: 'https://github.com/165cm/benkyaku-noto',
    },
  },
  {
    slug: 'Country-Quiz',
    name: 'Country Quiz',
    emoji: '🌏',
    tagline: '国旗や地理を当てる、シンプルなクイズアプリ（初期作品）',
    category: 'family',
    useCases: [
      '地理を楽しく覚えたい子どもと一緒に',
      'スキマ時間で世界の国を覚えたいとき',
      'プログラミングを始めた頃の習作を覗いてみたいとき',
    ],
    motivation: 'プログラミングを始めた頃の小さな練習作。残しておくと、自分の成長が見えて楽しいです。',
    tech: ['JavaScript'],
    links: {
      repo: 'https://github.com/165cm/Country-Quiz',
    },
  },

  // ── 投資・お金 ───────────────────────────────────────────
  {
    slug: 'firstrade-calculator-app',
    name: 'Firstrade 確定申告支援ツール',
    emoji: '🇺🇸',
    tagline: '米国証券Firstradeの取引データを、日本円で損益計算',
    category: 'money',
    useCases: [
      '米国株を持っていて確定申告が必要な人',
      'CSVから配当金や売買損益を一気に計算したいとき',
      '為替レートを毎回手計算するのが面倒なとき',
    ],
    motivation: '自分自身がFirstradeで取引していて、毎年の確定申告が地獄だったので作りました。プレミアム版はGumroadで販売中。',
    tech: ['TypeScript', 'Gumroad'],
    links: {
      repo: 'https://github.com/165cm/firstrade-calculator-app',
    },
  },
  {
    slug: 'btc-simulator-widget',
    name: 'Bitcoin 投資シミュレーター',
    emoji: '₿',
    tagline: '「あの時から積み立てていたら」を可視化するウィジェット',
    category: 'money',
    useCases: [
      '過去のBTC積立シミュレーションを見たいとき',
      'ブログにBitcoinのチャートを埋め込みたいとき',
      '投資のイメージを掴むための導入として',
    ],
    motivation: '「もしあの時から始めていたら」を、シンプルなウィジェットで表現したくて作りました。自分のブログにも埋め込み利用。',
    tech: ['JavaScript'],
    links: {
      repo: 'https://github.com/165cm/btc-simulator-widget',
    },
  },

  // ── ツール / Chrome拡張 ─────────────────────────────────
  {
    slug: 'side-clock',
    name: 'Side Clock',
    emoji: '🕒',
    tagline: 'フルスクリーン動画にニュース風の時計＆天気をオーバーレイ',
    category: 'tool',
    useCases: [
      'YouTubeをフル画面で見ているときも時間を確認したい',
      '作業BGMを流しながら現在時刻と天気をチラッと見たい',
      'ニュース番組風の見た目が好きな人',
    ],
    motivation: '動画見ているうちに時間を忘れる問題への、ちょっと洒落た対処法として作りました。Chrome拡張で軽量。',
    tech: ['Chrome Extension Manifest V3', '位置情報API'],
    links: {
      repo: 'https://github.com/165cm/side-clock',
    },
  },
  {
    slug: 'OshiMemoShare',
    name: 'OshiMemo Share',
    emoji: '📝',
    tagline: 'YouTubeにタイムスタンプ付きメモを残せるChrome拡張',
    category: 'tool',
    useCases: [
      '推し活で、動画の名シーンを時刻付きで記録したいとき',
      '動画の文字起こし・修正作業で目印を打ちたいとき',
      'あとから「あの場面どこだっけ」を一発で開きたいとき',
    ],
    motivation: 'YouTubeを「観る」だけでなく「メモする」道具にしたかったので。定型文挿入機能で繰り返し作業も楽に。',
    tech: ['Chrome Extension', 'JavaScript'],
    links: {
      repo: 'https://github.com/165cm/OshiMemoShare',
    },
  },
  {
    slug: 'mp2txt',
    name: 'mp2txt',
    emoji: '🎙️',
    tagline: 'mp3 / mp4 から文字起こし',
    category: 'tool',
    useCases: [
      '会議の録音を文字に起こしたいとき',
      'YouTubeの動画から文字情報を抽出したいとき',
      'ポッドキャストの要約を作りたいとき',
    ],
    motivation: '音声から文字起こしを手早くやりたい場面が多かったので、自分用に。AI Studioにデモを公開しています。',
    tech: ['Node.js', 'Gemini API'],
    links: {
      demo: 'https://ai.studio/apps/drive/14lPJq2hEHqxxIroWCCrXWSaDk9VHBUQh',
      repo: 'https://github.com/165cm/mp2txt',
    },
  },
  {
    slug: 'rss-translator',
    name: 'RSS Translator',
    emoji: '🌐',
    tagline: 'RSSフィードを翻訳して読む',
    category: 'tool',
    useCases: [
      '英語ブログをまとめて日本語で追いたいとき',
      '海外の技術ニュースを日本語でざっと眺めたいとき',
      'RSSリーダーに翻訳機能が欲しかった人',
    ],
    motivation: '海外の情報を毎日キャッチアップしたいけど英語で読むのは疲れる。RSS単位で翻訳できると一気に楽になります。',
    tech: ['TypeScript'],
    links: {
      repo: 'https://github.com/165cm/rss-translator',
    },
  },
  {
    slug: 'Infographic-test',
    name: 'Infographic Test',
    emoji: '📊',
    tagline: 'インフォグラフィック自動生成の実験',
    category: 'tool',
    useCases: [
      'データを画像で見せたいとき',
      'ブログの図解を自動化したいとき',
      'PythonでSVG/画像を生成する習作として',
    ],
    motivation: '記事に図を入れたい、でも毎回手作業はしんどい。自動生成できないかと試してみた実験プロジェクトです。',
    tech: ['Python'],
    links: {
      repo: 'https://github.com/165cm/Infographic-test',
    },
  },
];

export const appsByCategory = (cat: Category) => apps.filter((a) => a.category === cat);
