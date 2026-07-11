import { Safari } from "@/components/ui/safari";
import { ExternalLink } from "lucide-react";

const THUMBNAIL =
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1783757133/quiz_platform_hv9wp4.png";

const QUIZ_PLATFORM_LINK = "https://playquizmaster.vercel.app/";

export default function SubHero() {
   return (
      <section className="py-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
               <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                     Quiz Platform
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl">
                     AI-powered EdTech project that{" "}
                     <span className="text-highlight font-medium">
                        combines quizzes, analytics, and automation
                     </span>{" "}
                     for real student and teacher workflows.
                  </p>
               </div>

               <a
                  href={QUIZ_PLATFORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 w-fit"
               >
                  <ExternalLink className="h-4 w-4" />
                  View Live
               </a>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-12">
               <span className="inline-block h-3 w-3 rounded-full bg-green-500 animate-pulse" />
               <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
                  Quiz Platform — EdTech Web App
               </span>
            </div>

            {/* Safari browser frame showcase */}
            <div className="w-full drop-shadow-2xl">
               <Safari
                  url="playquizmaster.vercel.app"
                  imageSrc={THUMBNAIL}
                  className="w-full"
               />
            </div>
         </div>
      </section>
   );
}
