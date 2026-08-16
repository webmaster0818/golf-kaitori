import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

export const metadata: Metadata = {
  title: "情報の調査・検証ポリシー",
  description: `${SITE_NAME}が業者情報・相場データ・広告をどう扱っているかを公開します。業者情報は公式サイト等の一次情報のみ確認日つきで掲載し、相場は実売データにもとづいて作成。裏付けのない金額は掲載せず、広告報酬は評価・掲載順に影響しません。`,
  alternates: { canonical: `${SITE_URL}/verification-policy/` },
};

export default function VerificationPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
      <Breadcrumbs items={[{ label: "情報の調査・検証ポリシー" }]} />

      <p className="eyebrow mt-6 mb-4">VERIFICATION POLICY</p>
      <h1 className="serif rule-green text-2xl md:text-3xl text-ink mb-8">情報の調査・検証ポリシー</h1>
      <p className="text-[0.92rem] leading-loose text-ink-soft">
        {SITE_NAME}が、掲載している業者情報・相場データを「どこから・どのように集め、どう確認しているか」を公開します。高額な取引に関わる情報を扱うサイトとして、正確性と透明性を最優先しています。
      </p>

      {/* 当サイトの立場 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">当サイトの立場</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          {SITE_NAME}（運営：{OPERATOR}）は、ゴルフクラブ・ゴルフ用品の買取に関する情報提供・比較を行う
          <strong className="text-ink">情報メディア</strong>
          です。当サイト自身が買取を行う事業者ではありません。詳しくは
          <a href="/about/" className="text-green underline underline-offset-4">
            運営者情報
          </a>
          をご覧ください。
        </p>
      </section>

      {/* ① 掲載基準 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">1. 掲載基準（業者情報の確認方法）</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            掲載している各社の買取方法・手数料・古物商許可番号などの情報は、次の方針で確認しています。
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">一次情報での実確認：</strong>
                各社の公式サイトなど、一次情報で確認できた内容のみを掲載します。公式サイトを実際に確認し、そこに記載されている表記のみを採用します。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">確認日の記載：</strong>
                いつ時点の情報かが分かるよう、確認日を記載します。サービス内容は変更されることがあるため、ご利用前に各社公式サイトで最新情報をご確認ください。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">第三者サイトの数値は不採用：</strong>
                他の比較サイト・まとめサイトに載っている推定値・伝聞値は採用しません。公式サイトで確認できない項目は、想像で補わず「非公開」「公式表記なし」と明記します。
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ② 相場データ */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">2. 相場データの方針</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            相場として掲載する数値は、事業者が広告として掲げる「参考買取価格」ではなく、
            <strong className="text-ink">実際に売買が成立した価格のデータ（実売データ）</strong>
            にもとづいて作成する方針です。裏付けのない金額や、成立が確認できない「買取実績」は採用しません。
          </p>
          <p>
            ゴルフクラブの相場は、同じメーカーでもモデル名・年式・シャフトスペック・状態によって大きく変わります。相場データはモデル・年式単位で集計し、件数・収集期間・取得日を明記のうえ掲載します。
          </p>
          <div className="notice-leather p-5">
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink">現在の状況：</strong>
              実売データにもとづく相場データベースは現在整備中です。整備が完了したメーカー・モデルから、件数・収集期間・取得日を明記のうえ順次公開します。整備前に裏付けのない相場額を掲載することはしません。
            </p>
          </div>
          <p>
            なお、実売価格と買取価格は同じではありません。買取業者の査定額は、実売価格から業者の利益・手数料・在庫リスクなどを差し引いた金額になるのが一般的です。相場データは「査定額を判断する物差し」としてご利用ください。
          </p>
        </div>
      </section>

      {/* ③ 広告の方針 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">3. 広告（PR）の方針</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">リンクは計測リンク受領後のみ：</strong>
                各社への申し込みリンクは、アフィリエイトプログラムの提携が成立し、正規の計測リンクを受領した場合にのみ設置します。提携前の業者に生のリンクを広告のように掲載することはありません。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">報酬は評価・掲載順に影響しない：</strong>
                広告提携の有無や報酬額が、評価内容・掲載順位に影響することは一切ありません。評価は本ポリシーに基づく一次情報の確認内容のみで作成します。
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ④ 訂正窓口 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">4. 情報の訂正について</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          掲載内容に誤りがある場合、または公式サイトの更新により情報が古くなっている場合は、訂正の申し立てを受け付ける方針です。受付方法は
          <a href="/contact/" className="text-green underline underline-offset-4">
            お問い合わせページ
          </a>
          をご覧ください。申し立てをいただいた場合は、一次情報での再確認のうえ、事実に基づいて速やかに訂正します。
        </p>
      </section>

      {/* 免責 */}
      <section className="mt-12">
        <h2 className="serif rule-green text-xl text-ink mb-6">免責事項</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          掲載情報は上記の方法による調査・確認に基づくものであり、完全性・正確性・最新性を保証するものではありません。買取価格は市況により変動し、実際の査定額はクラブの状態・年式・付属品・時期などによって異なります。ご利用に際しては各社に直接お問い合わせのうえ、最新情報をご確認ください。
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <a href="/about/" className="btn-outline text-sm">
          運営者情報を見る
        </a>
        <a href="/contact/" className="btn-outline text-sm">
          情報の訂正を申し立てる
        </a>
      </div>
    </main>
  );
}
