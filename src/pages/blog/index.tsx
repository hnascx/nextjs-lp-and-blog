import { Search } from "../../components/search"

export default function BlogPage() {
  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* Tag */}
            <span className="font-sans text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300 uppercase">
              Blog
            </span>

            {/* Título */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              Dicas e estratégias para impulsionar o seu negócio
            </h1>
          </div>
          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
    </div>
  )
}
