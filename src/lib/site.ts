function telegramLabel(handle: string) {
  return handle.startsWith("@") ? handle : `@${handle}`;
}

function telegramHref(handle: string) {
  return `https://t.me/${handle.replace(/^@/, "")}`;
}

const telegramHandle =
  process.env.NEXT_PUBLIC_TELEGRAM_HANDLE ?? "@OfficialAngelX";
const telegramUrl =
  process.env.NEXT_PUBLIC_TELEGRAM_URL ?? telegramHref(telegramHandle);
const telegramChannelUrl =
  process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL ?? "https://t.me/officiallangelx";
const telegramChannelHandle =
  process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_HANDLE ?? "@officiallangelx";

export const siteConfig = {
  name: "Angelx",
  title: "Angelx - Sell USDT & Get INR",
  tagline: "YOU SELL, YOU EARN!",
  description:
    "India's Most Trusted P2P Platform to Sell USDT and Get Paid in INR Instantly.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bulkusdt.in",
  locale: "en_IN",
  madeFor: "Made for India",
  telegram: {
    handle: telegramHandle,
    href: telegramUrl,
    label: telegramLabel(telegramHandle),
    channel: {
      handle: telegramChannelHandle,
      href: telegramChannelUrl,
      label: telegramLabel(telegramChannelHandle),
    },
  },
};

export const telegramContacts = [
  {
    href: siteConfig.telegram.href,
    label: siteConfig.telegram.label,
    kind: "Direct message",
  },
  {
    href: siteConfig.telegram.channel.href,
    label: siteConfig.telegram.channel.label,
    kind: "Official channel",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#why", label: "Why Angelx" },
  { href: "/#payments", label: "Payments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const whyChooseCards = [
  {
    icon: "users" as const,
    title: "Millions",
    description: "of Active Indian Users",
    highlighted: false,
  },
  {
    icon: "rupee" as const,
    title: "HIGHEST PRICE",
    description: "in the Market",
    highlighted: true,
  },
  {
    icon: "bolt" as const,
    title: "FAST PAYMENTS",
    description: "3-30 Minutes",
    highlighted: false,
  },
  {
    icon: "headset" as const,
    title: "24/7 SUPPORT",
    description: "Always Here for You",
    highlighted: false,
  },
];

export const paymentMethods = [
  { icon: "bank" as const, label: "Company Bank" },
  { icon: "user" as const, label: "Personal Bank" },
  { icon: "upi" as const, label: "Personal UPI ID" },
  { icon: "paytm" as const, label: "Business UPI" },
  { icon: "phonepe" as const, label: "PhonePe Business" },
];

export const securitySpecs = [
  {
    eyebrow: "FAST SETTLEMENT",
    title: "3-30 MINS",
    description: "Most payments completed in 3 to 30 mins",
  },
  {
    eyebrow: "HIGH VOLUME",
    title: "₹100 CRORE+",
    description: "Daily Trading Volume. Huge Liquidity.",
  },
  {
    eyebrow: "PURE G@M!NG FUNDS",
    title: "100% Pure G@m!ng Funds",
    description: "for Safe & Secure Transactions",
  },
  {
    eyebrow: "DISPUTE PROTECTION",
    title: "",
    description:
      "If a complaint is valid, we compensate the affected amount. Your safety is our priority.",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Connect on Telegram",
    description:
      "Message the authorized Angelx customer service team. All trades are processed manually for 100% secure handling without bugs.",
  },
  {
    step: "02",
    title: "Add Bank or UPI",
    description:
      "Share your company bank, personal bank, UPI ID, Paytm Business UPI, or PhonePe Business details to start receiving INR.",
  },
  {
    step: "03",
    title: "Sell USDT",
    description:
      "Lock in the highest market price. Angelx handles high-volume P2P liquidity of ₹100 crore+ daily.",
  },
  {
    step: "04",
    title: "Get INR Fast",
    description:
      "Most payments settle in 3 to 30 minutes, with 24/7 support and dispute protection if something goes wrong.",
  },
];

export const faqs = [
  {
    question: "How fast will I receive INR after selling USDT?",
    answer:
      "Most payments are completed in 3 to 30 minutes after the trade is confirmed with our team.",
  },
  {
    question: "Which payout methods are supported?",
    answer:
      "You can receive funds in a company bank, personal bank, personal UPI ID, Paytm Business UPI, or PhonePe Business.",
  },
  {
    question: "Is this platform made for Indian users?",
    answer:
      "Yes. Angelx is built for India, with INR payouts, local payment rails, and a large active Indian user base.",
  },
  {
    question: "What if there is a dispute?",
    answer:
      "If a complaint is valid, we compensate the affected amount. Your safety is our priority.",
  },
  {
    question: "How do I start a trade?",
    answer:
      `Message ${telegramLabel(telegramHandle)} on Telegram for a personal chat, or join the official channel.`,
  },
  {
    question: "Is support available at night?",
    answer:
      "Yes. Support is available 24/7 so you can sell USDT and get INR whenever you need.",
  },
];
