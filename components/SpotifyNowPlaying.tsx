"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Music, ChevronDown, ChevronUp } from "lucide-react";

interface NowPlaying {
   isPlaying: boolean;
   title: string;
   artist: string;
   albumArt: string;
   url: string;
}

export default function SpotifyNowPlaying() {
   const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
   const [isExpanded, setIsExpanded] = useState(true);
   const [isTransitioning, setIsTransitioning] = useState(false);

   // Memoized fetch function to prevent recreation on every render
   const fetchSpotifyData = useCallback(async () => {
      try {
         const response = await fetch("/api/spotify/now-playing", {
            // Use cache to reduce server load
            next: { revalidate: 10 }
         });
         if (response.ok) {
            const data = await response.json();
            const newTrack = data.nowPlaying;

            // Only update if the song changed (trigger transition)
            setNowPlaying((prev) => {
               if (!prev || prev.title !== newTrack?.title) {
                  setIsTransitioning(true);
                  setTimeout(() => setIsTransitioning(false), 500);
                  return newTrack;
               }
               return prev;
            });
         }
      } catch (error) {
         console.error("Failed to fetch Spotify data:", error);
      }
   }, []);

   // Fetch Spotify data with memoization
   useEffect(() => {
      fetchSpotifyData();
      const interval = setInterval(fetchSpotifyData, 10000); // Update every 10 seconds

      return () => clearInterval(interval);
   }, [fetchSpotifyData]);

   // Memoize the playing status to prevent unnecessary re-renders
   const shouldRender = useMemo(() => Boolean(nowPlaying?.isPlaying), [nowPlaying?.isPlaying]);

   // Don't render if not playing or if nowPlaying is null
   if (!shouldRender || !nowPlaying) {
      return null;
   }

   return (
      <div className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-300">
         {/* Backdrop blur */}
         <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border"></div>

         {/* Content */}
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2">
               {/* Now Playing Content with smooth transition */}
               <a
                  href={nowPlaying.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 flex-1 group transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                     } ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
               >
                  {/* Album Art with transition */}
                  <div className="relative flex-shrink-0">
                     <Image
                        src={nowPlaying.albumArt}
                        alt="Now Playing"
                        width={40}
                        height={40}
                        className={`rounded shadow-lg transition-all duration-500 ${isTransitioning ? 'scale-90 opacity-50' : 'scale-100 opacity-100'
                           }`}
                     />
                     <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 shadow-lg">
                        <Music className="h-2.5 w-2.5 text-white" />
                     </div>
                  </div>

                  {/* Song Info with smooth fade transition */}
                  <div className={`flex-1 min-w-0 transition-all duration-500 ${isTransitioning ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
                     }`}>
                     <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-[10px] font-medium text-green-500">NOW PLAYING</p>
                        <div className="flex items-center gap-0.5">
                           <span className="w-0.5 h-2 bg-green-500 rounded-full animate-pulse"></span>
                           <span className="w-0.5 h-3 bg-green-500 rounded-full animate-pulse delay-75"></span>
                           <span className="w-0.5 h-2.5 bg-green-500 rounded-full animate-pulse delay-150"></span>
                        </div>
                     </div>
                     <p className="text-sm font-semibold text-foreground truncate group-hover:text-green-500 transition-colors">
                        {nowPlaying.title}
                     </p>
                     <p className="text-xs text-muted-foreground truncate">
                        {nowPlaying.artist}
                     </p>
                  </div>

                  {/* External Link Icon */}
                  <svg
                     className="w-4 h-4 text-muted-foreground group-hover:text-green-500 transition-colors flex-shrink-0 hidden sm:block"
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

               {/* Toggle Button */}
               <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="ml-3 p-2 hover:bg-accent rounded-lg transition-colors flex-shrink-0"
                  aria-label={isExpanded ? "Collapse" : "Expand"}
               >
                  {isExpanded ? (
                     <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                     <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
               </button>
            </div>

            {/* Collapsed State - Just show icon */}
            {!isExpanded && (
               <div className="absolute inset-0 flex items-center justify-center">
                  <button
                     onClick={() => setIsExpanded(true)}
                     className="flex items-center gap-2 px-3 py-1.5 hover:bg-accent rounded-lg transition-colors"
                  >
                     <Music className="h-4 w-4 text-green-500" />
                     <span className="text-xs text-muted-foreground hidden sm:inline">Listening to Spotify</span>
                     <div className="flex items-center gap-0.5">
                        <span className="w-0.5 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="w-0.5 h-3 bg-green-500 rounded-full animate-pulse delay-75"></span>
                        <span className="w-0.5 h-2.5 bg-green-500 rounded-full animate-pulse delay-150"></span>
                     </div>
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}
