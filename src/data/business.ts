// 事業者情報（ぱぱぞんアプリ）の単一の真実の源。
// Stripe に登録した内容と一致させること（屋号・説明・価格・連絡先）。
// 料金・期間・返金・問い合わせ対応などの方針は、ユーザーが 2026-10-22 に選んだ
// 165cm/construction2nd の docs/legal/DRAFT_POLICY_PACK.md（codex/pricing-period-revision ブランチ）に合わせる。

export interface Plan {
  name: string;
  price: number; // 税込・円（総額）
  unit: string; // 「月」「3ヶ月」など
  billing: string; // 課金の仕組みの説明
}

export interface Service {
  slug: string;
  name: string;
  summary: string;
  features: string[];
  url: string;
  status: string; // いまの販売状況（例：販売開始準備中）
  statusNote: string; // いまの状態の説明
  free: string; // 販売開始後に無料で使える範囲
  paid: string; // 有料プランで使える範囲
  screenshots: { src: string; alt: string }[]; // public/ からのパス
  plans: Plan[];
}

export const business = {
  name: 'ぱぱぞんアプリ',
  nameEn: 'PAPAZON APPS',
  description: '暮らしや仕事に役立つWebアプリ（資格学習など）の企画・開発・販売',
  email: 'papazon.service.desk@outlook.jp',
  established: '2026年',
  updated: '2026年10月29日',
  periodNote: '期間の終わりにあたる日付がない月は、その月の末日23:59まで（日本時間）です。',
  replyTarget: '土日祝を除く原則2営業日以内に、最初のご返信をすることを目標としています（解決までの期限ではありません）。',
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
    status: '販売開始準備中',
    statusNote: '有料プランは販売開始に向けて準備中です。販売開始までは、全5回分・250問を無料で公開しています（購入の受付はまだ行っていません）。',
    free: '最新1回分（50問）は、ログインなしで無料で使えます。',
    paid: '現収録の5回分・250問の問題・解説・復習・模擬試験が使えます（Googleアカウントでのログインが必要）。',
    screenshots: [
      { src: 'business/screen-quiz-mobile.png', alt: '問題演習の画面' },
      { src: 'business/screen-exam-mobile.png', alt: '模擬試験の画面' },
    ],
    plans: [
      {
        name: '月額プラン',
        price: 600,
        unit: '月',
        billing: '毎月自動更新（解約するまで継続）。決済完了日の翌月同日の前日23:59まで（日本時間）利用でき、以後も同じ日付を基準に更新します。',
      },
      {
        name: '3か月集中パック',
        price: 980,
        unit: '3か月・一括払い',
        billing: '購入時に一括払い。決済完了日から3か月後の同日の前日23:59まで（日本時間）。自動更新なし・終了後の請求なし。',
      },
    ],
  },
];

export const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`;
