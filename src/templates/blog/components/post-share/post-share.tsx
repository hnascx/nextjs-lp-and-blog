"use client"

import { Button } from "../../../../components/ui/button"
import { useShare } from "../../../../hooks"

type PostShareProps = {
  url: string
  title: string
  description: string
}

export const PostShare = ({ url, title, description }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  })

  return (
    <aside className="space-y-6 mt-6 md:mt-0">
      <div className="rounded-lg bg-gray-700 md:px-4">
        <h2 className=" mb-4 text-heading-xs text-gray-100">Compartilhar</h2>

        <div className="flex md:justify-between md:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              onClick={() => provider.action()}
              variant="outline"
              className="h-12 md:w-full justify-start gap-2"
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}
