import type { Metadata } from "next";
import { CheckCircleIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { TelegramButton } from "@/components/telegram-button";
import { TelegramContacts } from "@/components/telegram-contacts";
import { createMetadata } from "@/lib/seo";

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
          <TelegramContacts />
          <div className="mt-8 flex justify-center">
            <TelegramButton />
          </div>
        </div>
      </section>
    </>
  );
}
