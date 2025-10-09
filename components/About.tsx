export default function About() {
   return (
      <section id="about" className="py-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="bg-accent/10 rounded-lg p-8 aspect-square flex items-center justify-center">
                  <p className="text-[#fbf1e0] text-xl font-semibold">About Me Visual</p>
               </div>

               <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                     About Me
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     I&aposm a passionate developer with a keen eye for design and a love for creating
                     seamless digital experiences. With years of experience in web development,
                     I bring ideas to life through clean, efficient code.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     My approach combines technical expertise with creative problem-solving,
                     ensuring every project not only looks great but performs exceptionally.
                  </p>

                  <div className="space-y-4 pt-4">
                     <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                           {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((skill) => (
                              <span
                                 key={skill}
                                 className="px-4 py-2 bg-accent/20 text-foreground rounded-lg text-sm font-medium"
                              >
                                 {skill}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
