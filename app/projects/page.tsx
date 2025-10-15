import { projects } from "@/data"
import { ProjectCard } from "@/components/shared/project-card"

export default function ProjectsPage() {
  return (
    <section className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
          Projects
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Here are some of my open-source projects that I've worked on. Feel free to check them out and contribute!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}