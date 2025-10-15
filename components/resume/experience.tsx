import { Calendar, MapPin } from "lucide-react"

interface ExperienceItemProps {
  company: string
  position: string
  location: string
  duration: string
  description: string[]
  techStack: string[]
}

function ExperienceItem({ company, position, location, duration, description, techStack }: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <div>
          <h3 className="text-xl font-semibold">{company}</h3>
          <h4 className="text-lg text-muted-foreground">{position}</h4>
        </div>
        <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-1 md:mt-0">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-1 mb-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="text-sm">
        <span className="font-medium">Tech Stack:</span> {techStack.join(", ")}
      </div>
    </div>
  )
}

export function Experience() {
  const experiences = [
    {
      company: "Proxym",
      position: "AI Software Engineer Intern",
      location: "Hybrid",
      duration: "Feb. 2025 - Aug. 2025",
      description: [
        "Engineered AI-powered automation transforming requirements into ClickUp tasks, cutting manual effort by 50%",
        "Integrated ClickUp API with AI processing pipeline for automated task generation and validation",
        "Built microservices backend with OAuth 2.0, MinIO object storage & Docker orchestration at 99% uptime",
        "Developed Next.js wizard interface with real-time validation, boosting task completion by 30%"
      ],
      techStack: ["Next.js", "FastAPI", "Spring Boot", "OAuth 2.0", "MinIO", "ClickUp API", "Docker", "Spring Cloud", "Github Actions"]
    },
    {
      company: "Neuralbey",
      position: "Software Engineer Intern",
      location: "Remote",
      duration: "Jul. 2024 - Sep. 2024",
      description: [
        "Architected Spring Boot microservices ecosystem with Spring Cloud Gateway, handling 200+ TPM across 3+ services",
        "Designed Kafka event-driven architecture processing 10K+ daily messages with sub-200ms latency",
        "Secured microservices with KeyCloak OAuth2 & JWT, reducing unauthorized access by 90%"
      ],
      techStack: ["Spring Boot", "Apache Kafka", "KeyCloak", "Spring WebFlux", "Spring WebSocket", "Docker"]
    },
    {
      company: "Telecom TN",
      position: "ML Engineer Intern",
      location: "Hybrid",
      duration: "Jul. 2023 - Jul. 2023",
      description: [
        "Built end-to-end ML pipeline from SAP data extraction to automated classification for 1K+ records",
        "Optimized scikit-learn models via feature engineering, boosting accuracy from 75% to 85% on 5K samples",
        "Deployed FastAPI + React stack serving ML predictions to 50+ users with sub-500ms response times"
      ],
      techStack: ["Scikit-learn", "FastAPI", "SAP", "React", "Postgres", "TypeScript"]
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  )
}