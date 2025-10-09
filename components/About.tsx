export default function About() {
   const basicInfo = [
      { label: "Nationality", value: "Indian" },
      { label: "Type", value: "Freshers With Strong Skills" },
      { label: "Specialization", value: "MERN & Next.js Stack" },
      { label: "State", value: "Remote" },
      { label: "Status", value: "Available for projects" },
      { label: "Browser", value: "Firefox" },
      { label: "Editor", value: "VS Code" },
      { label: "OS", value: "Ubuntu 24.04.2 LTS" },
   ];

   const languages = [
      { label: "Spoken", value: "English" },
      { label: "Native", value: "Bengali" },
      { label: "Documentation", value: "Markdown" },
      { label: "Primary", value: "JavaScript / TypeScript" },
      { label: "Secondary", value: "C++ / Java / Python" },
   ];

   const hobbies = [
      "Coding",
      "Learning New Technologies",
      "Open Source Contribution",
      "Problem Solving",
   ];

   return (
      <section id="about" className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
               {/* Header */}
               <div className="space-y-4">
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                     About Me
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                     I am <span className="text-highlight font-semibold">Buddhadeb Koner</span>, a passionate FullStack Web Developer specializing in the MERN stack and Next.js. I continuously explore new technologies and frameworks to deliver innovative solutions. I am a dedicated problem solver who enjoys contributing to open-source projects and building modern, high-performance web applications.
                  </p>
               </div>

               {/* Basic Information Grid */}
               <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                     Basic Information
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {basicInfo.map((info, index) => (
                        <div
                           key={index}
                           className="bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-highlight/40 transition-all"
                        >
                           <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                           <p className="text-sm font-medium text-foreground">{info.value}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Languages */}
               <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                     Languages
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {languages.map((lang, index) => (
                        <div
                           key={index}
                           className="bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-highlight/40 transition-all"
                        >
                           <p className="text-sm text-muted-foreground mb-1">{lang.label}</p>
                           <p className="text-sm font-medium text-foreground">{lang.value}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Hobbies */}
               <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                     Hobbies & Interests
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                     {hobbies.map((hobby, index) => (
                        <div
                           key={index}
                           className="bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-highlight/40 transition-all text-center"
                        >
                           <p className="text-sm font-medium text-foreground">{hobby}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
