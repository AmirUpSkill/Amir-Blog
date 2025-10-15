import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutPage() {
  return (
    <section className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tighter">About Me</h1>
        <div className="mt-8 flex flex-col items-center gap-8 md:flex-row">
          <div className="relative h-48 w-48 overflow-hidden rounded-full">
            <Image
              src="/avatar.jpg"
              alt="Amir Abdallah"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <p>
              Hello! I'm Amir Abdallah, a passionate developer with expertise in web technologies.
              I love building things that make a difference and sharing my knowledge through blog posts.
            </p>
            <p>
              My interests include React, Next.js, TypeScript, and modern web development practices.
              I'm always learning and exploring new technologies to improve my skills.
            </p>
            <div className="pt-4">
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}