import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
   const baseUrl = 'https://buddhadebkoner.in'

   return [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 1,
      },
      {
         url: `${baseUrl}/projects`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.9,
      },
      {
         url: `${baseUrl}/landing-pages`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.8,
      },
   ]
}
