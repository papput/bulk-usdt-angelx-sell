import { siteConfig } from "@/lib/site";
import { TelegramIcon } from "@/components/icons";

type TelegramButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function TelegramButton({
  href = siteConfig.telegram.href,
  label = "CONNECT ON TELEGRAM",
  className = "",
}: TelegramButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`brand-button font-bold py-4 px-10 rounded-full text-xl shadow-[0_8px_24px_rgba(255,193,7,0.35)] transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center ${className}`}
    >
      <TelegramIcon className="h-6 w-6 telegram-icon-bob" />
      {label}
    </a>
  );
}
