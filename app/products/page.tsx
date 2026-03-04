"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Droplets,
  Sprout,
  ArrowRight,
  Globe,
  Users,
  HeartPulse,
  GraduationCap,
  CloudRain,
  Heart,
  Lightbulb,
  Briefcase,
  UserCheck,
  Trees,
  Wheat,
} from "lucide-react"
import { useState } from "react"
import { BookingForm } from "@/components/booking-form"
import { motion } from "framer-motion"

export default function ProductsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const products = [
    {
      id: 1,
      name: "GREEN FUEL SHARE ME",
      description: "We provide cylinder stored biogas for people with inadequate daily waste generation or space to run a biodigester. It is provided within a lightweight refillable Cylinder connected with a burner.",
      features: [
        "Convenient",
        "Affordable on initial stove and container deposit,",
        "Refillable in increment.",
        "Affordable, users proven to save up to 60% on cooking fuel cost.",
        "Environmental friendly cooking gas"
       
      ],
      icon: Zap,
      image: "/womencooking.jpeg",
    },
    {
      id: 2,
      name: "GREEN FUEL IWAWE",
      description: "We provide on sites biodigesters installation and monitoring services for farmers and institutions, enabling them to converts their farm or institutional waste into clean, efficient cooking gas. ",
      features: [
        "Clean cooking Energy at the comfort of your place",
        "Reliable energy access at all time of need",
        "Flexible usage payments",
        "Affordable initial commitment fees",
        "Proven by the user, to Save up to 60% on cooking fuel cost",
        
      ],
      icon: Droplets,
      image: "/GREENFUEL IWAWE.PRODUCT.jpeg",
     
    },
    {
      id: 3,
      name: "GREEN FUEL CROP BOOST",
      description: "We empower famers with a highly nutritious organic fertilizer yielded from the gas Production processes. ",
      features: [
        "Reduce expensive chemical fertilizers usage ",
        "Regenerates the soil, ",
        "Proven by the user to increase crop productivity up to 40%."
       
      ],
      icon: Sprout,
      image: "/aboutbanner.jpeg",
    },
  ]

  const impacts = [
    { icon: Globe, title: "Health and Environment", desc: "We displace household smoke with clean bio – gas, reducing respiratory diseases while curbing deforestation." },
    { icon:  Briefcase, title: "Economic Relief", desc: "We help Families save 60% on cooking energy costs, and redirecting vital funds to education and nutrition." },
    { icon:  Wheat, title: "Agricultural Prosperity", desc: "Our bio-fertilizer byproduct has proven by the user to increase farm yields by 40%, strengthening food security." },
    { icon: Users, title: "Women’s Empowerment", desc: "By removing the burden of wood collection, we reclaim hours of productivity for women, fostering gender equity and rural development." },
  ]

  const sdgs = [
    { code: "SDG 13", title: "CLIMATE ACTION", desc: "We capture methane from organic waste and turn it into a clean cooking gas, and reduces CO2 emissions by displacing charcoal and firewood.", icon: CloudRain },
    { code: "SDG 3", title: "GOOD HEALTH", desc: "We prevent premature respiratory deaths by eliminating toxic indoor smoke.", icon: Heart },
    { code: "SDG 7", title: "AFFORDABLE AND CLEAN ENERGY", desc: "We Provide 100% renewable biogas accessible through a flexible, affordable pay-as-you-cook model.", icon: Lightbulb },
    { code: "SDG 8", title: "DECENT WORK", desc: " We create jobs for women, youth and technicians through system installation, distribution and customer support.", icon: Briefcase },
    { code: "SDG 5", title: "GENDER EQUALITY", desc: "We help women to reclaim time previously spent on fuel collection, fostering economic empowerment.", icon: UserCheck },
    { code: "SDG 15/14", title: "LIFE ON LAND AND LIFE BELOW WATER", desc: "Our solution promotes 100% organic waste reuse, preventing organic waste contamination of local land and stopping deforestation by displacing wood based fuels with waste based gas.", icon: Trees },
    { code: "SDG 2", title: "ZERO HUNGER", desc: "We enable farmers boosts their farm yields by 40% through our nutrient - rich bio - fertilizer byproduct.", icon: Wheat },
  ]

  const handleGetQuote = (product: any) => {
    setSelectedProduct(product)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .montserrat { font-family: 'Montserrat', sans-serif; }
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
      `}</style>
      
      <Header />
      
      {/* IMPROVED TRANSPARENT BANNER */}
    <section className="relative h-[60vh] lg:h-[65vh] flex items-center justify-center overflow-hidden bg-[#f3f4f6]">
  {/* First Image - gas ishiga.jpeg */}
  <div 
    className="absolute inset-0 bg-contain bg-no-repeat bg-center"
    style={{ 
      backgroundImage: "url('/gas ishiga.jpeg')",
      animation: "fade-1 12s infinite" 
    }}
  />
  
  {/* Second Image - twogas.jpeg */}
  <div 
    className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-0"
    style={{ 
      backgroundImage: "url('/twogas.jpeg')", 
      animation: "fade-2 12s infinite" 
    }}
  />

  {/* Subtle light overlay to soften the look */}
  <div className="absolute inset-0 bg-white/10 pointer-events-none" />

  {/* Content Container */}
  <div className="relative z-10 w-full px-4 lg:px-0 text-center">
     {/* Your content goes here */}
  </div>

  <style>{`
    @keyframes fade-1 {
      0%, 45% { opacity: 1; transform: scale(0.9); }
      50%, 95% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(0.9); }
    }
    @keyframes fade-2 {
      0%, 45% { opacity: 0; transform: scale(0.8); }
      50%, 95% { opacity: 1; transform: scale(0.9); }
      100% { opacity: 0; transform: scale(0.8); }
    }
  `}</style>
</section>

      <main className="montserrat pb-24">
        {/* PRODUCTS SECTION */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
  
          <div className="grid lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <Card key={product.id} className="group border-0 rounded-none shadow-xl flex flex-col h-full hover:shadow-2xl transition-all duration-500 bg-gray-50">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} />
                  <div className="absolute inset-0 bg-[#001a3d]/20 group-hover:bg-transparent transition-colors" />
                </div>
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="montserrat-bold text-xl text-[#002868] tracking-tight leading-tight uppercase mb-2">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-6 flex-1 flex flex-col">
                  <p className="text-sm font-medium text-gray-600 mb-8">{product.description}</p>
                  <ul className="space-y-4 mb-10 flex-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs font-bold text-gray-500 uppercase tracking-wide">
                        <div className="h-1.5 w-1.5 bg-green-500 mt-1 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleGetQuote(product)}
                    className="w-full rounded-none bg-[#002868] py-8 font-extrabold tracking-widest uppercase hover:bg-green-700 transition-colors shadow-lg"
                  >
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-24 bg-[#001a3d] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="montserrat-bold text-4xl lg:text-5xl uppercase tracking-tighter leading-tight mb-8">Driven by Impact</h3>
                <p className="text-gray-400 font-medium text-lg leading-relaxed mb-10">
                  At Green Fuel, our success is measured by the lives transformed  across our communities.
                </p>
                <div className="h-1 w-24 bg-green-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-10">
                {impacts.map((impact, i) => (
                  <div key={i} className="space-y-4">
                    <impact.icon className="h-10 w-10 text-green-500" />
                    <h4 className="montserrat-bold text-lg uppercase tracking-widest">{impact.title}</h4>
                    <p className="text-xs font-medium text-gray-400 leading-relaxed uppercase">{impact.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUSTAINABILITY SECTION */}
        <section className="py-24 bg-white px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="montserrat-bold text-4xl lg:text-5xl text-[#002868] uppercase tracking-tighter">OUR CONTRIBUTIONS TO SUSTAINABLE DEVELOPMENT GOALS(SDG)</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sdgs.map((sdg, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300">
                  <sdg.icon className="h-8 w-8 text-green-600 mb-4" />
                  <span className="text-green-600 font-extrabold text-xs tracking-widest mb-4 block">{sdg.code}</span>
                  <h4 className="montserrat-bold text-sm text-[#002868] uppercase mb-4 leading-tight">{sdg.title}</h4>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed">{sdg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false)
          setSelectedProduct(null)
        }}
        selectedProduct={selectedProduct}
      />
    </div>
  )
}