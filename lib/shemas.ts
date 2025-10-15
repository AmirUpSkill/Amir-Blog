import { z } from "zod"

// --- Schema for a single project --- 
export const projectSchema = z.object({
    title: z.string().min(1,"Title is required"),
    description: z.string().min(1,"Description is required"),
    keywords: z.array(z.string()).min(1,"At least one keyword is required"),
    githubUrl: z.string().url("Must be a valid URL"),
})
// --- Schema for a singel Blog Post --- 
export const blogPostSchema = z.object({
    title: z.string().min(1,"Title is required"),
    description: z.string().max(200 , "Description must be 2 lines maximum"),
    keywords: z.array(z.string()).min(1,"At least one keyword is required"),
    notionUrl: z.string().url("Must be a valid Notion URL"),
})
// --- Schema for Contact/Scoial Media Links --- 
export const socialLinksSchema = z.object({
    linkedIn: z.string().url(),
    twitter: z.string().url(),
    github: z.string().url(),
    email: z.string().email(),
});