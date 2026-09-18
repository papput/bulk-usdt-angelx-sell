import type { Metadata } from "next";
import { FaqList } from "@/components/faq";
import { PageHero } from "@/components/page-hero";
import { TelegramButton } from "@/components/telegram-button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ | Angelx - Sell USDT & Get INR",
  description:
    "Answers about USDT to INR payouts, UPI and bank methods, settlement times, dispute protection, and 24/7 support.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="Frequently asked questions"
        description="Everything you need to know before selling USDT and receiving INR on Angelx."
      />
      <section className="container mx-auto px-6 pb-16">
        <FaqList />
        <div className="mt-12 flex justify-center">
          <TelegramButton label="ASK ON TELEGRAM" />
        </div>
      </section>
    </>
  );
}
