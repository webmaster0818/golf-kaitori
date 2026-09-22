import { REVIEWS } from "../lib/reviews";

/**
 * 業者検証レビュー(reviews.ts)の policy(古いクラブ・傷・セット等に関する公式記載の要約)を一覧化。
 * 記載のない業者は「記載を確認できず」と正直に表示。業者サイトへの外部リンクは設置しない。
 */
export default function DealerPolicyList({ intro }: { intro: string }) {
  const withPolicy = REVIEWS.filter((r) => r.policy);
  const without = REVIEWS.filter((r) => !r.policy);
  return (
    <div className="max-w-4xl">
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        {intro}
        当サイトの業者検証レビュー{REVIEWS.length}社のうち、公式サイトに条件の記載があったのは{withPolicy.length}社です（各社の確認日はレビューページに記載）。
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="table-spec min-w-[640px]">
          <thead>
            <tr>
              <th className="text-left">業者</th>
              <th className="text-left">公式サイトの記載（要約）</th>
            </tr>
          </thead>
          <tbody>
            {withPolicy.map((r) => (
              <tr key={r.slug}>
                <td className="whitespace-nowrap align-top">
                  <a href={`/reviews/${r.slug}/`} className="font-bold text-green underline">
                    {r.name}
                  </a>
                </td>
                <td className="text-[0.86rem] leading-relaxed text-ink-soft">{r.policy}</td>
              </tr>
            ))}
            {without.length > 0 && (
              <tr>
                <td className="whitespace-nowrap align-top text-muted">
                  {without.map((r) => r.name).join("・")}
                </td>
                <td className="text-[0.86rem] leading-relaxed text-muted">
                  公式サイト上で該当する条件の記載を確認できませんでした（買取不可の意味ではありません）。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
