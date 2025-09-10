"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Settings, Wrench, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { BookingForm } from "./booking-form"

export function ProductsPreview() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number
    name: string
    price: string
    capacity: string
  } | null>(null)

  const handleBooking = (product: any, index: number) => {
    setSelectedProduct({
      id: index + 1,
      name: product.title,
      price: "Contact for pricing",
      capacity: product.title.includes("Installation") ? "All System Types" : "8-50 cubic meters",
    })
    setIsBookingOpen(true)
  }

  const products = [
    {
      title: "Geo-membrane Biodigester",
      description:
        "Removable, modular, easy to install and maintain biodigester systems made of high quality materials. Available in sizes from 8 to 50 cubic meters.",
      features: ["Removable & Modular", "Easy Installation", "8-50 Cubic Meters", "High Quality Materials"],
      icon: Settings,
      image: "/bg4.jpg",
      gradient: "from-green-500/20 to-emerald-600/20",
    },
    {
      title: "Fixed Dome Biodigester",
      description:
        "Built to last with concrete and stone construction. Simple and cost-effective bio-energy solution for homes and farms. Available in various sizes.",
      features: ["Concrete & Stone Build", "Cost Effective", "8-50 Cubic Meters", "Long Lasting"],
      icon: Settings,
      image: "/bg2.jpg",
      gradient: "from-blue-500/20 to-cyan-600/20",
    },
    {
      title: "Installation & Maintenance",
      description:
        "Comprehensive services including professional installation, regular monitoring, and proactive maintenance to keep systems running smoothly.",
      features: ["Professional Installation", "Regular Monitoring", "Proactive Maintenance", "Long-term Support"],
      icon: Wrench,
      image: "/installation.jpg",
      gradient: "from-orange-500/20 to-amber-600/20",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }, 19000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, products.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 transform transition-all duration-1000 ease-out">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-6 text-balance">
              Our Products and Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              Flexible bio-energy solutions tailored to your specific needs, from small households to large
              institutions.
            </p>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="group transform transition-all duration-700 ease-out hover:scale-105"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: "slideInUp 0.8s ease-out forwards",
                }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                        <product.icon className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {product.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>

                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600 transform transition-all duration-300 hover:translate-x-2"
                          style={{ animationDelay: `${index * 200 + idx * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 animate-pulse" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleBooking(product, index)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Place Order
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="lg:hidden mb-12">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {products.map((product, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`}></div>
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                              <product.icon className="h-8 w-8 text-green-600" />
                            </div>
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-gray-800">{product.title}</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>

                          <div className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3" />
                                {feature}
                              </div>
                            ))}
                          </div>

                          <Button
                            onClick={() => handleBooking(product, index)}
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800 shadow-lg"
                          >
                            Place Order
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {products.map((_, index) => (
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

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false)
          setSelectedProduct(null)
        }}
        selectedProduct={selectedProduct}
      />
    </>
  )
}
