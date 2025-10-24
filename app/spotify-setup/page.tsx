"use client";

import { useState } from "react";
import Link from "next/link";

export default function SpotifySetup() {
   const [isAuthorized, setIsAuthorized] = useState(false);
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handlePasswordSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simple password check - change this to your own password!
      if (password === "spotify@buddhadeb2025") {
         setIsAuthorized(true);
         setError("");
      } else {
         setError("Incorrect password");
      }
   };

   const handleLogin = () => {
      window.location.href = "/api/spotify/login";
   };

   if (!isAuthorized) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="max-w-md mx-auto px-4">
               <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-8 space-y-6">
                  <div className="text-center space-y-2">
                     <h1 className="text-2xl font-bold text-foreground">
                        🔒 Protected Area
                     </h1>
                     <p className="text-sm text-muted-foreground">
                        This page is for admin use only
                     </p>
                  </div>

                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                     <div>
                        <input
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter password"
                           className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                           autoFocus
                        />
                        {error && (
                           <p className="text-red-500 text-sm mt-2">❌ {error}</p>
                        )}
                     </div>

                     <button
                        type="submit"
                        className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-all"
                     >
                        Unlock
                     </button>
                  </form>

                  <Link
                     href="/"
                     className="block text-center text-muted-foreground hover:text-foreground text-sm"
                  >
                     ← Back to Home
                  </Link>
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen flex items-center justify-center bg-background">{/* Rest of the existing setup UI */}
         <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
            <div className="space-y-4">
               <h1 className="text-4xl font-bold text-foreground">
                  🎵 Spotify Setup
               </h1>
               <p className="text-lg text-muted-foreground">
                  Connect your Spotify account to display Now Playing and Top Tracks on your portfolio
               </p>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-8 space-y-6">
               <div className="space-y-2 text-left">
                  <h3 className="font-semibold text-foreground">Setup Steps:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                     <li>Click &quot;Connect Spotify&quot; below</li>
                     <li>Authorize the app with your Spotify account</li>
                     <li>Copy the refresh token from the callback page</li>
                     <li>Add it to your <code className="bg-background/50 px-2 py-1 rounded">.env.local</code> file</li>
                     <li>Add your Client Secret to <code className="bg-background/50 px-2 py-1 rounded">.env.local</code></li>
                     <li>Restart your dev server</li>
                  </ol>
               </div>

               <button
                  onClick={handleLogin}
                  className="w-full px-6 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-3"
               >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Connect Spotify Account
               </button>

               <div className="text-xs text-muted-foreground space-y-1">
                  <p>⚠️ Make sure you have:</p>
                  <p>• Added Client Secret to <code className="bg-background/50 px-1 rounded">.env.local</code></p>
                  <p>• Redirect URI configured: <code className="bg-background/50 px-1 rounded">http://127.0.0.1:3000/api/spotify/callback</code></p>
               </div>
            </div>

            <Link
               href="/"
               className="inline-block text-green-500 hover:underline"
            >
               ← Back to Home
            </Link>
         </div>
      </div>
   );
}
