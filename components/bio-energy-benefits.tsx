"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Activity, CreditCard, HeartPulse, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export function BioEnergyBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const benefits = [
    {
      icon: DollarSign,
      title: "AFFORDABILITY",
      description: "Green Fuel gas has proven to save up to 60% of the usual cooking expenses compared to other cooking energy alternatives (LPG, Charcoal, and Firewood).",
      bgImage: "/smilemum.jpeg",
    },
    {
      icon: Activity,
      title: "Cooking with Green Fuel Gas, promote increased crop productivity",
      description: "Green Fuel’s gas production process generates a nutrient - rich organic bio-fertilizer that has proven to increase farm productivity by 40%.",
      bgImage: "/smilemum.jpeg",
    },
    {
      icon: CreditCard,
      title: "ACCESSIBILITY",
      description: "Green Fuel gas is accessible nearby your household in cylinders or at your place through biodigesters.",
      bgImage: "/smilemum.jpeg",
    },
    {
      icon: HeartPulse,
      title: "HEALTH",
      description: "Green Fuel gas displaces toxic smokes inhalation and soot with a safer, cleaner cooking environment.",
      bgImage: "/smilemum.jpeg",
    },
  ]

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .montserrat { font-family: 'Montserrat', sans-serif; }
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
           <h3 className="montserrat-bold text-lg lg:text-2xl text-[#002868] leading-none uppercase tracking-tighter">
  Why choosing  <br /> Green Fuel Gas?
</h3>
            <div className="h-1.5 w-32 bg-green-500 mb-2" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <Card className="relative h-[400px] overflow-hidden rounded-none border-0 shadow-2xl bg-[#001a3d]">
                {/* Background Image Logic */}
                <div className="absolute inset-0 transition-all duration-1000 ease-in-out group-hover:scale-110">
                  <img
                    src={benefit.bgImage}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Transition Overlay: From white/clean to dark/transparent */}
                  <div className="absolute inset-0 bg-white/95 group-hover:bg-[#001a3d]/60 transition-all duration-700" />
                </div>

                <CardContent className="relative h-full flex flex-col justify-between p-12 z-10">
                  <div className="space-y-6">
                    {/* Icon with Glassmorphism Effect */}
                    <div className="relative h-16 w-16 flex items-center justify-center border-2 border-green-600 transition-all duration-500 group-hover:bg-green-600 group-hover:border-transparent group-hover:rotate-[360deg]">
                      <benefit.icon className="h-7 w-7 text-green-700 transition-colors duration-500 group-hover:text-white" />
                    </div>

                    <h4 className="montserrat-bold text-2xl tracking-widest text-[#002868] group-hover:text-white transition-colors duration-500 uppercase">
                      {benefit.title}
                    </h4>
                    
                    <p className="montserrat text-base font-semibold leading-relaxed text-gray-600 group-hover:text-gray-200 transition-colors duration-500">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="h-12 w-12 bg-white/20 backdrop-blur-md flex items-center justify-center">
                       <ArrowUpRight className="text-white h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Professional Full-Width Style */}
        <div className="mt-20 flex justify-center">
          <Link href="/products" className="w-full max-w-2xl">
            <motion.button
              whileHover={{ backgroundColor: "#15803d", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="montserrat-bold w-full bg-[#002868] text-white py-8 tracking-[0.3em] uppercase text-xs transition-all shadow-2xl border-b-8 border-[#001a3d]"
            >
              Learn More About Our Clean cooking energy solutions
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}