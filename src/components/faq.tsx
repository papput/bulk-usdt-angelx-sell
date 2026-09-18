import { faqs } from "@/lib/site";

export function FaqList() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="bg-gradient-box group rounded-2xl p-5"
        >
          <summary className="cursor-pointer list-none text-left text-base font-bold text-black marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {faq.question}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffc107] text-black transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="container mx-auto scroll-mt-28 px-6 py-16"
      aria-labelledby="faq-title"
    >
      <div className="mb-12 text-center">
        <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-500 md:text-base">
          Common questions
        </h3>
        <h2 id="faq-title" className="text-4xl font-black italic text-black md:text-5xl">
          FAQ
        </h2>
      </div>
      <FaqList />
    </section>
  );
}
