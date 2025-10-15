import {BlogPost , Project , SocialLinks } from "@/lib/types";

// --- My Own Social Link --- 
export const socialLinks: SocialLinks = {
    linkedIn: "https://www.linkedin.com/in/abdallah-amir-0b93101b8/",
    twitter: "https://x.com/mimro_abdallah",
    github: "https://github.com/AmirUpSkill",
    email: "mailto:amirabdallahpfe@gmail.com", 
};
// --- Some Dammy Data For Now (Later we will change it ) --- 
export const projects: Project[] = [
    {
        title: "Network AI",
        description: "Network AI is a microservice-based application that combines intelligent LinkedIn search capabilities with resume analysis tools. It helps users find relevant profiles, companies, and jobs while providing personalized resume optimization recommendations.",
        keywords: ["Next.js 15", "FastAPI", "Exa AI", "Google Gemini", "Supabase", "Microservices"],
        githubUrl: "https://github.com/AmirUpSkill/Network-AI"
    },
];

export const blogPosts: BlogPost[] = [
    {
        title: "System Design 101: Architecting a ChatGPT-like Conversational AI",
        description: "A comprehensive guide to designing the runtime infrastructure for a large-scale conversational AI, covering core components, scalability for 10 million users, and real-time response streaming.",
        keywords: ["System Design", "ChatGPT", "AI Architecture", "Scalability", "Streaming"],
        notionUrl: "https://www.notion.so/Design-Chat-GPT-System-Design-101-28de2e5b4d8e8056a6f6cba56acafb45?source=copy_link"
    },
];