import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/site";
import { REVIEWS, SILO_LABELS, type SiloKey } from "../../lib/reviews";
import Breadcrumbs from "../../components/Breadcrumbs";
import RelatedLinks from "../../components/RelatedLinks";
import { GUIDE_LINKS, REVIEW_LINKS, HUB_LINKS } from "../../lib/links";

export function generateStaticParams() {
  return REVIEWS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = REVIEWS.find((x) => x.slug === slug);
  if (!r) return {};
  const ym = r.confirmedAt.replace(/(\d+年\d+月).*/, "$1");
  return {
    title: `${r.name}のゴルフクラブ買取を公式情報で検証｜買取方法・費用・取扱【${ym}確認】`,
    description: `${r.name}（${r.company}）がゴルフクラブ・セット・ウェアや小物を買取対象としているか、買取方法・費用・古物商許可を公式サイトで一次確認して整理。古いクラブや傷ありの扱いなど、確認できなかった項目も正直に記載します。架空の口コミは掲載しません。`,
    alternates: { canonical: `${SITE_URL}/reviews/${r.slug}/` },
  };
}

const METHOD_LABELS = ["店頭", "宅配", "出張"] as const;
const SILO_KEYS: SiloKey[] = ["clubs", "sets", "wear"];

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = REVIEWS.find((x) => x.slug === slug);
  if (!r) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "買取業者の検証レビュー", item: `${SITE_URL}/reviews/` },
      { "@type": "ListItem", position: 3, name: r.name, item: `${SITE_URL}/reviews/${r.slug}/` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "買取業者の検証レビュー", href: "/reviews/" }, { label: r.name }]} />
          <p className="eyebrow mt-8 mb-4">REVIEW — VERIFIED FACTS</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">
            {r.name}のゴルフクラブ買取を公式情報で検証
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            このページの情報は、{r.name}の公式サイトを当サイトが直接確認して整理したものです（確認日: {r.confirmedAt}）。伝聞や口コミサイトからの引用はしていません。「買取対象と公式に明記されているか」をジャンル別に切り分け、確認できなかった項目は正直に記載します。
          </p>
        </div>
      </section>

      {/* ジャンル別の取扱 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">ジャンル別 — 公式サイトでの買取対象の明記</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {SILO_KEYS.map((k) => {
            const v = r.silos[k];
            return (
              <div key={k} className={v ? "card-club p-6" : "card-club p-6 opacity-80"}>
                <span className={v ? "club-tag mb-4" : "club-tag club-tag--muted mb-4"}>
                  {v ? "公式に明記あり" : "明記を確認できず"}
                </span>
                <h3 className="serif text-lg text-ink">{SILO_LABELS[k]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {v ?? "確認日時点で、公式サイト上にこのジャンルを買取対象とする記載を見つけられませんでした。持ち込み前に店舗へ直接確認してください。"}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-[0.8rem] text-muted">
          「明記を確認できず」は「買取不可」の意味ではありません。店舗ごとに取扱いが異なることが公式に案内されている場合があります。
        </p>
      </section>

      {/* 基本情報 */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="serif rule-green text-2xl text-ink">公式サイトで確認できた基本情報</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="table-spec min-w-[640px] max-w-4xl">
              <tbody>
                <tr>
                  <th className="w-44 text-left">サービス名</th>
                  <td className="font-bold text-ink">{r.name}</td>
                </tr>
                <tr>
                  <th className="text-left">運営会社</th>
                  <td>{r.company}</td>
                </tr>
                <tr>
                  <th className="text-left">古物商許可</th>
                  <td>{r.license ?? "公式サイト上で確認できませんでした"}</td>
                </tr>
                <tr>
                  <th className="text-left">買取方法</th>
                  <td>
                    <span className="inline-flex flex-wrap gap-2">
                      {METHOD_LABELS.map((m) => (
                        <span
                          key={m}
                          className={
                            r.methods.includes(m)
                              ? "inline-block border border-green px-3 py-1 text-[0.82rem] text-ink"
                              : "inline-block border border-line px-3 py-1 text-[0.82rem] text-muted line-through"
                          }
                        >
                          {m}
                        </span>
                      ))}
                    </span>
                    <span className="mt-2 block text-[0.78rem] text-muted">公式サイトに明記があった方法のみ表示しています</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-left">店舗</th>
                  <td>{r.storesNote ?? "公式サイト上で確認できませんでした"}</td>
                </tr>
                <tr>
                  <th className="text-left">費用の公式記載</th>
                  <td>{r.fees ?? "査定料・送料などの条件は公式サイト上で明確な記載を確認できませんでした"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[0.8rem] text-muted">
            出典: {r.name}公式サイト（当サイト確認日 {r.confirmedAt}）。内容は変更される場合があります。持ち込み・申込み前に必ず公式サイトで最新情報をご確認ください。
          </p>
        </div>
      </section>

      {/* ジャンル固有の条件 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div className="max-w-3xl">
          <h2 className="serif rule-green text-2xl text-ink">古いクラブ・傷・ヘッド単体・レフティなどの条件</h2>
          {r.policy ? (
            <p className="mt-6 text-[0.95rem] leading-loose text-ink-soft">{r.policy}</p>
          ) : (
            <p className="mt-6 text-[0.95rem] leading-loose text-ink-soft">
              古いモデル・シャフト折れ・ヘッド単体・レフティ・レディースなどに関する条件は、公式サイト上で明確な記載を確認できませんでした。該当する品物を持ち込む場合は事前に店舗へ確認してください。
            </p>
          )}
        </div>
      </section>

      {/* 特徴・確認できなかったこと */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="serif rule-green text-2xl text-ink">公式サイトで確認できた特徴</h2>
              <ul className="mt-6 space-y-4">
                {r.facts.map((f) => (
                  <li key={f} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
                    <span className="text-green shrink-0">■</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {r.unconfirmed.length > 0 && (
              <div>
                <h2 className="serif rule-green text-2xl text-ink">確認できなかったこと</h2>
                <p className="mt-6 text-[0.9rem] leading-relaxed text-ink-soft mb-4">
                  以下の項目は、確認日時点で公式サイト上に記載を見つけられませんでした。該当する条件が気になる場合は、持ち込み前に直接お問い合わせください。
                </p>
                <ul className="space-y-2">
                  {r.unconfirmed.map((u) => (
                    <li key={u} className="flex items-baseline gap-3 text-[0.92rem] text-ink-soft">
                      <span className="text-muted shrink-0">—</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 向き・事前チェック */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-club p-7">
            <p className="eyebrow mb-3">FIT</p>
            <h2 className="serif text-lg text-ink mb-3">確認できた事実から言える「向いているケース」</h2>
            <p className="text-[0.9rem] leading-relaxed text-ink-soft">{r.fitFor}</p>
          </div>
          <div className="card-club p-7">
            <p className="eyebrow mb-3">CHECK</p>
            <h2 className="serif text-lg text-ink mb-3">持ち込む前に確認しておきたい点</h2>
            <p className="text-[0.9rem] leading-relaxed text-ink-soft">{r.checkBefore}</p>
          </div>
        </div>
        <div className="notice-green mt-8 max-w-3xl p-6">
          <p className="font-bold text-ink mb-1">1社の提示額で即決しないでください</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            ゴルフクラブは型番・年式・シャフト・状態で価値が決まり、専門店と総合店では評価の観点が異なります。実売相場で物差しを持ち、2〜3社の相見積もりで比べてから売り先を決めるのが基本です。
          </p>
        </div>
        {r.affiliateUrl && (
          <div className="mt-8">
            <a href={r.affiliateUrl} rel="sponsored nofollow noopener" target="_blank" className="btn-green text-sm">
              {r.name}の公式サイトで最新条件を確認する（PR）
            </a>
          </div>
        )}
      </section>

      <section className="border-t border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="serif rule-green text-2xl text-ink">あわせて読みたい</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/reviews/" className="btn-green text-sm">買取業者の検証一覧</a>
            <a href="/hikaku/" className="btn-outline text-sm">3つの売り先の違い</a>
            <a href="/souba/" className="btn-outline text-sm">実売相場データ</a>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="他の買取業者の検証・関連ガイド"
        items={[
          ...(() => {
            // 自社を除いた他社を、自社の次から6社(循環)=全社が均等に被リンクを得る
            const i = REVIEW_LINKS.findIndex((l) => l.href === `/reviews/${r.slug}/`);
            const others = [...REVIEW_LINKS.slice(i + 1), ...REVIEW_LINKS.slice(0, i)];
            return others.slice(0, 6);
          })(),
          HUB_LINKS.souba,
          GUIDE_LINKS[0],
          GUIDE_LINKS[1],
          GUIDE_LINKS[3],
        ]}
      />
    </main>
  );
}
