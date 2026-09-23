export type RelatedItem = { href: string; label: string; note?: string };

/** ページ末尾の関連導線(内部リンク最適化用)。アンカーテキストはページtitleと揃える。 */
export default function RelatedLinks({ title, items }: { title: string; items: RelatedItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="border-t border-line bg-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="serif rule-green text-2xl text-ink">{title}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="card-club p-4 block hover:border-green">
                <span className="font-bold text-ink">{i.label}</span>
                {i.note && <span className="block mt-1 text-xs text-ink-soft">{i.note}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
