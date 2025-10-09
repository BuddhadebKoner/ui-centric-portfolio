"use client";

import Image from "next/image";
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

import Navbar from "@/components/Navbar";

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
                     All Projects
                  </h1>
                  <p className="text-lg text-muted-foreground">
                     Discover my complete portfolio of{" "}
                     <span className="text-highlight font-medium">
                        innovative solutions
                     </span>{" "}
                     across various technologies.
                  </p>
               </div>

               {/* Projects Grid */}
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg flex flex-col h-full"
                     >
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
                        <div className="p-6 space-y-4 flex-1 flex flex-col">
                           <h3 className="text-xl font-semibold text-foreground">
                              {project.title}
                           </h3>
                           <p className="text-sm text-muted-foreground flex-1">
                              {project.description}
                           </p>

                           {/* Tags */}
                           <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
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
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
