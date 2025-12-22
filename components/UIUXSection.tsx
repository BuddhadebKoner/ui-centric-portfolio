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
import { uiuxProjects } from "@/data/uiux";

export default function UIUXSection() {
   const [api, setApi] = useState<CarouselApi>();

   const autoplayPlugin = useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
   );

   useEffect(() => {
      if (!api) return;
   }, [api]);

   // Get first 6 projects for the homepage
   const featuredProjects = uiuxProjects.slice(0, 6);

   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 mb-12">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        UI/UX Design Work
                     </h2>
                     <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2">
                        Crafting beautiful interfaces and{" "}
                        <span className="text-highlight font-medium">
                           seamless user experiences
                        </span>{" "}
                        through thoughtful design.
                     </p>
                  </div>
                  <Link
                     href="/uiux"
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

            {/* UI/UX Projects Carousel */}
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
                     {featuredProjects.map((project, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                           <Link href={`/uiux/${project.slug}`} className="block h-full">
                              <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg h-full relative">
                                 {/* Category Badge - Top Right */}
                                 <div className="absolute top-3 right-3 z-10">
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border ${project.category === "mockup"
                                       ? "bg-blue-500/90 border-blue-400/50 text-white"
                                       : "bg-purple-500/90 border-purple-400/50 text-white"
                                       }`}>
                                       {project.category === "mockup" ? "MOCKUP" : "WEBSITE"}
                                    </span>
                                 </div>

                                 {/* Year Badge - Top Left */}
                                 <div className="absolute top-3 left-3 z-10">
                                    <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-medium">
                                       {project.year}
                                    </span>
                                 </div>

                                 {/* Project Image */}
                                 <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                    <Image
                                       src={project.image}
                                       alt={project.title}
                                       fill
                                       className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                 </div>

                                 {/* Project Details */}
                                 <div className="p-5 space-y-3">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-highlight transition-colors line-clamp-1">
                                       {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                       {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                       {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                          <span
                                             key={tagIndex}
                                             className="px-2.5 py-1 bg-secondary/60 text-secondary-foreground rounded-md text-xs font-medium border border-border"
                                          >
                                             {tag}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </Link>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>
            </div>

            {/* View All Button - Mobile */}
            <div className="mt-8 sm:hidden flex justify-center">
               <Link
                  href="/uiux"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-highlight transition-all"
               >
                  View All Designs
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
      </section>
   );
}
