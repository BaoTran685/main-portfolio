import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Roboto } from "next/font/google";
import "./globals.css";
import "./components/Hero/hero.css";
import "./components/About/about.css";
import "./components/Project/projects.css"

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bao Tran",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
