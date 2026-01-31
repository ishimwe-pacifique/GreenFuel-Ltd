"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Lightbulb, Target, Eye, Zap, Users, Leaf, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .montserrat { font-family: 'Montserrat', sans-serif; }
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
      `}</style>
      
      <Header />
      
      {/* IMPROVED BANNER - Maximized Visibility for firepic.jpg */}
      <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out hover:scale-110"
    style={{ backgroundImage: "url('/aboutbanner.png')" }}
  />
  
  {/* Lightened overlay so the brand colors aren't muddied */}
  <div className="absolute inset-0 bg-white/10" />

  {/* Content Area - Minimalist Style */}
  <div className="relative z-10 w-full px-6 text-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto"
    >
      {/* Brand Color Headline - Minimized Size */}
      <h1 
        className="montserrat-bold text-2xl md:text-4xl lg:text-5xl text-[#002868] tracking-tighter uppercase leading-none"
        style={{ filter: "drop-shadow(0px 0px 10px rgba(255,255,255,0.8))" }}
      >
        AT GREEN FUEL
      </h1>
      
      {/* Slimmer Green Accent */}
      <div className="h-1 w-16 bg-green-600 mx-auto mt-4 mb-4" />
      
      {/* Refined Subtext - Minimized Size */}
      <p className="montserrat font-bold text-[#001a3d] text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
        We transform lives through clean and <br className="hidden md:block" /> 
        affordable cooking energy access.
      </p>
    </motion.div>
  </div>
</section>

      <main className="montserrat">
        
        {/* SECTION 1: THE PROBLEM & SOLUTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-0 shadow-2xl border border-gray-100">
              
              {/* THE PROBLEM */}
              <div className="bg-[#001a3d] p-10 lg:p-20 text-white flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-8">
                  
                  <h2 className="montserrat-bold text-2xl tracking-[0.3em] uppercase">The Problem</h2>
                </div>
                <div className="space-y-6 text-gray-300 font-medium leading-relaxed text-lg">
                  <p>
                    In rural and peri-urban Rwanda, households and different public places like markets are surrounded by organic wastes potential, yet over  <span className="text-white font-bold">70% of kitchens</span> remain filled with acrid smoke,  a sustainable solution to close this problem is through utilizing waste to fuel the kitchen.
                  </p>
                  <p>
                  Traditional waste to energy solutions have historically failed the people they intended to serve due to high upfront installation cost of digesters or after installation technical failure due to lack of after sale technical follow up, forces families to spend a massive portion of their income on fuels that are costly, harm their health and the environment.
                  </p>
                </div>
              </div>

              {/* THE SOLUTION */}
              <div className="bg-white p-10 lg:p-20 flex flex-col justify-center border-l border-gray-100">
                <div className="flex items-center space-x-4 mb-8">
                  
                  <h2 className="montserrat-bold text-2xl tracking-[0.3em] uppercase text-[#002868]">The Solution</h2>
                </div>
                <div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg">
                  <p>
                    Green Fuel pioneers the <span className="text-green-700 font-bold italic">Biogas-as-a-Service</span> model. We provide safe, affordable biogas through a digital <strong>"pay-as-you-cook"</strong> approach, restoring dignity to the kitchen while creating jobs and abating thousand of emissions.
                  </p>
                  <p>
                    By eliminating installation costs and using smart-meter technology, we offer a cooking alternative that is convenient, safe, economically beneficial for the users and for their respiratory health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPARISON - Full Image Visibility */}
        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
             <div className="text-center mb-12">
                <h3 className="montserrat-bold text-3xl text-[#002868] uppercase tracking-tighter">Energy Transformation</h3>
             </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="aspect-video w-full overflow-hidden border border-gray-200">
                  <img src="/beforegreenergy.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Before" />
                </div>
                <div className="mt-4">
                  <p className="montserrat-bold text-[#002868] text-lg uppercase tracking-widest">Before Green Fuel</p>
                  <p className="text-gray-500 font-bold italic text-sm mt-1 uppercase">Energy poverty & unhealthy environments.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-video w-full overflow-hidden border border-gray-200">
                  <img src="/bg5.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="After" />
                </div>
                <div className="mt-4">
                  <p className="montserrat-bold text-green-700 text-lg uppercase tracking-widest">With Green Fuel</p>
                  <p className="text-gray-500 font-bold italic text-sm mt-1 uppercase">Sustainable communities & energy independence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CORE VALUES */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h3 className="montserrat-bold text-4xl lg:text-5xl text-[#002868] mb-16 uppercase">Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: "Innovation", desc: "We make biogas affordable and accessible for everyone through onsite installed digester and biogas storage powered by modern scalable digital technologies. " },
                { icon: Users, title: "Equity", desc: "Our commitment is to making clean energy affordable for the lowest-income households through flexible payments." },
                { icon: Leaf, title: "Sustainability", desc: "We Turns the circular economy into a reality through waste-to-energy." },
                { icon: Heart, title: "Reliability", desc: "we provide on time, quality, and guaranteed service through the installation or distribution." }
              ].map((val, i) => (
                <div key={i} className="bg-white p-10 shadow-lg border-b-4 border-green-600 group">
                  <val.icon className="h-10 w-10 mb-6 mx-auto text-green-700" />
                  <h4 className="montserrat-bold text-lg text-[#002868] mb-4 uppercase tracking-widest">{val.title}</h4>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed uppercase">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: MISSION & VISION */}
        <section className="bg-[#001a3d] text-white py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <Target className="h-14 w-14 text-green-500" />
              <h3 className="montserrat-bold text-3xl tracking-widest uppercase">Our Mission</h3>
              <p className="text-xl font-medium text-gray-300 leading-relaxed">
                Transforming lives through clean and affordable cooking energy access made from our local resources.
              </p>
            </div>
            <div className="space-y-6">
              <Eye className="h-14 w-14 text-green-500" />
              <h3 className="montserrat-bold text-3xl tracking-widest uppercase">Our Vision</h3>
              <p className="text-xl font-medium text-gray-300 leading-relaxed">
                A leading cooking energy trusted partner for households in Africa.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR STORY */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="montserrat-bold text-4xl lg:text-6xl text-[#002868] uppercase tracking-tighter">Our Story</h2>
              <div className="h-2 w-20 bg-green-500 mx-auto mt-6" />
            </div>

            <div className="prose prose-xl max-w-none montserrat font-medium text-gray-700 space-y-12 leading-relaxed">
              <p className="text-2xl lg:text-3xl montserrat-bold text-[#002868] border-l-8 border-green-600 pl-8">
                "Our journey began in 2024 in the Rwamagana District. After moving to a rural community, our founder witnessed the daily struggle of the 'fuel hunt.'"
              </p>
              
              <div className="space-y-8">
                <p>
                  While kitchens were filled with smoke, nearby markets and households backyards were filled with organic waste going to dumps. We realized the cooking energy crisis was not caused by a shortage of sources, but rather by outdated technology and an inability to efficiently capture and store energy.
                </p>
                <p>
                  Today, as an industry pioneer, we replace "broken" traditional models with a guaranteed service that makes clean cooking energy a <strong>right for everyone</strong>, not a luxury.
                </p>
                
                <div className="bg-[#001a3d] p-12 text-white shadow-2xl border-l-8 border-green-500">
                  <p className="text-xl lg:text-2xl font-bold italic uppercase tracking-tight">
                    "By deploying biogas as service model using digital technology, we have pioneered an innovative technology that guarantees clean, and affordable energy access for numbers of households and institutions, created green jobs, abate thousands tons of CO2 emissions in Rwanda."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}