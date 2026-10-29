type BrandProps = {
  className?: string;
  onClick?: () => void;
};

export function Brand({ className = "", onClick }: BrandProps) {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label="EmmyCode — back to top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-full bg-acid font-display text-xl italic leading-none text-ink transition-transform duration-300 group-hover:-rotate-6"
      >
        E
        <span className="absolute bottom-[7px] right-[7px] h-[3px] w-[3px] rounded-full bg-ink" />
      </span>
      <span translate="no" className="text-[17px] font-semibold tracking-tight text-bone">
        emmycode<span className="text-acid">.</span>
      </span>
    </a>
  );
}
