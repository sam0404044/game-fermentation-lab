import { SectionShell } from "@/components/section-shell";

const videos = [
  {
    title: "開發筆記 Vol.01",
    description: "從一個社群題材，長出第一版可玩的互動原型。"
  },
  {
    title: "作品拆解 Vol.02",
    description: "聊聊一個專案如何在短時間內找到互動切口。"
  },
  {
    title: "創作思考 Vol.03",
    description: "為什麼我們相信，議題也可以透過遊戲被更好地理解。"
  }
];

export function YoutubeSection() {
  return (
    <SectionShell
      id="youtube"
      eyebrow="Channel"
      title="在 YouTube 持續記錄發酵過程"
      description="我們也持續在影音平台記錄開發過程、創作思考與專案分享，歡迎到 YouTube 觀看更多內容。"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-lg leading-8 text-slate-600">
            從發想到原型、從議題切口到作品上線，這裡會慢慢累積更多屬於遊戲發酵室的幕後筆記。它不只是宣傳入口，也是一個讓創作被看見的延伸場域。
          </p>
          <a
            href="#"
            className="dark-button mt-8 inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-base font-medium text-slate-50 shadow-[0_14px_30px_rgba(73,132,182,0.25)] transition hover:-translate-y-0.5 hover:bg-sky-800"
          >
            前往頻道
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="glass-panel rounded-[1.6rem] p-4">
              <div className="rounded-[1.25rem] border border-white/60 bg-linear-to-br from-sky-100 via-white/70 to-blue-50 p-4">
                <div className="flex h-36 items-center justify-center rounded-[1rem] border border-sky-100/80 bg-white/70 text-sm tracking-[0.2em] text-sky-700 uppercase">
                  Video Placeholder
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">{video.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{video.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
