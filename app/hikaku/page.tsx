import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "買取業者の選び方 — 3つの売り先の違い",
  description:
    "ゴルフクラブ・ゴルフ用品の売り先は「ゴルフ専門買取」「総合リユース」「一括査定」の3タイプ。それぞれの特徴と向き不向きを中立の比較表で整理し、相見積もりの進め方を解説します。",
  alternates: { canonical: `${SITE_URL}/hikaku/` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "買取業者の選び方", item: `${SITE_URL}/hikaku/` },
  ],
};

const types = [
  {
    tag: "TYPE 01",
    name: "ゴルフ専門の買取業者",
    how: "ゴルフクラブ・ゴルフ用品に特化して買取を行う業者です。宅配・出張・店頭など複数の方法に対応していることが多いタイプです。",
    fit: "型番・年式・シャフトスペックで価値が決まるクラブを、ゴルフの知識がある査定者に見てほしい場合に向きます。カスタムシャフトや生産終了モデルもこのタイプが候補です。",
    care: "ウェアや小物など、クラブ以外の取り扱い範囲は業者ごとに差があります。送料・返送料・キャンセル条件も業者ごとに異なるため、依頼前に公式情報の確認が必要です。",
  },
  {
    tag: "TYPE 02",
    name: "総合リユース店",
    how: "ゴルフ用品に限らず幅広いジャンルを扱うリユース店に売る方法です。実店舗への持ち込みのほか、宅配・出張に対応する場合もあります。",
    fit: "すぐに手放したい、点数が少ない、ゴルフ用品以外の品物もまとめて処分したいという人に向きます。対面で話しながら進められる店舗が多いのも利点です。",
    care: "査定の観点が総合的なため、専門性の高いクラブはゴルフ特化の業者と評価が異なる場合があります。1店舗で即決せず、他のタイプと比較してから決めるのが安全です。",
  },
  {
    tag: "TYPE 03",
    name: "複数社への一括査定",
    how: "1回の申し込みで複数の買取業者から査定の連絡を受けられる仕組みです。自分で1社ずつ探して依頼する手間を省けます。",
    fit: "相場感がなく、まず複数の提示額を並べて比べたい人に向きます。相見積もりを前提にした売り方と最も相性の良いタイプです。",
    care: "複数社から連絡が来るため、やり取りの量は増えます。参加している業者の顔ぶれや条件は仕組みごとに異なるので、申し込み前に確認しましょう。",
  },
];

const rows = [
  { label: "品物の渡し方", values: ["宅配・出張・店頭など業者による", "店頭持ち込みが中心", "査定後に選んだ業者へ"] },
  { label: "査定の専門性", values: ["ゴルフに特化した知識", "総合的・幅広い傾向", "参加業者による"] },
  { label: "現金化までの早さ", values: ["方法により日数が変わる", "その場で完結しやすい", "比較の時間がかかる"] },
  { label: "向いている品物", values: ["高年式クラブ・カスタム品・希少モデル", "少量・ジャンル混在の品", "相場感のない品・高額になりうる品"] },
  { label: "注意したい点", values: ["送料・返送条件の確認", "1店舗での即決を避ける", "連絡量が増える"] },
];

export default function HikakuPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "買取業者の選び方" }]} />
          <p className="eyebrow mt-8 mb-4">HOW TO CHOOSE</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">
            買取業者の選び方 — 売り先は大きく3つ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            ゴルフクラブ・ゴルフ用品の売り先は、「ゴルフ専門の買取業者」「総合リユース店」「複数社への一括査定」の3タイプに分かれます。
            どれが一番良いかは品物と状況によって変わるため、まずタイプの違いを知り、1社に決め打ちせず相見積もりで比べるのが基本です。
          </p>
        </div>
      </section>

      {/* 3タイプの解説 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="serif rule-green text-2xl text-ink">3つの売り先の特徴</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {types.map((t) => (
            <div key={t.name} className="card-club p-6 flex flex-col">
              <span className="club-tag mb-4">{t.tag}</span>
              <h3 className="serif text-lg text-ink">{t.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.how}</p>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-ink-soft">
                <span className="font-bold text-ink">向いている人: </span>
                {t.fit}
              </p>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-soft">
                <span className="font-bold text-green">注意点: </span>
                {t.care}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 比較表 */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <h2 className="serif rule-green text-2xl text-ink">3タイプの比較表</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
            以下は一般的な傾向の整理です。個別の条件（費用の扱い・対応品目・査定日数など）は業者・仕組みごとに異なるため、依頼前に必ず各社の公式情報で確認してください。
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="table-spec min-w-[680px]">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>ゴルフ専門買取</th>
                  <th>総合リユース店</th>
                  <th>複数社一括査定</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="font-bold text-ink">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 相見積もり */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="serif rule-green text-2xl text-ink">失敗しないための基本 — 相見積もり</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            どのタイプを選ぶ場合でも共通する基本は、「1社の提示額だけで決めない」ことです。
            同じクラブでも、業者の得意分野や在庫状況によって提示額は変わります。最低でも2〜3社の査定を並べてから判断してください。
          </p>
          <p>
            その場での即決を求められても、比較が終わるまで返事を保留して構いません。査定は金額の提示であり、納得できなければ断れます。
            査定額の妥当性を判断する物差しとしては、
            <a href="/souba/" className="font-bold text-green underline">実売相場データ</a>
            の考え方が役立ちます。また、査定前の準備は
            <a href="/club-guide/" className="font-bold text-green underline">ゴルフクラブの売り方ガイド</a>
            を確認してください。
          </p>
        </div>
        <div className="notice-leather mt-8 max-w-3xl p-6">
          <p className="serif text-base text-ink">当サイトの業者別ページは現在整備中です</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            当サイトでは、掲載する業者の情報を公式サイトなどの一次情報で確認したうえで、確認日つきで掲載する方針です。
            確認が完了していない段階で具体的な業者名を並べることはしません。業者別の詳細ページは、確認が済み次第このページから案内します。
            方針の詳細は<a href="/verification-policy/" className="font-bold text-green underline">情報の調査・検証ポリシー</a>をご覧ください。
          </p>
        </div>
      </section>

      {/* 次のページへ */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="card-club p-6 md:p-8">
          <h2 className="serif text-xl text-ink">売却の流れも確認しておく</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            売り先のタイプを決めたら、申込から入金までの流れと、宅配・出張・店頭それぞれの違いを確認してから査定に進みましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/guide/" className="btn-green text-sm">はじめての買取ガイド</a>
            <a href="/club-guide/" className="btn-outline text-sm">クラブの売り方ガイド</a>
            <a href="/contact/" className="btn-outline text-sm">お問い合わせ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
