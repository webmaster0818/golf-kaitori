import type { ReactNode } from "react";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "./Breadcrumbs";
import RelatedLinks from "./RelatedLinks";
import { GUIDE_LINKS, HUB_LINKS } from "../lib/links";

export type Faq = { q: string; a: string };

/**
 * /guide/ 配下の共通シェル(パンくず+BreadcrumbList/FAQPage schema+ヒーロー+FAQ+末尾導線)。
 * 本文は children に各ページ固有のsectionを渡す。
 */
export default function GuideShell({
  path,
  eyebrow,
  crumb,
  title,
  lead,
  faqs,
  related,
  children,
}: {
  path: string;
  eyebrow: string;
  crumb: string;
  title: string;
  lead: string;
  faqs: Faq[];
  related: { href: string; label: string; primary?: boolean }[];
  children: ReactNode;
}) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "はじめての買取ガイド", item: `${SITE_URL}/guide/` },
      { "@type": "ListItem", position: 3, name: crumb, item: `${SITE_URL}${path}` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "はじめての買取ガイド", href: "/guide/" }, { label: crumb }]} />
          <p className="eyebrow mt-8 mb-4">{eyebrow}</p>
          <h1 className="serif text-3xl md:text-4xl leading-snug text-ink">{title}</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">{lead}</p>
        </div>
      </section>

      {children}

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">よくある質問</h2>
        <div className="mt-6 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-club p-5">
              <summary className="cursor-pointer font-bold text-ink">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {related.map((r) => (
            <a key={r.href} href={r.href} className={r.primary ? "btn-green text-sm" : "btn-outline text-sm"}>
              {r.label}
            </a>
          ))}
        </div>
      </section>
      <RelatedLinks
        title="売れるか迷うクラブ・用品の他のガイド"
        items={[...GUIDE_LINKS.filter((g) => g.href !== path), HUB_LINKS.reviews, HUB_LINKS.souba]}
      />
    </main>
  );
}
