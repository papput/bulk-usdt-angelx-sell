import { siteConfig } from "@/lib/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ffc107]">
        {eyebrow}
      </p>
      <h1 className="mb-6 text-4xl font-black uppercase italic tracking-tight text-black md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-lg font-medium text-neutral-600">
        {description}
      </p>
    </section>
  );
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        logo: `${siteConfig.url}/logo.png`,
      },
      {
        "@type": "WebSite",
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
