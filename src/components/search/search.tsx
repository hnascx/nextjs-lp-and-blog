import { CircleX, SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') ?? ''
  const hasQuery = !!searchParams?.has('q')

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`)
      }
    },
    [query, router]
  )

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
      scroll: false, // Don't scroll to the top of the page
    })
  }

  const handleClearQuery = () => {
    router.push("/blog", {
      scroll: false,
    })
  }

  useEffect(() => {
    if (hasQuery) {
      inputRef.current?.focus()
    }
  }, [hasQuery])

  return (
    <form onSubmit={handleSearch} className="relative group w-full md:w-60">
      <SearchIcon
        className={cn(
          "w-4 h-4 text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? "text-blue-300" : ""
        )}
      />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleQueryChange}
        className="w-full h-10 md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
        placeholder="Buscar por título"
      />

      {query && (
        <CircleX
          className="w-4 h-4 text-gray-300 absolute right-3 top-1/2 -translate-y-1/2"
          onClick={handleClearQuery}
        />
      )}
    </form>
  )
}
