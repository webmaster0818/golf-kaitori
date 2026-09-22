import type { MetadataRoute } from "next";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified,
  }));
}
