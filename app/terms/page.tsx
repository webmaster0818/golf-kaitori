import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${SITE_NAME}の利用規約です。掲載情報の性質、リンク先サービスの利用、著作権、免責事項、準拠法について定めています。`,
  alternates: { canonical: `${SITE_URL}/terms/` },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
      <Breadcrumbs items={[{ label: "利用規約" }]} />

      <p className="eyebrow mt-6 mb-4">TERMS OF USE</p>
      <h1 className="serif rule-green text-2xl md:text-3xl text-ink mb-8">利用規約</h1>
      <p className="text-[0.92rem] leading-loose text-ink-soft">
        本規約は、{OPERATOR}（以下「当社」）が運営する{SITE_NAME}
        （以下「当サイト」）の利用条件を定めるものです。利用者は、当サイトを閲覧・利用することにより、本規約に同意したものとみなします。
      </p>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">1. 掲載情報について</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトは、ゴルフクラブ・ゴルフ用品の買取に関する情報提供・比較を行う情報メディアであり、買取サービスの提供・査定・仲介は行っていません。
          </p>
          <p>
            当サイトに掲載する情報は、各社公式サイトの公開情報・当社の調査に基づいて作成し、正確な記載に努めていますが、その完全性・正確性・最新性・有用性を保証するものではありません。買取価格は市況により変動し、各社のサービス内容・手数料などは予告なく変更されることがあります。
          </p>
          <p>
            最新の情報は、必ず各事業者の公式サイトでご確認ください。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">2. リンク先サービスの利用</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトからリンクする各買取サービスの利用（査定の申し込み・売買契約の締結など）は、利用者と当該サービスを提供する事業者との間の契約であり、当社はその契約の当事者にはなりません。
          </p>
          <p>
            サービスの内容・査定額・手続きなどに関するお問い合わせや紛争は、当該事業者との間で直接解決していただくものとし、当社は一切関与せず、責任を負いません。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">3. 著作権</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトに掲載されている文章・画像・データなどのコンテンツの著作権は、当社または正当な権利者に帰属します。法令で認められる引用の範囲を超えて、無断で複製・転載・改変・再配布することを禁止します。
          </p>
          <p>
            引用する場合は、出典として当サイト名と該当ページへのリンクを明記してください。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">4. 禁止事項</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>利用者は、当サイトの利用にあたり、次の行為を行ってはなりません。</p>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>法令または公序良俗に違反する行為</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>当サイトの運営を妨害する行為</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>当社または第三者の権利・利益を侵害する行為</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>当サイトのコンテンツを無断で商用利用する行為</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">5. 免責事項</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトの情報に基づいて利用者が行った判断・行動、およびその結果生じた損害について、当社は一切の責任を負いません。
          </p>
          <p>
            当社は、予告なく当サイトの内容の変更・削除、または公開の中断・中止を行うことがあり、これによって生じた損害についても責任を負いません。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">6. 規約の変更</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          当社は、必要と判断した場合、利用者への事前の通知なく本規約を変更することができます。変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">7. 準拠法</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          本規約の解釈および当サイトの利用に関しては、日本法を準拠法とします。
        </p>
      </section>

      <p className="mt-12 text-[0.85rem] text-muted">制定日：2026年8月17日</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="/about/" className="btn-outline text-sm">
          運営者情報
        </a>
        <a href="/privacy/" className="btn-outline text-sm">
          プライバシーポリシー
        </a>
      </div>
    </main>
  );
}
