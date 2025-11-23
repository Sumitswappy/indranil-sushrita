import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Invitation: Indranil & Sushrita",
  description: "Join us in celebrating the wedding ceremony of Indranil & Sushrita on 6th February, 2026 in Kolkata.",
  openGraph: {
    title: "Wedding Invitation: Indranil & Sushrita",
    description: "6th February, 2026 | Kolkata",
    images: [
      {
        url: "/invitation.jpg", // This ensures the card shows up when shared on WhatsApp/FB
        width: 800,
        height: 1200,
        alt: "Indranil & Sushrita Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}