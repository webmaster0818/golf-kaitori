import type { Metadata } from "next";
import { SITE_URL, MAKERS } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "実売相場データ — 計測方法と公開ポリシー",
  description:
    "ゴルフクラブの相場を「参考買取価格」ではなく実際に売買が成立した価格で公開するための計測方法を解説。収集・クリーニング・レンジ公開の3ステップと、第1弾5メーカーの整備状況を正直にお伝えします。",
  alternates: { canonical: `${SITE_URL}/souba/` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場データ", item: `${SITE_URL}/souba/` },
  ],
};

const steps = [
  {
    step: "01",
    title: "収集 — 出典と日付を必ず残す",
    body: "実際に売買が成立した価格のみを収集対象とします。1件ごとに「どこで成立した取引か（出典）」「いつからいつまでの期間の取引か」「いつ取得したデータか（取得日）」を記録し、出典をたどれない価格は収集の段階で除外します。",
  },
  {
    step: "02",
    title: "クリーニング — 表記ゆれと異常値を除く",
    body: "同じモデルでも表記のゆれ（型番の略記・年式の書き方の違いなど）があるため、メーカー×モデル×年式の単位に正規化します。そのうえで、明らかな異常値（別モデルの混入・部品のみの取引など）を除外し、比較できる状態に整えます。",
  },
  {
    step: "03",
    title: "レンジ公開 — 件数つきで幅を示す",
    body: "1点の価格を「相場」と言い切ることはせず、集計に使った件数・平均・最高値をセットにしたレンジ（幅）で公開します。件数が少なくレンジとして信頼できない場合は、公開そのものを見送ります。",
  },
];

export default function SoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "実売相場データ" }]} />
          <p className="eyebrow mt-8 mb-4">MARKET DATA</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">
            実売相場データ — 成立した価格だけを数える
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            買取業者の広告に載る「参考買取価格」は、条件のそろった上限例であることが多く、手元のクラブがその金額で売れるとは限りません。
            当サイトは、参考価格ではなく<span className="font-bold text-ink">実際に売買が成立した価格のみ</span>を、出典・取得日付きで公開する方針です。
            このページでは、その計測方法と現在の整備状況を説明します。
          </p>
        </div>
      </section>

      {/* 計測方法3ステップ */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="serif rule-green text-2xl text-ink">計測方法 — 3つのステップ</h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
          「実売価格」と名乗るだけでは意味がありません。どう集め、どう整え、どう公開するかを先に決めて、その手順から外れた数値は掲載しない。これが当サイトの計測ルールです。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="card-club p-6">
              <div className="flex items-baseline gap-4">
                <span className="serif text-2xl text-green leading-none">{s.step}</span>
                <h3 className="serif text-lg text-ink">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 第1弾5メーカー */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <h2 className="serif rule-green text-2xl text-ink">第1弾 — 対象5メーカーの整備状況</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
            第1弾として、流通量が多く型番×年式でモデルを特定しやすい次の5メーカーからデータ整備を進めています。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {MAKERS.map((m) => (
              <span key={m} className="club-tag">{m}</span>
            ))}
          </div>
          <div className="notice-green mt-8 max-w-3xl p-6">
            <p className="serif text-base text-ink">現在の状況: データ収集・検証中です</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              上記5メーカーの実売データは現在収集・検証中で、このページにはまだ金額を掲載していません。
              裏付けの取れた数値のみを出典・取得日付きで順次公開し、<span className="font-bold text-ink">裏付けのない金額は掲載しません</span>。
              「準備中でも何か数字を載せる」ことはしない方針です。公開の考え方の詳細は
              <a href="/verification-policy/" className="font-bold text-green underline">情報の調査・検証ポリシー</a>
              をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 実売≠査定額の注記 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="serif rule-green text-2xl text-ink">実売価格と買取査定額は同じではありません</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            実売価格は「そのクラブが市場でいくらで取引されたか」を示すもので、買取店があなたに提示する査定額そのものではありません。
            買取店は再販売までの手数料・在庫リスク・整備の手間を差し引いて買い取るため、
            <span className="font-bold text-ink">査定額は実売価格より低くなるのが一般的</span>です。
          </p>
          <p>
            それでも実売データに意味があるのは、「提示された査定額が実売に対して妥当な水準か」を判断する物差しになるからです。
            物差しを持ったうえで複数社の査定を比べる流れは、
            <a href="/hikaku/" className="font-bold text-green underline">買取業者の選び方</a>
            で解説しています。
          </p>
        </div>
        <div className="notice-leather mt-8 max-w-3xl p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">ご注意: </span>
            今後公開する実売レンジは、取得日時点の過去の取引実績であり、将来の買取額や売却額を保証するものではありません。クラブの状態・付属品・時期によって実際の金額は変わります。
          </p>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="card-club p-6 md:p-8">
          <h2 className="serif text-xl text-ink">売る前に読んでおくページ</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            相場データの公開までの間も、査定で見られるポイントや売り先の選び方を知っておくことで、査定額の妥当性を判断しやすくなります。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/club-guide/" className="btn-green text-sm">ゴルフクラブの売り方ガイド</a>
            <a href="/hikaku/" className="btn-outline text-sm">買取業者の選び方</a>
            <a href="/guide/" className="btn-outline text-sm">はじめての買取ガイド</a>
          </div>
        </div>
      </section>
    </main>
  );
}
