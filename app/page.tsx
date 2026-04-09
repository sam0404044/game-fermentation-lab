import { AboutSection } from "@/components/about-section";
import { DefinitionSection } from "@/components/definition-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { YoutubeSection } from "@/components/youtube-section";

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bubble left-[-32px] top-28 h-28 w-28 opacity-80 float-slow" />
        <div className="bubble right-[5%] top-[24%] h-20 w-20 opacity-70 float-delay" />
        <div className="bubble left-[8%] top-[56%] h-16 w-16 opacity-70 float-delay" />
        <div className="bubble bottom-[14%] right-[10%] h-24 w-24 opacity-75 float-slow" />
      </div>

      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <DefinitionSection />
      <ProjectsSection />
      <ProcessSection />
      <YoutubeSection />
      <SiteFooter />
    </main>
  );
}
