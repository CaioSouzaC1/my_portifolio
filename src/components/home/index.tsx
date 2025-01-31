"use client";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechsSection } from "@/components/techs-section";
import { ThemeChanger } from "@/components/theme-changer";
import { TimelineSection } from "@/components/timeline";

export default function HomeComponent() {
  return (
    <>
      <ThemeChanger />
      <main className="relative min-h-screen container mx-auto">
        <div className="flex-col flex gap-4 w-full">
          <HeroSection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-4 gap-4">
            <div className="top-0 lg:sticky h-fit">
              <AboutSection />
            </div>
            <ProjectsSection />
          </div>
          <TimelineSection />
          <TechsSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
