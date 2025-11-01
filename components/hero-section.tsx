"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Zap, Users } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const fullText = "Biodegradable waste to affordable, clean, and reliable cooking Energy for All"
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
    }, 1200)

    return () => clearInterval(interval)
  }, [currentWordIndex, words])

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(imageInterval)
  }, [backgroundImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-relaxed min-h-[160px] lg:min-h-[200px] text-center">
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
                      className="inline-block mr-2 transition-all duration-700 ease-in-out transform hover:scale-105 animate-fadeInUp"
                    >
                      {word}
                      {index < displayedText.split(" ").length - 1 ? " " : ""}
                    </span>
                  )
                })}
              <span className="animate-pulse text-green-400 transition-opacity duration-1000">|</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
