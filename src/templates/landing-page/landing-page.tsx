import {
  CTASection,
  CustomerRatingSection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections"

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-15 -mb-6">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerRatingSection />
      <CTASection />
    </article>
  )
}
