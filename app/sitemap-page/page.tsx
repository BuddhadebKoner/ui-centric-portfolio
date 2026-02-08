import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
   title: "Sitemap - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Complete sitemap of buddhadebkoner.in. Navigate through all pages including projects, blogs, UI/UX designs, experience, and events.",
   openGraph: {
      title: "Sitemap - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Complete sitemap of buddhadebkoner.in. Navigate through all pages including projects, blogs, UI/UX designs, experience, and events.",
      url: "https://buddhadebkoner.in/sitemap-page",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
            width: 1200,
            height: 630,
            alt: "Buddhadeb Koner - Sitemap",
         },
      ],
      locale: "en_IN",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Sitemap - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Complete sitemap of buddhadebkoner.in. Navigate through all pages.",
      creator: "@buddhadeb_koner",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
      ],
   },
   alternates: {
      canonical: "https://buddhadebkoner.in/sitemap-page",
   },
};

const sitemapSections = [
   {
      title: "Main Pages",
      links: [
         { name: "Home", url: "/", priority: "High", external: false },
         { name: "Projects", url: "/projects", priority: "High", external: false },
         { name: "Landing Pages", url: "/landing-pages", priority: "High", external: false },
         { name: "Blogs", url: "/blogs", priority: "High", external: false },
         { name: "UI/UX Design", url: "/uiux", priority: "High", external: false },
         { name: "Experience", url: "/experience", priority: "Medium", external: false },
         { name: "Events", url: "/events", priority: "Medium", external: false },
      ],
   },
   {
      title: "Technical Resources",
      links: [
         { name: "XML Sitemap", url: "/sitemap.xml", priority: "High", external: true },
         { name: "Robots.txt", url: "/robots.txt", priority: "High", external: true },
         { name: "Manifest", url: "/manifest.json", priority: "Medium", external: true },
         { name: "Developer Info", url: "/Developer.json", priority: "Medium", external: true },
         { name: "Working Online Info", url: "/Working Online.json", priority: "Medium", external: true },
      ],
   },
   {
      title: "Featured Blog Posts",
      description: "Latest articles on web development, programming, and career guidance",
      links: [
         { name: "View All Blogs", url: "/blogs", priority: "High", external: false },
      ],
   },
   {
      title: "Featured Projects",
      description: "Full-stack web applications and modern development projects",
      links: [
         { name: "View All Projects", url: "/projects", priority: "High", external: false },
      ],
   },
   {
      title: "UI/UX Portfolio",
      description: "Modern mockups, website designs, and creative solutions",
      links: [
         { name: "View All Designs", url: "/uiux", priority: "High", external: false },
      ],
   },
];

export default function SitemapPage() {
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

         <Navbar />

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

                  <div className="mb-6">
                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                        Sitemap
                     </h1>
                     <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
                        Complete navigation map of buddhadebkoner.in. Explore all pages and
                        resources available on this website.
                     </p>
                  </div>

                  {/* SEO Info Box */}
                  <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-6 mb-8">
                     <h2 className="text-lg sm:text-xl font-semibold mb-3">
                        🔍 SEO Information
                     </h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div>
                           <span className="text-muted-foreground">Total Pages:</span>
                           <span className="ml-2 font-medium">Dynamic (Auto-generated)</span>
                        </div>
                        <div>
                           <span className="text-muted-foreground">Last Updated:</span>
                           <span className="ml-2 font-medium">Real-time</span>
                        </div>
                        <div>
                           <span className="text-muted-foreground">Indexed:</span>
                           <span className="ml-2 font-medium text-green-500">
                              ✓ Google Search Console
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Sitemap Sections */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {sitemapSections.map((section, idx) => (
                     <div
                        key={idx}
                        className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-6 hover:border-[#fbf1e0]/50 transition-all duration-300"
                     >
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                           {section.title}
                        </h2>
                        {section.description && (
                           <p className="text-sm text-muted-foreground mb-4">
                              {section.description}
                           </p>
                        )}
                        <ul className="space-y-3">
                           {section.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                 {link.external ? (
                                    <a
                                       href={link.url}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="group flex items-center justify-between p-3 rounded-md hover:bg-background/70 transition-colors"
                                    >
                                       <span className="flex items-center gap-2">
                                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                                          <span className="font-medium group-hover:text-[#fbf1e0] transition-colors">
                                             {link.name}
                                          </span>
                                       </span>
                                       <span
                                          className={`text-xs px-2 py-1 rounded ${link.priority === "High"
                                             ? "bg-green-500/20 text-green-400"
                                             : "bg-blue-500/20 text-blue-400"
                                             }`}
                                       >
                                          {link.priority}
                                       </span>
                                    </a>
                                 ) : (
                                    <Link
                                       href={link.url}
                                       className="group flex items-center justify-between p-3 rounded-md hover:bg-background/70 transition-colors"
                                    >
                                       <span className="font-medium group-hover:text-[#fbf1e0] transition-colors">
                                          {link.name}
                                       </span>
                                       <span
                                          className={`text-xs px-2 py-1 rounded ${link.priority === "High"
                                             ? "bg-green-500/20 text-green-400"
                                             : "bg-blue-500/20 text-blue-400"
                                             }`}
                                       >
                                          {link.priority}
                                       </span>
                                    </Link>
                                 )}
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>

               {/* Additional Info */}
               <div className="mt-8 bg-background/50 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                     📊 About This Sitemap
                  </h2>
                  <div className="prose prose-invert max-w-none">
                     <p className="text-muted-foreground mb-3">
                        This website is registered with Google Search Console and follows
                        best SEO practices:
                     </p>
                     <ul className="text-muted-foreground space-y-2">
                        <li>
                           ✓ Automatic XML sitemap generation with Next.js metadata API
                        </li>
                        <li>✓ Structured data using JSON-LD for better search visibility</li>
                        <li>✓ Optimized meta tags for social media sharing (Open Graph)</li>
                        <li>✓ Mobile-responsive design for all devices</li>
                        <li>✓ Fast page load times with Next.js optimization</li>
                        <li>✓ Secure HTTPS connection with modern security headers</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
}
