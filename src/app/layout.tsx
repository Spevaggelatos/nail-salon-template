import type { Metadata } from "next";
import { salonConfig } from "@/config/salon.config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${salonConfig.business.name} | ${salonConfig.business.tagline}`,
  description: `${salonConfig.business.name} - ${salonConfig.business.subtitle}. Κλείστε online το ραντεβού σας για μανικιούρ, πεντικιούρ, acrygel και nail art.`,
  keywords: [
    salonConfig.business.name,
    "νυχάδικο",
    "μανικιούρ",
    "πεντικιούρ",
    "τεχνητά νύχια",
    "ημιμόνιμο",
    "spa pedicure",
    "nail salon",
    salonConfig.contact.address.city,
    salonConfig.contact.address.area,
  ],
  authors: [{ name: salonConfig.business.name }],
  openGraph: {
    title: `${salonConfig.business.name} | ${salonConfig.business.tagline}`,
    description: salonConfig.business.subtitle,
    locale: "el_GR",
    type: "website",
  },
  icons: {
    icon: "/images/ellobeauty_logo_small.svg",
    shortcut: "/images/ellobeauty_logo_small.svg",
    apple: "/images/ellobeauty_logo_small.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBFCFA] text-[#162021] antialiased selection:bg-[#BEE6EA] selection:text-[#244B50]">
        {children}
      </body>
    </html>
  );
}
