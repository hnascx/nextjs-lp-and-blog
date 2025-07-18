type AvatarTitleProps = {
  children: React.ReactNode
}

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <strong className="text-body-sm text-gray-300">{children}</strong>
}
