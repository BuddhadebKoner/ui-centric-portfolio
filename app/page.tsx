import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import EventsSection from "@/components/EventsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import YouTubeSection from "@/components/YouTubeSection";
import CardsSection from "@/components/CardsSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import LandingPagesSection from "@/components/LandingPagesSection";
import BlogsSection from "@/components/BlogsSection";
import { LogoLoop } from "@/components/LogoLoop";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiMui,
  SiChakraui,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiAppwrite,
  SiWebpack,
  SiVite,
  SiRollupdotjs,
  SiBabel,
  SiJest,
  SiCypress,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiNetlify,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Home - Buddhadeb Koner | FullStack Web Developer",
  description:
    "Welcome to the personal portfolio of Buddhadeb Koner, a creative FullStack Web Developer specializing in MERN stack and Next.js. Explore projects, skills, and contact information.",
  openGraph: {
    title: "Home - Buddhadeb Koner | FullStack Web Developer",
    description:
      "Welcome to the personal portfolio of Buddhadeb Koner, a creative FullStack Web Developer producing great software.",
    url: "https://buddhadebkoner.vercel.app/",
  },
  twitter: {
    title: "Home - Buddhadeb Koner | FullStack Web Developer",
    description:
      "Welcome to the personal portfolio of Buddhadeb Koner, a creative FullStack Web Developer producing great software.",
  },
};

const techLogos = [
  // Core Languages
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiGnubash />, title: "Bash", href: "https://www.gnu.org/software/bash" },

  // Frontend
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiSass />, title: "Sass", href: "https://sass-lang.com" },
  { node: <SiMui />, title: "Material UI", href: "https://mui.com" },
  { node: <SiChakraui />, title: "Chakra UI", href: "https://chakra-ui.com" },
  { node: <SiAntdesign />, title: "Ant Design", href: "https://ant.design" },

  // Backend & Data
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiAppwrite />, title: "Appwrite", href: "https://appwrite.io" },

  // Build / Test
  { node: <SiWebpack />, title: "Webpack", href: "https://webpack.js.org" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiRollupdotjs />, title: "Rollup", href: "https://rollupjs.org" },
  { node: <SiBabel />, title: "Babel", href: "https://babeljs.io" },
  { node: <SiJest />, title: "Jest", href: "https://jestjs.io" },
  { node: <SiCypress />, title: "Cypress", href: "https://www.cypress.io" },

  // DevOps / Platform
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGithubactions />, title: "GitHub Actions", href: "https://github.com/features/actions" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com" },
  { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com" },
];

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
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>

            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"

            />

          </div>
          <ExperienceSection />
          <SubHero />
          <EventsSection />
          <LandingPagesSection />
          <ProjectsSection />
          <BlogsSection />
          <YouTubeSection />
          <CardsSection />
          <About />
          <Footer />
        </main>
      </div>
    </>
  );
}
