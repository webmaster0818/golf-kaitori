import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${SITE_NAME}へのお問い合わせについてのご案内です。掲載情報の訂正の申し立てと、各買取サービスに関するお問い合わせ先の考え方をまとめています。`,
  alternates: { canonical: `${SITE_URL}/contact/` },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
      <Breadcrumbs items={[{ label: "お問い合わせ" }]} />

      <p className="eyebrow mt-6 mb-4">CONTACT</p>
      <h1 className="serif rule-green text-2xl md:text-3xl text-ink mb-8">お問い合わせ</h1>
      <p className="text-[0.92rem] leading-loose text-ink-soft">
        {SITE_NAME}（運営：{OPERATOR}）へのお問い合わせについてご案内します。
      </p>

      <div className="notice-green p-6 mt-8">
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          <strong className="text-ink">お問い合わせ窓口は現在準備中です。</strong>
          当サイトは開設して間もないため、専用のお問い合わせフォーム・連絡先はまだ設置していません。実在しない窓口を掲載することはせず、正式な連絡手段が整い次第、本ページでご案内します。
        </p>
      </div>

      {/* 掲載事業者の方へ */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">掲載事業者の方へ（情報訂正の申し立て）</h2>
        <div className="card-club p-7">
          <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
            <p>
              当サイトに掲載している買取事業者の情報（買取方法・手数料・サービス内容など）は、
              <a href="/verification-policy/" className="text-green underline underline-offset-4">
                情報の調査・検証ポリシー
              </a>
              に基づき、各社公式サイトで確認した内容を確認日つきで掲載しています。
            </p>
            <p>
              掲載内容に誤りがある場合、または公式サイトの更新により情報が古くなっている場合は、訂正の申し立てを受け付ける方針です。連絡手段が整い次第、本ページに受付方法を掲載します。申し立てをいただいた場合は、公式サイトでの再確認のうえ、事実に基づいて速やかに訂正します。
            </p>
          </div>
        </div>
      </section>

      {/* 利用者の方へ */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">利用者の方へ</h2>
        <div className="card-club p-7">
          <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
            <p>
              当サイトはゴルフクラブ・ゴルフ用品買取の比較情報メディアであり、買取サービスの提供・査定・仲介は行っていません。そのため、次のようなお問い合わせにはお答えできません。
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-green font-bold shrink-0">◆</span>
                <span>個別のクラブ・用品の査定額・買取可否に関するご質問</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green font-bold shrink-0">◆</span>
                <span>各買取サービスの申し込み状況・手続き・キャンセルに関するご質問</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green font-bold shrink-0">◆</span>
                <span>各事業者とのトラブル・契約に関するご相談</span>
              </li>
            </ul>
            <p>
              各サービスの内容・手続きに関するお問い合わせは、
              <strong className="text-ink">各事業者の公式サイトのお問い合わせ窓口</strong>
              へ直接ご連絡ください。当サイトの掲載内容（誤字・情報の誤りなど）へのご指摘は、連絡手段の準備が整い次第、本ページで受け付けます。
            </p>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">関連ページ</h2>
        <ul className="space-y-2.5 text-[0.92rem] text-ink-soft">
          <li>
            <a href="/about/" className="text-green underline underline-offset-4">
              運営者情報
            </a>
          </li>
          <li>
            <a href="/verification-policy/" className="text-green underline underline-offset-4">
              情報の調査・検証ポリシー
            </a>
          </li>
          <li>
            <a href="/privacy/" className="text-green underline underline-offset-4">
              プライバシーポリシー
            </a>
          </li>
          <li>
            <a href="/terms/" className="text-green underline underline-offset-4">
              利用規約
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
