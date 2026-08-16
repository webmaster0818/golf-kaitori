import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${SITE_NAME}のプライバシーポリシーです。取得する情報、アクセス解析ツールにおけるCookieの利用、アフィリエイトプログラムへの参加、免責事項について定めています。`,
  alternates: { canonical: `${SITE_URL}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
      <Breadcrumbs items={[{ label: "プライバシーポリシー" }]} />

      <p className="eyebrow mt-6 mb-4">PRIVACY POLICY</p>
      <h1 className="serif rule-green text-2xl md:text-3xl text-ink mb-8">プライバシーポリシー</h1>
      <p className="text-[0.92rem] leading-loose text-ink-soft">
        {SITE_NAME}（以下「当サイト」）を運営する{OPERATOR}
        （以下「当社」）は、当サイトにおける利用者の情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
      </p>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">1. 取得する情報</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          当サイトは、氏名・住所などの個人情報の入力を求めるフォームを設置していません。当サイトの閲覧にあたって取得される情報は、後述のアクセス解析ツールによって収集される閲覧履歴・利用環境などの情報（Cookie等を利用して収集され、個人を特定しない形で扱われる情報）に限られます。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">2. アクセス解析ツールについて</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトでは、サイトの利用状況を把握しコンテンツを改善するため、Google
            Analyticsなどのアクセス解析ツールを利用することがあります。これらのツールはトラフィックデータの収集のためにCookieを使用します。
          </p>
          <p>
            収集されるデータは匿名で扱われ、個人を特定するものではありません。Cookieの利用は、お使いのブラウザの設定から無効にすることができます。Google
            Analyticsにおけるデータの取り扱いについては、Googleのポリシー・利用規約をご確認ください。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">3. 広告・アフィリエイトプログラムについて</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトは、アフィリエイトプログラムに参加しており、掲載しているサービスのリンクを経由して申し込みが行われた場合、当社が事業者から報酬を受け取ることがあります。
          </p>
          <p>
            アフィリエイトプログラムでは、成果の計測のためにCookieが使用されることがあります。Cookieによって収集される情報に、個人を特定する情報は含まれません。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">4. 第三者への提供</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          当社は、法令に基づく場合を除き、取得した情報を本人の同意なく第三者に提供することはありません。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">5. 免責事項</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          当サイトからリンクによって他のサイトに移動した場合、移動先サイトにおける情報の取り扱いについて当社は責任を負いません。各リンク先のプライバシーポリシーをご確認ください。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">6. 本ポリシーの変更</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          当社は、法令の改正やサービス内容の変更に応じて、本ポリシーを予告なく変更することがあります。変更後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。
        </p>
      </section>

      <p className="mt-12 text-[0.85rem] text-muted">制定日：2026年8月17日</p>

      <div className="mt-8">
        <a href="/contact/" className="btn-outline text-sm">
          お問い合わせ
        </a>
      </div>
    </main>
  );
}
