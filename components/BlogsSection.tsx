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
import { blogs } from "@/data/blogs";

export default function BlogsSection() {
   const [api, setApi] = useState<CarouselApi>();

   const autoplayPlugin = useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
   );

   useEffect(() => {
      if (!api) return;
   }, [api]);

   return (
      <section className="py-12 sm:py-16 md:py-20">
         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        Latest Blog Posts
                     </h2>
                     <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mt-2">
                        Read my{" "}
                        <span className="text-highlight font-medium">
                           latest insights
                        </span>{" "}
                        on tech, development, and my journey.
                     </p>
                  </div>
                  <Link
                     href="/blogs"
                     className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-highlight transition-all text-sm sm:text-base"
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

            {/* Blogs Carousel */}
            <div className="relative">
               <Carousel
                  setApi={setApi}
                  plugins={[autoplayPlugin.current]}
                  className="w-full"
                  opts={{
                     align: "start",
                     loop: true,
                  }}
               >
                  <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                     {blogs.map((blog) => (
                        <CarouselItem
                           key={blog.id}
                           className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                        >
                           <Link href={`/blogs/${blog.id}`} className="group">
                              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg flex flex-col h-full">
                                 {/* Thumbnail */}
                                 <div className="relative aspect-video overflow-hidden">
                                    <Image
                                       src={blog.thumbnail}
                                       alt={blog.title}
                                       fill
                                       className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                 </div>

                                 {/* Content */}
                                 <div className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3 flex-1 flex flex-col">
                                    {/* Date and Read Time */}
                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground">
                                       <span>{blog.date}</span>
                                       <span>•</span>
                                       <span>{blog.readTime}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground line-clamp-2 group-hover:text-highlight transition-colors">
                                       {blog.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-xs sm:text-sm text-muted-foreground flex-1 line-clamp-2">
                                       {blog.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                       {blog.tags.slice(0, 3).map((tag) => (
                                          <span
                                             key={tag}
                                             className="px-2 py-0.5 sm:py-1 bg-accent/20 text-foreground rounded text-[10px] sm:text-xs"
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

               {/* Mobile View All Button */}
               <div className="sm:hidden mt-6 text-center">
                  <Link
                     href="/blogs"
                     className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-highlight transition-all text-sm"
                  >
                     View All Blogs
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
         </div>
      </section>
   );
}
