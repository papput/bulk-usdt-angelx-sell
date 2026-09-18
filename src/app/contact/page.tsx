import type { Metadata } from "next";
import { CheckCircleIcon, TelegramIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { TelegramButton } from "@/components/telegram-button";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact | Angelx - Sell USDT & Get INR",
  description:
    "Connect with the authorized Angelx customer service team on Telegram for secure, manual USDT to INR trades.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Authorized team"
        title="Contact us"
        description="Connect directly with our authorized team on Telegram for 100% secure, manual trade processing without bugs."
      />
      <section className="container mx-auto max-w-3xl px-6 pb-16">
        <div className="bg-gradient-box rounded-2xl p-8">
          <p className="mb-6 flex items-center gap-2 font-semibold text-black">
            <CheckCircleIcon className="h-5 w-5 text-[#ffc107]" />
            Angelx Customer Service Team
          </p>
          <div className="grid gap-4">
            <a
              href={siteConfig.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[#f3e6b8] bg-[#ffefbb] p-4 font-medium text-black transition hover:bg-[#ffe6a3]"
            >
              <TelegramIcon className="h-7 w-7 text-[#ffc107]" />
              {siteConfig.telegram.label}
            </a>
          </div>
          <div className="mt-8 flex justify-center">
            <TelegramButton />
          </div>
        </div>
      </section>
    </>
  );
}
