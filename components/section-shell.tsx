import { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children
}: SectionShellProps) {
  return (
    <section id={id} className="section-anchor px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-12">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-sky-700/70 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-800 md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
