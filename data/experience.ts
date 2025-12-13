export interface Experience {
   company: string;
   role: string;
   description: string;
   website: string;
   logo: string;
   image: string;
   startDate: string;
   endDate: string | "Present";
   technologies: string[];
   highlights: string[];
}

export const experiences: Experience[] = [
   {
      company: "DevsIndia",
      role: "Full Stack Developer",
      description: "Leading the development of a comprehensive platform as founder, architecting scalable solutions with modern technologies. Building complex features including real-time video monitoring, microservices architecture, and sophisticated state management systems.",
      website: "https://www.devsindia.in/",
      logo: "https://res.cloudinary.com/dsohw9o0u/image/upload/v1756145439/logogifs_fo2xxr.gif",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1765629470/devsindiaHome_vjpxz5.png",
      startDate: "2025-06",
      endDate: "Present",
      technologies: [
         "React",
         "Node.js",
         "Socket.io",
         "AWS",
         "Microservices",
         "Redux",
         "TypeScript",
         "MongoDB",
      ],
      highlights: [
         "Complex state management implementation",
         "Socket implementation with video monitoring",
         "Microservice architecture design",
         "AWS infrastructure and deployment",
         "Business logic development",
         "Team coordination and management",
      ],
   },
];
