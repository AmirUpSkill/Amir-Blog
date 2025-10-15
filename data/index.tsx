import {BlogPost , Project , SocialLinks } from "@/lib/types";

// --- My Own Social Link --- 
export const socialLinks: SocialLinks = {
    linkedIn: "https://www.linkedin.com/in/amir-abdallah/",
    twitter: "https://x.com/your-username",
    github: "https://github.com/AmirUpSkill",
    email: "mailto:your.email@example.com",
};
// --- Some Dammy Data For Now (Later we will change it ) --- 
export const projects: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce site built with Next.js, Stripe for payments, and a PostgreSQL database.",
        keywords: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
        githubUrl: "https://github.com/AmirUpSkill/some-repo-1"
    },
    {
        title: "Task Management App",
        description: "A drag-and-drop task board inspired by Trello, using React and Zustand for state management.",
        keywords: ["React", "Zustand", "TailwindCSS", "Vite"],
        githubUrl: "https://github.com/AmirUpSkill/some-repo-2"
    },
];

export const blogPosts: BlogPost[] = [
    {
        title: "Mastering Zustand for State Management in React",
        description: "A deep dive into why Zustand is a lightweight and powerful alternative to Redux for your React applications.",
        keywords: ["React", "State Management", "Zustand", "TypeScript"],
        notionUrl: "https://your-username.notion.site/your-page-id-1"
    },
    {
        title: "Building Type-Safe APIs with Next.js and Zod",
        description: "Learn how to leverage Zod to validate API requests and responses in your Next.js app, ensuring data integrity.",
        keywords: ["Next.js", "API", "Zod", "TypeScript"],
        notionUrl: "https://your-username.notion.site/your-page-id-2"
    },
];