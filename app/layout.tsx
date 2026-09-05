import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "./lib/site";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-shippori",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: "ekgYOZQs5WjDqB9L8sv9F8A-H8wmqAIR61XLq54OFqs" },
  title: {
    default: `${SITE_NAME}｜${SITE_TAGLINE}`,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "ゴルフクラブ・ゴルフ用品の買取業者を、実売データと公式確認情報で正直に比較。メーカー×モデル×年式で決まるクラブ相場の考え方、高く売る準備、売り先3タイプの違いまでまとめた専門ガイドです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${shippori.variable} antialiased`}>
        <Header />
        <p className="bg-cream-deep border-b border-line text-center text-[11px] text-muted py-1 px-4">
          本サイトはプロモーション（PR）を含みます。
        </p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
