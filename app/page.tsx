import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import ProblemSolution from "@/components/problem-solution"
import { CoreValues } from "@/components/core-values"
// import { ProductsPreview } from "@/components/products-preview"
import { BioEnergyBenefits } from "@/components/bio-energy-benefits"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <CoreValues />
        <BioEnergyBenefits />
        {/* <ProductsPreview /> */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
