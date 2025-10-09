import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: 'Buddhadeb Koner - FullStack Web Developer',
      short_name: 'Buddhadeb Koner',
      description: 'Personal portfolio of Buddhadeb Koner - FullStack Web Developer specializing in MERN stack and Next.js',
      start_url: '/',
      display: 'standalone',
      background_color: '#0a0a0a',
      theme_color: '#fbf1e0',
      icons: [
         {
            src: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
         },
      ],
   }
}
