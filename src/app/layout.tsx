import type { Metadata } from "next";
import { salonConfig } from "@/config/salon.config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${salonConfig.business.name} | ${salonConfig.business.tagline}`,
  description: `${salonConfig.business.name} - ${salonConfig.business.subtitle}. Κλείστε online το ραντεβού σας για μανικιούρ, πεντικιούρ, dipping, τεχνητά νύχια και lash lift.`,
  keywords: [
    salonConfig.business.name,
    "neta nails",
    "νυχάδικο χολαργός",
    "μανικιούρ χολαργός",
    "πεντικιούρ",
    "τεχνητά νύχια",
    "ημιμόνιμο",
    "dipping",
    "lash lift",
    "nail studio",
    salonConfig.contact.address.city,
    salonConfig.contact.address.street,
  ],
  authors: [{ name: salonConfig.business.name }],
  openGraph: {
    title: `${salonConfig.business.name} | ${salonConfig.business.tagline}`,
    description: salonConfig.business.subtitle,
    locale: "el_GR",
    type: "website",
  },
  icons: {
    icon: "/images/netanails/logo.jpg",
    shortcut: "/images/netanails/logo.jpg",
    apple: "/images/netanails/logo.jpg",
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
      <body className="min-h-screen flex flex-col bg-[#FDFBFB] text-[#1C1514] antialiased selection:bg-[#EFDDD8] selection:text-[#603C37]">
        {children}
      </body>
    </html>
  );
}
