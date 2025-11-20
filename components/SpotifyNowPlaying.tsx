"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Music } from "lucide-react";

interface NowPlaying {
   isPlaying: boolean;
   title: string;
   artist: string;
   albumArt: string;
   url: string;
}

export default function SpotifyNowPlaying() {
   const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
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

   // Fetch Spotify data with memoization and adaptive polling
   useEffect(() => {
      fetchSpotifyData();

      // Adaptive interval: 60s when playing, stop when not playing
      const interval = setInterval(() => {
         if (nowPlaying?.isPlaying) {
            fetchSpotifyData();
         }
      }, 60000); // Update every 60 seconds (1 minute)

      return () => clearInterval(interval);
   }, [fetchSpotifyData, nowPlaying?.isPlaying]);

   // Memoize the playing status to prevent unnecessary re-renders
   const shouldRender = useMemo(() => Boolean(nowPlaying?.isPlaying), [nowPlaying?.isPlaying]);

   return (
      <div className="w-full transition-all duration-300">
         <div className="relative rounded-lg border border-border bg-background/50 backdrop-blur-sm p-3 sm:p-4">
            <div className="flex items-center justify-between">
               {/* Now Playing Content with smooth transition */}
               {shouldRender && nowPlaying ? (
                  <>
                     <div className={`flex items-center gap-2 sm:gap-3 flex-1 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        {/* Album Art with transition */}
                        <div className="relative flex-shrink-0">
                           <Image
                              src={nowPlaying.albumArt}
                              alt="Now Playing"
                              width={36}
                              height={36}
                              className={`sm:w-10 sm:h-10 rounded shadow-lg transition-all duration-500 ${isTransitioning ? 'scale-90 opacity-50' : 'scale-100 opacity-100'
                                 }`}
                           />
                           <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-green-500 rounded-full p-0.5 sm:p-1 shadow-lg">
                              <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                 <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                              </svg>
                           </div>
                        </div>

                        {/* Song Info with smooth fade transition */}
                        <div className={`flex-1 min-w-0 transition-all duration-500 ${isTransitioning ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
                           }`}>
                           <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                              <p className="text-[9px] sm:text-[10px] font-medium text-green-500 uppercase tracking-wide">Now Listening</p>
                              <div className="flex items-center gap-0.5">
                                 <span className="w-0.5 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                                 <span className="w-0.5 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse delay-75"></span>
                                 <span className="w-0.5 h-2 sm:h-2.5 bg-green-500 rounded-full animate-pulse delay-150"></span>
                              </div>
                           </div>
                           <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
                              {nowPlaying.title}
                           </p>
                           <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                              {nowPlaying.artist}
                           </p>
                        </div>
                     </div>

                     {/* External Link Icon */}
                     <a
                        href={nowPlaying.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2 hover:bg-muted/50 rounded-lg transition-colors group"
                        aria-label="Open in Spotify"
                     >
                        <svg
                           className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-green-500 transition-colors"
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
                  </>
               ) : (
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                     <div className="relative flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-muted/50 flex items-center justify-center">
                           <svg className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                           </svg>
                        </div>
                     </div>
                     <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                           <p className="text-[9px] sm:text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Spotify Status</p>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-muted-foreground">Offline</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Not currently playing</p>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
