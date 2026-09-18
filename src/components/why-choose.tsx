import {
  BoltIcon,
  HeadsetIcon,
  RupeeIcon,
  UsersIcon,
} from "@/components/icons";
import { whyChooseCards } from "@/lib/site";

const icons = {
  users: UsersIcon,
  rupee: RupeeIcon,
  bolt: BoltIcon,
  headset: HeadsetIcon,
};

export function WhyChoose() {
  return (
    <section
      id="why"
      className="container mx-auto scroll-mt-28 px-6 py-12"
      aria-labelledby="why-choose-us-title"
    >
      <div className="mb-12 text-center">
        <h3
          id="why-choose-us-title"
          className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-500 md:text-base"
        >
          WHY INDIANS CHOOSE ANGELX TO
        </h3>
        <h2 className="text-4xl font-black italic text-black md:text-5xl">
          SELL USDT?
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-6">
        {whyChooseCards.map((card) => {
          const Icon = icons[card.icon];
          return (
            <div
              key={card.title}
              className="bg-gradient-box transform rounded-2xl p-5 transition duration-300 hover:-translate-y-1 md:p-6"
            >
              {card.highlighted ? (
                <span className="mb-4 inline-flex rounded-full bg-[#ffc107] p-3 md:p-4">
                  <Icon className="h-8 w-8 text-black md:h-10 md:w-10" />
                </span>
              ) : (
                <Icon className="mb-4 inline-block h-8 w-8 text-[#ffc107] md:h-10 md:w-10" />
              )}
              <h4
                className={`text-base font-bold text-black md:text-lg ${
                  card.title !== "Millions" ? "uppercase" : ""
                }`}
              >
                {card.title}
              </h4>
              <p className="text-xs text-neutral-600 md:text-sm">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
