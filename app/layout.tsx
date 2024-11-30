import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { DM_Sans, Poppins, Outfit, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-popins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const againstHistory = localFont({
  src: "./assets/fonts/AgainstHistory.ttf",
  variable: "--font-against-history",
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack This Fall Community",
  description:
    "Hack This Fall 2024 is a virtual hackathon scheduled to happen virtually! 🧡",
  openGraph: {
    title: "Hack This Fall Community",
    description:
      "Hack This Fall 2024 is a virtual hackathon scheduled to happen virtually! 🧡",
    siteName: "Hack This Fall Community",
    images: [
      {
        url: "https://hackthisfall.tech/og.png",
        width: 2000,
        height: 1000,
        alt: "Hack This Fall Community",
      },
    ],
  },
  twitter: {
    title: "Hack This Fall Community",
    description:
      "Hack This Fall 2024 is a virtual hackathon scheduled to happen virtually! 🧡",
    images: [
      {
        url: "https://hackthisfall.tech/og.png",
        width: 2000,
        height: 1000,
        alt: "Hack This Fall Community",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="root-html">
      <body
        className={`${poppins.variable} ${dmSans.variable} ${againstHistory.variable} ${outfit.variable} ${inter.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
