import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/site";
import { SOUBA } from "../../lib/souba";
import Breadcrumbs from "../../components/Breadcrumbs";

export function generateStaticParams() {
  return SOUBA.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = SOUBA.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: `${b.name}の実売相場データ｜買取価格の目安【2026年9月】`,
    description: `${b.name}のゴルフクラブがオークションで実際に売買された価格を集計。${b.rows.map((r) => r.category).join("・")}の落札件数・平均落札価格・単品最高値を出典と取得日つきで公開し、買取査定前の相場の物差しを提供します。`,
    alternates: { canonical: `${SITE_URL}/souba/${b.slug}/` },
  };
}

export default async function SoubaMakerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = SOUBA.find((x) => x.slug === slug);
  if (!b) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "実売相場データ", item: `${SITE_URL}/souba/` },
      { "@type": "ListItem", position: 3, name: b.name, item: `${SITE_URL}/souba/${b.slug}/` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "実売相場データ", href: "/souba/" }, { label: b.name }]} />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — {b.en}</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">{b.name}の実売相場データ</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">{b.intro}</p>
          <div className="notice-leather mt-8 max-w-3xl p-6">
            <p className="serif text-base text-ink mb-2">実売価格は買取査定額とは異なります</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              掲載しているのはオークションで売買が成立した価格です。買取店の査定額は、再販売までの手数料・在庫リスク・整備の手間が差し引かれるため実売より低くなるのが一般的です。年式・シャフト・状態・付属品で大きく変わる幅の参考であり、査定額を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">カテゴリ別の実売データ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft mb-6">
          落札件数・平均落札価格はオークファン（aucfan.com）の落札相場ページに表示されている集計値、最高落札価格はYahoo!オークションの落札相場を落札価格の高い順に確認した「クラブ1本（アイアンは1セット）」の最上位です。複数クラブのまとめ売り・フルセット・ヘッド単体・カバー単体・フリマ出品・高反発加工品は除外しています。取得日はいずれも{b.fetchedAt}です。
        </p>
        <div className="overflow-x-auto">
          <table className="table-spec min-w-[760px]">
            <thead>
              <tr>
                <th>カテゴリ</th>
                <th>落札件数（集計期間）</th>
                <th>平均落札価格</th>
                <th>最高落札価格（単品）</th>
                <th>出典</th>
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.category}>
                  <td className="font-bold text-ink">{r.category}</td>
                  <td>{r.count}</td>
                  <td>{r.avg}</td>
                  <td>
                    {r.max}
                    <span className="block text-xs text-muted mt-1">{r.maxNote}</span>
                  </td>
                  <td className="whitespace-nowrap text-xs">
                    <a href={r.aucfanUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-green underline">aucfan</a>
                    {" / "}
                    <a href={r.yahooUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-green underline">ヤフオク</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {b.notes && <p className="mt-4 text-xs text-muted">補足: {b.notes}</p>}
      </section>

      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="serif rule-green text-2xl text-ink">このデータの読み方</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
            {b.reading.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <p>
              <span className="font-bold text-ink">平均値は「現行モデルの美品の相場」ではありません。</span>
              メーカー名×カテゴリのキーワード集計のため、旧モデル・単品ヘッド・カスタムシャフト・状態不良品も含まれます。手元のクラブと比べるときは、出典リンク先で同じモデル・年式・シャフト・フレックスの落札例まで確認してください。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">売る前にやっておきたい準備</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            ゴルフクラブは「モデル×年式×シャフト×フレックス」で価値が決まります。ヘッドカバー・レンチ・保証書・純正シャフトの有無を先に確認し、シャフト銘柄とフレックス（R／S／X）、ロフト角、アイアンなら番手構成（5-P など）を控えておくと、実売データとの照合と査定の説明がしやすくなります。
          </p>
          <p>そのうえで、1社で即決せず複数の業者に相見積もりを取り、提示額を上の実売レンジと見比べるのが基本です。</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/club-guide/" className="btn-green text-sm">ゴルフクラブの売り方ガイド</a>
          <a href="/hikaku/" className="btn-outline text-sm">買取業者の選び方</a>
          <a href="/souba/" className="btn-outline text-sm">相場データ一覧へ戻る</a>
        </div>
      </section>
    </main>
  );
}
