import Image from "next/image";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  size?: number;
  showName?: boolean;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  size = 40,
  showName = true,
  className = "",
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={size}
        height={size}
        className="rounded-full"
        priority={priority}
      />
      {showName ? (
        <span className="select-none text-2xl font-black tracking-tight text-black md:text-3xl">
          {siteConfig.name}
        </span>
      ) : null}
    </span>
  );
}
