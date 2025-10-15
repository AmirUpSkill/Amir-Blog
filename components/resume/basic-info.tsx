import Image from "next/image"
import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function BasicInfo() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-border">
        <Image
          src="/avatar.png"
          alt="Amir Abdallah"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Amir Abdallah</h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a href="tel:+21694372302" className="flex items-center gap-1 hover:underline">
            <Phone className="h-4 w-4" />
            <span>+216-94 372 302</span>
          </a>
          <a href="mailto:amirabdallahpfe@gmail.com" className="flex items-center gap-1 hover:underline">
            <Mail className="h-4 w-4" />
            <span>amirabdallahpfe@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/amir-abdallah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/amirabdallah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a href="https://medium.com/@amirabdallah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
            <Globe className="h-4 w-4" />
            <span>Medium</span>
          </a>
        </div>
        <p className="text-muted-foreground">
          Passionate full-stack developer with expertise in modern web technologies. I love building scalable applications 
          and sharing knowledge through open-source contributions and technical writing.
        </p>
        <div className="pt-2">
          <Button asChild>
            <a href="/Amir_Abdallah_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}