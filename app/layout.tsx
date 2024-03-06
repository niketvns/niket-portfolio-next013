import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./context/store";
import { ReactNode } from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niket Kumar Mishra",
  description:
    "This is a personal portfolio of Niket Kumar Mishra. Where I will show my latest work like Projects, Blogs",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TferKy"
      />
      <body
        className={`${inter.className} bg-primary text-primary max-h-full overflow-hidden`}
      >
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
