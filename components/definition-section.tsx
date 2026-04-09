import { SectionShell } from "@/components/section-shell";

const definitionCards = [
  {
    title: "短時間就能進入",
    description: "不需要教學負擔，也不需要長時間投入，幾分鐘內就能完成一次完整體驗。",
    accent: "3 mins"
  },
  {
    title: "低成本快速上線",
    description: "適合針對議題、時事與情緒節點快速回應，保留內容的時效性與溫度。",
    accent: "Fast launch"
  },
  {
    title: "為社群傳播而生",
    description: "可分享、可截圖、可討論，讓內容在互動後更容易被帶著走。",
    accent: "Shareable"
  },
  {
    title: "能承接議題與情緒",
    description: "不只是娛樂，也能容納立場、共感、困惑與討論，讓內容更有層次。",
    accent: "Issue-ready"
  },
  {
    title: "透過互動加速理解",
    description: "從閱讀轉成操作，玩家會更快理解資訊之間的關係與選擇後果。",
    accent: "Interactive"
  },
  {
    title: "內容本身就是體驗",
    description: "它不是資訊外面的包裝，而是讓資訊真正被感受到的形式。",
    accent: "Playable content"
  }
];

export function DefinitionSection() {
  return (
    <SectionShell
      id="definition"
      eyebrow="Format"
      title="什麼是社群型遊戲？"
      description="它是一種短、輕、快，但不淺的內容形式。介於遊戲、媒體、互動敘事與社群分享之間，讓理解不只停留在閱讀。"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {definitionCards.map((card) => (
          <article key={card.title} className="glass-panel rounded-[1.7rem] p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(132,175,208,0.18)]">
            <div className="mb-5 inline-flex rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-xs tracking-[0.2em] text-sky-700 uppercase">
              {card.accent}
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{card.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{card.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
