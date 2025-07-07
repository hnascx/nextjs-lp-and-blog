import Image, { ImageProps } from "next/image"

type AvatarImageProps = ImageProps

export const AvatarImage = ({
  src,
  alt,
  width = 40,
  height = 40,
  ...props
}: AvatarImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />
}
