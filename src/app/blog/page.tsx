import type { Metadata } from "next"
import { allPosts } from "../../../.contentlayer/generated"
import { BlogList } from "../../templates/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar o seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar o seu negócio",
    url: "https://nextjs-lp-and-blog.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://nextjs-lp-and-blog.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
}

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return <BlogList posts={sortedPosts} />
}
