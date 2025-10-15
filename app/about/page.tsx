import { BasicInfo } from "@/components/resume/basic-info"
import { Experience } from "@/components/resume/experience"
import { Projects } from "@/components/resume/projects"
import { Extracurricular } from "@/components/resume/extracurricular"
import { Education } from "@/components/resume/education"
import { Languages } from "@/components/resume/languages"

export default function AboutPage() {
  return (
    <section className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <BasicInfo />
        <Experience />
        <Projects />
        <Extracurricular />
        <Education />
        <Languages />
      </div>
    </section>
  )
}