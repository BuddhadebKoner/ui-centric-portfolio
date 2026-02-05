export interface PersonalInfo {
   name: string;
   title: string;
   bio: string;
   avatar?: string;
   location: string;
   email: string;
   phone?: string;
   website?: string;
}

export interface SocialLinks {
   github?: string;
   linkedin?: string;
   twitter?: string;
   youtube?: string;
   instagram?: string;
   facebook?: string;
   [key: string]: string | undefined;
}

export const personalInfo: PersonalInfo = {
   name: "Buddhadeb Koner",
   title: "FullStack Web Developer",
   bio: "Passionate full-stack developer specializing in modern web technologies. I build scalable and performant web applications with exceptional user experiences.",
   avatar: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678714/next-portfolio/avatar.jpg",
   location: "Kolkata, India",
   email: "buddhadebkoner@gmail.com",
   website: "https://buddhadebkoner.in",
};

export const socialLinks: SocialLinks = {
   github: "https://github.com/BuddhadebKoner",
   linkedin: "https://www.linkedin.com/in/buddhadeb-koner",
   twitter: "https://twitter.com/buddhadebkoner",
   youtube: "https://www.youtube.com/@buddhadebkoner",
   instagram: "https://www.instagram.com/buddhadebkoner",
};

export const skills = {
   frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
   backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
   tools: ["Git", "GitHub", "VS Code", "Vercel", "Docker"],
};

export const experience = [
   {
      company: "ZIDIO Development",
      role: "Full Stack Developer Intern",
      duration: "2024",
      description: "Developed e-commerce platform with React, Node.js, and MongoDB",
   },
];

export const education = [
   {
      institution: "Your University Name",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      duration: "2020 - 2024",
   },
];
