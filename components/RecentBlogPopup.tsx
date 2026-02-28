"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogs } from "@/data/blogs";

const POPUP_DELAY = 5000; // Show after 5 seconds

export default function RecentBlogPopup() {
   const [isVisible, setIsVisible] = useState(false);

   // Get the most recent blog (last in array)
   const recentBlog = blogs[blogs.length - 6];

   useEffect(() => {
      // Show popup after delay
      const showTimer = setTimeout(() => {
         setIsVisible(true);
      }, POPUP_DELAY);

      return () => clearTimeout(showTimer);
   }, []);

   if (!isVisible || !recentBlog) return null;

   return (
      <div
         className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[340px] sm:max-w-[380px] w-[calc(100vw-2rem)] transition-all duration-400 translate-y-0 opacity-100 scale-100 animate-in slide-in-from-bottom-5 fade-in"
         role="dialog"
         aria-label="Recent blog notification"
      >
         {/* Glow effect behind the card */}
         <div className="absolute -inset-1 bg-gradient-to-r from-highlight/20 via-highlight/10 to-highlight/20 rounded-2xl blur-lg opacity-60" />

         {/* Main Card */}
         <div className="relative bg-card/90 dark:bg-card/80 backdrop-blur-xl border border-border/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40">
            {/* Header with badge */}
            <div className="flex items-center px-4 pt-3.5 pb-0">
               <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                     New Blog Post
                  </span>
               </div>
            </div>

            {/* Content */}
            <Link
               href={`/blogs/${recentBlog.id}`}
               className="group block px-4 pt-3 pb-4"
            >
               <div className="flex gap-3">
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden border border-border/50 flex-shrink-0">
                     <Image
                        src={recentBlog.thumbnail}
                        alt={recentBlog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     {/* Overlay icon */}
                     <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <BookOpen className="w-5 h-5 text-white" />
                     </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                     <h4 className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-highlight transition-colors duration-200">
                        {recentBlog.title}
                     </h4>
                     <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[11px] text-muted-foreground">
                           {recentBlog.date}
                        </span>
                        <span className="text-[11px] text-muted-foreground/50">
                           •
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                           {recentBlog.readTime}
                        </span>
                     </div>
                  </div>
               </div>

               {/* CTA */}
               <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">
                     Have you read this yet?
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-highlight group-hover:gap-2 transition-all duration-300">
                     Read now
                     <ArrowRight className="w-3 h-3" />
                  </span>
               </div>
            </Link>
         </div>
      </div>
   );
}
