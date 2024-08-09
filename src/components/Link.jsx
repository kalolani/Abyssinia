function Link() {
  return (
    <a className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 group text-[16px] font-bold leading-none text-primary hover:text-tertiary capitalize transition-all duration-[300ms] bg-btn-bg-main hover:bg-primary rounded-[15px] perspective-1000 overflow-hidden z-[10000] gap-[30px] h-[50px] px-[25px] px-[16px]">
      <span className="btn-span" data-text="apply now">
        apply now
      </span>
    </a>
  );
}

export default Link;
