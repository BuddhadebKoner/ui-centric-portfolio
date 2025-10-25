export interface TechCategory {
   category: string;
   technologies: Technology[];
}

export interface Technology {
   name: string;
   icon?: string;
   proficiency?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
   description?: string;
}

export const techStack: TechCategory[] = [
   {
      category: "Frontend",
      technologies: [
         { name: "React", proficiency: "Expert" },
         { name: "Next.js", proficiency: "Expert" },
         { name: "TypeScript", proficiency: "Advanced" },
         { name: "Tailwind CSS", proficiency: "Expert" },
         { name: "JavaScript", proficiency: "Expert" },
      ],
   },
   {
      category: "Backend",
      technologies: [
         { name: "Node.js", proficiency: "Advanced" },
         { name: "Express", proficiency: "Advanced" },
         { name: "MongoDB", proficiency: "Advanced" },
         { name: "PostgreSQL", proficiency: "Intermediate" },
      ],
   },
   {
      category: "Tools & Others",
      technologies: [
         { name: "Git", proficiency: "Advanced" },
         { name: "GitHub", proficiency: "Advanced" },
         { name: "VS Code", proficiency: "Expert" },
         { name: "Vercel", proficiency: "Advanced" },
         { name: "Docker", proficiency: "Intermediate" },
      ],
   },
];
