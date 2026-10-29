// 事業者情報（ぱぱぞんアプリ）の単一の真実の源。
// Stripe に登録した内容と一致させること（屋号・説明・価格・連絡先）。

export interface Plan {
  name: string;
  price: number; // 税込・円
  unit: string; // 「月」「3ヶ月」など
  billing: string; // 課金の仕組みの説明
}

export interface Service {
  slug: string;
  name: string;
  summary: string;
  features: string[];
  url: string;
  free: string; // 無料で使える範囲
  paid: string; // 有料プランで使える範囲
  screenshots: { src: string; alt: string }[]; // public/ からのパス
  plans: Plan[];
}

export const business = {
  name: 'ぱぱぞんアプリ',
  nameEn: 'PAPAZON APPS',
  description: '資格学習などのWebアプリの企画・開発・販売',
  email: 'papazon.service.desk@outlook.jp',
  established: '2026年',
  updated: '2026年10月29日',
};

// 代表者プロフィール。image に public/ からのパス（例：'business/owner.jpg'）を入れると写真に、
// 空ならイニシャルのアイコンを表示する。
export const owner = {
  name: 'ぱぱぞん',
  role: '代表・開発者／家電修理エンジニア',
  image: 'business/owner.jpg',
  initial: 'ぱ',
  bio: [
    '家電修理エンジニア。IT・Web系の仕事を経て、2026年4月から家電修理の現場で働いています。',
    'エアコン修理が集中する夏の繁忙期のさなかに、第二種電気工事士の受験を決意。まとまった勉強時間が取れないなか、趣味で続けてきたアプリ開発の経験を生かして自分用のスマホ学習アプリを作り、平日は30分、休日は2時間ほどの限られた時間を積み重ねて、学科試験（筆記）に合格しました。',
    'そのアプリを、同じように忙しいなかで資格を目指す人にも使ってもらえるよう整えたのが「第二種電気工事士 過去問サクサク道場」です。いまは自分自身も技能試験に挑戦しています。',
    '日常の「ちょっと困った」を、日曜大工のようにアプリで解決するのが好きです。これからも、現場や暮らしに役立つ道具を作っていきます。',
  ],
};

export const services: Service[] = [
  {
    slug: 'construction2nd',
    name: '第二種電気工事士 過去問サクサク道場',
    summary:
      '第二種電気工事士 学科試験の過去問（5回分・250問）を、スマートフォンで1問1答形式で解けるWeb学習アプリです。',
    features: [
      '最新5回分・250問を1問1答で即時正誤判定',
      '間違えた問題だけを出す弱点特訓モード',
      '本番と同じ120分・50問の模擬試験モード',
      '配線図の高精細ビューア（ピンチで拡大）',
      '要点チートシート16種・オリジナルの解説',
    ],
    url: 'https://165cm.github.io/construction2nd/lp/',
    free: '直近1回分の過去問（50問）は、ログインなしで無料で使えます。',
    paid: 'それより前の過去問（4回分・200問）を含む全5回分・250問と、すべての機能が使えます。',
    screenshots: [
      { src: 'business/screen-quiz-mobile.png', alt: '問題演習の画面' },
      { src: 'business/screen-exam-mobile.png', alt: '模擬試験の画面' },
    ],
    plans: [
      {
        name: '月額プラン',
        price: 600,
        unit: '月',
        billing: '申込日に初回決済。以後、1ヶ月ごとに自動更新・自動決済。いつでも解約できます。',
      },
      {
        name: '3ヶ月プラン（買い切り）',
        price: 980,
        unit: '3ヶ月',
        billing: '購入時に1回だけ決済。3ヶ月間使えます。自動更新はありません。',
      },
    ],
  },
];

export const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`;
