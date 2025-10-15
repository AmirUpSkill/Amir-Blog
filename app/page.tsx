import Link from "next/link"
import { blogPosts } from "@/data"

export default function HomePage() {
  return (
    <section className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
          Index
        </h1>
        
        <div className="mt-8 grid gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="border-b pb-6">
              <h2 className="text-xl font-semibold">
                <Link href={post.notionUrl} target="_blank" className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.keywords.map((keyword: string, i: number) => (
                      <span key={i} className="rounded-md bg-secondary px-2 py-1 text-xs">
                        {keyword}
                      </span>
                    ))}
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}