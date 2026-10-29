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
  role: '代表・開発者',
  image: '',
  initial: 'ぱ',
  bio: [
    '電気・設備系の仕事に携わりながら、Webアプリを企画・開発しています。',
    '現場で必要な知識や資格の勉強は、まとまった時間が取りにくいもの。仕事の合間や移動中でも、スマートフォンでサクッと学べる道具を作りたいと考え、ぱぱぞんアプリを始めました。',
    '企画・開発・サポートまで一人で行い、利用者からの誤りの報告にはできるだけ早く対応しています。',
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
