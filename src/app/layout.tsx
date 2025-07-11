import "@/styles/globals.css"
import type { Metadata } from "next"
import { Layout } from "../components/layout"

export const metadata: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
