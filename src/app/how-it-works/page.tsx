import type { Metadata } from "next";
import { HowItWorks } from "@/components/how-it-works";
import { PageHero } from "@/components/page-hero";
import { TelegramButton } from "@/components/telegram-button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "How it works | Angelx - Sell USDT & Get INR",
  description:
    "Sell USDT in four steps: connect on Telegram, add bank or UPI, lock the highest price, and receive INR in 3-30 minutes.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Angelx process"
        title="How it works"
        description="A simple Telegram-first flow to sell USDT and receive INR through bank transfer or UPI."
      />
      <HowItWorks />
      <div className="flex justify-center px-6 pb-16">
        <TelegramButton />
      </div>
    </>
  );
}
