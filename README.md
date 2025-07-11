# Next.js Landing Page & Blog

A modern, performant landing page and blog built with Next.js, featuring server-side rendering, static site generation, and dynamic content management.

## Features

- 🚀 Modern Landing Page with multiple sections
  - Hero Section
  - Feature Section
  - Customer Rating Section
  - Support Section
  - CTA Section
- 📝 Blog functionality
  - Markdown support
  - Static and dynamic rendering options
  - Post sharing capabilities
  - Search functionality
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🖼️ Image optimization with Next.js
- 🔄 Multiple rendering strategies (SSR, SSG, ISR)

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v18 or higher)
- pnpm (recommended) or npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hnascx/nextjs-lp-and-blog.git
cd nextjs-lp-and-blog
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
nextjs-lp-and-blog/
├── src/
│   ├── app/              # App Router components
│   ├── components/       # Reusable components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Pages Router components
│   ├── styles/          # Global styles
│   └── templates/       # Page templates
├── posts/              # Blog post markdown files
├── public/             # Static assets
└── [config files]      # Various configuration files
```

## Available Scripts

- `pnpm dev` - Runs the development server
- `pnpm build` - Creates a production build
- `pnpm start` - Runs the production server
- `pnpm lint` - Runs ESLint for code linting

## Blog Posts

Blog posts are written in Markdown format and stored in the `posts/` directory. Each post should include:

- Frontmatter with metadata
- Featured image
- Post content in Markdown

## Deployment

This project is optimized for deployment on Vercel. For deployment instructions, visit [Next.js deployment documentation](https://nextjs.org/docs/deployment).