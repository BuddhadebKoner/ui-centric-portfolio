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

const projects = [
   {
      title: "ZIDIO-internship project",
      description: "A full-stack e-commerce platform for selling t-shirts with comprehensive admin controls and customer features.",
      demoUrl: "https://zidio-project-three.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/ZIDIO-PROJECT",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1753897864/Screenshot_2025-07-30_at_23-17-49_E-commerce_turllc.png",
      tags: ["React-v19", "Vite", "TanStack Query", "Tailwind CSS-v4.0"],
   },
   {
      title: "AI powered Portfolio",
      description: "An AI-powered full-stack portfolio website that showcases your skills and projects with GEMINI AI integration.",
      demoUrl: "https://full-stack-portfolio-nine-theta.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/AI-Powered-FullStack-Portfolio",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1750497000/Screenshot_2025-06-20_at_10-31-47_Buddhadeb_Koner_FullStack_Web_Developer_d5qnbk.png",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0", "TypeScript"],
   },
   {
      title: "URL Shortener",
      description: "A modern URL shortener application that allows users to shorten long URLs and manage their links efficiently.",
      demoUrl: "https://abcredirect.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/url-shortener",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1749264353/Screenshot_2025-06-07_at_08-15-32_1_Post_Feed_LinkedIn_cfugl1.png",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0"],
   },
   {
      title: "Modern Portfolio Developers",
      description: "Experience a sleek and modern portfolio design tailored for developers with elegant, responsive interface.",
      demoUrl: "https://buddhadebkoner.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/devaloper-modern-portfolio/",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678714/next-portfolio/works/zugytqjxnvodwx8cwrob.png",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0"],
   },
   {
      title: "MERN Blog",
      description: "Discover an engaging blog platform built with the MERN stack with custom admin panel for content management.",
      demoUrl: "https://blog-app-sandy-sigma.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/Blog-App/",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741078414/mern-blog/blogs/bkdijkurwg0tawqboovl.png",
      tags: ["MERN", "Tailwind CSS", "MongoDB", "Express"],
   },
   {
      title: "Kochugram",
      description: "A dynamic social media platform designed for the Koch community with posts, likes, comments, and follow features.",
      demoUrl: "https://kochugram-com.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/kochugram.com/",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740969977/mern-blog/tdtyjvq7yq475tpwuy1a.png",
      tags: ["REACT", "Tailwind CSS", "TypeScript", "appWrite"],
   },
];

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
                     <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Explore More Projects
                     </h2>
                     <p className="text-lg text-muted-foreground mt-2">
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
                           <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg h-full">
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
