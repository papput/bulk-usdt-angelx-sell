import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title ?? siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    applicationName: siteConfig.name,
    keywords: [
      "Sell USDT",
      "USDT to INR",
      "P2P USDT",
      "Angelx India",
      "UPI USDT",
      "Sell Tether",
    ],
    authors: [{ name: siteConfig.name }],
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
