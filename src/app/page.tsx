import { FaqSection } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/page-hero";
import { PaymentMethods } from "@/components/payment-methods";
import { SecuritySpecs } from "@/components/security-specs";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <WhyChoose />
      <PaymentMethods />
      <SecuritySpecs />
      <HowItWorks />
      <FaqSection />
    </>
  );
}
