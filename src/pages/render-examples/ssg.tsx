import { GetStaticProps } from "next"

interface SSGPageProps {
  buildTime: string
}

export default function SSGPage({ buildTime }: SSGPageProps) {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      <h1 className="text-heading-hg text-blue-200">
        Static Site Generation (SSG)
      </h1>
      <p className="text-gray-100">Build Time: {buildTime}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGPageProps> = async () => {
  const buildTime = new Date().toISOString()

  return {
    props: {
      buildTime,
    },
  }
}
