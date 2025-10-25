export interface YouTubeVideo {
   id: string;
   title: string;
   videoId: string;
   thumbnail: string;
   description?: string;
   url: string;
}

export const youtubeVideos: YouTubeVideo[] = [
   {
      id: "1",
      title: "Build a Modern Website",
      videoId: "VSzp-SanPc4",
      thumbnail: "https://img.youtube.com/vi/VSzp-SanPc4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=VSzp-SanPc4",
   },
   {
      id: "2",
      title: "React Tutorial for Beginners",
      videoId: "JR6cKsrDuyE",
      thumbnail: "https://img.youtube.com/vi/JR6cKsrDuyE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=JR6cKsrDuyE",
   },
   {
      id: "3",
      title: "Full Stack Development Guide",
      videoId: "HA_eSYIxYLU",
      thumbnail: "https://img.youtube.com/vi/HA_eSYIxYLU/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=HA_eSYIxYLU",
   },
   {
      id: "4",
      title: "JavaScript Essentials",
      videoId: "QAqQnQQQjmg",
      thumbnail: "https://img.youtube.com/vi/QAqQnQQQjmg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=QAqQnQQQjmg",
   },
   {
      id: "5",
      title: "Web Development Tips",
      videoId: "NM7zAhYeB34",
      thumbnail: "https://img.youtube.com/vi/NM7zAhYeB34/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=NM7zAhYeB34",
   },
];
