import { securitySpecs } from "@/lib/site";

export function SecuritySpecs() {
  return (
    <section
      className="container mx-auto px-6 py-16"
      aria-label="Security Framework Specs"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {securitySpecs.map((spec) => (
          <div
            key={spec.eyebrow}
            className="bg-gradient-box rounded-2xl border-l-4 border-l-[#ffc107] p-6"
          >
            <h4 className="mb-2 text-sm font-bold tracking-wider text-[#ffc107]">
              {spec.eyebrow}
            </h4>
            {spec.title ? (
              <div className="mb-1 text-2xl font-black text-black md:text-3xl">
                {spec.title}
              </div>
            ) : null}
            <p className="text-xs text-neutral-600 md:text-sm">
              {spec.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
