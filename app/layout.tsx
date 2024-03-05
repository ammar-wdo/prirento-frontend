import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "PRIRENTO - Luxurious car rental - UAE",
  description:
    "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
  openGraph: {
    title: "PRIRENTO - Luxurious car rental - UAE",
    description:
      "Descover the most luxorious car rental service in UAE, get hustle  free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
      images:[`${process.env.NEXT_PUBLIC_BASE_URL}/banner.png`],
      
  },

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader
  color="#C6A046" />
        {children}
        <Toaster richColors={true} position="top-center" />
      </body>
      <GoogleAnalytics gaId="G-PQFR6PWJQ0" />
      <GoogleTagManager gtmId="GTM-N3H97TR5" />
    </html>
  );
}
