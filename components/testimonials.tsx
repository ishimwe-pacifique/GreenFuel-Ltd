"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "RUTAGENGWA PAUL",
      role: "Household Owner",
      location: "Nyatare, Rwanda",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Green Fuel's biodigester has completely transformed my family daily cooking life. The gas is affordable, we save money on cooking fuel everyday and use it for other self development activities; our kitchen is much cleaner without smoke. The installation team was professional and the system works perfectly.",
      highlight: "",
    },
    {
      name: "MERRY BAZIGA",
      role: "Mother",
      location: "Nyagatare District, Rwanda",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Before Green Fuel, I was trapped between the high cost of charcoal and the choking smoke of firewood. Now, that I use Green Fuel gas, my kitchen is clean, the air in the kitchen is clean and I save money every single day",
   
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
        .montserrat-medium { font-family: 'Montserrat', sans-serif; font-weight: 600; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* CAPITALIZED Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <h3 className="montserrat-bold text-4xl md:text-5xl text-[#002868] tracking-tighter uppercase">
            Testimonials
          </h3>
          <div className="h-1 w-20 bg-green-500 mt-6" />
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-white border border-gray-100 rounded-none shadow-sm hover:shadow-2xl transition-all duration-500 p-12 relative group">
                <Quote className="h-12 w-12 text-green-700/5 absolute top-8 right-8" />
                
                <CardContent className="p-0 flex flex-col h-full">
                  {/* BLUE STARS - Clean and Professional */}
                  <div className="flex mb-6 space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#002868] fill-current" />
                    ))}
                  </div>

                  <blockquote className="montserrat-medium text-xl italic text-gray-700 mb-10 leading-relaxed">
                    "{item.quote}"
                  </blockquote>

                  <div className="mt-auto flex items-center space-x-5">
                    <div className="h-14 w-14 rounded-none bg-gray-100 flex-shrink-0 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                       <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="montserrat-bold text-sm tracking-widest text-[#002868] uppercase">
                        {item.name}
                      </h4>
                      <p className="montserrat-bold text-[10px] text-green-700 mt-1 uppercase tracking-tighter opacity-70">
                        {item.role} • {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-50">
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Simplified Mobile View */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="bg-white border-0 rounded-none shadow-xl p-10 text-center">
                <div className="flex justify-center mb-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#002868] fill-current" />
                    ))}
                </div>
                <p className="montserrat-medium text-lg italic text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentSlide].quote}"
                </p>
                <h4 className="montserrat-bold text-[#002868] uppercase tracking-widest text-xs">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="montserrat-bold text-[9px] text-green-700 mt-1 uppercase tracking-widest opacity-60">
                  {testimonials[currentSlide].location}
                </p>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all duration-500 ${i === currentSlide ? 'w-8 bg-green-600' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}