import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "PRIRENTO - Luxurious car rental - UAE",
  description:
    "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
  openGraph: {
    title: "PRIRENTO - Luxurious car rental - UAE",
    description:
      "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
      images:['/banner.png'],
      
  },
  twitter:{
    images:['/banner.png']
  }
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
    </html>
  );
}
