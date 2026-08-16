import { SITE_NAME } from "../lib/site";

export default function Header() {
  const nav = [
    { href: "/souba/", label: "実売相場" },
    { href: "/hikaku/", label: "業者の選び方" },
    { href: "/club-guide/", label: "クラブの売り方" },
    { href: "/guide/", label: "はじめての方へ" },
  ];
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
        <a href="/" className="flex items-baseline gap-2.5 shrink-0">
          <span className="serif text-[1.32rem] leading-none text-ink">{SITE_NAME}</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.24em] text-green font-bold">
            GOLF GEAR KAITORI
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7" aria-label="グローバルナビゲーション">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link text-[0.9rem] text-ink-soft">
              {n.label}
            </a>
          ))}
          <a href="/hikaku/" className="btn-green text-xs px-5 py-2.5">
            比較を見る
          </a>
        </nav>
        <a href="/hikaku/" className="btn-green only-mobile text-xs px-4 py-2">
          比較
        </a>
      </div>
      <div className="only-mobile overflow-x-auto border-t border-line bg-cream">
        <div className="flex whitespace-nowrap px-4 py-2 gap-4">
          <a className="text-xs font-medium text-ink-soft" href="/">トップ</a>
          {nav.map((n) => (
            <a key={n.href} className="text-xs font-medium text-ink-soft" href={n.href}>
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
