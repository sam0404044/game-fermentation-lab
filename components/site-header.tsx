const navItems = [
  { label: "關於我們", href: "#about" },
  { label: "社群型遊戲", href: "#definition" },
  { label: "專案", href: "#projects" },
  { label: "流程", href: "#process" },
  { label: "YouTube", href: "#youtube" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 text-lg shadow-sm">
            oO
          </span>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Game Fermentation Lab
            </div>
            <div className="text-base font-semibold text-[var(--foreground)]">遊戲發酵室</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
