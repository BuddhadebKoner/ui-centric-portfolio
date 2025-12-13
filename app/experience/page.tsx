import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Calendar, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
   title: "Experience - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Professional experience of Buddhadeb Koner as a Full Stack Developer. Explore my journey in building scalable applications, leading teams, and solving complex technical challenges.",
   openGraph: {
      title: "Experience - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Professional experience of Buddhadeb Koner as a Full Stack Developer. Explore my journey in building scalable applications, leading teams, and solving complex technical challenges.",
      url: "https://buddhadebkoner.vercel.app/experience",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1765629470/devsindiaHome_vjpxz5.png",
            width: 1200,
            height: 630,
            alt: "Buddhadeb Koner - Professional Experience",
         },
      ],
      locale: "en_IN",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Experience - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Professional experience of Buddhadeb Koner as a Full Stack Developer. Explore my journey in building scalable applications, leading teams, and solving complex technical challenges.",
      images:
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1765629470/devsindiaHome_vjpxz5.png",
   },
   alternates: { canonical: "https://buddhadebkoner.vercel.app/experience" },
};

export default function ExperiencePage() {
   return (
      <div className="min-h-screen">
         {/* Fixed Background Layer with Gradient */}
         <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0f0a08]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-[#ebe8e0] to-[#e8e5dd] dark:opacity-0 opacity-100 transition-opacity duration-300"></div>
         </div>

         <Navbar />

         <div className="relative pt-12 sm:pt-16">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-10">
               {/* Header */}
               <div className="mb-8 sm:mb-10 md:mb-12">
                  <Link
                     href="/"
                     className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-4 sm:mb-6"
                  >
                     <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                     </svg>
                     Back to Home
                  </Link>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                     Professional Experience
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                     Building enterprise SaaS products, architecting scalable systems, and driving measurable business impact through innovative technology solutions.
                  </p>
               </div>

               {/* Experience List */}
               <div className="space-y-6 sm:space-y-8 md:space-y-12">
                  {experiences.map((exp, idx) => (
                     <article key={idx} className="group relative">
                        <div className="relative border border-border/50 rounded-xl sm:rounded-2xl overflow-hidden transition-all">
                           {/* Header Section */}
                           <div className="relative p-4 sm:p-6 md:p-8 border-b border-border/30">
                              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                 {/* Logo */}
                                 <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-br from-highlight/30 to-highlight/10 rounded-xl blur-lg transition-all duration-500"></div>
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-background/90 border-2 border-border/60 transition-all duration-500">
                                       <Image
                                          src={exp.logo}
                                          alt={`${exp.company} logo`}
                                          fill
                                          className="object-contain p-3 sm:p-4"
                                          unoptimized
                                       />
                                    </div>
                                 </div>

                                 {/* Company Info */}
                                 <div className="flex-1 w-full">
                                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                       <div className="flex-1">
                                          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 leading-tight transition-colors">
                                             {exp.company}
                                          </h2>
                                          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium mb-2">
                                             {exp.role}
                                          </p>
                                          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                                             <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                             <span>
                                                {new Date(exp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} - <span className="text-highlight font-semibold">{exp.endDate}</span>
                                             </span>
                                          </div>
                                       </div>

                                       {/* Action Button */}
                                       <a
                                          href={exp.website}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-foreground text-background rounded-md sm:rounded-lg font-medium hover:bg-highlight transition-all text-xs sm:text-sm w-full sm:w-auto"
                                       >
                                          Visit Website
                                          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                       </a>
                                    </div>

                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                                       {exp.description}
                                    </p>
                                 </div>
                              </div>
                           </div>

                           {/* Content Section */}
                           <div className="p-4 sm:p-6 md:p-8">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                 {/* Left - Image */}
                                 <div className="space-y-4 sm:space-y-6">
                                    <div className="relative aspect-video overflow-hidden rounded-lg sm:rounded-xl border border-border/30 transition-all group/img">
                                       <Image
                                          src={exp.image}
                                          alt={`${exp.company} preview`}
                                          fill
                                          className="object-cover transition-transform duration-500"
                                       />
                                    </div>
                                 </div>

                                 {/* Right - Details */}
                                 <div className="space-y-5 sm:space-y-6">
                                    {/* Key Highlights */}
                                    <div>
                                       <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-highlight" />
                                          <h3 className="text-base sm:text-lg font-bold text-foreground">Key Highlights</h3>
                                       </div>
                                       <div className="space-y-2 sm:space-y-3">
                                          {exp.highlights.map((highlight, hIdx) => (
                                             <div
                                                key={hIdx}
                                                className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/30 transition-all"
                                             >
                                                <div className="mt-1 sm:mt-1.5 w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0"></div>
                                                <span className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                                                   {highlight}
                                                </span>
                                             </div>
                                          ))}
                                       </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                       <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
                                          Technologies Used
                                       </h3>
                                       <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                          {exp.technologies.map((tech, tIdx) => (
                                             <span
                                                key={tIdx}
                                                className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 bg-accent/20 backdrop-blur-sm border border-border/30 text-foreground rounded-full text-[10px] sm:text-xs font-medium"
                                             >
                                                {tech}
                                             </span>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
