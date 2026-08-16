import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${SITE_NAME}の運営者情報です。運営会社、サイトの位置づけ、評価・掲載の基準、広告（PR）の開示、免責事項をご確認いただけます。`,
  alternates: { canonical: `${SITE_URL}/about/` },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
      <Breadcrumbs items={[{ label: "運営者情報" }]} />

      <p className="eyebrow mt-6 mb-4">ABOUT</p>
      <h1 className="serif rule-green text-2xl md:text-3xl text-ink mb-8">運営者情報</h1>
      <p className="text-[0.92rem] leading-loose text-ink-soft">
        {SITE_NAME}の運営会社と、当サイトがどのような立場・方針で情報を掲載しているかをご案内します。
      </p>

      {/* 運営会社 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">運営会社</h2>
        <div className="overflow-x-auto">
          <table className="table-spec">
            <tbody>
              <tr>
                <th className="w-1/3">サイト名</th>
                <td>{SITE_NAME}</td>
              </tr>
              <tr>
                <th>運営会社</th>
                <td>{OPERATOR}</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>東京都渋谷区</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>Webメディア運営、デジタルマーケティング支援</td>
              </tr>
              <tr>
                <th>お問い合わせ</th>
                <td>
                  <a href="/contact/" className="text-green underline underline-offset-4">
                    お問い合わせページ
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 当サイトの位置づけ */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">当サイトの位置づけ</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            {SITE_NAME}は、ゴルフクラブ・ゴルフ用品（クラブ・ウェア・キャディバッグなど）の買取を検討している方に向けて、業者や売り方の情報を整理して提供する
            <strong className="text-ink">比較情報メディア</strong>です。
          </p>
          <p>
            当サイト自身は買取事業者ではなく、品物の買取・査定・仲介は一切行っていません。実際の査定額・サービス内容・手数料は各事業者によって異なります。売却の際は、必ず各社の公式サイトで最新情報をご確認のうえ、ご自身の判断でご利用ください。
          </p>
        </div>
      </section>

      {/* 評価・掲載の基準 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">評価・掲載の基準</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>当サイトのコンテンツは、次の方針に基づいて制作しています。</p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">業者情報は公式確認＋確認日：</strong>
                各社の買取方法・手数料・古物商許可番号などの情報は、各社公式サイトなどの一次情報で確認し、確認日を記載します。第三者サイトの伝聞値は採用しません。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">値がつきにくいものは正直に記載：</strong>
                発売から年数が経ったモデルや状態の悪いクラブなど、高値がつきにくいものは「値がつきにくい」とはっきり記載します。売却をあおるための誇張はしません。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">架空の口コミ・体験談ゼロ：</strong>
                架空の口コミや体験談は一切作成しません。実在するソースが確認できない場合は「口コミが少ない」と正直に記載します。
              </span>
            </li>
          </ul>
          <p>
            具体的な確認手順は
            <a href="/verification-policy/" className="text-green underline underline-offset-4">
              情報の調査・検証ポリシー
            </a>
            で公開しています。
          </p>
        </div>
      </section>

      {/* 広告（PR）の開示 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">広告（PR）の開示</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトには、アフィリエイトプログラムによる広告（PR）を含む場合があります。利用者が当サイトのリンクを経由してサービスに申し込んだ場合、当社が事業者から報酬を受け取ることがあります。
          </p>
          <p>
            ただし、広告の有無や報酬額が各社の評価・掲載順位に影響することは一切ありません。掲載内容は、上記の評価・掲載の基準と検証ポリシーに基づいて作成しています。
          </p>
        </div>
      </section>

      {/* 免責事項 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">免責事項</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトに掲載されている情報は、各社公式サイトの公開情報・当社の調査に基づくものであり、その完全性・正確性・最新性を保証するものではありません。買取価格は市況により変動し、実際の査定額はクラブの状態・年式・付属品・時期などによって異なります。
          </p>
          <p>
            サービスのご利用に際しては、必ず各事業者に直接お問い合わせのうえ、最新の情報をご確認ください。当サイトの情報に基づく判断や行動によって生じた損害について、当社は一切の責任を負いません。詳しくは
            <a href="/terms/" className="text-green underline underline-offset-4">
              利用規約
            </a>
            もあわせてご確認ください。
          </p>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">関連ページ</h2>
        <ul className="space-y-2.5 text-[0.92rem] text-ink-soft">
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
          <li>
            <a href="/contact/" className="text-green underline underline-offset-4">
              お問い合わせ
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
