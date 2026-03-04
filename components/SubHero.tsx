import { Safari } from "@/components/ui/safari";
import { Download } from "lucide-react";

const THUMBNAIL =
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772650541/Gemini_Generated_Image_jfwnktjfwnktjfwn_rqnprn.png";

const APK_DOWNLOAD_LINK =
   "https://github.com/BuddhadebKoner/attendance-native-app/releases/tag/smart-attdence";

export default function SubHero() {
   return (
      <section className="py-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
               <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                     Recent Work
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl">
                     Latest and most Impactful Project that{" "}
                     <span className="text-highlight font-medium">
                        Combine Fresh Insights
                     </span>{" "}
                     with real-world application.
                  </p>
               </div>

               <a
                  href={APK_DOWNLOAD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 w-fit"
               >
                  <Download className="h-4 w-4" />
                  Download APK
               </a>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-12">
               <span className="inline-block h-3 w-3 rounded-full bg-green-500 animate-pulse" />
               <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
                  Smart Attendance — Android App
               </span>
            </div>

            {/* Safari browser frame showcase */}
            <div className="w-full drop-shadow-2xl">
               <Safari
                  url="smartattendance.app"
                  imageSrc={THUMBNAIL}
                  className="w-full"
               />
            </div>
         </div>
      </section>
   );
}
