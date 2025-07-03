import { PT_Sans_Caption } from "next/font/google"
import Image from "next/image"

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["700"],
})

const customerRatings = [
  {
    content:
      "Criar minha loja com o Site.Set foi a melhor decisão que tomei. A equipe é incrível e sempre pronta para ajudar. O suporte é rápido e eficiente.",
    author: {
      name: "Ana Bezerra",
      role: "CEO da AB Corp",
      avatar: "/customer-01.png",
    },
  },
  {
    content:
      "Transformar minha loja de afiliados em um site profissional foi o melhor investimento que fiz. O Site.Set é incrível e a equipe é maravilhosa.",
    author: {
      name: "José Juarez",
      role: "CEO da JJ Org",
      avatar: "/customer-02.png",
    },
  },
]

export const CustomerRatingSection = () => {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} text-heading-xl text-gray-100`}
        >
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerRatings.map((rating) => (
            <div
              key={rating.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200">{rating.content}</p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={rating.author.avatar}
                    alt={rating.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {rating.author.name}
                  </strong>
                  <p className="text-xs text-gray-300">{rating.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
