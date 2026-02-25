import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Sadiq Shehu — AI/ML & Software Engineer",
  description:
    "Software Engineer and Machine Learning Developer specializing in intelligent systems, Python, Java, and web solutions.",
  icons: {
    icon: "/sh1.png",
    shortcut: "/sh1.png",
    apple: "/sh1.png",
  },
  openGraph: {
    title: "Sadiq Shehu — AI/ML & Software Engineer",
    description:
      "Software Engineer and Machine Learning Developer specializing in intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/sh1.png" type="image/png" />
        <link rel="shortcut icon" href="/sh1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/sh1.png" />
      </head>
      <body className="bg-dark-100 text-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-dark-70 py-8 mt-24">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-display font-700 text-sm tracking-widest uppercase text-dark-30">
              Sadiq Shehu
            </span>
            <p className="text-xs text-dark-40">
              © 2026 Sadiq Shehu Musa. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs text-dark-40">
              <a
                href="https://x.com/svdeeq021/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/sadiqshehu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/svdeeq21/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
