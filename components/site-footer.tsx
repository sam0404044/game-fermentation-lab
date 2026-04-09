const links = [
  { label: "關於我們", href: "#about" },
  { label: "專案展示", href: "#projects" },
  { label: "開發流程", href: "#process" },
  { label: "YouTube", href: "#youtube" }
];

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-6 md:px-6 md:pb-14">
      <div className="glass-panel mx-auto grid max-w-7xl gap-8 rounded-[2rem] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.26em] text-sky-700/70 uppercase">
            Game Fermentation Lab
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-800">遊戲發酵室</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            把議題、情緒與社群語境發酵成短時間、低門檻、可分享的遊戲體驗，打造一個能被理解、參與與擴散的內容入口。
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase">導覽</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="block transition hover:text-slate-900">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a href="#" className="block transition hover:text-slate-900">
                YouTube Channel
              </a>
              <a href="mailto:hello@example.com" className="block transition hover:text-slate-900">
                hello@example.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase">Info</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              © 2026 Game Fermentation Lab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
