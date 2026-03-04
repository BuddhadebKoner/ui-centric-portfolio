"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import Link from "next/link";

interface ShopNavbarProps {
   onMenuToggle: () => void;
   navbarTop?: string;
}

export default function ShopNavbar({ onMenuToggle, navbarTop = "2.75rem" }: ShopNavbarProps) {
   const [isDark, setIsDark] = useState(true);
   const clickAudioRef = useRef<HTMLAudioElement>(null);

   const getThemeFromCookie = () => {
      if (typeof document === "undefined") return null;
      const cookies = document.cookie.split("; ");
      const themeCookie = cookies.find((c) => c.startsWith("theme="));
      return themeCookie ? themeCookie.split("=")[1] : null;
   };

   const setThemeCookie = (theme: string) => {
      document.cookie = `theme=${theme}; path=/; max-age=31536000`;
   };

   const getSystemTheme = () => {
      if (typeof window === "undefined") return "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
   };

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

      if (!savedTheme) {
         const mq = window.matchMedia("(prefers-color-scheme: dark)");
         const onChange = (e: MediaQueryListEvent) => {
            setIsDark(e.matches);
            document.documentElement.classList.toggle("dark", e.matches);
         };
         mq.addEventListener("change", onChange);
         return () => mq.removeEventListener("change", onChange);
      }
   }, []);

   const toggleTheme = () => {
      const newIsDark = !isDark;
      setIsDark(newIsDark);
      document.documentElement.classList.toggle("dark", newIsDark);
      setThemeCookie(newIsDark ? "dark" : "light");
      clickAudioRef.current?.play();
   };

   return (
      <>
         {/* Sits right below the promo banner */}
         <nav
            className="fixed left-0 right-0 z-40 h-16 backdrop-blur-xl bg-background/30 dark:bg-background/20 border-b border-border/40 dark:border-border/20 shadow-lg shadow-black/5 transition-all duration-300"
            style={{ top: navbarTop }}
         >
            <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
               {/* Logo */}
               <Link
                  href="/shop"
                  className="text-xl font-bold text-foreground hover:opacity-80 transition-opacity shrink-0"
               >
                  Buddhadeb <span className="text-highlight">Koner</span>
               </Link>

               {/* Right controls */}
               <div className="flex items-center gap-2">
                  {/* Link back to portfolio */}
                  <Link
                     href="/"
                     className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-border rounded-lg px-3 py-1.5 transition-all duration-150"
                  >
                     ← Portfolio
                  </Link>

                  {/* Theme toggle */}
                  <button
                     onClick={toggleTheme}
                     className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
                     aria-label="Toggle theme"
                  >
                     {isDark ? (
                        <Sun className="w-5 h-5 text-foreground" />
                     ) : (
                        <Moon className="w-5 h-5 text-foreground" />
                     )}
                  </button>

                  {/* Mobile hamburger — only shows below lg */}
                  <button
                     onClick={onMenuToggle}
                     className="p-2 rounded-lg hover:bg-accent/20 transition-colors lg:hidden"
                     aria-label="Toggle sidebar"
                  >
                     <Menu className="w-6 h-6 text-foreground" />
                  </button>
               </div>
            </div>
         </nav>

         <audio ref={clickAudioRef} src="/click.wav" preload="auto" />
      </>
   );
}
