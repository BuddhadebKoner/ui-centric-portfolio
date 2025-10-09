"use client";

import { Safari } from "@/components/ui/safari";
import Link from "next/link";

const landingPages = [
   {
      title: "E-commerce Platform",
      url: "zidio-project-three.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1753897864/Screenshot_2025-07-30_at_23-17-49_E-commerce_turllc.png",
      demoUrl: "https://zidio-project-three.vercel.app/",
      description: "A comprehensive e-commerce platform with modern UI and seamless user experience.",
      tags: ["React-v19", "Vite", "TanStack Query", "Tailwind CSS-v4.0"],
   },
   {
      title: "AI Portfolio",
      url: "full-stack-portfolio.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1750497000/Screenshot_2025-06-20_at_10-31-47_Buddhadeb_Koner_FullStack_Web_Developer_d5qnbk.png",
      demoUrl: "https://full-stack-portfolio-nine-theta.vercel.app/",
      description: "An AI-powered full-stack portfolio website with GEMINI AI integration.",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0", "TypeScript"],
   },
   {
      title: "Modern Developer Portfolio",
      url: "buddhadebkoner.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678714/next-portfolio/works/zugytqjxnvodwx8cwrob.png",
      demoUrl: "https://buddhadebkoner.vercel.app/",
      description: "A sleek and modern portfolio design tailored for developers with elegant interface.",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0"],
   },
];

import Navbar from "@/components/Navbar";

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
         <div className="relative pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
               {/* Header */}
               <div className="mb-12">
                  <Link
                     href="/"
                     className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
                  >
                     <svg
                        className="w-5 h-5"
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
                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                     Landing Pages
                  </h1>
                  <p className="text-lg text-muted-foreground">
                     Explore all my{" "}
                     <span className="text-highlight font-medium">
                        featured landing page designs
                     </span>{" "}
                     with stunning visuals and seamless user experience.
                  </p>
               </div>

               {/* Landing Pages Grid */}
               <div className="grid gap-12">
                  {landingPages.map((page, index) => (
                     <div
                        key={index}
                        className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-highlight transition-all"
                     >
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                           {/* Safari Browser Mockup */}
                           <div className="order-2 lg:order-1">
                              <Safari
                                 url={page.url}
                                 className="w-full"
                                 imageSrc={page.imageSrc}
                              />
                           </div>

                           {/* Page Info */}
                           <div className="order-1 lg:order-2 space-y-6">
                              <div>
                                 <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                                    {page.title}
                                 </h2>
                                 <p className="text-muted-foreground text-lg">
                                    {page.description}
                                 </p>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2">
                                 {page.tags.map((tag, tagIndex) => (
                                    <span
                                       key={tagIndex}
                                       className="px-3 py-1.5 bg-accent/20 text-foreground rounded-lg text-sm font-medium"
                                    >
                                       {tag}
                                    </span>
                                 ))}
                              </div>

                              {/* Buttons */}
                              <div className="flex flex-wrap gap-4">
                                 <a
                                    href={page.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity"
                                 >
                                    View Live Demo
                                    <svg
                                       className="w-5 h-5"
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
