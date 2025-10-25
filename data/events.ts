export interface EventImage {
   src: string;
   alt: string;
}

export interface Event {
   title: string;
   description: string;
   demoUrl: string;
   sourceCodeUrl?: string;
   images: string[] | EventImage[];
   date: string;
   location: string;
   tags: string[];
}

export const events: Event[] = [
   {
      title: "Tech Community Meetup: Web Development Workshop",
      description:
         "Organized and led an interactive workshop on modern web development techniques for local tech enthusiasts. This community event focused on Next.js, Tailwind CSS, and TypeScript fundamentals through hands-on coding sessions, networking opportunities, and collaborative problem-solving exercises.",
      demoUrl:
         "https://www.linkedin.com/feed/update/urn:li:activity:7268438874941460481/",
      sourceCodeUrl: "",
      images: [
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743102987/next-portfolio/events/noadz1h59wlazgqhwkfx.jpg",
            alt: "Buddhadeb Koner presenting at web development workshop",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103006/next-portfolio/events/zuqaractc6jfrf3nlp38.jpg",
            alt: "Attendees participating in coding exercises at tech meetup",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103007/next-portfolio/events/yweyqmqszjgh4kcu0uae.jpg",
            alt: "Group discussion during web development workshop",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103017/next-portfolio/events/uxiggs4uqvjmgmfqhk7o.jpg",
            alt: "Networking session at community tech event",
         },
      ],
      date: "2023-03-15",
      location: "Durgapur, India",
      tags: [
         "community event",
         "web development workshop",
         "tech meetup",
         "coding workshop",
         "developer networking",
      ],
   },
];
