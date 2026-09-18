"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { CloseIcon, MenuIcon, TelegramIcon } from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function goTo(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <header className="relative sticky top-0 z-50 border-b border-[#f3e6b8] bg-[#ffefbb]/95 backdrop-blur-md">
      <nav
        className="container mx-auto flex items-center justify-between px-6 py-4"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link href="/" className="text-black">
          <BrandLogo size={42} priority />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active ? "text-black" : "text-neutral-600 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full bg-[#ffc107] px-4 py-1.5 text-xs font-semibold text-black md:flex md:text-sm">
            {siteConfig.madeFor} 🇮🇳
          </div>
          <a
            href={siteConfig.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-button hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-bold sm:flex"
          >
            <TelegramIcon className="h-4 w-4" />
            Telegram
          </a>
          <button
            type="button"
            className="rounded-lg border border-[#ffc107] p-2 text-black lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" title="Close menu" />
            ) : (
              <MenuIcon className="h-5 w-5" title="Open menu" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute left-0 right-0 top-full z-50 border-t border-[#f3e6b8] bg-[#ffefbb] px-6 py-4 shadow-2xl lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(link.href);
                }}
                className="rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wide text-black hover:bg-[#ffe6a3]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-bold"
            >
              <TelegramIcon className="h-4 w-4" />
              Connect on Telegram
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
