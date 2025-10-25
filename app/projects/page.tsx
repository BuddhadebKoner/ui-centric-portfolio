"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/data";

export default function ProjectsPage() {
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
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                     All Projects
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                     Discover my complete portfolio of{" "}
                     <span className="text-highlight font-medium">
                        innovative solutions
                     </span>{" "}
                     across various technologies.
                  </p>
               </div>

               {/* Projects Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg flex flex-col h-full relative"
                     >
                        {/* NEW Badge - Top Right */}
                        {project.isNew && (
                           <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 text-white dark:text-black rounded-full text-[10px] sm:text-xs font-bold shadow-lg shadow-emerald-500/50 dark:shadow-emerald-400/50 animate-pulse">
                                 <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                 </svg>
                                 NEW
                              </span>
                           </div>
                        )}

                        {/* Project Image */}
                        <div className="relative aspect-video overflow-hidden">
                           <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                           />
                        </div>

                        {/* Project Content */}
                        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                           <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground line-clamp-2">
                              {project.title}
                           </h3>
                           <p className="text-xs sm:text-sm text-muted-foreground flex-1 line-clamp-3">
                              {project.description}
                           </p>

                           {/* Tags */}
                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                 <span
                                    key={tagIndex}
                                    className="px-2 py-0.5 sm:py-1 bg-accent/20 text-foreground rounded text-[10px] sm:text-xs"
                                 >
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           {/* Links */}
                           <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                              {project.demoUrl && (
                                 <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-3 py-2 sm:px-4 bg-foreground text-background text-center rounded-md sm:rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
                                 >
                                    Live Demo
                                 </a>
                              )}
                              <a
                                 href={project.sourceCodeUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex-1 px-3 py-2 sm:px-4 border border-border text-foreground text-center rounded-md sm:rounded-lg text-xs sm:text-sm font-medium hover:bg-accent transition-colors"
                              >
                                 Source Code
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
