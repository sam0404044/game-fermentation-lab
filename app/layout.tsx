import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "遊戲發酵室 Game Fermentation Lab",
  description:
    "把議題發酵成遊戲，讓內容被玩過、記住、分享。遊戲發酵室的官方網站與作品入口。"
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
