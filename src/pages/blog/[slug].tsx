import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { allPosts } from "../../../.contentlayer/generated"
import { Avatar } from "../../components/avatar"
import { Markdown } from "../../components/markdown"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"
import { Button } from "../../components/ui/button"

export default function PostPage() {
  const router = useRouter()
  const slug = router.query.slug as string

  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase()
  )!

  const publishDate = new Date(post?.date ?? "").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="mt-32 text-gray-100">
      <div className="container space-y-12 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-8 md:p-10 lg:p-12">
              <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar ?? ""}
                  alt={post?.author.name ?? ""}
                  size="sm"
                />

                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={post?.date}>{publishDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none px-8 md:px-10 lg:px-12 pb-2">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700 p-4 md:p-6 ">
              <h2 className="mb-4 text-heading-xs text-gray-100">Compartilhar</h2>

              <div className="space-y-3 ">
                {[{ key: '1', providerName: 'LinkedIn' }].map((provider) => (
                  <Button key={provider.key} variant="outline">
                    {provider.providerName}
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
