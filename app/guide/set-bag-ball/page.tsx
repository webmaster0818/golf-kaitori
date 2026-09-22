import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import GuideShell from "../../components/GuideShell";
import DealerPolicyList from "../../components/DealerPolicyList";

export const metadata: Metadata = {
  title: "クラブセット・キャディバッグ・ゴルフボールは売れる？買取業者の公式条件を照合",
  description:
    "フルセット（キャディバッグ付き）、アイアンセットの番手条件、キャディバッグ単体、ゴルフボール、距離計、ウェアの買取可否を、買取業者の公式サイトの記載で照合。セットで出すべきか、ばらして出すべきかの判断基準を整理します。",
  alternates: { canonical: `${SITE_URL}/guide/set-bag-ball/` },
};

const items = [
  {
    tag: "アイアンセット",
    title: "番手が揃っているかが条件になる",
    body: "GDOはアイアンセットの最小単位を「#7・#8・#9・PWが揃った状態」とし、欠けると買取不可（0円）と公式に記載しています。ゴルフドゥのオンライン買取は「番手不揃いセット」と「単品アイアン」を不可としています。逆にゴルフエース・GDOはロング／ミドルアイアンの単品も受け付けています。",
  },
  {
    tag: "フルセット（バッグ付き）",
    title: "セットとして受ける業者は少ない",
    body: "ゴルフドゥのオンライン買取は「クラブセット」を買取不可商品として明記しています（実店舗は条件が異なる旨の注記あり）。GDOは買取カテゴリに「クラブセット」を設けています。多くの業者はクラブを1本ずつ査定するため、フルセットは「ばらして出す」のが基本です。",
  },
  {
    tag: "キャディバッグ",
    title: "単体では受けない業者が多い",
    body: "GDOはキャディバッグ・練習器具・距離測定器・非純正ヘッドカバーを「単品査定不可、査定希望クラブと同送すれば査定対象」としています。ゴルフエースはキャディーバッグを買取対象に含め、ゴルフドゥのウェア買取は「別途連絡」、二木ゴルフ・ゴルフキッズは店舗単位の扱いです。",
  },
  {
    tag: "ボール・グローブ・シューズ",
    title: "対象外と明記する業者がある",
    body: "ゴルフエースは「ボール・グローブ・シューズ・ティー等アクセサリ類、ヘッドウェア、雑貨は対象外」と公式に記載しています。ハードオフの宅配買取は「ゴルフシューズ・その他ゴルフ用品」を受付カテゴリに含めますが、劣化品は不可です。未開封のボールでも買取対象にする業者は今回の照合では確認できませんでした。",
  },
  {
    tag: "ウェア・距離計",
    title: "専門の窓口がある業者に分ける",
    body: "ゴルフドゥはゴルフウェア専門の宅配買取サイトを持ち、定価2,000円以上のスポーツウェアが査定対象です（ジュニアサイズ不可）。ゴルフエースはウェア・スコープ・GPSナビを買取対象に含めます。クラブと同じ窓口で受けない業者が多いため、ウェアはウェアの窓口へ分けて出してください。",
  },
];

const decide = [
  "アイアンは#7〜PWが揃っているかを先に確認する。欠けている場合は単品アイアンを受ける業者（ゴルフエース・GDO）に絞る",
  "フルセットはクラブを1本ずつ査定される前提で、ドライバー・パター・アイアンセットの型番を個別に控えておく",
  "キャディバッグは単体で出さず、クラブと同送できる業者にまとめる。ブランドバッグでも単体査定不可の業者がある",
  "ボール・グローブ・シューズは対象外の業者が多い。総合リユース店の店頭か、フリマでの処分を検討する",
  "ウェアはクラブとは別の窓口（ゴルフドゥのウェア買取など）に分けて出す",
];

const faqs = [
  {
    q: "初心者用のフルセットをそのまま売れますか？",
    a: "セットのまま受け付ける業者は少なく、ゴルフドゥのオンライン買取はクラブセットを不可と明記しています。GDOのようにクラブセットのカテゴリを持つ業者もありますが、基本はクラブごとに査定されます。キャディバッグは同送すれば査定対象にする業者があります。",
  },
  {
    q: "アイアンの7番だけ無くしてしまいました。売れますか？",
    a: "GDOはアイアンセットの最小単位を#7・#8・#9・PWとしており、7番が欠けると買取不可（0円）です。単品アイアンを受け付けるゴルフエース・GDO（単品カテゴリ）に、残りの番手を単品として出す方法があります。",
  },
  {
    q: "未使用のゴルフボールは買い取ってもらえますか？",
    a: "今回照合した10社の公式サイトでは、ボールを買取対象と明記した業者は確認できませんでした。ゴルフエースは明確に対象外としています。未開封品はフリマなどの個人間取引が現実的です。",
  },
  {
    q: "キャディバッグだけ売りたいのですが？",
    a: "GDOは単品査定不可（クラブと同送なら可）、ゴルフドゥのウェア買取は別途連絡、ゴルフエースは買取対象に含めています。二木ゴルフ（宇都宮北店）のように店舗単位で現金買取を案内する例もあるため、店舗へ確認してください。",
  },
];

export default function SetBagBallPage() {
  return (
    <GuideShell
      path="/guide/set-bag-ball/"
      eyebrow="GUIDE — SETS / BAGS / BALLS"
      crumb="セット・キャディバッグ・ボール"
      title="クラブセット・キャディバッグ・ゴルフボールは売れる？"
      lead="クラブ単品なら受け付ける業者でも、フルセット・キャディバッグ・ボール・ウェアになると扱いが分かれます。10社の公式サイトの記載を照合し、セットで出すべきか、ばらして出すべきか、対象外のものはどう処分するかを整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/head-lefty-ladies/", label: "ヘッド単体・レフティ・レディース", primary: true },
        { href: "/guide/old-clubs/", label: "古いクラブを売る" },
        { href: "/reviews/", label: "買取業者の検証一覧" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">品目別 — 公式記載で分かる受け付け方</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((c) => (
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
          <h2 className="serif rule-green text-2xl text-ink">買取業者の公式サイトに書かれた条件</h2>
          <DealerPolicyList intro="セットの番手条件・付属品・年式など、クラブの状態や構成に関する条件を各社の公式サイトから要約したものです。" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">セットで出すか、ばらして出すかの判断</h2>
        <ul className="mt-6 max-w-3xl space-y-3">
          {decide.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-green text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/reviews/" className="btn-green text-sm">品目別の明記状況を早見表で見る</a>
          <a href="/souba/" className="btn-outline text-sm">実売相場データ</a>
        </div>
      </section>
    </GuideShell>
  );
}
