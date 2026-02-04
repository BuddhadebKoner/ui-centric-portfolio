import Image from "next/image";
import HeroClient, { HeroButtons } from "./HeroClient";
import SpotifyNowPlaying from "./SpotifyNowPlaying";

export default function Hero() {
   return (
      <section id="hero" className="min-h-[80vh] flex items-center justify-center pt-16 relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div className="space-y-8">
                  {/* Client-side interactive components */}
                  <HeroClient />

                  {/* Spotify Now Playing */}
                  {/* <SpotifyNowPlaying /> */}

                  {/* Heading */}
                  <h1 className="font-[family-name:var(--font-manrope)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-semibold leading-tight lg:leading-[1.1]">
                     <span className="text-foreground">Consistency</span>
                     <br />
                     <span className="text-foreground">and Community</span>
                  </h1>

                  {/* Description */}
                  <p className="font-[family-name:var(--font-montserrat)] text-base sm:text-lg md:text-xl lg:text-[20px] font-medium leading-relaxed text-muted-foreground max-w-xl">
                     Building digital experiences that matter —{" "}
                     <span className="text-highlight font-semibold">
                        Crafting Innovative Web Solutions
                     </span>{" "}
                     with modern technologies, clean code, responsive design, performance optimization.
                  </p>

                  {/* Action Buttons */}
                  <HeroButtons />
               </div>

               {/* Right Image */}
               <div className="relative lg:block hidden">
                  <div className="relative w-full max-w-lg ml-auto">
                     <div className="relative overflow-hidden">
                        <Image
                           src="https://res.cloudinary.com/dsfztnp9x/image/upload/v1759997435/Picsart_25-10-09_13-33-53-323_vk0dqp.png"
                           alt="Profile"
                           width={500}
                           height={600}
                           className="w-full h-auto object-cover"
                           priority
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
