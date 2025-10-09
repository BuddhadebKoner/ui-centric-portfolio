export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer id="contact" className="border-t border-border/20 bg-background/5 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
               {/* Brand Section */}
               <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                     Buddhadeb <span className="text-highlight">Koner</span>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                     Home for Developers
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                     © {currentYear} Buddhadeb Koner. All rights reserved.
                  </p>
               </div>

               {/* Products Section */}
               <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                     Products
                  </h3>
                  <div className="flex flex-col space-y-3">
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Courses
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Cohorts
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Udemy
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        MasterJi
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        FreeAPI
                     </button>
                  </div>
               </div>

               {/* Resources Section */}
               <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                     Resources
                  </h3>
                  <div className="flex flex-col space-y-3">
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Docs
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Privacy Policy
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Terms of Service
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Pricing Policy
                     </button>
                     <button
                        disabled
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-not-allowed opacity-60"
                     >
                        Refund Policy
                     </button>
                  </div>
               </div>

               {/* Social Section */}
               <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                     Social
                  </h3>
                  <div className="flex flex-col space-y-3">
                     <button
                        disabled
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-60"
                     >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        x.com
                     </button>
                     <button
                        disabled
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-60"
                     >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                     </button>
                     <button
                        disabled
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-60"
                     >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                     </button>
                     <button
                        disabled
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-60"
                     >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Instagram
                     </button>
                     <button
                        disabled
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-60"
                     >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M5.045 7.59c.03.07.024.143-.007.206l-2.85 5.88c-.027.054-.06.102-.104.142a.457.457 0 0 1-.326.138.465.465 0 0 1-.319-.133.402.402 0 0 1-.137-.318v-.003c0-.036.005-.073.015-.106L4.084 7.57c.02-.047.044-.09.072-.127a.396.396 0 0 1 .27-.14h.001a.434.434 0 0 1 .32.126c.069.068.102.15.098.239zm1.61 1.58c-.186 0-.341-.062-.465-.185a.635.635 0 0 1-.186-.462c0-.184.062-.338.186-.462a.633.633 0 0 1 .465-.186c.185 0 .34.062.463.186a.633.633 0 0 1 .186.462c0 .184-.062.338-.186.462a.631.631 0 0 1-.463.185zm7.45 8.05c-.24.138-.48.204-.722.204a1.17 1.17 0 0 1-.594-.163 1.18 1.18 0 0 1-.436-.446 1.186 1.186 0 0 1-.163-.611c0-.263.06-.48.184-.65.123-.17.29-.284.502-.342l2.422-.66c.25-.067.435-.174.557-.32.122-.148.183-.326.183-.535 0-.264-.085-.48-.254-.649-.17-.17-.402-.254-.698-.254-.185 0-.354.046-.508.138a1.237 1.237 0 0 0-.384.371.97.97 0 0 0-.146.518c0 .069-.023.128-.069.175a.228.228 0 0 1-.168.071h-.85a.232.232 0 0 1-.17-.073.225.225 0 0 1-.07-.17c0-.34.093-.644.28-.91.186-.268.438-.48.754-.635a2.43 2.43 0 0 1 1.06-.232c.324 0 .614.056.869.169.254.113.457.268.61.465.152.196.228.42.228.67 0 .373-.106.682-.318.927-.212.245-.502.414-.869.508l-2.338.634c-.167.045-.297.115-.39.21a.47.47 0 0 0-.139.345c0 .147.056.268.169.363.112.095.263.142.453.142.185 0 .345-.04.48-.119.135-.08.241-.186.318-.319a.862.862 0 0 0 .115-.432c0-.069.023-.128.07-.177a.231.231 0 0 1 .168-.073h.85a.23.23 0 0 1 .17.073.228.228 0 0 1 .07.177c0 .355-.094.67-.28.945a2.053 2.053 0 0 1-.754.67zm3.857-4.17c-.263 0-.48-.087-.65-.26a.863.863 0 0 1-.254-.632c0-.258.085-.473.254-.644.17-.17.387-.254.65-.254.264 0 .48.085.65.254.17.17.254.386.254.644 0 .258-.084.473-.254.632a.877.877 0 0 1-.65.26z" />
                        </svg>
                        Discord
                     </button>
                     <button
                        disabled
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-60"
                     >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Youtube Hindi
                     </button>
                     <button
                        disabled
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-not-allowed opacity-60"
                     >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Youtube English
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
