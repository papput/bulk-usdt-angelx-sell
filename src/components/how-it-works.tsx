import { howItWorksSteps } from "@/lib/site";

export function HowItWorks({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="how-it-works"
      className="container mx-auto scroll-mt-28 px-6 py-16"
      aria-labelledby="how-it-works-title"
    >
      <div className="mb-12 text-center">
        <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-500 md:text-base">
          Simple 4-step process
        </h3>
        <h2
          id="how-it-works-title"
          className="text-4xl font-black italic text-black md:text-5xl"
        >
          How to <span className="gradient-text">Sell USDT</span>
        </h2>
      </div>
      <div className={`grid gap-6 ${compact ? "md:grid-cols-2" : "md:grid-cols-4"}`}>
        {howItWorksSteps.map((item) => (
          <article
            key={item.step}
            className="bg-gradient-box rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex rounded-full bg-[#ffc107] px-3 py-1 text-sm font-black tracking-widest text-black">
              STEP {item.step}
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">{item.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
