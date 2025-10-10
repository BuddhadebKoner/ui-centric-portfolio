"use client";

import { motion } from "framer-motion";

export default function CardsSection() {
   const cards = [
      {
         title: "Frontend Mastery",
         description: "Crafting pixel-perfect interfaces with React, Next.js, and Tailwind CSS. Turning designs into responsive, interactive experiences.",
         link: "View Projects →",
         badgeColor: "bg-blue-500/20 text-blue-400 border-blue-400/30",
      },
      {
         title: "Backend Development",
         description: "Building robust APIs and server-side logic with Node.js, Express.js, and RESTful architecture for scalable applications.",
         link: "Explore APIs →",
         badgeColor: "bg-purple-500/20 text-purple-400 border-purple-400/30",
      },
      {
         title: "Database Expert",
         description: "Managing data efficiently with MongoDB and SQL databases. Designing schemas and optimizing queries for performance.",
         link: "Data Solutions →",
         badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
      },
      {
         title: "Cloud & DevOps",
         description: "Deploying and scaling applications on AWS. Experience with CI/CD pipelines, Docker, and cloud infrastructure.",
         link: "Cloud Projects →",
         badgeColor: "bg-gray-500/20 text-gray-400 border-gray-400/30",
      },
      {
         title: "Full-Stack Wizard",
         description: "Seamlessly connecting frontend and backend. Building complete MERN stack applications from scratch to deployment.",
         link: "See Work →",
         badgeColor: "bg-orange-500/20 text-orange-400 border-orange-400/30",
      },
      {
         title: "Problem Solver",
         description: "Strong foundation in Data Structures & Algorithms with C++, Java, and Python. Love tackling complex challenges.",
         link: "Code Samples →",
         badgeColor: "bg-blue-400/20 text-blue-300 border-blue-300/30",
      },
      {
         title: "UI/UX Designer",
         description: "Creating beautiful, intuitive user experiences with Figma. Transforming ideas into high-fidelity prototypes.",
         link: "Design Portfolio →",
         badgeColor: "bg-purple-400/20 text-purple-300 border-purple-300/30",
      },
      {
         title: "Mobile Developer",
         description: "Building cross-platform mobile applications with React Native. One codebase, multiple platforms.",
         link: "Mobile Apps →",
         badgeColor: "bg-pink-500/20 text-pink-400 border-pink-400/30",
      },
      {
         title: "Tech Writer",
         description: "Documenting technical knowledge through blog posts and articles. Sharing insights on web development and best practices.",
         link: "Read Blogs →",
         badgeColor: "bg-green-500/20 text-green-400 border-green-400/30",
      },
   ];

   return (
      <section className="py-20 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12">
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Tech Stack & Skills
               </h2>
               <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
                  A comprehensive toolkit for building modern web applications. From{" "}
                  <span className="text-highlight font-semibold">frontend interfaces to backend systems</span>
                  , I leverage cutting-edge technologies to deliver exceptional digital experiences.
               </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {cards.map((card, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: index * 0.05 }}
                     viewport={{ once: true }}
                     className="group relative"
                  >
                     <div className="relative bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-highlight/40 transition-all duration-300 h-full flex flex-col">
                        {/* Badge */}
                        <div className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-medium mb-4 border ${card.badgeColor}`}>
                           {card.title}
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                           {card.description}
                        </p>

                        {/* Link */}
                        <a
                           href="#"
                           className="text-sm text-muted-foreground/70 hover:text-highlight transition-colors inline-flex items-center gap-1 group/link"
                        >
                           {card.link}
                           <svg
                              className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                        </a>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
