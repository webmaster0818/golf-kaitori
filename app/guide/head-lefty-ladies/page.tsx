import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import GuideShell from "../../components/GuideShell";
import DealerPolicyList from "../../components/DealerPolicyList";

export const metadata: Metadata = {
  title: "ヘッド単体・シャフト単体・レフティ・レディースのゴルフクラブは売れる？買取業者の公式条件",
  description:
    "ヘッドだけ・シャフトだけのパーツ、左利き用（レフティ）、レディースモデルのゴルフクラブを買取に出せるか。公式に受け付けを明記している業者、明記のない業者、実売データで見える流通量の違いを整理します。",
  alternates: { canonical: `${SITE_URL}/guide/head-lefty-ladies/` },
};

const cases = [
  {
    tag: "ヘッド単体",
    title: "受け付ける業者は限られる",
    body: "リシャフト後に余ったヘッドや、シャフトが折れたクラブのヘッドは、ゴルフエースが「ヘッド単品」をカテゴリとして受け付けると公式に記載しています。GDOはヘッド単体の可否を明記しておらず、ゴルフ5はヘッドの凹みがあると減額・不可の場合があるとしています。実売データでも「ヘッド単体」の出品は多く、当サイトの型番別相場からは除外して集計しています。",
  },
  {
    tag: "シャフト単体",
    title: "スリーブ付き・長さの条件がある",
    body: "ゴルフエースはシャフト単品を「スリーブ付きのみ」で受け付け、GDOは「ドライバー用43.5インチ以上」から買取対象と公式に記載しています。カットしたシャフトやスリーブなしのシャフトは対象外になりやすいため、条件を確認してから出してください。",
  },
  {
    tag: "レフティ",
    title: "公式に可否を明記する業者はほぼない",
    body: "今回照合した10社のうち、レフティ（左利き用）の買取可否を公式に明記した業者は確認できませんでした。買取不可の記載もないため、通常どおり査定対象になるのが一般的ですが、右用より流通量が少ないぶん提示額は下がりやすい傾向があります。実売相場でもレフティは出品数が少なく、同じモデルの右用の落札例を目安にして下振れを見込んでください。",
  },
  {
    tag: "レディース",
    title: "受け付けは一般的だが、明記は少ない",
    body: "ゴルフ5は「メンズだけでなくレディースクラブも買取」と店舗ブログで案内しています。GDOの買取カテゴリには男性・女性・ジュニアの選択があります。ゼクシオのようにレディースモデルの流通が厚いブランドでは、実売相場でもレディース新品が上位落札に多く入っています。",
  },
];

const tips = [
  "ヘッド単体で出す場合は、ロフト・型番の刻印が読めるように汚れを落とし、スリーブが付いているかを確認する",
  "シャフト単体はスリーブの有無・長さ（グリップエンドからチップまで）・フレックスを控えておく",
  "レフティ・レディースは「右用・メンズと同じ扱いか」を申込み前に問い合わせる。不可の明記がなくても、提示額が想定より低い場合は複数社で比べる",
  "純正シャフトが別にある場合は、ヘッド＋純正シャフトの状態に戻してクラブとして出したほうが査定の選択肢が広がる",
];

const faqs = [
  {
    q: "シャフトが折れたのでヘッドだけ売りたいのですが可能ですか？",
    a: "ゴルフエースは「ヘッド単品」を買取カテゴリとして公式に受け付けています。他の業者はヘッド単体の可否を明記していないか、凹み等があると不可としているため、現行モデルのヘッドならヘッド単体を明記する業者に出すのが確実です。",
  },
  {
    q: "レフティのクラブは買取価格が安くなりますか？",
    a: "公式サイトで「レフティは減額」と明記する業者は確認できませんでしたが、右用より流通量が少ないため、実売でも落札例が限られ提示額は下がりやすい傾向があります。複数社の提示額を比べてください。",
  },
  {
    q: "レディースクラブは専門店で売れますか？",
    a: "ゴルフ5がレディースクラブの買取を案内しており、GDOも買取カテゴリで女性用を選べます。ゼクシオなどレディースの流通が厚いブランドは実売相場も成り立っているため、モデル名を確認したうえで型番別データを参照してください。",
  },
];

export default function HeadLeftyLadiesPage() {
  return (
    <GuideShell
      path="/guide/head-lefty-ladies/"
      eyebrow="GUIDE — HEAD / LEFTY / LADIES"
      crumb="ヘッド単体・レフティ・レディース"
      title="ヘッド単体・シャフト単体・レフティ・レディースのゴルフクラブは売れる？"
      lead="パーツだけ、左利き用、レディースモデル——通常のクラブと扱いが分かれやすい4つのケースについて、買取業者の公式サイトの記載と、実売データで見える流通量の違いを整理しました。公式に明記のないケースは「明記なし」と正直に書いています。"
      faqs={faqs}
      related={[
        { href: "/guide/damaged-club/", label: "傷あり・シャフト折れのクラブ", primary: true },
        { href: "/guide/set-bag-ball/", label: "セット・キャディバッグ・ボール" },
        { href: "/reviews/", label: "買取業者の検証一覧" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">ケース別 — 公式記載の有無と実売の傾向</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
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
          <DealerPolicyList intro="ヘッド単体・シャフト単体・改造・状態などに関する条件を各社の公式サイトから要約したものです。レフティ・レディースの可否を明記した業者はありません。" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">出す前に整えておくこと</h2>
        <ul className="mt-6 max-w-3xl space-y-3">
          {tips.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-green text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/souba/xxio/" className="btn-green text-sm">ゼクシオの実売相場（レディース含む）</a>
          <a href="/souba/" className="btn-outline text-sm">実売相場データ一覧</a>
        </div>
      </section>
    </GuideShell>
  );
}
