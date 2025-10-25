"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { projects } from "@/data";

export default function ProjectsSection() {
   const [api, setApi] = useState<CarouselApi>();

   const autoplayPlugin = useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
   );

   useEffect(() => {
      if (!api) return;
   }, [api]);

   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 mb-12">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        Explore More Projects
                     </h2>
                     <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2">
                        Discover my latest work and{" "}
                        <span className="text-highlight font-medium">
                           innovative solutions
                        </span>{" "}
                        across various technologies.
                     </p>
                  </div>
                  <Link
                     href="/projects"
                     className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-highlight transition-all"
                  >
                     View All
                     <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M9 5l7 7-7 7"
                        />
                     </svg>
                  </Link>
               </div>
            </div>

            {/* Projects Carousel */}
            <div className="relative">
               <Carousel
                  setApi={setApi}
                  plugins={[autoplayPlugin.current]}
                  className="w-full"
                  opts={{
                     align: "start",
                     loop: true,
                  }}
                  onMouseEnter={autoplayPlugin.current.stop}
                  onMouseLeave={autoplayPlugin.current.reset}
               >
                  <CarouselContent className="-ml-4">
                     {projects.map((project, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                           <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg h-full relative">
                              {/* NEW Badge - Top Right */}
                              {project.isNew && (
                                 <div className="absolute top-3 right-3 z-10">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 text-white dark:text-black rounded-full text-xs font-bold shadow-lg shadow-emerald-500/50 dark:shadow-emerald-400/50 animate-pulse">
                                       <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
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
                              <div className="p-6 space-y-4">
                                 <h3 className="text-xl font-semibold text-foreground line-clamp-1">
                                    {project.title}
                                 </h3>
                                 <p className="text-sm text-muted-foreground line-clamp-2">
                                    {project.description}
                                 </p>

                                 {/* Tags */}
                                 <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                       <span
                                          key={tagIndex}
                                          className="px-2 py-1 bg-accent/20 text-foreground rounded text-xs"
                                       >
                                          {tag}
                                       </span>
                                    ))}
                                 </div>

                                 {/* Links */}
                                 <div className="flex gap-3 pt-2">
                                    {project.demoUrl && (
                                       <a
                                          href={project.demoUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex-1 px-4 py-2 bg-foreground text-background text-center rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                       >
                                          Live Demo
                                       </a>
                                    )}
                                    <a
                                       href={project.sourceCodeUrl}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex-1 px-4 py-2 border border-border text-foreground text-center rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                                    >
                                       Source Code
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>

               {/* Navigation Buttons - Bottom Right */}
               <div className="flex justify-end gap-3 mt-6">
                  <button
                     onClick={() => api?.scrollPrev()}
                     disabled={!api?.canScrollPrev()}
                     className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Previous slide"
                  >
                     <svg
                        className="w-5 h-5 text-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                  </button>
                  <button
                     onClick={() => api?.scrollNext()}
                     disabled={!api?.canScrollNext()}
                     className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Next slide"
                  >
                     <svg
                        className="w-5 h-5 text-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
