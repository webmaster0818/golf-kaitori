import type { Metadata } from "next";
import { SITE_URL, MAKERS } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ゴルフクラブの売り方ガイド — 査定ポイントと売り時",
  description:
    "ゴルフクラブの査定で見られるメーカー・型番・年式・シャフトスペック・状態・付属品の6ポイント、モデルチェンジと売り時の一般論、高く売るための準備を解説。ウェアや距離計などクラブ以外の売却にも触れます。",
  alternates: { canonical: `${SITE_URL}/club-guide/` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "ゴルフクラブの売り方ガイド",
      item: `${SITE_URL}/club-guide/`,
    },
  ],
};

const checkpoints = [
  {
    title: "メーカー",
    body: "どのメーカーのクラブかは査定の出発点です。流通量・中古市場での人気はメーカーごとに傾向が異なります。ヘッドやシャフトに刻印されたロゴ・ブランド名で確認できます。",
  },
  {
    title: "型番・モデル名",
    body: "同じメーカーでもモデルによって評価は大きく変わります。ヘッドのソール（底面）にモデル名が刻印されていることが多いため、査定前に正確なモデル名を控えておくと話が早く進みます。",
  },
  {
    title: "年式",
    body: "ゴルフクラブは発売年でモデルが特定される商品です。何年モデルかで市場での位置づけが変わるため、購入時期や発売年がわかる情報（保証書・購入記録など)があれば手元に用意しておきましょう。",
  },
  {
    title: "シャフトスペック",
    body: "シャフトの硬さ（フレックス）・重量・純正かカスタムかは、同じヘッドでも評価が分かれるポイントです。シャフトに印字されたスペック表記を確認し、カスタムシャフトの場合はその旨を申告します。",
  },
  {
    title: "状態",
    body: "フェース面の傷・ソールの擦れ・クラウンの打痕・グリップの消耗などが確認されます。使用にともなう通常の消耗と、修理歴・改造・錆などでは扱いが異なるため、気になる点は正直に伝えるのが結局は近道です。",
  },
  {
    title: "付属品",
    body: "ヘッドカバー・レンチ（弾道調整機能付きモデルの場合）・保証書・純正の交換用ウェイトなどの有無が確認されます。購入時の付属品はできるだけ揃えて査定に出しましょう。",
  },
];

const preps = [
  {
    title: "常識の範囲で清掃する",
    body: "ヘッドの土・芝・ほこりを落とし、グリップを拭いておきます。状態が正しく評価されやすくなります。研磨や再塗装など本格的な補修は、かえって改造扱いになる場合があるため不要です。",
  },
  {
    title: "ヘッドカバー・付属品を揃える",
    body: "ヘッドカバーや調整用レンチなど、購入時の付属品はできるだけ揃えます。揃っているほうが評価されやすいのが一般的な傾向です。見当たらない場合も、本体だけで査定自体は受けられます。",
  },
  {
    title: "セット売りと単品を使い分ける",
    body: "アイアンセットのように本来セットで使う品はセットのまま、単品で価値が判断されるドライバーやパターは単品で、という出し方が基本の考え方です。買い替えで不要になったクラブ一式をまとめて出すと、単品では扱われにくい本数の少ない品も一緒に見てもらえます。",
  },
];

const otherItems = [
  { name: "ゴルフウェア", note: "ブランド・サイズ・状態が評価の中心。シーズンものは需要期を意識するのが一般的です。" },
  { name: "距離計・GPSナビ", note: "動作確認と充電ケーブルなど付属品の有無がポイントになります。" },
  { name: "キャディバッグ", note: "汚れ・においが評価に影響しやすいため、清掃してから査定に出しましょう。" },
  { name: "シューズ・小物", note: "未使用に近いものほど扱われやすい傾向があります。まとめ売りの同梱候補です。" },
];

const otherMakers = [
  "ダンロップ（スリクソン／ゼクシオ）",
  "ミズノ",
  "ヤマハ",
  "コブラ",
  "PXG",
];

export default function ClubGuidePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "ゴルフクラブの売り方ガイド" }]} />
          <p className="eyebrow mt-8 mb-4">SELL GUIDE</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">
            ゴルフクラブの売り方ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            ゴルフクラブは、メーカー×モデル×年式で価値が特定される、買取と相性の良い商品です。
            裏を返せば、査定で何が見られるかを知らないまま出すと、本来の評価につながる情報を伝えそびれることになります。
            このページでは、査定で見られるポイント・売り時の考え方・出す前の準備を、特定の業者に依存しない一般論として整理します。
          </p>
        </div>
      </section>

      {/* 査定で見られるポイント */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="serif rule-green text-2xl text-ink">査定で見られる6つのポイント</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {checkpoints.map((c, i) => (
            <div key={c.title} className="card-club p-6">
              <div className="flex items-baseline gap-4">
                <span className="serif text-2xl text-green leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="serif text-lg text-ink">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="notice-green mt-8 max-w-3xl p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">主なメーカー: </span>
            中古市場で広く流通しているのは、{MAKERS.join("・")}のほか、
            {otherMakers.join("・")}などの大手メーカーです。
            当サイトではまず{MAKERS.join("・")}の5メーカーについて、
            <a href="/souba/" className="font-bold text-green underline">実売相場データ</a>
            の整備を進めています（数値は裏付けが取れたものから順次公開します）。
          </p>
        </div>
      </section>

      {/* モデルチェンジと売り時 */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <h2 className="serif rule-green text-2xl text-ink">モデルチェンジと売り時の一般論</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
            <p>
              主要メーカーの多くは、おおむね1〜2年周期で主力モデルを更新します。
              新モデルが発表・発売される時期には買い替えが増えるため、<span className="font-bold text-ink">旧モデルの中古相場が動きやすい</span>というのが一般的な傾向です。
            </p>
            <p>
              ただし、下がり方・下がる時期はモデルの人気や流通量によって異なり、「発表前に売れば必ず得」と言い切れるものではありません。
              確実に言えるのは、<span className="font-bold text-ink">使っていないクラブを長く置いておくほど年式は古くなり、評価は下がる方向に進みやすい</span>ということです。買い替えを決めたら、使わなくなったクラブは早めに査定に出して現状の評価を知る、というのが現実的な考え方です。
            </p>
            <p>
              なお、需要の季節性（シーズンイン前など）を意識するという考え方もありますが、これも傾向の話であり、個別のクラブの売却額を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売る準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="serif rule-green text-2xl text-ink">高く売るための準備</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {preps.map((p) => (
            <div key={p.title} className="card-club p-6">
              <h3 className="serif text-lg text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
          準備がすんだら、1社の提示額で決めずに複数社の査定を比べるのが基本です。売り先のタイプ別の違いは
          <a href="/hikaku/" className="font-bold text-green underline">買取業者の選び方</a>
          を、申込から入金までの流れは
          <a href="/guide/" className="font-bold text-green underline">はじめての買取ガイド</a>
          をご覧ください。
        </p>
      </section>

      {/* クラブ以外 */}
      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <h2 className="serif rule-green text-2xl text-ink">クラブ以外のゴルフ用品も売れます</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
            買取の対象はクラブだけではありません。買い替えやゴルフをやめるタイミングでは、次のような用品もまとめて査定に出せるのが一般的です。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {otherItems.map((o) => (
              <div key={o.name} className="card-club p-5">
                <h3 className="serif text-base text-ink">{o.name}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-soft">{o.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
            クラブ以外の取り扱い範囲は業者によって差が大きいため、依頼前に対象品目を確認してください。
          </p>
        </div>
      </section>

      {/* 次のページへ */}
      <section className="mx-auto max-w-6xl px-5 py-14 pb-16">
        <div className="card-club p-6 md:p-8">
          <h2 className="serif text-xl text-ink">次のステップ</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            査定ポイントと準備がわかったら、売り先のタイプを選び、相見積もりで比べる段階に進みましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/hikaku/" className="btn-green text-sm">買取業者の選び方を見る</a>
            <a href="/souba/" className="btn-outline text-sm">実売相場データの方針</a>
            <a href="/guide/" className="btn-outline text-sm">はじめての買取ガイド</a>
          </div>
        </div>
      </section>
    </main>
  );
}
