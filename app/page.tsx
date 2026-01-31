import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
// import { ProductsPreview } from "@/components/products-preview"
import { BioEnergyBenefits } from "@/components/bio-energy-benefits"
import { AboutUsSection } from "@/components/aboutusonhomepage"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutUsSection/>
        <BioEnergyBenefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
