import { MetadataRoute } from 'next'
import { blogs } from '@/data/blogs'
import { uiuxProjects } from '@/data/uiux'

export default function sitemap(): MetadataRoute.Sitemap {
   const baseUrl = 'https://buddhadebkoner.in'

   // Core pages
   const routes = [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 1,
      },
      {
         url: `${baseUrl}/projects`,
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.9,
      },
      {
         url: `${baseUrl}/landing-pages`,
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.8,
      },
      {
         url: `${baseUrl}/experience`,
         lastModified: new Date(),
         changeFrequency: 'monthly' as const,
         priority: 0.8,
      },
      {
         url: `${baseUrl}/events`,
         lastModified: new Date(),
         changeFrequency: 'monthly' as const,
         priority: 0.7,
      },
      {
         url: `${baseUrl}/blogs`,
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.9,
      },
      {
         url: `${baseUrl}/uiux`,
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.8,
      },
   ]

   // Blog pages
   const blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
   }))

   // UI/UX project pages
   const uiuxRoutes = uiuxProjects.map((project) => ({
      url: `${baseUrl}/uiux/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
   }))

   return [...routes, ...blogRoutes, ...uiuxRoutes]
}
