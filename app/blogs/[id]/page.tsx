"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Share2, Check } from "lucide-react";

export default function BlogDetailPage() {
   const params = useParams();
   const blogId = params.id as string;

   const blog = blogs.find((b) => b.id === blogId);

   if (!blog) {
      notFound();
   }

   const [copied, setCopied] = useState(false);

   // Share or copy link function
   const handleShare = async () => {
      const shareUrl = window.location.href;
      const shareData = {
         title: blog.title,
         text: blog.excerpt,
         url: shareUrl
      };

      // Check if Web Share API is supported
      if (navigator.share) {
         try {
            await navigator.share(shareData);
         } catch (err) {
            // If user cancels, fallback to copy
            if (err instanceof Error && err.name !== 'AbortError') {
               copyToClipboard(shareUrl);
            }
         }
      } else {
         // Fallback to copy to clipboard
         copyToClipboard(shareUrl);
      }
   };

   const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text).then(() => {
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      });
   };

   // Update document title and meta tags for SEO
   useEffect(() => {
      document.title = `${blog.title} | Buddhadeb Koner`;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
         metaDescription = document.createElement('meta');
         metaDescription.setAttribute('name', 'description');
         document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', blog.excerpt);

      // Update Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
         ogTitle = document.createElement('meta');
         ogTitle.setAttribute('property', 'og:title');
         document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', blog.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
         ogDescription = document.createElement('meta');
         ogDescription.setAttribute('property', 'og:description');
         document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', blog.excerpt);

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
         ogImage = document.createElement('meta');
         ogImage.setAttribute('property', 'og:image');
         document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', blog.thumbnail);

      // Update Twitter Card tags
      let twitterCard = document.querySelector('meta[name="twitter:card"]');
      if (!twitterCard) {
         twitterCard = document.createElement('meta');
         twitterCard.setAttribute('name', 'twitter:card');
         document.head.appendChild(twitterCard);
      }
      twitterCard.setAttribute('content', 'summary_large_image');

      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitle) {
         twitterTitle = document.createElement('meta');
         twitterTitle.setAttribute('name', 'twitter:title');
         document.head.appendChild(twitterTitle);
      }
      twitterTitle.setAttribute('content', blog.title);

      let twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDescription) {
         twitterDescription = document.createElement('meta');
         twitterDescription.setAttribute('name', 'twitter:description');
         document.head.appendChild(twitterDescription);
      }
      twitterDescription.setAttribute('content', blog.excerpt);

      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!twitterImage) {
         twitterImage = document.createElement('meta');
         twitterImage.setAttribute('name', 'twitter:image');
         document.head.appendChild(twitterImage);
      }
      twitterImage.setAttribute('content', blog.thumbnail);
   }, [blog]);

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
            <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-10">
               {/* Back Button */}
               <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-6"
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
                  Back to Blogs
               </Link>

               {/* Blog Header */}
               <div className="mb-8">
                  {/* Title with Share Button */}
                  <div className="flex items-start justify-between gap-3 mb-4 sm:mb-6">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground flex-1">
                        {blog.title}
                     </h1>
                     <button
                        onClick={handleShare}
                        className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-card/80 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-highlight transition-all duration-300 group mt-1"
                        title={copied ? "Link copied!" : "Share this blog"}
                     >
                        {copied ? (
                           <>
                              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span className="hidden sm:inline">Copied!</span>
                           </>
                        ) : (
                           <>
                              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                              <span className="hidden sm:inline">Share</span>
                           </>
                        )}
                     </button>
                  </div>

                  {/* Author Profile Badge */}
                  <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                     <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-border">
                           <Image
                              src={blog.author.avatar}
                              alt={blog.author.name}
                              fill
                              className="object-cover"
                           />
                        </div>
                        <div>
                           <p className="text-sm sm:text-base font-semibold text-foreground">{blog.author.name}</p>
                           <p className="text-xs sm:text-sm text-muted-foreground">{blog.date}</p>
                        </div>
                     </div>
                     <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {blog.readTime}
                     </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                     {blog.tags.map((tag) => (
                        <span
                           key={tag}
                           className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-card/80 backdrop-blur-sm border border-border rounded-full text-muted-foreground"
                        >
                           {tag}
                        </span>
                     ))}
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-border">
                     <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                     />
                  </div>
               </div>

               {/* Blog Content */}
               <article className="prose prose-neutral dark:prose-invert max-w-none">
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                     {blog.content.map((block, index) => {
                        switch (block.type) {
                           case 'heading':
                              return (
                                 <h2
                                    key={index}
                                    className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-6 sm:mt-8 mb-3 sm:mb-4 first:mt-0"
                                 >
                                    {block.content}
                                 </h2>
                              );

                           case 'text':
                              return (
                                 <p
                                    key={index}
                                    className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                       __html: block.content
                                          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                                          .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-background/50 border border-border rounded text-sm font-mono text-foreground">$1</code>')
                                    }}
                                 />
                              );

                           case 'list':
                              return (
                                 <div key={index} className="space-y-2 sm:space-y-3">
                                    {block.content && (
                                       <p className="text-sm sm:text-base font-medium text-foreground">
                                          {block.content}
                                       </p>
                                    )}
                                    <ul className="space-y-1.5 sm:space-y-2 ml-4 sm:ml-6">
                                       {block.items?.map((item, itemIndex) => (
                                          <li
                                             key={itemIndex}
                                             className="text-sm sm:text-base text-muted-foreground list-disc"
                                             dangerouslySetInnerHTML={{
                                                __html: item
                                                   .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                                                   .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-background/50 border border-border rounded text-sm font-mono text-foreground">$1</code>')
                                             }}
                                          />
                                       ))}
                                    </ul>
                                 </div>
                              );

                           case 'image':
                              return (
                                 <div
                                    key={index}
                                    className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden border border-border my-4 sm:my-6"
                                 >
                                    <Image
                                       src={block.content}
                                       alt="Blog content image"
                                       fill
                                       className="object-cover"
                                    />
                                 </div>
                              );

                           case 'code':
                              return (
                                 <div key={index} className="my-3 sm:my-4">
                                    <div className="bg-background/50 border border-border rounded-lg overflow-hidden">
                                       <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-background/80 border-b border-border text-[10px] sm:text-xs text-muted-foreground font-medium">
                                          {block.language || 'code'}
                                       </div>
                                       <pre className="p-3 sm:p-4 overflow-x-auto">
                                          <code className="text-xs sm:text-sm font-mono text-foreground">
                                             {block.content}
                                          </code>
                                       </pre>
                                    </div>
                                 </div>
                              );

                           case 'link':
                              return (
                                 <a
                                    key={index}
                                    href={block.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm sm:text-base text-highlight hover:underline"
                                 >
                                    {block.content}
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                 </a>
                              );

                           case 'highlight':
                              return (
                                 <div key={index} className="my-3 sm:my-4 p-3 sm:p-4 bg-highlight/10 border-l-4 border-highlight rounded-r-lg">
                                    <p className="text-sm sm:text-base text-foreground">{block.content}</p>
                                 </div>
                              );

                           default:
                              return null;
                        }
                     })}
                  </div>
               </article>

               {/* Recommended Blogs */}
               <div className="mt-12 sm:mt-16 md:mt-20">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                     Recommended Blogs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                     {blogs
                        .filter((b) => b.id !== blog.id)
                        .slice(0, 3)
                        .map((recommendedBlog) => (
                           <Link
                              key={recommendedBlog.id}
                              href={`/blogs/${recommendedBlog.id}`}
                              className="group"
                           >
                              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-highlight transition-all duration-300 h-full flex flex-col">
                                 {/* Thumbnail */}
                                 <div className="relative h-40 sm:h-48 overflow-hidden">
                                    <Image
                                       src={recommendedBlog.thumbnail}
                                       alt={recommendedBlog.title}
                                       fill
                                       className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                 </div>

                                 {/* Content */}
                                 <div className="p-4 sm:p-5 flex-1 flex flex-col">
                                    {/* Date and Read Time */}
                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground mb-2">
                                       <span>{recommendedBlog.date}</span>
                                       <span>•</span>
                                       <span>{recommendedBlog.readTime}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-highlight transition-colors line-clamp-2">
                                       {recommendedBlog.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 flex-1 line-clamp-2">
                                       {recommendedBlog.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                       {recommendedBlog.tags.slice(0, 3).map((tag) => (
                                          <span
                                             key={tag}
                                             className="px-2 py-0.5 text-[10px] sm:text-xs bg-background/50 border border-border rounded text-muted-foreground"
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
               </div>
            </div>
         </div>

         {/* Footer */}
         <Footer />
      </div>
   );
}
