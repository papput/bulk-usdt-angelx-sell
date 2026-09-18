import { TelegramButton } from "@/components/telegram-button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
      <h1 className="mb-6 text-5xl font-black uppercase italic leading-tight tracking-tight text-black md:text-8xl">
        Sell USDT <br />
        <span className="text-black">& Get </span>
        <span className="gradient-text">INR</span>
      </h1>
      <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-wide text-black md:text-4xl">
        {siteConfig.tagline}
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-neutral-600 md:text-xl">
        {siteConfig.description}
      </p>
      <div className="flex w-full justify-center px-4">
        <TelegramButton />
      </div>
    </section>
  );
}
