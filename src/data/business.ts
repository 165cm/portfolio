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
