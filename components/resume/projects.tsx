import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectItemProps {
  title: string
  description: string[]
  techStack: string[]
  link?: string
}

function ProjectItem({ title, description, techStack, link }: ProjectItemProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5 space-y-1 mb-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="text-sm mb-2">
        <span className="font-medium">Tech Stack:</span> {techStack.join(", ")}
      </div>
      {link && (
        <Button variant="outline" size="sm" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  )
}

export function Projects() {
  const projects = [
    {
      title: "Network AI",
      description: [
        "Architected microservices platform integrating Exa AI & Gemini APIs for semantic LinkedIn searches, tested on 50+ queries",
        "Built automated resume analysis pipeline using Gemini & Landing AI, achieving 85% accuracy across 20+ test cases",
        "Deployed with FastAPI, Docker, and Nginx for production scalability"
      ],
      techStack: ["Gemini API", "Exa AI", "Landing AI", "Next.js", "FastAPI", "Docker", "Nginx"]
    },
    {
      title: "ChatAI",
      description: [
        "Deployed locally-hosted Gemma 3 LLM using Ollama for production inference without API dependencies",
        "Engineered streaming response system using Spring WebFlux & SSE for real-time conversational UI",
        "Implemented conversation persistence with Neon Postgres and Spring AI framework integration"
      ],
      techStack: ["Spring AI", "Ollama", "Gemma 3", "Spring WebFlux", "React 19", "TypeScript", "Neon Postgres"]
    },
    {
      title: "Chatify",
      description: [
        "Developed WebSocket-based messaging app supporting 50+ concurrent users with sub-200ms latency",
        "Configured Neon Postgres for message persistence & JWT authentication for secure room access"
      ],
      techStack: ["Spring Boot 3", "Spring WebSocket", "React 19", "Neon Postgres", "JWT"]
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  )
}