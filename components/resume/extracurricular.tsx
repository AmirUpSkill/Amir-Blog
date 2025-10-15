import { Calendar, MapPin } from "lucide-react"

interface ActivityItemProps {
  organization: string
  position: string
  location: string
  duration: string
  description: string[]
}

function ActivityItem({ organization, position, location, duration, description }: ActivityItemProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <div>
          <h3 className="text-xl font-semibold">{organization}</h3>
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
      <ul className="list-disc pl-5 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function Extracurricular() {
  const activities = [
    {
      organization: "Parika",
      position: "Content Creator & Contributor",
      location: "Remote",
      duration: "Dec. 2024 – Present",
      description: [
        "Published 10+ technical articles on AI & software development, reaching 1K+ readers; contribute to OSS projects"
      ]
    },
    {
      organization: "GDSC ENET'Com",
      position: "Active Member & Instructor",
      location: "Sfax, Tunisia",
      duration: "Sept 2022 - Aug 2024",
      description: [
        "Led problem-solving workshops for 50+ students on algorithms; mentored juniors in programming & project development"
      ]
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">EXTRACURRICULAR ACTIVITIES</h2>
      {activities.map((activity, index) => (
        <ActivityItem key={index} {...activity} />
      ))}
    </div>
  )
}