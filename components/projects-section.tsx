import Image from "next/image";

import { projects } from "@/data/projects";
import { SectionShell } from "@/components/section-shell";

const statusClasses = {
  已上線: "bg-emerald-100 text-emerald-700",
  製作中: "bg-amber-100 text-amber-700",
  概念中: "bg-slate-200 text-slate-600"
};

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="12 個正在累積中的作品與實驗"
      description="這裡整理了目前的專案資料結構與展示卡片，方便未來持續新增、替換封面與補充完整專案頁。"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="glass-panel group rounded-[1.8rem] p-4 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(132,175,208,0.18)]"
          >
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-linear-to-br from-sky-100 via-white/70 to-blue-50 p-5">
              <div className="bubble right-4 top-4 h-12 w-12 opacity-70" />
              <div className="bubble bottom-5 left-5 h-7 w-7 opacity-75" />
              <div className="relative z-10">
                <div className="text-xs tracking-[0.26em] text-sky-700/70 uppercase">
                  Project {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-10 rounded-[1.25rem] border border-sky-100/80 bg-white/75 p-4 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="relative mt-3 h-28 overflow-hidden rounded-[1rem]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2 pb-2 pt-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusClasses[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-sky-800/70">{project.subtitle}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{project.shortDescription}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <details className="mt-5 rounded-[1.2rem] border border-sky-100/80 bg-white/60 p-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-sky-800">
                  查看更多專案資料
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <p>{project.longDescription}</p>
                  <p>
                    <strong className="text-slate-700">角色：</strong>
                    {project.role}
                  </p>
                  <p>
                    <strong className="text-slate-700">工具：</strong>
                    {project.tools.join(" / ")}
                  </p>
                  <p>
                    <strong className="text-slate-700">流程：</strong>
                    {project.process.join(" → ")}
                  </p>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
