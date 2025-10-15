import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { socialLinks } from "@/data"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Amir Abdallah. The source code is available on{" "}
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href={socialLinks.github} target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={socialLinks.linkedIn} target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={socialLinks.twitter} target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href={socialLinks.email}>
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
}