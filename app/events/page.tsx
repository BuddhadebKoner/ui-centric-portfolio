import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const events = [
   {
      title: "Tech Community Meetup: Web Development Workshop",
      description:
         "A hands-on workshop on Next.js, Tailwind CSS and TypeScript for local developers.",
      demoUrl:
         "https://www.linkedin.com/feed/update/urn:li:activity:7268438874941460481/",
      sourceCodeUrl: "",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743102987/next-portfolio/events/noadz1h59wlazgqhwkfx.jpg",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103006/next-portfolio/events/zuqaractc6jfrf3nlp38.jpg",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103007/next-portfolio/events/yweyqmqszjgh4kcu0uae.jpg",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103017/next-portfolio/events/uxiggs4uqvjmgmfqhk7o.jpg",
      ],
      date: "2023-03-15",
      location: "Kolkata, India",
      tags: ["community event", "workshop", "tech meetup"],
   },
];

export const metadata: Metadata = {
   title: "Events - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Events, talks and workshops conducted or attended by Buddhadeb Koner. Find workshop recaps, photos, and links.",
   openGraph: {
      title: "Events - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Events, talks and workshops conducted or attended by Buddhadeb Koner. Find workshop recaps, photos, and links.",
      url: "https://buddhadebkoner.vercel.app/events",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743102987/next-portfolio/events/noadz1h59wlazgqhwkfx.jpg",
            width: 1200,
            height: 630,
            alt: "Tech Community Meetup - Web Development Workshop",
         },
      ],
      locale: "en_IN",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Events - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Events, talks and workshops conducted or attended by Buddhadeb Koner. Find workshop recaps, photos, and links.",
      images:
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743102987/next-portfolio/events/noadz1h59wlazgqhwkfx.jpg",
   },
   alternates: { canonical: "https://buddhadebkoner.vercel.app/events" },
};

export default function EventsPage() {
   return (
      <div className="min-h-screen">
         {/* Fixed Background Layer with Gradient */}
         <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0f0a08]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-[#ebe8e0] to-[#e8e5dd] dark:opacity-0 opacity-100 transition-opacity duration-300"></div>
         </div>

         <Navbar />

         <div className="relative pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
               {/* Header */}
               <div className="mb-12">
                  <Link
                     href="/"
                     className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
                  >
                     <svg
                        className="w-5 h-5"
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">All Events</h1>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                     Talks, workshops and community meetups I&apos;ve organized or attended.
                  </p>
               </div>

               {/* Events Grid */}
               <div className="space-y-12">
                  {events.map((event, idx) => (
                     <article key={idx} className="group relative">
                        <div className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden hover:border-highlight/50 transition-all shadow-xl">
                           {/* Header Section */}
                           <div className="relative p-8 border-b border-border/30">

                              <div className="space-y-4">
                                 <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                                          {event.title}
                                       </h2>
                                       <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                                          <span className="flex items-center gap-1">
                                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                             </svg>
                                             {event.date}
                                          </span>
                                          <span className="flex items-center gap-1">
                                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                             </svg>
                                             {event.location}
                                          </span>
                                       </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-3">
                                       {event.demoUrl && (
                                          <a
                                             href={event.demoUrl}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:shadow transition-all flex items-center gap-2"
                                          >
                                             View Post
                                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                             </svg>
                                          </a>
                                       )}
                                    </div>
                                 </div>

                                 <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {event.description}
                                 </p>

                                 {/* Tags */}
                                 <div className="flex flex-wrap gap-2 pt-2">
                                    {event.tags.map((tag, tagIndex) => (
                                       <span
                                          key={tagIndex}
                                          className="px-3 py-1.5 bg-accent/20 backdrop-blur-sm border border-border/30 text-foreground rounded-full text-xs font-medium"
                                       >
                                          {tag}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>

                           {/* Image Gallery Section with horizontal scroll */}
                           <div className="p-6 bg-background/50">
                              <div className="relative">
                                 <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
                                    {event.images.map((img, imgIdx) => (
                                       <div
                                          key={imgIdx}
                                          className="relative flex-shrink-0 w-80 h-64 snap-center rounded-xl overflow-hidden border border-border/30 hover:border-highlight/50 transition-all group/img"
                                       >
                                          <Image
                                             src={img}
                                             alt={`${event.title} - Image ${imgIdx + 1}`}
                                             fill
                                             className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                                          />
                                       </div>
                                    ))}
                                 </div>

                                 {/* Image count indicator */}
                                 <div className="flex justify-center gap-1.5 mt-4">
                                    {event.images.map((_, imgIdx) => (
                                       <div
                                          key={imgIdx}
                                          className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-highlight/50 transition-colors cursor-pointer"
                                       ></div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
