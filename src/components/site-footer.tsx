import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CheckCircleIcon, ChevronRightIcon, TelegramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-[#f3e6b8] bg-[#ffefbb] py-16">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 px-6 md:flex-row">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="mb-5 flex justify-center md:justify-start">
            <BrandLogo size={48} />
          </div>
          <h2 className="mb-2 text-3xl font-black tracking-tight text-black md:text-4xl">
            JOIN ANGELX TODAY!
          </h2>
          <h3 className="mb-6 text-3xl font-black uppercase italic text-[#ffc107] md:text-4xl">
            SELL USDT & GET INR NOW!
          </h3>
          <p className="text-sm font-medium text-neutral-600 md:text-base">
            Connect directly with our authorized team on Telegram for 100%
            secure, manual trade processing without bugs.
          </p>
        </div>

        <div className="bg-gradient-box w-full rounded-2xl p-6 md:w-1/2">
          <h4 className="mb-4 border-b border-[#f3e6b8] pb-3 text-lg font-bold uppercase tracking-wider text-black">
            CONTACT US
          </h4>
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-black">
            <CheckCircleIcon className="h-4 w-4 text-[#ffc107]" />
            Angelx Customer Service Team
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={siteConfig.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-[#f3e6b8] bg-[#ffefbb] p-3 transition hover:bg-[#ffe6a3]"
              >
                <span className="flex items-center gap-3 font-medium text-black">
                  <TelegramIcon className="h-6 w-6 text-[#ffc107]" />
                  {siteConfig.telegram.label}
                </span>
                <ChevronRightIcon className="h-3 w-3 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-black" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-neutral-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Sell USDT & get INR.
        </p>
        <div className="flex gap-4">
          <Link href="/how-it-works" className="hover:text-black">
            How it works
          </Link>
          <Link href="/faq" className="hover:text-black">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
