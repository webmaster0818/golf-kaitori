import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import { REVIEWS, SILO_LABELS, type SiloKey } from "../lib/reviews";
import Breadcrumbs from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "ゴルフクラブ買取業者を公式情報で検証｜専門店・総合店の買取方法・費用・取扱一覧",
  description:
    "ゴルフパートナー・ゴルフドゥ・二木ゴルフ・ゴルフ5などの専門店と、ハードオフ・セカンドストリートなどの総合店について、ゴルフクラブ・セット・ウェアを買取対象と公式に明記しているかを一社ずつ確認。買取方法・費用・古物商許可も一次確認し、確認日つきで公開します。",
  alternates: { canonical: `${SITE_URL}/reviews/` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "買取業者の検証レビュー", item: `${SITE_URL}/reviews/` },
  ],
};

const principles = [
  {
    tag: "OFFICIAL",
    title: "公式サイトで確認した事実だけ",
    body: "買取対象ジャンル・買取方法・古物商許可番号などは、各社の公式サイトで直接確認できたものだけを掲載します。伝聞やまとめ記事からの孫引きはしません。",
  },
  {
    tag: "BY GENRE",
    title: "ジャンル別に「明記の有無」を切り分け",
    body: "クラブ単品・クラブセット・ウェアや小物それぞれについて「買取対象と公式に書かれているか」を分けて確認します。書かれていない場合は「明記を確認できず」と表示します。",
  },
  {
    tag: "NO FAKE",
    title: "架空の口コミゼロ",
    body: "当サイトは架空の口コミ・体験談を一切作成しません。広告（PR）の有無は評価に影響しません。すべての情報に確認日を添え、古くなった情報は確認日ごと更新します。",
  },
];

const SILO_KEYS: SiloKey[] = ["clubs", "sets", "wear"];

export default function ReviewsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "ゴルフクラブ買取業者の検証レビュー",
          numberOfItems: REVIEWS.length,
          itemListElement: REVIEWS.map((r, i) => ({ "@type": "ListItem", position: i + 1, name: r.name, url: `${SITE_URL}/reviews/${r.slug}/` })),
        }}
      />

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "買取業者の検証レビュー" }]} />
          <p className="eyebrow mt-8 mb-4">REVIEWS — GOLF BUYERS</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">
            ゴルフクラブ買取業者を公式情報で検証
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            「ゴルフパートナーとゴルフドゥはどちらが宅配に対応している？」「ハードオフでクラブは売れる？」といった疑問に、各社の公式サイトを直接確認して答えるページです。専門店と総合店で取扱いが分かれるため、クラブ単品・クラブセット・ウェアや小物の3区分で「公式に買取対象と明記されているか」を一社ずつ切り分けました。
          </p>
        </div>
      </section>

      {/* 一覧表 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">ジャンル別の明記状況 — 早見表（{REVIEWS.length}社）</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          ○＝公式サイトに買取対象として明記あり／—＝確認日時点で明記を確認できず（買取不可の意味ではありません）。各社の詳細・確認日は個別ページをご覧ください。
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="table-spec min-w-[720px]">
            <thead>
              <tr>
                <th className="text-left">店舗・サービス</th>
                {SILO_KEYS.map((k) => (
                  <th key={k}>{SILO_LABELS[k]}</th>
                ))}
                <th>買取方法</th>
                <th>確認日</th>
              </tr>
            </thead>
            <tbody>
              {REVIEWS.map((r) => (
                <tr key={r.slug}>
                  <td className="font-bold text-ink">
                    <a href={`/reviews/${r.slug}/`} className="underline decoration-safety/50 underline-offset-4 hover:text-green">
                      {r.name}
                    </a>
                  </td>
                  {SILO_KEYS.map((k) => (
                    <td key={k} className="text-center">
                      {r.silos[k] ? <span className="font-bold text-green">○</span> : <span className="text-muted">—</span>}
                    </td>
                  ))}
                  <td className="text-center">{r.methods.join("・")}</td>
                  <td className="text-center whitespace-nowrap">{r.confirmedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 読み方 */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="serif rule-green text-2xl text-ink">当サイトの検証の読み方</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="card-club p-6">
                <span className="club-tag mb-4">{p.tag}</span>
                <h3 className="serif text-lg text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 個別 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">各社の検証ページ</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <a key={r.slug} href={`/reviews/${r.slug}/`} className="card-club p-6 block">
              <h3 className="serif text-lg text-ink">{r.name}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-soft">
                {r.company} ／ {r.methods.join("・")}
              </p>
              <p className="mt-3 text-[0.8rem] text-muted">
                明記あり: {SILO_KEYS.filter((k) => r.silos[k]).map((k) => SILO_LABELS[k]).join("・") || "なし"}
              </p>
            </a>
          ))}
        </div>
        <div className="notice-info mt-10 max-w-3xl p-6">
          <p className="font-bold text-ink mb-1">総合店と専門業者は「役割」が違います</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            総合店は「ジャンル混在をまとめて・すぐに」に強く、専門業者は「型番で価値が決まる品物」に強い傾向があります。売り先の3タイプの違いは
            <a href="/hikaku/" className="font-bold text-green underline">買取業者の選び方</a>
            で整理しています。
          </p>
        </div>
      </section>
    </main>
  );
}
