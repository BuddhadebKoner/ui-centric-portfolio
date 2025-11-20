"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { useState } from "react";

export default function BlogsPage() {
   const [searchQuery, setSearchQuery] = useState("");

   const filteredBlogs = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
   );

   return (
      <div className="min-h-screen">
         {/* Fixed Background Layer with Gradient */}
         <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0f0a08]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-[#ebe8e0] to-[#e8e5dd] dark:opacity-0 opacity-100 transition-opacity duration-300"></div>
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

                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Blog Posts
                     </h1>
                     <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
                        Explore my journey, experiences, and insights in{" "}
                        <span className="text-highlight font-medium">
                           tech and development
                        </span>
                        .
                     </p>
                  </div>
               </div>

               {/* Search Bar */}
               <div className="mb-6 sm:mb-8">
                  <div className="relative max-w-2xl">
                     <input
                        type="text"
                        placeholder="Search blogs by title, content, or tags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 py-2 pl-10 sm:px-4 sm:py-3 sm:pl-12 text-sm sm:text-base bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent transition-all"
                     />
                     <svg
                        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                     </svg>
                  </div>
               </div>

               {/* Blogs Grid */}
               {filteredBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                     {filteredBlogs.map((blog) => (
                        <Link
                           key={blog.id}
                           href={`/blogs/${blog.id}`}
                           className="group"
                        >
                           <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-highlight transition-all duration-300 h-full flex flex-col">
                              {/* Thumbnail */}
                              <div className="relative h-40 sm:h-48 overflow-hidden">
                                 <Image
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                 />
                              </div>

                              {/* Content */}
                              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                                 {/* Date and Read Time */}
                                 <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                                    <span>{blog.date}</span>
                                    <span>•</span>
                                    <span>{blog.readTime}</span>
                                 </div>

                                 {/* Title */}
                                 <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-highlight transition-colors line-clamp-2">
                                    {blog.title}
                                 </h3>

                                 {/* Excerpt */}
                                 <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-1 line-clamp-3">
                                    {blog.excerpt}
                                 </p>

                                 {/* Tags */}
                                 <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {blog.tags.map((tag) => (
                                       <span
                                          key={tag}
                                          className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-background/50 border border-border rounded text-muted-foreground"
                                       >
                                          {tag}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               ) : (
                  <div className="text-center py-12 sm:py-16 md:py-20">
                     <p className="text-muted-foreground text-base sm:text-lg">
                        No blogs found matching your search.
                     </p>
                  </div>
               )}
            </div>
         </div>

         {/* Footer */}
         <Footer />
      </div>
   );
}