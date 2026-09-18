import { BankIcon, UserIcon } from "@/components/icons";
import { paymentMethods } from "@/lib/site";

function PaymentVisual({ icon }: { icon: (typeof paymentMethods)[number]["icon"] }) {
  if (icon === "bank") {
    return <BankIcon className="h-7 w-7 text-black" />;
  }
  if (icon === "user") {
    return <UserIcon className="h-7 w-7 text-black" />;
  }
  if (icon === "upi") {
    return <span className="text-xl font-black italic text-black">UPI</span>;
  }
  if (icon === "paytm") {
    return <span className="text-xs font-black text-black">Paytm</span>;
  }
  return <span className="text-xl font-black text-black">पे</span>;
}

export function PaymentMethods() {
  return (
    <section
      id="payments"
      className="scroll-mt-28 border-y-4 border-[#ffc107] bg-[#ffefbb] py-12 text-black"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-8 text-xl font-black uppercase tracking-wide text-black md:text-2xl">
          Add Your Bank or UPI & Start Receiving Payments
        </h2>
        <div className="grid grid-cols-2 items-center justify-center gap-6 text-sm font-bold text-black sm:flex sm:flex-wrap md:gap-10 md:text-base">
          {paymentMethods.map((method, index) => (
            <div
              key={method.label}
              className={`flex flex-col items-center p-2 ${
                index === paymentMethods.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ffc107]">
                <PaymentVisual icon={method.icon} />
              </span>
              {method.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
