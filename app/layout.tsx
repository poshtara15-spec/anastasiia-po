import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Anastasiia Aleksiichuk — Product Owner",
  description: "Product Owner for B2B SaaS and e-commerce: roadmap, OKRs and backlog — with a designer’s hands to prototype ideas before the team builds them.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f5f0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        <div className="grid-bg" aria-hidden="true"><div /></div>
        {children}
      </body>
    </html>
  );
}
