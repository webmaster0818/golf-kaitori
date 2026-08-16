type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="パンくずリスト" className="crumbs py-3">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <a href="/">ホーム</a>
        </li>
        {items.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <span aria-hidden="true">›</span>
            {c.href ? <a href={c.href}>{c.label}</a> : <span className="text-ink-soft">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
