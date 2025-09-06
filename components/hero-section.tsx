import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Zap, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <Image
        src="/green-energy-biogas-plant-with-solar-panels.jpg"
        alt="Green Energy Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Transforming Waste into <span className="text-green-400">Clean Energy</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed text-pretty">
                Green Fuel Ltd is a social enterprise in Rwanda specialized in installing high-quality bio-digesters
                that convert biodegradable waste into clean, efficient bio-energy for household and institutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">75%</div>
                <div className="text-sm text-gray-300">African households use firewood</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">700K</div>
                <div className="text-sm text-gray-300">Premature deaths annually</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-300">Clean energy solution</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <Leaf className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white">Eco-Friendly</h3>
                  <p className="text-sm text-gray-200 mt-2">Reduces greenhouse gas emissions</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white">Clean Energy</h3>
                  <p className="text-sm text-gray-200 mt-2">Sustainable bio-energy production</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center col-span-2 border border-white/20">
                  <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white">Community Impact</h3>
                  <p className="text-sm text-gray-200 mt-2">Empowering African communities with clean energy access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
