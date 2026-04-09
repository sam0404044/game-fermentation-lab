import { SectionShell } from "@/components/section-shell";

const steps = [
  {
    number: "01",
    title: "題材觀察",
    description: "從社群、時事、文化現象與情緒氛圍中，觀察哪些內容正在被關注、誤解、討論或反覆轉貼。"
  },
  {
    number: "02",
    title: "熱點分析",
    description: "釐清題材真正有感的切口，找到能被大眾理解、能被社群擴散，也適合互動化的核心問題。"
  },
  {
    number: "03",
    title: "互動轉譯",
    description: "把資訊改寫成答題、選擇、排序、拖放、探索或分支敘事，讓內容從閱讀變成體驗。"
  },
  {
    number: "04",
    title: "原型開發",
    description: "快速做出可玩的網頁原型，驗證節奏、理解門檻與分享動機，保留作品的輕量與即時性。"
  },
  {
    number: "05",
    title: "上線發酵",
    description: "發布後持續觀察互動效果、傳播方式與使用者回饋，讓作品在社群中繼續長出下一輪討論。"
  }
];

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Process"
      title="我們如何把題材變成可玩的作品"
      description="遊戲發酵室的工作方式不是重型製作流程，而是透過觀察、轉譯與快速驗證，讓內容在對的時間長成對的形式。"
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {steps.map((step) => (
          <article key={step.number} className="glass-panel rounded-[1.7rem] p-6">
            <div className="mb-4 text-sm font-semibold tracking-[0.24em] text-sky-700/70 uppercase">
              Step {step.number}
            </div>
            <h3 className="text-xl font-semibold text-slate-800">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
