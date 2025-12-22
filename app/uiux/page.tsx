"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { uiuxProjects } from "@/data/uiux";

export default function UIUXPage() {
   const [activeFilter, setActiveFilter] = useState<"all" | "mockup" | "website-design">("all");

   const filteredProjects = activeFilter === "all"
      ? uiuxProjects
      : uiuxProjects.filter(project => project.category === activeFilter);

   const mockupCount = uiuxProjects.filter(p => p.category === "mockup").length;
   const websiteCount = uiuxProjects.filter(p => p.category === "website-design").length;

   return (
      <div className="min-h-screen">
         {/* Fixed Background Layer with Gradient */}
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

         {/* Navbar */}
         <Navbar />

         {/* Content */}
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

                  <div className="space-y-3 sm:space-y-4">
                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        UI/UX Design Portfolio
                     </h1>
                     <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
                        Crafting beautiful and functional user experiences through{" "}
                        <span className="text-highlight font-medium">
                           thoughtful design
                        </span>{" "}
                        and user-centric solutions. Explore my mockups and website designs.
                     </p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                     <div className="flex items-center gap-2">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center">
                           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                           </svg>
                        </div>
                        <div>
                           <p className="text-xl sm:text-2xl font-bold text-foreground">{mockupCount}</p>
                           <p className="text-xs sm:text-sm text-muted-foreground">Mockups</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center">
                           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                        </div>
                        <div>
                           <p className="text-xl sm:text-2xl font-bold text-foreground">{websiteCount}</p>
                           <p className="text-xs sm:text-sm text-muted-foreground">Website Designs</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Filter Tabs */}
               <div className="mb-8 sm:mb-10">
                  <div className="inline-flex items-center gap-2 p-1 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                     <button
                        onClick={() => setActiveFilter("all")}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium transition-all ${activeFilter === "all"
                           ? "bg-primary text-primary-foreground"
                           : "text-muted-foreground hover:text-foreground"
                           }`}
                     >
                        All Work
                     </button>
                     <button
                        onClick={() => setActiveFilter("mockup")}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium transition-all ${activeFilter === "mockup"
                           ? "bg-primary text-primary-foreground"
                           : "text-muted-foreground hover:text-foreground"
                           }`}
                     >
                        Mockups
                     </button>
                     <button
                        onClick={() => setActiveFilter("website-design")}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium transition-all ${activeFilter === "website-design"
                           ? "bg-primary text-primary-foreground"
                           : "text-muted-foreground hover:text-foreground"
                           }`}
                     >
                        Website Designs
                     </button>
                  </div>
               </div>

               {/* Projects Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {filteredProjects.map((project, index) => (
                     <Link
                        key={index}
                        href={`/uiux/${project.slug}`}
                        className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg hover:shadow-highlight/10 animate-in fade-in slide-in-from-bottom-4 block"
                        style={{ animationDelay: `${index * 50}ms` }}
                     >
                        {/* Project Image */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                           <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                           {/* Category Badge */}
                           <div className="absolute top-3 right-3 z-10">
                              <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border ${project.category === "mockup"
                                 ? "bg-blue-500/90 border-blue-400/50 text-white"
                                 : "bg-purple-500/90 border-purple-400/50 text-white"
                                 }`}>
                                 {project.category === "mockup" ? "MOCKUP" : "WEBSITE"}
                              </span>
                           </div>
                           {/* Year Badge */}
                           <div className="absolute top-3 left-3 z-10">
                              <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-medium">
                                 {project.year}
                              </span>
                           </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-4 sm:p-5 space-y-3">
                           <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-highlight transition-colors line-clamp-1">
                              {project.title}
                           </h3>
                           <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                              {project.description}
                           </p>

                           {/* Tags */}
                           <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                              {project.tags.map((tag, tagIndex) => (
                                 <span
                                    key={tagIndex}
                                    className="px-2 sm:px-2.5 py-1 bg-secondary/60 text-secondary-foreground rounded-md text-[10px] sm:text-xs font-medium border border-border"
                                 >
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>

               {/* Empty State */}
               {filteredProjects.length === 0 && (
                  <div className="text-center py-20">
                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-bold text-foreground mb-2">No projects found</h3>
                     <p className="text-muted-foreground">Try selecting a different filter</p>
                  </div>
               )}

               {/* CTA Section */}
               <div className="mt-16 sm:mt-20 p-6 sm:p-8 md:p-10 bg-card/50 backdrop-blur-sm border border-border rounded-2xl text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                     Interested in working together?
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                     Let&apos;s create something amazing together. I&apos;m always open to discussing new projects and design opportunities.
                  </p>
                  <Link
                     href="/#contact"
                     className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
                  >
                     Get in Touch
                     <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
