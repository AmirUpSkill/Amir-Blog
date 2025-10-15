"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Code } from "lucide-react"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { socialLinks } from "@/data"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span className="font-bold">Amir Abdallah</span>
          </Link>
        </div>
        
        {/* Centered Navigation */}
        <nav className="flex-1 flex justify-center">
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Blogs
            </Link>
            <Link href="/projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About Me
            </Link>
          </div>
        </nav>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <nav className="flex items-center space-x-2">
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
      </div>
    </header>
  )
}