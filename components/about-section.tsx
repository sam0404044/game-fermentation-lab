import { SectionShell } from "@/components/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="不是把遊戲做出來，而是把它慢慢發酵出來"
      description="遊戲發酵室把議題、情緒與集體氛圍視為可被培養的材料，讓原本只是在社群裡滑過的內容，逐步長成值得參與的作品。"
    >
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] p-7 md:p-10">
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              我們相信，遊戲不只是被做出來的，也可以是被發酵出來的。一個議題、一則時事、一種情緒，甚至一個尚未說清楚的集體氛圍，都可能在社群裡慢慢升溫、碰撞、擴散，最後長成一個值得被體驗的作品。
            </p>
            <p>
              我們把社群當成溫度，把創意當成菌種，把遊戲當成容器。不是把訊息直接丟給人，而是替它找到一種更容易進入、更容易停留，也更容易被分享的形式。
            </p>
            <p>
              於是，原本只是被看見的內容，可以進一步被參與；原本只是滑過去的訊息，也能變成願意停下來體驗、討論與記住的東西。
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            ["社群是溫度", "從當下正在發酵的語境中，找到作品真正的切口。"],
            ["遊戲是容器", "讓複雜內容先被玩進去，再慢慢留下來。"],
            ["參與比觀看更深", "當使用者能操作、選擇與回應，內容才真正開始發生。"]
          ].map(([title, desc]) => (
            <div key={title} className="glass-panel rounded-[1.6rem] p-6">
              <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
