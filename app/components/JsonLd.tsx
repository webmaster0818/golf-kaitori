import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

/** JSON-LDを1本出力する小物。 */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** サイト共通: Organization + WebSite(layoutで1回だけ出力)。評価値・架空レビューは含めない。 */
export function SiteJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: OPERATOR,
    url: `${SITE_URL}/`,
  };
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "golf-sell.com",
    url: `${SITE_URL}/`,
    inLanguage: "ja",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  return (
    <>
      <JsonLd data={org} />
      <JsonLd data={site} />
    </>
  );
}

/** パンくずJSON-LD(ホーム起点)。items は表示用Breadcrumbsと同じ並び(最後は現在ページ)。 */
export function BreadcrumbJsonLd({ items }: { items: { label: string; href?: string }[] }) {
  const list = [{ label: "ホーム", href: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };
  return <JsonLd data={data} />;
}
