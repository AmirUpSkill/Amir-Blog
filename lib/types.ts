import {z} from "zod";
import { 
  projectSchema, 
  blogPostSchema,
  socialLinksSchema
} from "./schemas";

// --- Define the types we gonna use --- 
export type Project = z.infer<typeof projectSchema>
export type BlogPost = z.infer<typeof blogPostSchema>
export type SocialLinks = z.infer<typeof socialLinksSchema>
