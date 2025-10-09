import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import ProjectsSection from "@/components/ProjectsSection";
import YouTubeSection from "@/components/YouTubeSection";
import CardsSection from "@/components/CardsSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import LandingPagesSection from "@/components/LandingPagesSection";

export default function Home() {
  return (
    <>
      {/* Fixed Background Layer with Gradient Only */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Dark mode gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0f0a08]"></div>

        {/* Light mode gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-[#ebe8e0] to-[#e8e5dd] dark:opacity-0 opacity-100 transition-opacity duration-300"></div>

        {/* Subtle gradient orbs for depth */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-[#fbf1e0]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#fbf1e0]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#fbf1e0]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Navbar - Fixed at top */}
      <Navbar />

      {/* Scrollable Content */}
      <div className="no-scrollbar flex h-dvh flex-col overflow-y-scroll selection:bg-gray-200 dark:selection:bg-gray-600">
        <main className="min-h-screen pt-16">
          <Hero />
          <SubHero />
          <LandingPagesSection />
          <ProjectsSection />
          <YouTubeSection />
          <CardsSection />
          <About />
          <Footer />
        </main>
      </div>
    </>
  );
}
