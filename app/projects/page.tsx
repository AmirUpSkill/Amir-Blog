import Link from "next/link"
import { projects } from "@/data"
import { Github } from "lucide-react"

export default function ProjectsPage() {
  return (
    <section className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tighter">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Here are some of the projects I've worked on.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.keywords.map((keyword, i) => (
                  <span key={i} className="rounded-md bg-secondary px-2 py-1 text-xs">
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}