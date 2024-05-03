import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./components/Hero/hero.css";
import "./components/About/about.css";
import "./components/Project/projects.css"

const popings = Poppins({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bao Tran's Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popings.className}>{children}</body>
    </html>
  );
}
