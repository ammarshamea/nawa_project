import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/lib/context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { publicPath } from "@/lib/publicPath";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
  display: "swap",
});

function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  const host = process.env.VERCEL_URL?.trim();
  if (host) return `https://${host}`;
  return "http://localhost:3000";
}

const logoOgPath = publicPath("nawa_logo.svg");

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: "نواة التطوير العقاري | Nawah Real Estate Development",
  description:
    "نواة التطوير العقاري | Nawah Real Estate Development — Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
  keywords:
    "luxury real estate, Saudi Arabia, Riyadh, real estate development, luxury villas, premium apartments, Vision 2030, نواة التطوير العقاري",
  icons: {
    icon: [{ url: logoOgPath, type: "image/svg+xml", sizes: "any" }],
    shortcut: logoOgPath,
    apple: logoOgPath,
  },
  openGraph: {
    title: "نواة التطوير العقاري | Nawah Real Estate Development",
    description: "Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
    type: "website",
    images: [
      {
        url: logoOgPath,
        alt: "نواة التطوير العقاري | Nawah Real Estate Development",
      },
    ],
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "نواة التطوير العقاري | Nawah Real Estate Development",
    description: "Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
    images: [logoOgPath],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* lang/dir are set dynamically by SiteProvider on the client */
    <html lang="en" dir="ltr" data-theme="dark" className={`${josefinSans.variable} font-josefin h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
