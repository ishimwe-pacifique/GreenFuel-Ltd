"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
// import Image from "next/image"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "RUTAGENGWA EMMANUEL",
      role: "Household Owner",
      location: "Nyatare, Rwanda",
      // image: "/rutagengwa.jpg",
      quote: "Green Fuel's biodigester has completely transformed my family daily cooking life. The gas is affordable, we save money on cooking fuel everyday and use it for other self development activities; our kitchen is much cleaner without smoke. The installation team was professional and the system works perfectly.",
    },
    {
      name: "MERRY BAZIGA",
      role: "Mother",
      location: "Nyagatare District, Rwanda",
      // image: "/baziga.jpg",
      quote: "Before Green Fuel, I was trapped between the high cost of charcoal and the choking smoke of firewood. Now, that I use Green Fuel gas, my kitchen is clean, the air in the kitchen is clean and I save money every single day",
    }
  ]

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-12 bg-white overflow-hidden border-t border-gray-100">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
        .montserrat-medium { font-family: 'Montserrat', sans-serif; font-weight: 600; }
      `}</style>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <h3 className="montserrat-bold text-xl md:text-2xl text-[#001a3d] tracking-widest uppercase">
            Testimonials
          </h3>
          <div className="h-0.5 w-10 bg-[#1a4d2e] mt-2" />
        </div>

        {/* 2-Column Flat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {testimonials.map((item, index) => {
            const isSelected = index === currentIndex;
            
            return (
              <div key={index} className="flex flex-col items-center text-center transition-all duration-500">
                
                {/* Flat Bubble */}
                <div className={`relative p-6 transition-all duration-500 mb-6 w-full ${
                  isSelected 
                  ? "bg-[#1a4d2e] text-white z-10" 
                  : "bg-gray-50 text-gray-400 opacity-60"
                }`}>
                  <Quote className={`h-4 w-4 mb-2 ${isSelected ? "text-white/30" : "text-gray-200"}`} />
                  <p className={`montserrat-medium leading-normal ${isSelected ? "text-[13px]" : "text-[11px]"}`}>
                    "{item.quote}"
                  </p>
                  
                  {/* Flat Pointer */}
                  {isSelected && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-green-600" />
                  )}
                </div>

                {/* Profile Section */}
                <div className={`transition-all duration-500 ${isSelected ? "opacity-100" : "opacity-40"}`}>
                 
                  <h4 className="montserrat-bold text-[#001a3d] text-[10px] tracking-widest uppercase">
                    {item.name}
                  </h4>
                  <p className="text-[#1a4d2e] text-[8px] font-bold uppercase mt-1">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-6 mt-10">
          <button 
            onClick={prevSlide} 
            className="p-2 border border-gray-200 text-[#001a3d] hover:bg-[#1a4d2e] hover:text-white hover:bg-[#1a4d2e] transition-all active:scale-90"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-1.5">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className={`h-0.5 transition-all duration-300 ${i === currentIndex ? 'w-6 bg-[#1a4d2e]' : 'w-2 bg-gray-200'}`} 
              />
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className="p-2 border border-gray-200 text-[#001a3d] hover:bg-[#1a4d2e] hover:text-white hover:border-[#1a4d2e] transition-all active:scale-90"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}