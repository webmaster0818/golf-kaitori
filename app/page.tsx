import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, MAKERS } from "./lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME}｜${SITE_TAGLINE}`,
  description:
    "ゴルフクラブ・ゴルフ用品の買取業者を実売データと公式確認情報で正直に比較。メーカー×モデル×年式で決まるクラブ相場の考え方、高く売る準備、売り先3タイプの違いまで。",
  alternates: { canonical: `${SITE_URL}/` },
};

const features = [
  {
    href: "/souba/",
    tag: "MARKET DATA",
    title: "実売相場データ",
    body: "業者の広告に載る「参考買取価格」ではなく、実際に売買が成立した価格を出典・取得日付きで公開する方針です。ゴルフクラブはメーカー×モデル×年式で価格が明確に分かれるため、実売データとの相性が最も良いジャンルです。",
  },
  {
    href: "/club-guide/",
    tag: "SELL GUIDE",
    title: "ゴルフクラブの売り方",
    body: "査定で見られるのは型番・年式・シャフト・状態・付属品。モデルチェンジの周期と売り時の関係、高く売るための準備を、ゴルフクラブ特有の観点でまとめます。",
  },
  {
    href: "/hikaku/",
    tag: "COMPARE",
    title: "業者の選び方",
    body: "売り先は「ゴルフ専門買取」「総合リユース」「一括査定」の3タイプ。1社決め打ちを避け、タイプの違いを知ってから相見積もりするのが失敗しないコツです。",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow mb-4">GOLF GEAR MARKET</p>
          <h1 className="serif text-3xl md:text-5xl leading-tight text-ink max-w-3xl">
            そのクラブの価値を、
            <br />
            実売データで確かめてから売る。
          </h1>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
            {SITE_NAME}は、ゴルフクラブ・ゴルフ用品の買取を専門に扱う比較ガイドです。
            掲載する業者情報は公式サイトで確認した内容のみを確認日つきで掲載し、広告報酬の有無は評価に影響させません。
            相場は「参考買取価格」ではなく、実際に売買が成立した価格にもとづいて公開する方針です。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/hikaku/" className="btn-green">業者の選び方を見る</a>
            <a href="/souba/" className="btn-outline">実売相場データへ</a>
          </div>
        </div>
      </section>

      {/* 3本柱 */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="serif rule-green text-2xl text-ink">このサイトでできること</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.href} className="card-club p-6 flex flex-col">
              <span className="club-tag mb-4">{f.tag}</span>
              <h3 className="serif text-lg text-ink">
                <a href={f.href} className="hover:text-green transition-colors">{f.title}</a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft flex-1">{f.body}</p>
              <a href={f.href} className="mt-5 text-sm font-bold text-green">
                詳しく見る →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 実売DB第1弾 */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="notice-green p-6 md:p-8">
          <p className="serif text-lg text-ink">実売相場DB 第1弾（整備中）</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft max-w-3xl">
            第1弾として{MAKERS.join("・")}の5メーカーについて、実際の売買成立価格にもとづく相場データを整備しています。
            裏付けの取れた数値のみを出典・取得日付きで公開し、裏付けのない金額は掲載しません。
          </p>
          <a href="/souba/" className="mt-4 inline-block text-sm font-bold text-green">
            データの計測方法を見る →
          </a>
        </div>
      </section>

      {/* 検証ポリシー */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="notice-leather p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">当サイトの方針: </span>
            掲載する業者・相場の情報は、公式サイトなどの一次情報で確認できた内容のみを確認日つきで掲載します。広告（PR）を含みますが、報酬の有無は評価・掲載順に影響しません。
            詳しくは<a href="/verification-policy/" className="font-bold text-green underline">情報の調査・検証ポリシー</a>をご覧ください。
          </p>
        </div>
      </section>
    </main>
  );
}
