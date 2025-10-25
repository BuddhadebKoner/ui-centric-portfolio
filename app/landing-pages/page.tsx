"use client";

import { Safari } from "@/components/ui/safari";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { landingPages } from "@/data";

export default function LandingPagesPage() {
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
                     Landing Pages
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                     Explore all my{" "}
                     <span className="text-highlight font-medium">
                        featured landing page designs
                     </span>{" "}
                     with stunning visuals and seamless user experience.
                  </p>
               </div>

               {/* Landing Pages Grid */}
               <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                  {landingPages.map((page, index) => (
                     <div
                        key={index}
                        className="bg-card/30 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-highlight transition-all"
                     >
                        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
                           {/* Safari Browser Mockup */}
                           <div className="order-2 lg:order-1">
                              <Safari
                                 url={page.url}
                                 className="w-full"
                                 imageSrc={page.imageSrc}
                              />
                           </div>

                           {/* Page Info */}
                           <div className="order-1 lg:order-2 space-y-3 sm:space-y-4 md:space-y-6">
                              <div>
                                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                                    {page.title}
                                 </h2>
                                 <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
                                    {page.description}
                                 </p>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                 {page.tags.map((tag, tagIndex) => (
                                    <span
                                       key={tagIndex}
                                       className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 bg-accent/20 text-foreground rounded-md sm:rounded-lg text-[10px] sm:text-xs md:text-sm font-medium"
                                    >
                                       {tag}
                                    </span>
                                 ))}
                              </div>

                              {/* Buttons */}
                              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                                 <a
                                    href={page.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-foreground text-background rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
                                 >
                                    View Live Demo
                                    <svg
                                       className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       stroke="currentColor"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                       />
                                    </svg>
                                 </a>
                              </div>
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
