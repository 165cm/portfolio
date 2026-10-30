export type Category = 'work' | 'family' | 'money' | 'tool' | 'experiment';

// 表示プラットフォーム / 形態（「どんな形で使うものか」での切り口）
export type Platform = 'webapp' | 'site' | 'extension' | 'watch' | 'tool';

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
  experiment: {
    label: '実験',
    emoji: '🧪',
    description: '実用性より「やってみたかった」が先に立った、試作・遊びの作品',
  },
};

// プラットフォーム別の見出し情報。表示順もこの定義順に従う。
// linkLabel: 公開中のものへ飛ぶリンクの文言。形態によって「開いて使う」のか
// 「読む」のかが違うため、プラットフォームごとに言い換える。
export const platforms: Record<
  Platform,
  { label: string; emoji: string; description: string; linkLabel: string }
> = {
  webapp: {
    label: 'Webアプリ・PWA',
    emoji: '📱',
    description: 'ブラウザやスマホからすぐ使える、操作できるアプリ',
    linkLabel: '使ってみる',
  },
  site: {
    label: 'Web情報サイト',
    emoji: '🌐',
    description: '調べもの・比較に役立つ、読むための情報サイト',
    linkLabel: 'サイトを見る',
  },
  extension: {
    label: 'Chrome拡張',
    emoji: '🧩',
    description: 'ブラウザに機能を足す拡張機能',
    linkLabel: '紹介ページを見る',
  },
  watch: {
    label: 'スマートウォッチ',
    emoji: '⌚',
    description: 'Amazfit / Zepp OS の腕元で動くアプリ・文字盤',
    linkLabel: '紹介ページを見る',
  },
  tool: {
    label: 'スクリプト・ツール',
    emoji: '⚙️',
    description: 'コマンドや自動化で動く、開発者向けの小さな道具',
    linkLabel: 'デモを見る',
  },
};

export type App = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  category: Category;
  platform: Platform;
  // 「最近の更新順」のフォールバック値 'YYYY-MM'。
  // 通常はビルド時に取得するリポジトリの最終更新日（pushed_at）で並べ替えるが、
  // GitHub API が使えない（オフライン / レート制限）場合にこの値が使われる。
  date: string;
  useCases: string[];
  motivation: string;
  howTo?: string;
  tech: string[];
  links: { demo?: string; repo: string; blog?: string };
  // トップページに「実績」として載せる作品だけが持つ情報。
  // これが無い作品はサイト上では非表示（データは残しておき、載せ直す時に showcase を足す）。
  showcase?: Showcase;
};

export type Showcase = {
  order: number; // 表示順（小さいほど上）
  image?: string; // public/ からのパス。無ければ figures を図として表示する
  imageKind?: 'phone' | 'wide'; // 縦長のスマホ画面か、横長の画面・バナーか
  imageAlt?: string;
  figures?: { label: string; value: string }[]; // 画像の代わりに見せる数値
  figuresNote?: string; // figures の出どころ
  skills: string[]; // 発注者に伝わる「作れること」
  points: string[]; // 作品の見どころ（3つ程度）
  proof: string; // 実績を一言で（有償販売・テスト件数など）
};

export const apps: App[] = [
  // ── 仕事・現場 ───────────────────────────────────────────
  {
    slug: 'aircon-repair',
    platform: 'site',
    date: '2024-05',
    name: 'エアコン保健室',
    emoji: '❄️',
    tagline: '症状から「次の一手」を選べる、エアコントラブル対処ガイド',
    category: 'work',
    useCases: [
      'エアコンが冷えない・水漏れ・異音が出たとき',
      '修理を呼ぶか、買い替えるか迷ったとき',
      '応急処置の方法や安全な補助グッズを知りたいとき',
    ],
    motivation: '夏にエアコンが止まると本当に困る。業者を呼ぶ前に自分で判断できる材料が欲しくて、症状別に整理した情報サイトを作りました。',
    tech: ['Astro', 'TypeScript', 'GitHub Actions', '独自ドメイン'],
    showcase: {
      order: 4,
      image: 'works/aircon-repair.webp',
      imageKind: 'wide',
      imageAlt: 'エアコン保健室のメインビジュアル',
      skills: ['情報サイト・LP', 'SEO', 'チャット形式の診断', '独自ドメイン運用'],
      points: [
        '症状を選ぶと、危険サイン → 自分で確認 → 修理か買い替え の順に案内',
        '家電修理の現場で働く立場から、やってよいこと・ダメなことを線引き',
        'Astro で作った軽い静的サイトを、独自ドメインで運用',
      ],
      proof: '現場の知識をそのまま情報サイトに',
    },
    links: {
      demo: 'https://aircon-hokenshitsu.com/',
      repo: 'https://github.com/165cm/aircon-repair',
    },
  },
  {
    slug: 'aircon-tool-gear',
    platform: 'site',
    date: '2024-07',
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
    slug: 'construction2nd',
    platform: 'webapp',
    date: '2026-10',
    name: '第二種電気工事士 過去問サクサク道場',
    emoji: '⚡',
    tagline: '第二種電気工事士の過去問250問を、スマホで1問1答。スキマ時間で学科試験対策',
    category: 'work',
    useCases: [
      '仕事が忙しく、まとまった勉強時間が取れないとき',
      '通勤・休憩中にスマホで過去問を解きたいとき',
      '配線図の小さな文字をスマホで拡大して確認したいとき',
    ],
    motivation: 'エアコン修理の繁忙期に第二種電気工事士の受験を決め、限られた時間で勉強するために自分用に作りました。これで学科試験に合格したので、同じように忙しい人向けに整えて公開しています。いまは全5回分を無料で公開しており、有料プラン（販売：ぱぱぞんアプリ）は販売開始に向けて準備中です。',
    tech: ['React', 'Vite', 'Tailwind CSS', 'PWA', 'GitHub Pages'],
    showcase: {
      order: 1,
      image: 'works/construction2nd.webp',
      imageKind: 'phone',
      imageAlt: '過去問サクサク道場の問題演習画面',
      skills: ['スマホPWA', '学習アプリ', 'ゲーミフィケーション', '有料プラン設計'],
      points: [
        '過去問250問を1問1答で即時判定。間違えた問題は自動で「要復習」に入る',
        '本番と同じ120分・50問の模擬試験モードと、配線図の高精細ビューア',
        '自分が学科試験に合格した教材を、販売できる形に整えて公開',
      ],
      proof: '作者本人がこのアプリで学科試験に合格',
    },
    links: {
      demo: 'https://165cm.github.io/construction2nd/lp/',
      repo: 'https://github.com/165cm/construction2nd',
    },
  },
  {
    slug: 'field-engineer-route-optimizer',
    platform: 'webapp',
    date: '2025-02',
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
    platform: 'webapp',
    date: '2025-01',
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
    platform: 'webapp',
    date: '2024-09',
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

  {
    slug: 'pace-pilot',
    platform: 'watch',
    date: '2026-08',
    name: 'PacePilot',
    emoji: '⏱️',
    tagline: '腕元だけで集中と休憩を切り替えるZepp OSポモドーロタイマー',
    category: 'work',
    useCases: [
      '勉強や仕事で、集中と休憩を決まったリズムで繰り返したいとき',
      '「15分＋5分」などの作業ペースを腕時計だけで管理したいとき',
      'スマホを見ずに残り時間と終了予定を確認したいとき',
    ],
    motivation: 'ポモドーロを続けたいのに、毎回スマホを触ると結局そこで集中が切れる。腕時計だけで完結すればいいと思って、Amazfit向けに作りました。',
    howTo: '「10/5」「15/5」「20/10」の3プリセットから選んでStartするだけ。作業と休憩が3ラウンド自動で切り替わり、終わると振動で知らせます。',
    tech: ['Zepp OS Mini Program', 'JavaScript', 'Amazfit Bip 6'],
    links: {
      repo: 'https://github.com/165cm/pace-pilot',
    },
  },
  {
    slug: 'Jobscope',
    platform: 'extension',
    date: '2025-12',
    name: 'Jobscope',
    emoji: '🔍',
    tagline: '求人ページをAIで解析して、Notionにそのまま保存',
    category: 'work',
    useCases: [
      '転職活動で、見つけた求人を一覧で管理したいとき',
      '求人票の条件を毎回コピペするのが面倒なとき',
      '応募前に企業の口コミ・SNSをまとめて調べたいとき',
    ],
    motivation: '求人を見るたびにNotionへ手で転記していたのが限界だったので、ページを開いてボタン一発で解析・保存できるようにしました。登録済みURLの重複チェックや企業リサーチリンクの自動生成も入れています。',
    tech: ['Chrome Extension', 'React 19', 'TypeScript', 'Vite', 'Notion API', 'OpenAI API'],
    links: {
      demo: 'https://165cm.github.io/Jobscope/lp/',
      repo: 'https://github.com/165cm/Jobscope',
    },
  },

  // ── 家族・育児・学習 ─────────────────────────────────────
  {
    slug: 'matagochi',
    platform: 'webapp',
    date: '2026-06',
    name: 'リピごち',
    emoji: '🍚',
    tagline: '今夜の一品を決めて、買い物して、おいしかったを残す。夜ごはんの提案アプリ',
    category: 'family',
    useCases: [
      '毎日の夜ごはんを考えるのがしんどいとき',
      'SNSで見つけたレシピ動画をあとから探し直したいとき',
      '家族ごとの「また食べたい」を残して、次の献立に生かしたいとき',
    ],
    motivation: 'SNSで見つけたレシピ動画は、後から探すのが意外と大変。家族の反応まで一緒に残せれば、次に作る判断が楽になると思って作りました。',
    tech: ['HTML/JavaScript', 'PWA', 'Gemini API', 'Cloud Run', 'GitHub Pages'],
    showcase: {
      order: 5,
      image: 'works/matagochi.webp',
      imageKind: 'phone',
      imageAlt: 'リピごちの「今日」画面',
      skills: ['AI連携（Gemini）', 'クラウドAPI', 'PWA', 'SNS共有からの取り込み'],
      points: [
        '好み・調理時間・常備品から、夜ごはんを1日1品提案。買い物リストまでつながる',
        'レシピ動画の説明文や画像から、AI が材料と手順の下書きを作成',
        'スマホの共有メニューから、YouTube や TikTok の URL をそのまま受け取る',
      ],
      proof: 'AI を「使える機能」に落とし込んだ例',
    },
    links: {
      demo: 'https://165cm.github.io/matagochi/',
      repo: 'https://github.com/165cm/matagochi',
    },
  },
  {
    slug: 'family-movie-review',
    platform: 'site',
    date: '2024-11',
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
    platform: 'webapp',
    date: '2025-03',
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
    platform: 'webapp',
    date: '2025-04',
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
    platform: 'webapp',
    date: '2024-10',
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
    platform: 'webapp',
    date: '2025-05',
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
    platform: 'webapp',
    date: '2022-04',
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

  {
    slug: 'typing-game',
    platform: 'webapp',
    date: '2025-10',
    name: 'タイピングゲーム',
    emoji: '⌨️',
    tagline: '単語リストで遊ぶ、シンプルなタイピング練習（習作）',
    category: 'family',
    useCases: [
      '子どもとキーボード入力に慣れたいとき',
      'スキマ時間にタイピングを練習したいとき',
      'サーバ＋DBを繋いだ小さな習作を覗いてみたいとき',
    ],
    motivation: 'タイピング練習を自作してみたかった習作。単語リストをDBに持たせて、Expressから配る構成の練習も兼ねています。',
    tech: ['JavaScript', 'Express', 'MySQL'],
    links: {
      repo: 'https://github.com/165cm/typing-game',
    },
  },

  // ── 投資・お金 ───────────────────────────────────────────
  {
    slug: 'uberoi',
    platform: 'webapp',
    date: '2026-10',
    name: 'デリ勘',
    emoji: '🚲',
    tagline: '自転車デリバリー副業の「本当の時給」と投資の回収具合がわかる収益計算アプリ',
    category: 'money',
    useCases: [
      'シェアサイクル代や装備代を引いた、本当の時給を知りたいとき',
      '今日はもう少し続けるか、帰るかを数字で決めたいとき',
      '電動アシスト自転車などへの投資が、いつ回収できるかを見たいとき',
    ],
    motivation: '売上の数字だけ見ていると、レンタル代や装備代を引いた「手元に残る額」がわからない。出発から帰宅まで記録すれば、本当の時給と投資の回収率が出るようにしました。',
    tech: ['React', 'TypeScript', 'Vite', 'IndexedDB（Dexie）', 'PWA', 'Vitest', 'Playwright'],
    links: {
      demo: 'https://165cm.github.io/UbeROI/',
      repo: 'https://github.com/165cm/UbeROI',
    },
    showcase: {
      order: 2,
      figures: [
        { label: '本当の時給', value: '1,740円' },
        { label: '投資の回収率', value: '17.4%' },
        { label: '自動テスト', value: '126件' },
      ],
      figuresNote: '時給と回収率は仕様書の計算例（売上7,180円・3時間・レンタル代1,760円など）',
      skills: ['仕様書からの開発', '自動テスト・CI', 'オフライン対応PWA', 'データのバックアップ'],
      points: [
        '出発・レンタル・帰宅の記録から、経費と投資を引いた本当の時給を計算',
        '電波がない場所でも記録でき、データはスマホの中だけに保存',
        '仕様の受入基準を、単体テスト112件とE2Eテスト14件で毎回確認',
      ],
      proof: '受入基準を自動テストで確認してから公開',
    },
  },
  {
    slug: 'firstrade-calculator-app',
    platform: 'webapp',
    date: '2024-03',
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
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Gumroad'],
    showcase: {
      order: 3,
      image: 'works/firstrade.webp',
      imageKind: 'wide',
      imageAlt: 'Firstrade 確定申告支援ツールの配当金明細画面',
      skills: ['業務の自動化', 'CSV取り込み・集計', 'グラフ表示', 'ライセンス販売'],
      points: [
        '証券会社のCSVを読み込むだけで、配当金・売買損益を円に換算して集計',
        '為替レートの取得、月別のグラフ、確定申告用のCSV書き出しまで一続き',
        '独自ドメインで公開し、プレミアム機能を年間ライセンスで販売',
      ],
      proof: '有償ライセンスを販売中',
    },
    links: {
      demo: 'https://firstrade.nomadkazoku.com/',
      repo: 'https://github.com/165cm/firstrade-calculator-app',
    },
  },
  {
    slug: 'btc-simulator-widget',
    platform: 'webapp',
    date: '2023-11',
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

  {
    slug: 'receino',
    platform: 'webapp',
    date: '2026-06',
    name: 'Receino（レシーノ）',
    emoji: '🧾',
    tagline: 'レシートを撮るだけで、AIが食費を自動で仕分け',
    category: 'money',
    useCases: [
      '食費がいくらかかっているかを、ざっくりでも把握したいとき',
      'レシートの手入力が面倒で家計簿が続かないとき',
      '家族の食費を共有して、無駄を見直したいとき',
    ],
    motivation: '家計簿が続かない理由はほぼ「入力が面倒」。撮るだけで品目・カテゴリ・金額まで読み取ってくれれば続くはずだと思って作りました。',
    howTo: 'レシートを撮影するとAIが自動で分類し、月の食費・カテゴリ別の内訳・年間の見込みが見えます。初回は5枚まで無料。',
    tech: ['TypeScript', 'Expo (React Native)', 'Fastify', 'Google Gemini'],
    links: {
      demo: 'https://receino.com',
      repo: 'https://github.com/165cm/receino',
    },
  },

  // ── ツール / Chrome拡張 ─────────────────────────────────
  {
    slug: 'retro-quest-watchface',
    platform: 'watch',
    date: '2026-09',
    name: 'Pixel Wayfarer Face',
    emoji: '🕹️',
    tagline: '8-bit RPG風のAmazfit Bip 6用ウォッチフェイス',
    category: 'tool',
    useCases: [
      '腕時計の文字盤をレトロゲーム風にしたいとき',
      '時刻に加えて天気・気温・バッテリーを一目で見たいとき',
      'Zepp OSの文字盤を自作してみたいとき',
    ],
    motivation: '既製の文字盤にしっくりくるものがなかったので、視認性を最優先しつつ8-bit RPGらしさを出した文字盤を自作しました。バッテリーは10分割のHPゲージで表現しています。',
    tech: ['Zepp OS 5.0', 'JavaScript', 'Zeus CLI', 'Amazfit Bip 6'],
    links: {
      repo: 'https://github.com/165cm/retro-quest-watchface',
    },
  },
  {
    slug: 'DistroLyrics',
    platform: 'webapp',
    date: '2026-01',
    name: 'DistroLyrics',
    emoji: '🎵',
    tagline: 'DistroKidで弾かれる日本語歌詞を、通る形に自動整形',
    category: 'tool',
    useCases: [
      'DistroKidに日本語の歌詞を登録したいとき',
      '行末の句読点やセクション名でリジェクトされたとき',
      '「×2」などの繰り返し記号を書き出すのが面倒なとき',
    ],
    motivation: 'DistroKidは日本語歌詞のルールが独特で、何度もリジェクトされました。ルールを知っていれば機械的に直せる内容なので、貼るだけで整形できるツールにしました。',
    howTo: '歌詞を貼り付けると自動で変換され、変更箇所がハイライトされます。日本語・英語対応。',
    tech: ['HTML/CSS', 'Vanilla JavaScript', 'GitHub Pages'],
    links: {
      demo: 'https://165cm.github.io/DistroLyrics/',
      repo: 'https://github.com/165cm/DistroLyrics',
    },
  },
  {
    slug: 'NotionNotice',
    platform: 'tool',
    date: '2025-12',
    name: 'NotionNotice',
    emoji: '🔔',
    tagline: 'Notionに追加があったらGmailに通知する、コピペで作れる仕組み',
    category: 'tool',
    useCases: [
      'Notionの問い合わせフォームへの書き込みを見逃したくないとき',
      '有料の自動化サービスを使わずに通知を飛ばしたいとき',
      'プログラミング未経験でも設定できる手順が欲しいとき',
    ],
    motivation: 'Notionは通知が弱く、問い合わせに気付かないことがありました。Google Apps Scriptだけで無料で解決できるので、初心者でもコピペで設定できる手順付きで公開しています。',
    tech: ['Google Apps Script', 'Notion API', 'Gmail'],
    links: {
      repo: 'https://github.com/165cm/NotionNotice',
    },
  },
  {
    slug: 'side-clock',
    platform: 'extension',
    date: '2024-08',
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
    platform: 'extension',
    date: '2024-12',
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
    platform: 'tool',
    date: '2024-06',
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
    platform: 'tool',
    date: '2023-09',
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
    platform: 'tool',
    date: '2025-02',
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

  // ── 実験 ─────────────────────────────────────────────────
  {
    slug: 'dorokawa-kengaku',
    platform: 'site',
    date: '2026-02',
    name: '泥川見学',
    emoji: '🎸',
    tagline: '45歳おっさんの日常を楽曲にした、AI音楽プロジェクトのサイト',
    category: 'experiment',
    useCases: [
      '「半径5メートルの冒険」を歌にした楽曲を聴きたいとき',
      '台湾珍道中の日記music（全15曲）をまとめて眺めたいとき',
      'AIで作った楽曲を、LPとしてどう見せるか参考にしたいとき',
    ],
    motivation: 'クアラルンプール在住45歳の「トホホな日常」を、そのまま曲にしたら面白いのではと思って始めた実験。楽曲・歌詞・背景エピソードを1枚のページにまとめ、Spotify / YouTube への導線も置いています。',
    tech: ['静的HTML/CSS', 'JavaScript', 'GitHub Pages', 'AI楽曲生成'],
    links: {
      demo: 'https://165cm.github.io/dorokawa-kengaku/',
      repo: 'https://github.com/165cm/dorokawa-kengaku',
    },
  },
];

export const appsByCategory = (cat: Category) => apps.filter((a) => a.category === cat);

export const appsByPlatform = (p: Platform) => apps.filter((a) => a.platform === p);

// サイトに載せる作品（showcase を持つもの）を表示順に並べたもの
export const featuredApps = apps
  .filter((a): a is App & { showcase: Showcase } => Boolean(a.showcase))
  .sort((a, b) => a.showcase.order - b.showcase.order);
