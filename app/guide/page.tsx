import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "はじめての買取ガイド — 流れ・方法・トラブル回避",
  description:
    "ゴルフクラブ・ゴルフ用品を初めて売る人向けのガイド。申込から入金までの4ステップ、宅配・出張・店頭買取の比較、古物営業法にもとづく本人確認の一般論、キャンセル規定などトラブル回避の基本を解説します。",
  alternates: { canonical: `${SITE_URL}/guide/` },
};

const faqs = [
  {
    q: "買取を申し込んだら必ず売らないといけませんか？",
    a: "いいえ。査定はあくまで金額の提示であり、納得できなければ断って構いません。ただし、断った場合の返送料などキャンセル時の条件は業者ごとに異なるため、申し込む前にキャンセル規定を確認しておくのが基本です。",
  },
  {
    q: "買取のとき本人確認は必要ですか？",
    a: "古物営業法にもとづき、買取時には本人確認書類の提示が求められるのが一般的です。必要な書類や確認の方法（店頭と宅配での違いなど）は業者ごとに案内されるため、申込時の案内に従って準備してください。",
  },
  {
    q: "高く売るために最低限やっておくことはありますか？",
    a: "常識の範囲での清掃、ヘッドカバーなど付属品を揃えること、モデル名・年式・シャフトスペックを控えておくこと、そして複数社への相見積もりが基本です。特別な技術は必要ありません。詳しくはゴルフクラブの売り方ガイドで解説しています。",
  },
  {
    q: "宅配・出張・店頭のどれを選べばよいですか？",
    a: "決まった正解はなく、品物の量・サイズ・急ぎ具合で選ぶのが一般的です。少量なら店頭、クラブセットやキャディバッグごと手放すなら出張や宅配が候補になります。どの方法でも「1社で即決しない」という基本は共通です。",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "はじめての買取ガイド",
      item: `${SITE_URL}/guide/`,
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const flow = [
  {
    step: "01",
    title: "申込",
    body: "業者の窓口から買取を申し込みます。品物の種類・点数・希望する買取方法（宅配・出張・店頭）を伝えるのが一般的です。この段階でキャンセル規定と費用の扱いを確認しておきます。",
  },
  {
    step: "02",
    title: "査定",
    body: "メーカー・モデル・年式・シャフト・状態・付属品などをもとに査定額が提示されます。宅配なら到着後、出張・店頭ならその場で査定されるのが一般的な流れです。金額の根拠は遠慮なく質問して構いません。",
  },
  {
    step: "03",
    title: "承諾",
    body: "提示された査定額に納得できたら承諾します。納得できなければ断って構いません。承諾前に、減額の可能性やキャンセル時の条件をあらためて確認しておくと安心です。",
  },
  {
    step: "04",
    title: "入金",
    body: "承諾後、指定した方法で支払いを受け取ります。店頭ではその場での支払い、宅配・出張では振込が用いられるのが一般的です。入金時期の目安は承諾前に確認しておきましょう。",
  },
];

const methodRows = [
  { label: "品物の移動", values: ["業者へ発送する", "自宅から動かさない", "自分で持ち込む"] },
  { label: "査定の立ち会い", values: ["立ち会えない", "その場で立ち会える", "その場で立ち会える"] },
  { label: "現金化までの早さ", values: ["発送・査定の日数がかかる", "早い傾向", "早い傾向"] },
  {
    label: "向いている量・サイズ",
    values: ["中量・店舗が遠い場合", "クラブセット一式など多量・大型", "少量・数本のクラブ"],
  },
  {
    label: "注意したい点",
    values: ["送料・返送料の条件確認", "訪問購入のルール確認", "持ち込める量の制約"],
  },
];

export default function GuidePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "はじめての買取ガイド" }]} />
          <p className="eyebrow mt-8 mb-4">BEGINNER&apos;S GUIDE</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">
            はじめての買取ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            買取を初めて利用するときに迷いやすいのは、「どういう流れで進むのか」「どの方法で売るのか」「何に気をつければよいのか」の3点です。
            このページでは、ゴルフクラブ・ゴルフ用品を売るときの共通の基本を、順番どおりに整理します。
          </p>
        </div>
      </section>

      {/* 買取の流れ */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="serif rule-green text-2xl text-ink">買取の流れ — 4ステップ</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {flow.map((f) => (
            <div key={f.step} className="card-club p-6">
              <div className="flex items-baseline gap-4">
                <span className="serif text-2xl text-green leading-none">{f.step}</span>
                <h3 className="serif text-lg text-ink">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="notice-green mt-8 max-w-3xl p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">本人確認について: </span>
            古物営業法にもとづき、買取時には運転免許証などの本人確認書類の提示が求められるのが一般的です。
            これは盗品の流通を防ぐための仕組みで、どの業者を選んでも共通して行われます。
            必要な書類や確認方法（店頭での提示・宅配でのコピー同封など）は業者・買取方法ごとに異なるため、申込時の案内に従って準備してください。
          </p>
        </div>
      </section>

      {/* 3方式の違い */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="serif rule-green text-2xl text-ink">宅配・出張・店頭買取の違い</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            以下は一般的な傾向の整理です。個別の条件（費用の扱い・対応エリア・査定日数など）は業者ごとに異なるため、依頼前に必ず各社の公式情報で確認してください。
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="table-spec min-w-[640px]">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>宅配買取</th>
                  <th>出張買取</th>
                  <th>店頭買取</th>
                </tr>
              </thead>
              <tbody>
                {methodRows.map((r) => (
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

      {/* トラブル回避 */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="serif rule-green text-2xl text-ink">トラブルを避けるための基本</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 max-w-4xl">
          <div className="card-club p-6">
            <h3 className="serif text-lg text-ink">キャンセル規定を事前に確認する</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              査定後に断った場合の返送料や手数料の扱いは業者ごとに異なります。申込前にキャンセル時の条件を確認しておくことで、「断りにくいから売る」という状況を避けられます。特に宅配買取では、返送時の費用負担を必ず確認しましょう。
            </p>
          </div>
          <div className="card-club p-6">
            <h3 className="serif text-lg text-ink">査定額の根拠を確認する</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              提示された金額に対して「どの点が評価され、どの点で減額されたのか」を質問して構いません。根拠の説明があいまいなまま即決を迫られたら、返事を保留して他社と比較しましょう。判断の物差しとして
              <a href="/souba/" className="font-bold text-green underline">実売相場データ</a>
              の考え方も役立ちます。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="serif rule-green text-2xl text-ink">よくある質問</h2>
          <div className="mt-8 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card-club p-5">
                <summary className="serif cursor-pointer text-[0.95rem] text-ink">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 次のページへ */}
      <section className="mx-auto max-w-6xl px-5 py-14 pb-16">
        <h2 className="serif rule-green text-2xl text-ink">次のステップ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          {SITE_NAME}では、査定で見られるポイントや売り先3タイプの違いを個別ページで解説しています。流れがつかめたら、準備と業者選びに進みましょう。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/club-guide/" className="btn-green">クラブの売り方ガイド</a>
          <a href="/hikaku/" className="btn-outline">買取業者の選び方</a>
          <a href="/contact/" className="btn-outline">お問い合わせ</a>
        </div>
      </section>
    </main>
  );
}
