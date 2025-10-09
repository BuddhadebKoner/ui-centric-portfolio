import { Safari } from "@/components/ui/safari";

export default function SubHero() {
   return (
      <section className="py-20 min-h-[60vh] flex items-center">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="space-y-6 mb-12">
               <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Recent Work
               </h2>
               <p className="text-lg text-muted-foreground">
                  Latest and most Impactful Project that <span className="text-highlight font-medium">Combine Fresh Insights</span> with real-world application.
               </p>
            </div>

            {/* Safari Browser Mockup */}
            <div className="w-full">
               <Safari
                  url="notesdoo.vercel.app"
                  className="w-full"
                  imageSrc="https://res.cloudinary.com/dsfztnp9x/image/upload/v1759997327/recentWork_tye4yp.png"
               />
            </div>
         </div>
      </section>
   );
}
