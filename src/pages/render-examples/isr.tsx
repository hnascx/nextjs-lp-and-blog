import { GetStaticProps } from "next"

interface ISRPageProps {
  currentTime: string
}

export default function ISRPage({ currentTime }: ISRPageProps) {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      <h1 className="text-heading-hg text-blue-200">
        Incremental Static Regeneration (ISR)
      </h1>
      <p className="text-gray-100">
        Current Time (regenerated every 10 seconds): {currentTime}
      </p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRPageProps> = async () => {
  const currentTime = new Date().toISOString()

  return {
    props: {
      currentTime,
    },
    revalidate: 10,
  }
}
