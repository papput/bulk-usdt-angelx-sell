import type { Metadata } from "next";
import Link from "next/link";
import { TelegramButton } from "@/components/telegram-button";

export const metadata: Metadata = {
  title: "Page not found | Angelx",
};

export default function NotFound() {
  return (
    <section className="container mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ffc107]">
        404
      </p>
      <h1 className="mb-4 text-4xl font-black uppercase italic text-black md:text-6xl">
        Page not found
      </h1>
      <p className="mb-10 text-neutral-600">
        This page does not exist. Go back home or connect with the team on
        Telegram.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full border border-black px-8 py-3 font-bold text-black hover:bg-[#ffe6a3]"
        >
          Back home
        </Link>
        <TelegramButton />
      </div>
    </section>
  );
}
