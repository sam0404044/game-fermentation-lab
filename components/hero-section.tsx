import Image from "next/image";

function BubbleCluster() {
  return (
    <div className="relative h-[560px] w-full sm:h-[620px] lg:h-[520px]">
      <div className="bubble bubble-grid left-[8%] top-[8%] h-24 w-24 float-slow md:h-32 md:w-32" />
      <div className="bubble right-[6%] top-[16%] h-14 w-14 float-delay md:h-20 md:w-20" />
      <div className="bubble bottom-[14%] left-[14%] h-20 w-20 float-delay md:h-24 md:w-24" />
      <div className="bubble bottom-[6%] right-[18%] h-16 w-16 float-slow md:h-20 md:w-20" />

      <div className="glass-panel absolute inset-x-0 top-4 mx-auto w-[96%] rounded-[2rem] p-4 shadow-[0_20px_80px_rgba(139,180,214,0.18)] sm:top-6 sm:w-[94%] sm:p-5 lg:top-14 lg:w-[82%] lg:p-8">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
          <div className="rounded-[1.5rem] border border-white/60 bg-white/45 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs text-sky-800">
                Issue to Play
              </span>
              <span className="text-xs text-slate-500">Lab signal: active</span>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-24 rounded-full bg-sky-100" />
              <div className="h-3 w-full rounded-full bg-sky-100/80" />
              <div className="h-3 w-4/5 rounded-full bg-sky-100/60" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["圖表", "對話", "原型"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-sky-100 bg-white/70 px-3 py-4 text-center text-sm text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-linear-to-b from-white/65 to-sky-50/70 p-2 lg:min-h-[220px]">
            <div className="absolute right-5 top-5 z-10 rounded-full border border-sky-100 bg-white/82 px-3 py-1 text-xs text-slate-500">
              hero visual
            </div>
            <div className="relative h-[260px] overflow-hidden rounded-[1.2rem] lg:h-full lg:min-h-[220px]">
              <Image
                src="/images/hero/game-fermentation-lab-hero.png"
                alt="Game Fermentation Lab hero visual"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/24 via-transparent to-white/12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="px-4 pb-20 pt-10 md:px-6 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="fade-up">
          <span className="mb-5 inline-flex rounded-full border border-sky-200/80 bg-white/70 px-4 py-2 text-sm text-sky-800 shadow-sm">
            議題型遊戲品牌 / 創意實驗室 / 社群內容入口
          </span>
          <p className="text-sm font-semibold tracking-[0.3em] text-sky-700/75 uppercase">
            Game Fermentation Lab
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold leading-tight tracking-tight text-slate-800 md:text-7xl">
            把議題發酵成遊戲
          </h1>
          <p className="mt-5 text-2xl font-medium text-sky-900/75 md:text-3xl">
            讓內容被玩過、記住、分享
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            遊戲發酵室專注於把議題、情緒與時代感，發酵成適合社群傳播的遊戲體驗。我們相信，遊戲不只是娛樂，也能成為一種理解世界的方式。透過短時間、低門檻、可分享的互動設計，讓內容不只被看見，更被參與、記住與擴散。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="dark-button inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-base font-medium text-slate-50 shadow-[0_14px_30px_rgba(73,132,182,0.25)] transition hover:-translate-y-0.5 hover:bg-sky-800"
            >
              查看專案
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/75 px-6 py-3 text-base font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white"
            >
              認識我們
            </a>
            <a
              href="#youtube"
              className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-base font-medium text-sky-800 transition hover:text-sky-950"
            >
              前往 YouTube
            </a>
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <BubbleCluster />
        </div>
      </div>
    </section>
  );
}
