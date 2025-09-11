"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Zap, Users } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const fullText = "Biodegradable waste to Clean, reliable energy right at the source"
  const words = fullText.split(" ")

  const backgroundImages = [
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg4.jpg",
    "/bg5.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        setDisplayedText((prev) => {
          const newText = prev + (prev ? " " : "") + words[currentWordIndex]
          return newText
        })
        setCurrentWordIndex((prev) => prev + 1)
      } else {
        setTimeout(() => {
          setDisplayedText("")
          setCurrentWordIndex(0)
        }, 3000)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [currentWordIndex, words])

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(imageInterval)
  }, [backgroundImages.length])

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        }}
      />

      <div className="absolute inset-0 bg-black/60 transition-all duration-1000 ease-in-out" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance min-h-[120px] lg:min-h-[180px]">
                <span className="inline-block">
                  {displayedText.length > 0 &&
                    displayedText.split(" ").map((word, index) => {
                      if (word === "right" || word === "at" || word === "the" || word === "source") {
                        return (
                          <span
                            key={`green-${word}-${index}`}
                            className="text-green-400 animate-pulse transition-all duration-500 ease-in-out"
                          >
                            {word}
                            {index < displayedText.split(" ").length - 1 ? " " : ""}
                          </span>
                        )
                      }
                      return (
                        <span
                          key={`white-${word}-${index}`}
                          className="inline-block mr-1 transition-all duration-700 ease-in-out transform hover:scale-105 animate-fadeInUp"
                        >
                          {word}
                          {index < displayedText.split(" ").length - 1 ? " " : ""}
                        </span>
                      )
                    })}
                  <span className="animate-pulse text-green-400 transition-opacity duration-1000">|</span>
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed text-pretty">
                Green Fuel Ltd is a social enterprise in Rwanda specialized in installing high-quality bio-digesters
                that convert biodegradable waste into clean, efficient bio-energy for household and institutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>

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
                  <p className="text-sm text-gray-200 mt-2">Empowering African communities with clean energy access and Job creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
