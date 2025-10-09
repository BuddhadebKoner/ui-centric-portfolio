"use client";

import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
   const [isDark, setIsDark] = useState(true);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleTheme = () => {
      setIsDark(!isDark);
      document.documentElement.classList.toggle("dark");
   };

   return (
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
   );
}
