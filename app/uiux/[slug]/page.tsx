"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "@/components/Navbar";
import { uiuxProjects } from "@/data/uiux";

export default function UIUXDetailPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = use(params);
   const project = uiuxProjects.find(p => p.slug === slug);

   if (!project) {
      notFound();
   }

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
            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-10">
               {/* Back Navigation */}
               <Link
                  href="/uiux"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
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
                  Back to UI/UX Portfolio
               </Link>

               {/* Project Header */}
               <div className="mb-8 sm:mb-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                     <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm border ${project.category === "mockup"
                        ? "bg-blue-500/90 border-blue-400/50 text-white"
                        : "bg-purple-500/90 border-purple-400/50 text-white"
                        }`}>
                        {project.category === "mockup" ? "MOCKUP" : "WEBSITE DESIGN"}
                     </span>
                     <span className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-full text-sm font-medium">
                        {project.year}
                     </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                     {project.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
                     {project.description}
                  </p>

                  {/* Demo Button */}
                  {project.demoUrl && (
                     <div className="mt-6">
                        <a
                           href={project.demoUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 px-6 py-3 bg-highlight text-white rounded-lg font-medium hover:bg-highlight/90 transition-all hover:shadow-lg"
                        >
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                           </svg>
                           View Live Demo
                        </a>
                     </div>
                  )}

                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-6 sm:gap-8 mt-6 sm:mt-8">
                     {project.client && (
                        <div>
                           <p className="text-xs sm:text-sm text-muted-foreground mb-1">Client</p>
                           <p className="text-sm sm:text-base font-semibold text-foreground">{project.client}</p>
                        </div>
                     )}
                     {project.duration && (
                        <div>
                           <p className="text-xs sm:text-sm text-muted-foreground mb-1">Duration</p>
                           <p className="text-sm sm:text-base font-semibold text-foreground">{project.duration}</p>
                        </div>
                     )}
                     <div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1">Category</p>
                        <p className="text-sm sm:text-base font-semibold text-foreground capitalize">
                           {project.category.replace('-', ' ')}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Hero Image */}
               <div className="mb-12 sm:mb-16">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-muted shadow-2xl">
                     <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                     />
                  </div>
               </div>

               {/* Project Overview */}
               <div className="mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                     Project Overview
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                     {project.longDescription}
                  </p>
               </div>

               {/* Challenge & Solution */}
               <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                           <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                           </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Challenge</h3>
                     </div>
                     <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.challenge}
                     </p>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                           <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Solution</h3>
                     </div>
                     <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.solution}
                     </p>
                  </div>
               </div>

               {/* Key Features */}
               <div className="mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                     Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                     {project.features.map((feature, index) => (
                        <div
                           key={index}
                           className="flex items-start gap-3 p-4 bg-card/30 backdrop-blur-sm border border-border rounded-lg hover:border-highlight transition-colors"
                        >
                           <div className="w-6 h-6 rounded-full bg-highlight/10 border border-highlight/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3.5 h-3.5 text-highlight" fill="currentColor" viewBox="0 0 20 20">
                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                           </div>
                           <span className="text-sm sm:text-base text-foreground">{feature}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Gallery */}
               <div className="mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                     Design Gallery
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                     {project.gallery.map((imageUrl, index) => (
                        <div
                           key={index}
                           className="relative rounded-xl overflow-hidden border border-border bg-muted hover:border-highlight transition-colors group"
                        >
                           <Image
                              src={imageUrl}
                              alt={`${project.title} - Image ${index + 1}`}
                              width={1200}
                              height={800}
                              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                           />
                        </div>
                     ))}
                  </div>
               </div>

               {/* Tools & Technologies */}
               <div className="mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                     Tools & Technologies
                  </h2>
                  <div className="flex flex-wrap gap-3">
                     {project.tools.map((tool, index) => (
                        <span
                           key={index}
                           className="px-4 sm:px-6 py-2 sm:py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium text-sm sm:text-base hover:border-highlight transition-colors"
                        >
                           {tool}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Tags */}
               <div className="mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                     Project Tags
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                     {project.tags.map((tag, index) => (
                        <span
                           key={index}
                           className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/60 text-secondary-foreground rounded-md text-xs sm:text-sm font-medium border border-border"
                        >
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Navigation to Other Projects */}
               <div className="border-t border-border pt-12 sm:pt-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                     More Projects
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                     {uiuxProjects
                        .filter(p => p.slug !== project.slug)
                        .slice(0, 3)
                        .map((relatedProject, index) => (
                           <Link
                              key={index}
                              href={`/uiux/${relatedProject.slug}`}
                              className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg"
                           >
                              <div className="relative aspect-video overflow-hidden bg-muted">
                                 <Image
                                    src={relatedProject.image}
                                    alt={relatedProject.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                 />
                              </div>
                              <div className="p-4">
                                 <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-highlight transition-colors line-clamp-1 mb-2">
                                    {relatedProject.title}
                                 </h3>
                                 <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                                    {relatedProject.description}
                                 </p>
                              </div>
                           </Link>
                        ))}
                  </div>

                  <div className="mt-8 text-center">
                     <Link
                        href="/uiux"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
                     >
                        View All Projects
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
