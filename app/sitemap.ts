import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

// 全ルート（ページ追加・削除時は必ずここも同一コミットで更新すること）
const paths = [
  "/",
  "/souba/",
  "/souba/taylormade/",
  "/souba/callaway/",
  "/souba/titleist/",
  "/souba/ping/",
  "/souba/xxio/",
  "/souba/bridgestone/",
  "/club-guide/",
  "/hikaku/",
  "/guide/",
  "/guide/damaged-club/",
  "/guide/old-clubs/",
  "/guide/head-lefty-ladies/",
  "/guide/set-bag-ball/",
  "/guide/find-model/",
  "/reviews/",
  "/reviews/golf-partner/",
  "/reviews/golf-do/",
  "/reviews/gdo/",
  "/reviews/golf5/",
  "/reviews/golf-kids/",
  "/reviews/niki-golf/",
  "/reviews/tsuruya/",
  "/reviews/golf-ace/",
  "/reviews/2ndstreet/",
  "/reviews/hardoff/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/verification-policy/",
];

// lastmod は「そのページの中身を作るファイル」の最終コミット日（ビルド時刻にしない）。
// 未コミットの変更があるときだけ今日の日付にする。
function sourcesFor(p: string): string[] {
  if (p === "/") return ["app/page.tsx"];
  if (p === "/souba/") return ["app/souba/page.tsx", "app/lib/souba.ts"];
  if (p.startsWith("/souba/")) return ["app/souba/[slug]", "app/lib/souba.ts"];
  if (p === "/reviews/") return ["app/reviews/page.tsx", "app/lib/reviews.ts"];
  if (p.startsWith("/reviews/")) return ["app/reviews/[slug]", "app/lib/reviews.ts"];
  if (p === "/guide/") return ["app/guide/page.tsx"];
  if (p.startsWith("/guide/")) return [`app${p}`, "app/lib/reviews.ts"];
  return [`app${p}`];
}

function lastModifiedFor(p: string): Date | undefined {
  const files = sourcesFor(p);
  try {
    const dirty = execFileSync("git", ["status", "--porcelain", "--", ...files], { encoding: "utf8" }).trim();
    if (dirty) return new Date();
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], { encoding: "utf8" }).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: lastModifiedFor(p),
  }));
}
