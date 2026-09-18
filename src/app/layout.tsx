import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-[#ffefbb] font-sans text-black selection:bg-[#ffc107] selection:text-black">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
