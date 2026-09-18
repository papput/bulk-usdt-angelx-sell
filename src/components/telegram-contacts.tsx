import { ChevronRightIcon, TelegramIcon } from "@/components/icons";
import { telegramContacts } from "@/lib/site";

export function TelegramContacts() {
  return (
    <ul className="space-y-3">
      {telegramContacts.map((contact) => (
        <li key={contact.href}>
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-[#f3e6b8] bg-[#ffefbb] p-3 transition hover:bg-[#ffe6a3]"
          >
            <span className="flex items-center gap-3 font-medium text-black">
              <TelegramIcon className="h-6 w-6 text-[#ffc107]" />
              <span className="flex flex-col">
                <span>{contact.label}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {contact.kind}
                </span>
              </span>
            </span>
            <ChevronRightIcon className="h-3 w-3 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-black" />
          </a>
        </li>
      ))}
    </ul>
  );
}
