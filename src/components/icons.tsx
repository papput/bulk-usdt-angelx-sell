import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function icon(props: IconProps) {
  const { title, className, ...rest } = props;
  return { title, className, rest };
}

export function TelegramIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M21.94 4.47a1.5 1.5 0 0 0-1.54-.22L3.4 11.13c-1.32.52-1.31 2.41.02 2.9l4.18 1.54 1.62 5.02c.37 1.15 1.86 1.47 2.67.55l2.32-2.63 4.3 3.16c.97.71 2.36.17 2.63-1.03l3.2-14.16a1.5 1.5 0 0 0-.4-1.51Zm-3.2 3.05-8.7 7.84-.42 3.08-1.62-5.03 10.74-5.89Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function RupeeIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 5h12" />
      <path d="M6 9h12" />
      <path d="M9 5c4 0 7 2 7 6s-3 6-7 6" />
      <path d="M9 21 18 9" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 12a9 9 0 0 1 18 0" />
      <path d="M21 12v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3Z" />
      <path d="M3 12v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3Z" />
      <path d="M19 18v1a3 3 0 0 1-3 3h-4" />
    </svg>
  );
}

export function BankIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 10h18" />
      <path d="M5 10v8" />
      <path d="M9 10v8" />
      <path d="M15 10v8" />
      <path d="M19 10v8" />
      <path d="M3 18h18" />
      <path d="M12 3 3 10h18L12 3Z" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm4.3 7.7-5 5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4l1.3 1.29 4.3-4.3a1 1 0 1 1 1.4 1.42Z" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  const { title, className, rest } = icon(props);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
