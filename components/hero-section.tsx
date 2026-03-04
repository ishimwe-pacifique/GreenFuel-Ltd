"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const backgroundImages = [
    "/newsimages.jpeg",
    "/ishyiga gas.jpeg",
    "/WhatsApp Image 2025-09-05 at 20.02.47_3ec366e9.jpg",
    "/bg5.jpg",

  ]

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 6000)

    return () => clearInterval(imageInterval)
  }, [backgroundImages.length])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        
        .montserrat-hero {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes subtleFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-hero-card {
          animation: subtleFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Background Images - Full Visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2500ms] ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        }}
      />

      {/* Extremely light overlay for a professional clean look */}
      <div className="absolute inset-0 bg-white/5" />
{/* Premium Slim Bar Card */}
{/* Floating Compact Card - Designed to maximize image visibility */}
<div className="relative z-10 w-full px-4 animate-hero-card">
  <div className="
    max-w-3xl mx-auto
    bg-white/40
    backdrop-blur-sm
    py-8 md:py-10 px-8
    text-center
    border border-white/20
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
  ">
    
    <div className="space-y-4">
      {/* Scaled Down Headline */}
      <h1 className="montserrat-hero text-[#001a3d] text-xl md:text-3xl font-[800] leading-tight tracking-tight uppercase">
        Transforming lives through  <br /> 
       affordable, clean cooking gas
      </h1>
      
      {/* Slim Green Divider */}
      <div className="h-[2px] w-12 bg-blue-900 mx-auto" />
      
      {/* Optimized Subtext */}
      <p className="montserrat-hero text-[#001a3d]/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
        Made from local organic wastes
      </p>
    </div>
  </div>
</div>


       
    
    
    </section>
  )
}

export default HeroSection