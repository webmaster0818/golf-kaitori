import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import { SOUBA } from "../../lib/souba";
import GuideShell from "../../components/GuideShell";

export const metadata: Metadata = {
  title: "ゴルフクラブのモデル名・年式の調べ方｜刻印・シャフトバンド・シリアルの見方",
  description:
    "手元のゴルフクラブが何というモデルで、いつ発売されたものかを調べる方法。ソール・ホーゼル・シャフトバンドの刻印の見方、メーカー別の世代の目安、モデル名がわかったあとに実売相場と業者の年式条件へつなぐ手順を整理します。",
  alternates: { canonical: `${SITE_URL}/guide/find-model/` },
};

const spots = [
  {
    tag: "ソール（裏面）",
    title: "モデル名・ロフト・シリーズ名",
    body: "ドライバー・フェアウェイウッドはソールにモデル名（Qi35／G440／GT2など）とロフト（9.0・10.5）が刻印またはプリントされています。アイアンはソールのトゥ側・バックフェースにモデル名と番手があります。最初に見るべき場所です。",
  },
  {
    tag: "ホーゼル・ネック",
    title: "可変スリーブの設定とシリアル",
    body: "可変スリーブ付きのドライバーはホーゼルのスリーブに設定（STD／LOWER等）が刻まれ、その付近やソールに製品シリアル（数字とアルファベットの組み合わせ）が打刻されています。シリアルは真贋・年式確認の材料になるため、写真に残しておきます。",
  },
  {
    tag: "シャフトバンド",
    title: "シャフト名・フレックス・重量",
    body: "純正シャフトはバンド（ラベル）にシャフト名・フレックス（S／SR／R）・重量帯が印字されています。バンドが剥がれている場合はシャフト本体の印字を見ます。「純正か交換品か」は査定額に影響するため、シャフト名も控えます。",
  },
  {
    tag: "グリップ",
    title: "純正ロゴの有無",
    body: "グリップにメーカーロゴ（TaylorMade・Callaway等）が入っていれば純正の可能性が高く、汎用グリップ（ゴルフプライド等のロゴのみ）なら交換済みの可能性があります。純正以外のグリップを原則減額とする業者があるため、確認しておきます。",
  },
];

const generations = [
  { maker: "テーラーメイド", models: "Qi35（2025）／ Qi10（2024）／ ステルス2（2023）／ P790（2023年版・Shadowfall）", slug: "taylormade" },
  { maker: "キャロウェイ", models: "エリート（2025）／ Ai SMOKE（2024）／ パラダイム（2023）／ APEX（世代多数）", slug: "callaway" },
  { maker: "タイトリスト", models: "GT2（2024）／ TSR2（2022）／ T100（2025年版）／ スコッティキャメロン ニューポート2（年式多数）", slug: "titleist" },
  { maker: "ピン", models: "G440（2025）／ G430（2023）／ i230（2023）", slug: "ping" },
  { maker: "ゼクシオ", models: "ゼクシオ14（2025年12月発売）／ ゼクシオ13（2023年12月発売）", slug: "xxio" },
  { maker: "ブリヂストン", models: "B1 ST／B3（2024）／ TOUR B X（2023）", slug: "bridgestone" },
];

const next = [
  "モデル名がわかったら、当サイトの実売相場データで同じモデルの落札件数・平均・最高値を見る（型番別の行がある6メーカーは #models 節へ）",
  "発売年から、業者の年式条件（例：ゴルフドゥのオンライン買取は1Wで発売5年前まで）に収まるかを判断する",
  "ソール・ホーゼル・シャフトバンドの3枚を撮影し、宅配買取の事前見積り（画像送付）や店頭での説明に使う",
  "純正シャフト・ヘッドカバー・レンチが揃っているかを確認し、揃っていれば一緒に出す",
];

const faqs = [
  {
    q: "刻印が消えていてモデル名がわかりません。どうすればよいですか？",
    a: "ホーゼル付近のシリアル番号と、ヘッド形状・ソールのデザインを写真に撮り、業者の事前見積り（画像送付）で確認してもらうのが早道です。ゴルフドゥのように相場一覧または画像送付で見積もる業者や、ゴルフ5のようにクラブ→メーカー→モデルを選ぶ相場確認の仕組みを持つ業者があります。",
  },
  {
    q: "同じモデル名でもLS・MAX・Kなどの違いは査定に関係しますか？",
    a: "関係します。実売データでも、たとえばテーラーメイド Qi35のLS、ピン G440のK・MAX・LSTなどヘッドタイプで落札価格が分かれます。ソールにヘッドタイプの表記があるので、モデル名と一緒に控えてください。",
  },
  {
    q: "発売年はどこで確認できますか？",
    a: "各メーカーの公式サイトの製品ページ・ニュースリリースに発売日が記載されています。当サイトの実売相場ページに掲載している型番は、現行〜2世代前を中心に選んでいるため、そこに載っているモデルは概ね発売5年以内です。",
  },
];

export default function FindModelPage() {
  return (
    <GuideShell
      path="/guide/find-model/"
      eyebrow="GUIDE — IDENTIFY YOUR CLUB"
      crumb="モデル名・年式の調べ方"
      title="ゴルフクラブのモデル名・年式の調べ方"
      lead="相場を調べるにも、業者の年式条件に当てはめるにも、まず「何というモデルか」がわからないと始まりません。ソール・ホーゼル・シャフトバンド・グリップの4か所の見方と、メーカー別の世代の目安、モデル名がわかったあとの手順を整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/old-clubs/", label: "古いクラブを売る", primary: true },
        { href: "/souba/", label: "実売相場データ" },
        { href: "/club-guide/", label: "クラブの売り方ガイド" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">見る場所は4か所</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {spots.map((c) => (
            <div key={c.title} className="card-club p-6">
              <span className="club-tag mb-4">{c.tag}</span>
              <h3 className="serif text-lg text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="serif rule-green text-2xl text-ink">メーカー別 — 当サイトで相場を公開している世代の目安</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            括弧内はメーカー発表ベースの発売年の目安です。型番別の実売相場（落札件数・平均・最高値）は各メーカーのページで公開しています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="table-spec min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left">メーカー</th>
                  <th className="text-left">相場を公開しているモデル（発売年の目安）</th>
                  <th>型番別データ</th>
                </tr>
              </thead>
              <tbody>
                {generations.map((g) => {
                  const m = SOUBA.find((s) => s.slug === g.slug);
                  return (
                    <tr key={g.slug}>
                      <td className="font-bold text-ink whitespace-nowrap">{g.maker}</td>
                      <td className="text-[0.86rem] leading-relaxed text-ink-soft">{g.models}</td>
                      <td className="whitespace-nowrap text-center">
                        <a href={`/souba/${g.slug}/#models`} className="font-bold text-green underline">
                          {m?.models?.length ?? 0}型番
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">モデル名がわかったあとの手順</h2>
        <ul className="mt-6 max-w-3xl space-y-3">
          {next.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-green text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </GuideShell>
  );
}
