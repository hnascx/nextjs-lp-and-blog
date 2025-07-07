import { ShareConfig } from "./social-providers"

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number
}

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  }

  return {}
}
