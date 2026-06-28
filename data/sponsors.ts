export interface Sponsor {
   id: string;
   name: string;
   logo: string;
   image: string;
   url: string;
   title: string;
   description: string;
   ctaText: string;
   ctaUrl: string;
   isActive: boolean;
}

export const sponsors: Sponsor[] = [];
