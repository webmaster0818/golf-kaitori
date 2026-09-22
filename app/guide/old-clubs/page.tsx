import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import GuideShell from "../../components/GuideShell";
import DealerPolicyList from "../../components/DealerPolicyList";

export const metadata: Metadata = {
  title: "10年以上前の古いゴルフクラブは売れる？年式の目安と買取業者の公式条件",
  description:
    "10年前・20年前の古いゴルフクラブに値は付くのか。買取業者が公式に示す年式の目安（発売5年・7〜8年など）、古いモデルでも受け付ける業者、値が付かないときの処分方法を、各社の公式サイトの記載を照合して整理します。",
  alternates: { canonical: `${SITE_URL}/guide/old-clubs/` },
};

const bands = [
  {
    tag: "現行〜発売5年以内",
    title: "ほぼ全ての業者で査定対象",
    body: "型番別の実売相場が成り立つ帯で、専門店のオンライン買取も対象年式に収まります。ゴルフドゥはオンライン買取の目安を「1Wは発売5年前のモデルまで」と公式に示しています。",
  },
  {
    tag: "発売5〜8年",
    title: "ドライバーは対象外になる業者が出始める",
    body: "ゴルフドゥの目安では「アイアンセット・パター等は7〜8年前のモデルまで」で、ドライバーより長く対象になります。この帯からは業者ごとの線引きが分かれるため、対象モデル一覧を公開している業者で先に確認してください。",
  },
  {
    tag: "10年以上前",
    title: "受け付ける業者を選ぶ段階",
    body: "ゴルフエースは「10年以上前の古いモデルも5本までなら1点100円以上で買取」、GDOは「古いクラブでも査定可（価格保証なし）」と公式に記載しています。総合リユース店は「年式・使用により劣化しているもの」を不可とするため、状態次第です。",
  },
  {
    tag: "値が付かない場合",
    title: "無料処分を選べる業者がある",
    body: "ゴルフエースは値段が付かない場合の無料処分、GDOは査定0円時の引取り、ゴルフ5のONLINE買取は買取不可クラブの破棄を選べると公式に記載しています。自治体の粗大ごみに出す前に、宅配買取の「処分」オプションを検討してください。",
  },
];

const steps = [
  "ソールやホーゼルの刻印からモデル名を特定し、発売年を調べる（調べ方は「モデル名・年式の調べ方」ガイド）",
  "発売年から、ゴルフドゥの目安（1W=5年・アイアン／パター=7〜8年）に収まるかを見る",
  "収まらない場合は、古いモデルを公式に受け付ける業者（ゴルフエース・GDO）を候補にする",
  "実売相場データで同じモデルの落札例があるか確認する。落札例が出てこないモデルは、処分前提で考える",
  "5本以上ある場合はまとめて宅配に出さず、値が付きそうなものと処分するものを分ける（本数上限を設ける業者がある）",
];

const faqs = [
  {
    q: "15年前のドライバーでも買い取ってもらえますか？",
    a: "業者によります。ゴルフエースは10年以上前のモデルも5本までなら1点100円以上で買い取ると公式に明記しており、GDOも古いクラブを査定対象としています（価格保証なし）。一方、ゴルフドゥのオンライン買取は1Wで発売5年前までが目安です。",
  },
  {
    q: "古いクラブは何円くらいになりますか？",
    a: "実売相場でも10年以上前のモデルは落札例自体が少なく、当サイトの型番別データにも掲載していません。ゴルフエースの「1点100円以上」が公式に示された最低ラインの例で、状態やモデルによってはそれ以上になることもあります。",
  },
  {
    q: "値が付かないと言われたらどうすればよいですか？",
    a: "ゴルフエースやGDOは値が付かない場合の無料処分・引取りを公式に案内しています。宅配で送った先で処分してもらえれば、粗大ごみの手配が不要です。",
  },
  {
    q: "古いパターやウェッジは別扱いですか？",
    a: "ゴルフドゥの年式目安ではパターはアイアンと同じ7〜8年で、ドライバーより長く対象です。スコッティキャメロンのように年式にかかわらず相場が成り立つパターもあるため、モデル名を確認してから実売相場を見てください。",
  },
];

export default function OldClubsPage() {
  return (
    <GuideShell
      path="/guide/old-clubs/"
      eyebrow="GUIDE — OLD CLUBS"
      crumb="古いクラブを売る"
      title="10年以上前の古いゴルフクラブは売れる？年式の目安と買取業者の公式条件"
      lead="押し入れから出てきた10年前のドライバー、譲り受けた古いアイアンセット。値が付くのか、断られるのか。買取業者が公式に示している年式の目安と、古いモデルを受け付ける業者、値が付かないときの選択肢を整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/find-model/", label: "モデル名・年式の調べ方", primary: true },
        { href: "/guide/damaged-club/", label: "傷あり・シャフト折れのクラブ" },
        { href: "/reviews/", label: "買取業者の検証一覧" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">年式の帯別 — 業者の受け付け方</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {bands.map((b) => (
            <div key={b.title} className="card-club p-6">
              <span className="club-tag mb-4">{b.tag}</span>
              <h3 className="serif text-lg text-ink">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="serif rule-green text-2xl text-ink">買取業者の公式サイトに書かれた条件</h2>
          <DealerPolicyList intro="年式の目安・古いモデルの扱い・処分の可否など、クラブの状態に関する条件を各社の公式サイトから要約したものです。" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">古いクラブを売る前の手順</h2>
        <ul className="mt-6 max-w-3xl space-y-3">
          {steps.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-green text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/souba/" className="btn-green text-sm">実売相場データを見る</a>
          <a href="/hikaku/" className="btn-outline text-sm">買取業者の選び方</a>
        </div>
      </section>
    </GuideShell>
  );
}
