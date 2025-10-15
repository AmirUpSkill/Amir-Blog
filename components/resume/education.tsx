import { Calendar, MapPin } from "lucide-react"

interface EducationItemProps {
  institution: string
  degree: string
  location: string
  duration: string
}

function EducationItem({ institution, degree, location, duration }: EducationItemProps) {
  return (
    <div className="mb-4">
      <div className="flex flex-col md:flex-row md:justify-between mb-1">
        <div>
          <h3 className="text-xl font-semibold">{institution}</h3>
          <h4 className="text-lg text-muted-foreground">{degree}</h4>
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
    </div>
  )
}

export function Education() {
  const education = [
    {
      institution: "National School of Electronics and Telecommunications of Sfax",
      degree: "Engineering in Data & Artificial Intelligence",
      location: "Sfax, Tunisia",
      duration: "Sept. 2022 – Present"
    },
    {
      institution: "Sfax Preparatory Engineering Institute",
      degree: "Pre-Engineering in Physics & Technology",
      location: "Sfax, Tunisia",
      duration: "Sep. 2020 – June 2022"
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
      {education.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </div>
  )
}