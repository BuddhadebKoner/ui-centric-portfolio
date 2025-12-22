"use client";

import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12">
               <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-6 sm:w-8 h-[2px] bg-highlight"></div>
                  <span className="text-xs sm:text-sm font-semibold text-highlight tracking-wider uppercase">Experience</span>
               </div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                  Delivering Real Impact
               </h2>
               <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
                  Building enterprise-grade SaaS solutions that transform how businesses operate and scale
               </p>
            </div>

            {/* Experience Card */}
            {experiences.map((exp, idx) => (
               <div key={idx} className="group relative">
                  {/* Main Container */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 transition-all duration-700">
                     {/* Top Section - Company Header */}
                     <div className="relative border-b border-border/50">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                           <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto">
                              {/* Animated Logo Circle */}
                              <div className="relative flex-shrink-0">
                                 <div className="absolute inset-0 bg-gradient-to-br from-highlight/30 to-highlight/10 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl transition-all duration-500"></div>
                                 <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl overflow-hidden bg-background/90 border-2 border-border/60 transition-all duration-500">
                                    <Image
                                       src={exp.logo || "https://res.cloudinary.com/dsohw9o0u/image/upload/v1756145439/logogifs_fo2xxr.gif"}
                                       alt={`${exp.company} logo`}
                                       fill
                                       className="object-contain p-2 sm:p-3"
                                       unoptimized
                                    />
                                 </div>
                              </div>

                              {/* Company Info */}
                              <div className="flex-1 min-w-0">
                                 <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 transition-colors duration-300 truncate">
                                    {exp.company}
                                 </h3>
                                 <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium truncate">
                                    {exp.role}
                                 </p>
                                 <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    <span className="truncate">
                                       {new Date(exp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} - <span className="text-highlight font-semibold">{exp.endDate}</span>
                                    </span>
                                 </div>
                              </div>
                           </div>

                           {/* CTA Button */}
                           <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-foreground text-background rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-highlight transition-all duration-300 w-full sm:w-auto"
                           >
                              <span>Visit Site</span>
                              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                           </a>
                        </div>
                     </div>

                  </div>
               </div>
            ))}

            {/* View More Link */}
            <div className="mt-8 sm:mt-12 text-center">
               <Link
                  href="/experience"
                  className="group/link inline-flex items-center gap-2 text-foreground hover:text-highlight transition-colors duration-300"
               >
                  <span className="text-base sm:text-lg font-semibold">View Complete Experience</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
               </Link>
            </div>
         </div>
      </section>
   );
}
