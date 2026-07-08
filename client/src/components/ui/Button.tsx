import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Button = ({
  children,
  href = "#",
  className = "",
}: ButtonProps) => {
  return (
    <a
      href={href}
      className={twMerge(
        "group inline-flex items-center justify-center gap-2 bg-zinc-900 text-white font-medium px-8 py-3.5 sm:py-4 rounded-sm shadow-lg shadow-zinc-900/20 w-full sm:w-auto hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/30 transition-all duration-300 border border-zinc-800",
        className
      )}
    >
      <span className="w-2 h-2 rounded-full bg-white/80 group-hover:animate-ping" />
      {children}
    </a>
  );
};

export default Button;