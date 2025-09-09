"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Marie Uwimana",
      role: "Household Owner",
      location: "Kigali, Rwanda",
      image: "/man-avatar-image-for-profile-png.webp",
      rating: 5,
      quote:
        "Green Fuel's biodigester has completely transformed our daily life. We save money on cooking gas and our kitchen is much cleaner without smoke. The installation team was professional and the system works perfectly.",
      highlight: "Saves 80% on cooking costs",
    },
    {
      name: "Jean Baptiste Nzeyimana",
      role: "Farm Owner",
      location: "Musanze, Rwanda",
      image: "/OIP.webp",
      rating: 5,
      quote:
        "The biodigester not only provides clean energy for our farm operations but also produces excellent fertilizer for our crops. Our harvest has increased by 40% since we started using the bio-slurry.",
      highlight: "40% increase in crop yield",
    },
    {
      name: "Sister Agnes Mukamana",
      role: "School Administrator",
      location: "Huye, Rwanda",
      image: "/OIP (1).webp",
      rating: 5,
      quote:
        "Our school kitchen now runs on clean biogas, feeding 300 students daily. The children no longer suffer from smoke-related health issues, and we've reduced our energy costs significantly.",
      highlight: "Serves 300+ students daily",
    },
    {
      name: "Emmanuel Habimana",
      role: "Restaurant Owner",
      location: "Butare, Rwanda",
      image: "/pacifique.jpg",
      rating: 5,
      quote:
        "Since installing the biodigester system, our restaurant operates more efficiently. The consistent gas supply helps us serve customers better, and the cost savings have improved our profit margins.",
      highlight: "Consistent energy supply",
    },
    {
      name: "Grace Nyirahabimana",
      role: "Community Leader",
      location: "Nyagatare, Rwanda",
      image: "/man-avatar-image-for-profile-png.webp",
      rating: 5,
      quote:
        "Green Fuel has empowered our entire community. Twenty families now have biodigesters, creating local jobs and reducing our environmental impact. It's a true success story.",
      highlight: "20 families empowered",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium border border-green-200">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Customer Stories
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Real stories from families and businesses who have transformed their lives with clean bio-energy.
          </motion.p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote className="h-12 w-12 text-green-600" />
                </div>

                <CardContent className="p-8 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1 text-lg italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Highlight */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium rounded-full border border-green-200">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover border-2 border-green-200"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-green-600 font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover effect border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 w-0 group-hover:w-full transition-all duration-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider */}
        <div className="lg:hidden mb-12">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                      <CardContent className="p-6">
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-700 leading-relaxed mb-4 text-base italic">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Highlight */}
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-medium rounded-full">
                            {testimonial.highlight}
                          </span>
                        </div>

                        {/* Author */}
                        <div className="flex items-center space-x-3">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover border-2 border-green-200"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-green-600 text-sm font-medium">{testimonial.role}</p>
                            <p className="text-gray-500 text-xs">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              →
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join Our Happy Customers</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
