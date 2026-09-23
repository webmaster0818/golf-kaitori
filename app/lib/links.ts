// 内部リンクの定型セット(アンカーテキストをサイト内で統一する)
import { SOUBA } from "./souba";
import { REVIEWS } from "./reviews";

export const GUIDE_LINKS = [
  { href: "/guide/damaged-club/", label: "傷あり・シャフト折れ・凹みのあるクラブは売れる？", note: "減額で済むダメージと不可になるダメージ" },
  { href: "/guide/old-clubs/", label: "10年以上前の古いクラブは売れる？", note: "年式の目安と古いモデルを受ける業者" },
  { href: "/guide/head-lefty-ladies/", label: "ヘッド単体・レフティ・レディースは売れる？", note: "パーツ・左用・レディースの扱い" },
  { href: "/guide/set-bag-ball/", label: "クラブセット・キャディバッグ・ボールは売れる？", note: "番手条件・バッグの同送・対象外の小物" },
  { href: "/guide/find-model/", label: "モデル名・年式の調べ方", note: "刻印の見方とメーカー別の世代" },
];

export const SOUBA_LINKS = SOUBA.map((m) => ({
  href: `/souba/${m.slug}/`,
  label: `${m.name}の実売相場データ`,
  note: m.models ? `カテゴリ${m.rows.length}＋型番${m.models.length}件` : `カテゴリ${m.rows.length}件`,
}));

export const REVIEW_LINKS = REVIEWS.map((r) => ({
  href: `/reviews/${r.slug}/`,
  label: `${r.name}の買取を公式情報で検証`,
  note: r.methods.join("・"),
}));

export const HUB_LINKS = {
  souba: { href: "/souba/", label: "実売相場データ一覧", note: "6メーカー・型番別データ" },
  reviews: { href: "/reviews/", label: "買取業者の検証レビュー（10社）", note: "買取方法・費用・取扱を公式確認" },
  hikaku: { href: "/hikaku/", label: "買取業者の選び方（3つの売り先）", note: "専門店・総合店・ネット" },
  clubGuide: { href: "/club-guide/", label: "ゴルフクラブの売り方ガイド", note: "査定で見られる点と準備" },
  guide: { href: "/guide/", label: "はじめての買取ガイド", note: "流れ・方法・トラブル回避" },
};
