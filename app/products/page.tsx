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
      description: "A smart-metered stored biogas kit comprised of a burner and lightweight refillable container.",
      features: [
        "Lightweight refillable biogas container",
        "Low initial stove deposit",
        "refillable through Pay-as-you-cook model using mobile money from as low as 500 Rwf.",
        "Saves 60% on cooking fuel costs"
       
      ],
      icon: Zap,
      image: "/aboutimagehome.jpeg",
      model: "Pay-as-you-cook via Mobile Money"
    },
    {
      id: 2,
      name: "GREEN FUEL IWAWE",
      description: "On-site digital monitored bio-digesters for farmers or institutions for their waste to gas conversion.",
      features: [
        "Real-time digital monitoring technology",
        "Proactive alerts that prevent system failure",
        "Low initial stove deposit",
        "Flexible semester or monthly payments",
        "Saves 60% on cooking fuel costs",
        "Direct waste-to-energy conversion"
      ],
      icon: Droplets,
      image: "/GREENFUEL IWAWE.PRODUCT.jpeg",
      model: "Institutional & Home On-site Systems"
    },
    {
      id: 3,
      name: "GREEN FUEL CROP BOOST",
      description: "High-quality bio-slurry organic fertilizer, a powerful byproduct of our gas production.",
      features: [
        "Replaces expensive chemical fertilizers",
        "Regenerates soil health naturally",
        "Increases crop yields by 40%",
        "100% organic and nutrient-rich",
        "Enhances circular economy"
      ],
      icon: Sprout,
      image: "/aboutbanner.jpeg",
      model: "High-Performance Organic Fertilizer"
    },
  ]

  const impacts = [
    { icon: Globe, title: "Environment", desc: "we abate thousands tons of CO2 by diverting the organic waste open dumping and by eliminating the dependence of firewood and charcoal for cooking" },
    { icon: Users, title: "Economy", desc: "we are an engine of green jobs for local women, youth and technicians." },
    { icon: HeartPulse, title: "Health", desc: "we significantly reduce respiratory illnesses by eliminating kitchen smokes and soot." },
    { icon: GraduationCap, title: "Education", desc: "Institution like Schools save on fuel costs, allowing more budgets for student resources." },
  ]

  const sdgs = [
    { code: "SDG 13", title: "CLIMATE ACTION", desc: "Green Fuel abates equivalent thousands of CO2 emissions by reducing organic waste in open dumps, charcoal and firewood dependency by turning waste into energy." },
    { code: "SDG 3", title: "GOOD HEALTH", desc: "Green Fuel removes the affordability barrier for clean energy, eliminating indoor air pollution, preventing chronic respiratory illnesses." },
    { code: "SDG 7", title: "CLEAN ENERGY", desc: "Green Fuel creates a clean fuel access for low-income communities by lowering the upfront cost for cooking energy access and stove ownership through pay-as-you- cook model." },
    { code: "SDG 8", title: "DECENT WORK", desc: "Green Fuel creates green jobs for women, youth and technicians through system installation, distribution and customer support." },
    { code: "SDG 5", title: "GENDER EQUALITY", desc: "Green Fuel empowers women and girls by freeing up hours of time previously spent hunting and long cooking hours using wood based fuels." },
    { code: "SDG 15/14", title: "LIFE ON LAND/WATER", desc: "Green Fuel solution system promotes 100% organic waste reuse, stopping deforestation and preventing waste contaminating local land and water." },
    { code: "SDG 2", title: "ZERO HUNGER", desc: "Green Fuel’ energy production solution generates nutrient-rich organic fertilizer byproduct that regenerates the soil, increase crop yield promoting food accessibility." },
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
      <section className="relative h-[60vh] lg:h-[65vh] flex items-center justify-center overflow-hidden bg-[#001a3d]">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] hover:scale-105"
          style={{ backgroundImage: "url('/newsimage.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 w-full px-4 lg:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md border border-white/20 py-12 md:py-16 px-8 text-center shadow-2xl"
          >
            <p className="montserrat font-bold text-[#001a3d]/80 text-sm md:text-lg tracking-[0.3em] uppercase">
              Affordable, Clean & Reliable Cooking Energy access
            </p>
          </motion.div>
        </div>
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
                  <div className="flex items-center space-x-3 mb-4">
                    <product.icon className="h-6 w-6 text-green-600" />
                    <span className="text-[10px] font-extrabold text-green-700 tracking-[0.2em] uppercase">{product.model}</span>
                  </div>
                  <CardTitle className="montserrat-bold text-xl text-[#002868] tracking-tight leading-tight uppercase">
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
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
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
                  At Green Fuel, our success is measured by the lives transformed and the emissions abated across our communities.
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
              <h2 className="text-xs font-extrabold tracking-[0.4em] text-green-700 uppercase mb-4">Our Commitment</h2>
              <h3 className="montserrat-bold text-4xl lg:text-5xl text-[#002868] uppercase tracking-tighter">Sustainability</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sdgs.map((sdg, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300">
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