import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.playferment.com"),
  title: "遊戲發酵室 Game Fermentation Lab",
  description:
    "把議題發酵成遊戲，讓內容被玩過、記住、分享。遊戲發酵室的官方網站與作品入口。",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", rel: "shortcut icon", type: "image/svg+xml" }
    ],
    apple: [{ url: "/icon.svg" }]
  },
  openGraph: {
    title: "遊戲發酵室 Game Fermentation Lab",
    description: "把議題發酵成遊戲，讓內容被玩過、記住、分享。",
    url: "https://www.playferment.com",
    siteName: "Game Fermentation Lab",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/images/hero/game-fermentation-lab-hero.png",
        width: 1536,
        height: 1024,
        alt: "Game Fermentation Lab hero visual"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "遊戲發酵室 Game Fermentation Lab",
    description: "把議題發酵成遊戲，讓內容被玩過、記住、分享。",
    images: ["/images/hero/game-fermentation-lab-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
