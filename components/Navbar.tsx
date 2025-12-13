"use client";

import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
   const [isDark, setIsDark] = useState(true);
   const clickAudioRef = useRef<HTMLAudioElement>(null);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Get theme from cookie
   const getThemeFromCookie = () => {
      if (typeof document === "undefined") return null;
      const cookies = document.cookie.split("; ");
      const themeCookie = cookies.find((cookie) => cookie.startsWith("theme="));
      return themeCookie ? themeCookie.split("=")[1] : null;
   };

   // Set theme cookie
   const setThemeCookie = (theme: string) => {
      document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1 year
   };

   // Get system theme preference
   const getSystemTheme = () => {
      if (typeof window === "undefined") return "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
   };

   // Initialize theme on component mount
   useEffect(() => {
      const savedTheme = getThemeFromCookie();
      const theme = savedTheme || getSystemTheme();
      const isDarkMode = theme === "dark";

      setIsDark(isDarkMode);
      if (isDarkMode) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }

      // Listen for system theme changes if no cookie is set
      if (!savedTheme) {
         const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
         const handleChange = (e: MediaQueryListEvent) => {
            const newIsDark = e.matches;
            setIsDark(newIsDark);
            if (newIsDark) {
               document.documentElement.classList.add("dark");
            } else {
               document.documentElement.classList.remove("dark");
            }
         };
         mediaQuery.addEventListener("change", handleChange);
         return () => mediaQuery.removeEventListener("change", handleChange);
      }
   }, []);

   const toggleTheme = () => {
      const newIsDark = !isDark;
      setIsDark(newIsDark);

      if (newIsDark) {
         document.documentElement.classList.add("dark");
         setThemeCookie("dark");
      } else {
         document.documentElement.classList.remove("dark");
         setThemeCookie("light");
      }
   };

   return (
      <>
         <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/30 dark:bg-background/20 border-b border-border/40 dark:border-border/20 shadow-lg shadow-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                     <Link href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
                        Buddhadeb <span className="text-highlight">Koner</span>
                     </Link>
                  </div>

                  {/* Right side - Theme toggle & Hamburger */}
                  <div className="flex items-center gap-4">
                     {/* Theme Toggle */}
                     <button
                        onClick={() => {
                           toggleTheme();
                           clickAudioRef.current?.play();
                        }}
                        className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
                        aria-label="Toggle theme"
                     >
                        {isDark ? (
                           <Sun className="w-5 h-5 text-foreground" />
                        ) : (
                           <Moon className="w-5 h-5 text-foreground" />
                        )}
                     </button>

                     {/* Hamburger Menu */}
                     <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
                        aria-label="Toggle menu"
                     >
                        {isMenuOpen ? (
                           <X className="w-6 h-6 text-foreground" />
                        ) : (
                           <Menu className="w-6 h-6 text-foreground" />
                        )}
                     </button>
                  </div>
               </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
               <div className="border-t border-border/40 dark:border-border/20 bg-background/40 dark:bg-background/30 backdrop-blur-xl">
                  <div className="max-w-7xl mx-auto px-4 py-4">
                     <div className="flex flex-col gap-2">
                        <Link
                           href="/"
                           className="px-4 py-2 rounded-lg hover:bg-accent/30 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           Home
                        </Link>
                        <Link
                           href="/blogs"
                           className="px-4 py-2 rounded-lg hover:bg-accent/30 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           Blogs
                        </Link>
                        <Link
                           href="/projects"
                           className="px-4 py-2 rounded-lg hover:bg-accent/30 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           Projects
                        </Link>
                        <Link
                           href="/landing-pages"
                           className="px-4 py-2 rounded-lg hover:bg-accent/30 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           Landing Pages
                        </Link>
                        <Link
                           href="/events"
                           className="px-4 py-2 rounded-lg hover:bg-accent/30 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           Events
                        </Link>
                        <Link
                           href="/experience"
                           className="px-4 py-2 rounded-lg hover:bg-accent/30 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           Experience
                        </Link>
                        <Link
                           href="/#about"
                           className="px-4 py-2 rounded-lg hover:bg-accent/30 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           About
                        </Link>
                     </div>
                  </div>
               </div>
            )}
         </nav>
         <audio ref={clickAudioRef} src="/click.wav" preload="auto" />
      </>
   );
}