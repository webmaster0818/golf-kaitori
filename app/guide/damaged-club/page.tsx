import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import GuideShell from "../../components/GuideShell";
import DealerPolicyList from "../../components/DealerPolicyList";

export const metadata: Metadata = {
  title: "傷あり・シャフト折れ・凹みのあるゴルフクラブは売れる？買取業者の公式条件を照合",
  description:
    "ソールの傷、クラウンの打痕、ヘッドの凹み、シャフトの折れ・亀裂、内部の異音があるゴルフクラブを買取に出せるか。買取業者の公式サイトに書かれた条件を照合し、減額で済むダメージと買取不可になるダメージの線引き、査定前にやってはいけないことを整理します。",
  alternates: { canonical: `${SITE_URL}/guide/damaged-club/` },
};

const levels = [
  {
    tag: "減額の範囲",
    title: "ソールの擦り傷・フェースの打痕・クラウンの小傷",
    body: "通常使用でつく傷は、状態ランクで評価されて減額の対象になりますが、買取自体を断る理由にはなりにくい範囲です。ゴルフキッズは傷の程度をN〜Eの7段階ランクで評価すると公式に説明しており、ゴルフパートナーも傷レベルで金額が変動するとしています。",
  },
  {
    tag: "業者により不可",
    title: "クラウンの凹み・ヘッドの割れ・大きな塗装剥がれ",
    body: "ヘッドの凹みは、ゴルフエース／セカンドストリートが公式に買取不可の例として挙げているダメージです。小さな凹みでも「凹み」と判断されれば対象外になる業者があるため、複数社の条件を見比べてください。",
  },
  {
    tag: "原則不可",
    title: "シャフトの折れ・亀裂、内部の剥離による異音",
    body: "シャフトの折れや亀裂、ヘッド内部の剥離で振ると音がする状態は、ゴルフエース／セカンドストリートが不可と明記し、ゴルフドゥもオンライン買取で「破損・要修理クラブ」を不可としています。ゴルフキッズは「壊れている商品の買い取りは行っておりません」と公式に記載しています。",
  },
  {
    tag: "要注意",
    title: "リシャフト・グリップ交換・鉛の貼り付け",
    body: "純正以外のシャフト・グリップに交換した個体は、業者によって「改造クラブ」として不可、または減額の扱いになります。ゴルフドゥはオンライン買取で改造クラブを不可、ゴルフエースは純正以外のグリップを原則減額としています。鉛は剥がせる場合は剥がし、剥がした跡は申告してください。",
  },
];

const dont = [
  "凹みや傷を自分で研磨・塗装で隠さない。査定時に判明すると「申告なしの補修」として不利になり、塗装のやり直しは減額幅を広げることがある",
  "折れたシャフトを接着・補修して出さない。修理不能品・要修理品は多くの業者で買取対象外で、補修の有無にかかわらず判断は変わらない",
  "ヘッドカバー・純正シャフト・レンチなどの付属品を捨てない。付属品の有無で金額差が出ると公式に説明する業者がある",
  "傷の位置と大きさをスマホで撮っておく。宅配買取の事前見積り（画像送付）で使え、店頭でも説明が早い",
];

const faqs = [
  {
    q: "ソールに擦り傷があるだけでも減額されますか？",
    a: "多くの業者では状態ランクの評価対象になるため、無傷の個体より提示額は下がります。ただし通常使用の傷で買取自体を断られることは少なく、ゴルフキッズのようにランク基準を公開している業者もあります。",
  },
  {
    q: "クラウンに小さな凹みがあります。売れますか？",
    a: "業者によって扱いが分かれます。ゴルフエース／セカンドストリートはヘッドの凹みを買取不可の例に挙げています。「凹み」と判断されるかどうかは実物次第のため、写真を送って事前に確認できる宅配買取か、店頭で複数社に見せるのが確実です。",
  },
  {
    q: "シャフトが折れたドライバーは値が付きますか？",
    a: "折れ・亀裂は原則として買取不可です。ヘッドに価値がある現行モデルなら、ヘッド単体で受け付ける業者（ゴルフエースなど）に相談する道があります。ヘッド単体の扱いは「ヘッド単体・レフティ・レディース」のガイドで整理しています。",
  },
  {
    q: "リシャフトしたクラブは純正に戻してから売るべきですか？",
    a: "純正シャフトが手元にあれば、戻したうえで交換シャフトも一緒に出すのが無難です。純正以外は改造扱いで不可・減額になる業者があり、逆に人気のカスタムシャフト単品はスリーブ付きで別途受け付ける業者もあります。",
  },
];

export default function DamagedClubPage() {
  return (
    <GuideShell
      path="/guide/damaged-club/"
      eyebrow="GUIDE — DAMAGED CLUBS"
      crumb="傷あり・シャフト折れのクラブ"
      title="傷あり・シャフト折れ・凹みのあるゴルフクラブは売れる？"
      lead="ソールの傷や打痕は減額で済むのか、凹みや折れは断られるのか。買取業者の公式サイトに書かれた条件を照合し、ダメージの種類ごとに「減額の範囲」「業者により不可」「原則不可」を切り分けました。査定前にやってはいけないことも整理しています。"
      faqs={faqs}
      related={[
        { href: "/guide/old-clubs/", label: "10年以上前の古いクラブを売る", primary: true },
        { href: "/guide/head-lefty-ladies/", label: "ヘッド単体・レフティ・レディース" },
        { href: "/reviews/", label: "買取業者の検証一覧" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">ダメージの種類別 — 減額で済むもの・不可になるもの</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {levels.map((l) => (
            <div key={l.title} className="card-club p-6">
              <span className="club-tag mb-4">{l.tag}</span>
              <h3 className="serif text-lg text-ink">{l.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{l.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="serif rule-green text-2xl text-ink">買取業者の公式サイトに書かれた条件</h2>
          <DealerPolicyList intro="傷・破損・改造・年式などクラブの状態に関する条件を、各社の公式サイトから要約したものです。" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">査定前にやってはいけないこと</h2>
        <ul className="mt-6 max-w-3xl space-y-3">
          {dont.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-green text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="notice-green mt-8 max-w-3xl p-6">
          <p className="font-bold text-ink mb-1">実売相場で「状態差」を確認する</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            当サイトの実売相場データは、型番別の最高落札価格に出品状態（新品・中古・傷あり）を併記しています。傷のある個体の提示額が妥当かを判断する物差しとしてお使いください。
          </p>
          <a href="/souba/" className="btn-green text-sm mt-4 inline-block">実売相場データを見る</a>
        </div>
      </section>
    </GuideShell>
  );
}
