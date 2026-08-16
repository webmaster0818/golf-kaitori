import { SITE_NAME, OPERATOR } from "../lib/site";

export default function Footer() {
  const cols = [
    {
      title: "ゴルフ買取ガイド",
      links: [
        { href: "/souba/", label: "実売相場データ" },
        { href: "/club-guide/", label: "ゴルフクラブの売り方" },
        { href: "/hikaku/", label: "買取業者の選び方（3つの売り先）" },
        { href: "/guide/", label: "はじめての買取ガイド" },
      ],
    },
    {
      title: "サイトの方針",
      links: [
        { href: "/verification-policy/", label: "情報の調査・検証ポリシー" },
        { href: "/about/", label: "運営者情報" },
      ],
    },
    {
      title: "サイト情報",
      links: [
        { href: "/contact/", label: "お問い合わせ" },
        { href: "/privacy/", label: "プライバシーポリシー" },
        { href: "/terms/", label: "利用規約" },
      ],
    },
  ];
  return (
    <footer className="site-footer mt-20">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="serif text-lg text-cream">{SITE_NAME}</p>
            <p className="mt-3 text-xs leading-relaxed text-cream/60">
              ゴルフクラブ・用品の買取を、実売データと公式確認情報にもとづいて正直に比較する専門ガイドです。掲載情報には出典と確認日を付記します。
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold tracking-widest text-cream/80 mb-3">{c.title}</p>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a className="footer-link" href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-cream/15 pt-6 text-center">
          <p className="text-[11px] text-cream/50">
            運営: {OPERATOR}｜本サイトは買取サービスの情報メディアであり、買取業者ではありません。広告（PR）を含みますが、報酬の有無は評価・掲載順に影響しません。
          </p>
          <p className="mt-2 text-[11px] text-cream/40">&copy; {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
