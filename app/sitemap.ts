import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.abelj.dev/',
            lastModified: new Date(),
        }
    ]
}