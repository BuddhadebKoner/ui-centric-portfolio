"use client";

import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Calendar, ArrowUpRight, Briefcase } from "lucide-react";

const cardAccents = [
   "from-highlight/40 to-highlight/10",
   "from-blue-500/40 to-blue-500/10",
   "from-emerald-500/40 to-emerald-500/10",
];

const badgeColors = [
   "bg-highlight/15 text-highlight border-highlight/30",
   "bg-blue-500/15 text-blue-400 border-blue-500/30",
   "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
];

const dotColors = [
   "bg-highlight",
   "bg-blue-500",
   "bg-emerald-500",
];

export default function ExperienceSection() {
   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

            {/* Section Header */}
            <div className="mb-10 sm:mb-14">
               <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-6 sm:w-8 h-[2px] bg-highlight"></div>
                  <span className="text-xs sm:text-sm font-semibold text-highlight tracking-wider uppercase">Experience</span>
               </div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                  Delivering Real Impact
               </h2>
               <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
                  Co-founding products, shipping features, and building platforms that serve thousands of real users
               </p>
            </div>

            {/* Experience Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
               {experiences.map((exp, idx) => (
                  <div
                     key={idx}
                     className="group relative flex flex-col rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-border hover:shadow-xl hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
                  >
                     {/* Gradient top accent bar */}
                     <div className={`h-[3px] w-full bg-gradient-to-r ${cardAccents[idx % cardAccents.length]}`} />

                     {/* Card Header */}
                     <div className="p-5 sm:p-6 pb-4 border-b border-border/40">
                        <div className="flex items-start justify-between gap-3 mb-4">
                           {/* Logo */}
                           <div className="relative flex-shrink-0">
                              <div className={`absolute inset-0 bg-gradient-to-br ${cardAccents[idx % cardAccents.length]} rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-background border border-border/60 shadow-sm">
                                 <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    fill
                                    className="object-contain p-2"
                                    unoptimized
                                 />
                              </div>
                           </div>

                           {/* Status badge */}
                           <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${badgeColors[idx % badgeColors.length]}`}>
                              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[idx % dotColors.length]}`} />
                              {exp.endDate === "Present" ? "Active" : "Completed"}
                           </span>
                        </div>

                        {/* Company & Role */}
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 leading-tight group-hover:text-highlight transition-colors duration-300">
                           {exp.company}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-3">
                           <Briefcase className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                           <p className="text-sm text-muted-foreground font-medium">{exp.role}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                           <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                           <span>
                              {new Date(exp.startDate + "-02").toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                              {" – "}
                              <span className={`font-semibold ${exp.endDate === "Present" ? "text-highlight" : "text-foreground"}`}>
                                 {exp.endDate === "Present" ? "Present" : new Date(exp.endDate + "-02").toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                              </span>
                           </span>
                        </div>
                     </div>

                     {/* Description */}
                     <div className="px-5 sm:px-6 pt-4 pb-3 flex-1">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                           {exp.description}
                        </p>
                     </div>

                     {/* Tech Tags */}
                     <div className="px-5 sm:px-6 pb-4">
                        <div className="flex flex-wrap gap-1.5">
                           {exp.technologies.slice(0, 5).map((tech, tIdx) => (
                              <span
                                 key={tIdx}
                                 className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-md border border-border/40 text-muted-foreground bg-accent/10"
                              >
                                 {tech}
                              </span>
                           ))}
                           {exp.technologies.length > 5 && (
                              <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-md border border-border/40 text-muted-foreground bg-accent/10">
                                 +{exp.technologies.length - 5}
                              </span>
                           )}
                        </div>
                     </div>

                     {/* Card Footer */}
                     <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-border/40 flex items-center justify-between gap-3">
                        <Link
                           href="/experience"
                           className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                        >
                           View details →
                        </Link>
                        <a
                           href={exp.website}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-foreground text-background rounded-lg text-xs font-semibold hover:bg-highlight transition-all duration-300"
                        >
                           Visit Site
                           <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                     </div>
                  </div>
               ))}
            </div>

            {/* View More Link */}
            <div className="mt-10 sm:mt-14 text-center">
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
