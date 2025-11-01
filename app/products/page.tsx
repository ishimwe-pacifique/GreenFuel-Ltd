"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Wrench,
  Zap,
  Droplets,
  Recycle,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect } from "react"
import { BookingForm } from "@/components/booking-form"

export default function ProductsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number
    name: string
    price: string
    capacity: string
  } | null>(null)

  const products = [
    {
      id: 1,
      name: "Green Fuel for Communities",
      description:
        "Green Fuel installs an all in one smart waste to gas underground and portable systems digester - installed with impurity gas purification and overall performance monitoring technology which provide household with clean, reliable cooking energy at all time of need.",
      features: [
        "Portable systems",
        "Installation 3 to 10 days",
        "Removable",
        "Available in sizes 8 to 180 cubic meters",
        "Easy to Installation",
        "High Quality Materials",
        "10 -15 years of use",
        "Underground system",
        "Installation 14 to a month",
        "Non - removable",
        "Concrete and Stone Build",
        "Cost Effective",
        "Available in size 8 – 50 Cubic Meters",
        "20 -25years of use",
      ],
      capacity: "",
      icon: Droplets,
      badge: "Most Popular",
      image: "/bg4.jpg",
      gradient: "from-green-500/20 to-emerald-600/20",
      installTime: "",
      systemTypes: {
        portable: {
          installation: "3 to 10 days",
          removable: "Removable",
          capacity: "8 to 180 cubic meters",
          materials: "High Quality Materials",
          lifespan: "10 -15 years of use"
        },
        underground: {
          installation: "14 to a month",
          removable: "Non - removable",
          capacity: "8 – 50 Cubic Meters",
          build: "Concrete and Stone Build",
          costEffective: "Cost Effective",
          lifespan: "20 -25years of use"
        }
      }
    },
    {
      id: 2,
      name: "Green Fuel for Institution",
      description: "Green Fuel installs an all in one smart waste to gas underground and portable systems digester - installed with impurity gas purification and overall performance monitoring technology which provide schools, and processing companies with affordable, clean, reliable cooking energy at all time of need.",
      features: [
        "Portable systems",
        "Removable",
        "Available in sizes 8 to 240 cubic meters",
        "Easy to Installation",
        "High Quality Materials",
        "10 -15 years of use",
        "Underground system",
        "Non - removable",
        "Concrete and Stone Build",
        "Cost Effective",
        "Available in size 8 – 200 Cubic Meters",
        "20 -25years of use",
      ],
      capacity: "",
      icon: Shield,
      badge: "Heavy Duty",
      image: "/greenfuelforInstutition.jpg",
      gradient: "from-blue-500/20 to-cyan-600/20",
      installTime: "",
      systemTypes: {
        portable: {
          removable: "Removable",
          capacity: "8 to 240 cubic meters",
          installation: "Easy to Installation",
          materials: "High Quality Materials",
          lifespan: "10 -15 years of use"
        },
        underground: {
          removable: "Non - removable",
          capacity: "8 – 200 Cubic Meters",
          build: "Concrete and Stone Build",
          costEffective: "Cost Effective",
          lifespan: "20 -25years of use"
        }
      }
    },
    {
      id: 3,
      name: "Green Fuel for reliance",
      description:
        "Through a flexible and affordable yearly subscription model. Green Fuel provide on time maintenance service keeping systems runs smoothly.",
      features: [
        "Flexible and affordable yearly subscription model",
        "On time maintenance service",
        "Keeping systems runs smoothly",
        "Regular system monitoring",
        "Performance optimization",
        "Technical support",
      ],
      capacity: "",
      icon: Wrench,
      badge: "Full Service",
      image: "/installationnew.jpg",
      gradient: "from-orange-500/20 to-amber-600/20",
      installTime: "",
    },
  ]

  const services = [
    {
      name: "Site Assessment",
      description: "Comprehensive evaluation of user’s location, type and quantity of waste generated every day to determine the optimal biodigester type and size needed.",
      icon: CheckCircle,
    },
    {
      name: "Professional Installation",
      description: "Our certified team of field technician installs the system with quality, efficiency and long lasting as fore front motivation.",
      icon: Wrench,
    },
    {
      name: "User Training",
      description: "Complete training on system handling ensuring correct rules of use are followed for optimal daily energy production.",
      icon: Zap,
    },
    {
      name: "Activation",
      description: "Daily cooking using the generated clean gas.",
      icon: Recycle,
    },
  ]

  const handleGetQuote = (product) => {
    setSelectedProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      capacity: product.capacity,
    })
    setIsBookingOpen(true)
  }

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

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-green-50/30 to-emerald-50/20">
      <Header />
      <PageBanner
        title=""
        subtitle=""
        backgroundImage="/WhatsApp Image 2025-09-05 at 20.02.47_3ec366e9.jpg"
      />

      <main className="pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-60 w-80 h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-emerald-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Featured Products Carousel */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Our Premium Solutions
              </h2>
              {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed font-medium">
                Discover our complete range of biodigester systems and services, designed to meet every energy need from
                households to large institutions.
              </p> */}
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Desktop Grid View */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
              {products.map((product, index) => {
                const IconComponent = product.icon
                return (
                  <Card
                    key={product.id}
                    className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`}></div>

                      {/* Icon Container */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                          <IconComponent className="h-8 w-8 text-green-600" />
                        </div>
                      </div>

                      {/* Badge */}
                      {product.badge && (
                        <Badge
                          className={`absolute top-4 right-4 shadow-lg font-semibold px-3 py-1 ${
                            product.badge === "Most Popular"
                              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                              : product.badge === "Heavy Duty"
                                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                                : "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                          }`}
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <CardHeader className="pb-4 relative z-10">
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-3">
                        {product.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium mb-4">{product.description}</p>

                      {/* Specifications */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500"></span>
                          <span className="font-semibold text-green-700">{product.capacity}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500"></span>
                          <span className="font-semibold text-blue-700">{product.installTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          {/* <span className="text-gray-500">Starting from:</span>
                          <span className="font-bold text-lg text-emerald-700">{product.price}</span> */}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 pt-0">
                      {product.systemTypes ? (
                        <div className="space-y-4 mb-6">
                          {/* Portable Systems */}
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                              Portable systems
                            </h4>
                            <div className="space-y-1 text-xs text-gray-600">
                              {product.id === 1 && (
                                <>
                                  <div>• Installation 3 to 10 days</div>
                                  <div>• Removable</div>
                                  <div>• Available in sizes 8 to 180 cubic meters</div>
                                  <div>• Easy to Installation</div>
                                  <div>• High Quality Materials</div>
                                  <div>• 10 -15 years of use</div>
                                </>
                              )}
                              {product.id === 2 && (
                                <>
                                  <div>• Removable</div>
                                  <div>• Available in sizes 8 to 240 cubic meters</div>
                                  <div>• Easy to Installation</div>
                                  <div>• High Quality Materials</div>
                                  <div>• 10 -15 years of use</div>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {/* Underground Systems */}
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                              Underground system
                            </h4>
                            <div className="space-y-1 text-xs text-gray-600">
                              {product.id === 1 && (
                                <>
                                  <div>• Installation 14 to a month</div>
                                  <div>• Non - removable</div>
                                  <div>• Concrete and Stone Build</div>
                                  <div>• Cost Effective</div>
                                  <div>• Available in size 8 – 50 Cubic Meters</div>
                                  <div>• 20 -25years of use</div>
                                </>
                              )}
                              {product.id === 2 && (
                                <>
                                  <div>• Non - removable</div>
                                  <div>• Concrete and Stone Build</div>
                                  <div>• Cost Effective</div>
                                  <div>• Available in size 8 – 200 Cubic Meters</div>
                                  <div>• 20 -25years of use</div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 mb-6">
                          {/* For Green Fuel for reliance - show both system support */}
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                              Portable systems maintenance
                            </h4>
                            <div className="space-y-1 text-xs text-gray-600">
                              <div>• Flexible yearly subscription model</div>
                              <div>• On time maintenance service</div>
                              <div>• Performance monitoring</div>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                              Underground system maintenance
                            </h4>
                            <div className="space-y-1 text-xs text-gray-600">
                              <div>• Comprehensive maintenance service</div>
                              <div>• Keeping systems runs smoothly</div>
                              <div>• Technical support</div>
                            </div>
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={() => handleGetQuote(product)}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardContent>

                    {/* Bottom accent line */}
                    <div
                      className={`absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 ${
                        index === 0
                          ? "bg-gradient-to-r from-green-500 to-emerald-600"
                          : index === 1
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                            : "bg-gradient-to-r from-orange-500 to-red-600"
                      }`}
                    ></div>
                  </Card>
                )
              })}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden mb-12">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {products.map((product, index) => {
                      const IconComponent = product.icon
                      return (
                        <div key={product.id} className="w-full flex-shrink-0 px-4">
                          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`}
                              ></div>
                              <div className="absolute top-4 left-4">
                                <div className="bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                                  <IconComponent className="h-8 w-8 text-green-600" />
                                </div>
                              </div>
                              {product.badge && (
                                <Badge
                                  className={`absolute top-4 right-4 shadow-lg font-semibold px-3 py-1 ${
                                    product.badge === "Most Popular"
                                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                                      : product.badge === "Heavy Duty"
                                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                                        : "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                                  }`}
                                >
                                  {product.badge}
                                </Badge>
                              )}
                            </div>

                            <CardHeader>
                              <CardTitle className="text-xl font-bold text-gray-800 mb-3">{product.name}</CardTitle>
                              <p className="text-gray-600 text-sm leading-relaxed font-medium mb-4">
                                {product.description}
                              </p>

                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-500">Capacity:</span>
                                  <span className="font-semibold text-green-700">{product.capacity}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  {/* <span className="text-gray-500">Starting from:</span>
                                  <span className="font-bold text-lg text-emerald-700">{product.price}</span> */}
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                              {product.systemTypes ? (
                                <div className="space-y-3">
                                  {/* Portable Systems */}
                                  <div className="bg-green-50 rounded-lg p-3">
                                    <h4 className="font-semibold text-green-800 mb-2 text-sm flex items-center">
                                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                      Portable systems
                                    </h4>
                                    <div className="space-y-1 text-xs text-gray-600">
                                      {product.id === 1 && (
                                        <>
                                          <div>• Installation 3 to 10 days</div>
                                          <div>• Removable</div>
                                          <div>• 8 to 180 cubic meters</div>
                                          <div>• 10 -15 years of use</div>
                                        </>
                                      )}
                                      {product.id === 2 && (
                                        <>
                                          <div>• Removable</div>
                                          <div>• 8 to 240 cubic meters</div>
                                          <div>• 10 -15 years of use</div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  
                                  {/* Underground Systems */}
                                  <div className="bg-blue-50 rounded-lg p-3">
                                    <h4 className="font-semibold text-blue-800 mb-2 text-sm flex items-center">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                                      Underground system
                                    </h4>
                                    <div className="space-y-1 text-xs text-gray-600">
                                      {product.id === 1 && (
                                        <>
                                          <div>• Installation 14 to a month</div>
                                          <div>• Non - removable</div>
                                          <div>• 8 – 50 Cubic Meters</div>
                                          <div>• 20 -25years of use</div>
                                        </>
                                      )}
                                      {product.id === 2 && (
                                        <>
                                          <div>• Non - removable</div>
                                          <div>• 8 – 200 Cubic Meters</div>
                                          <div>• 20 -25years of use</div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="space-y-3">
                                  <div className="bg-green-50 rounded-lg p-3">
                                    <h4 className="font-semibold text-green-800 mb-2 text-sm flex items-center">
                                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                      Portable systems maintenance
                                    </h4>
                                  </div>
                                  <div className="bg-blue-50 rounded-lg p-3">
                                    <h4 className="font-semibold text-blue-800 mb-2 text-sm flex items-center">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                                      Underground system maintenance
                                    </h4>
                                  </div>
                                </div>
                              )}

                              <Button
                                onClick={() => handleGetQuote(product)}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800 shadow-lg"
                              >
                                Get Quote
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      )
                    })}
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
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-r from-green-50/50 via-emerald-50/50 to-teal-50/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Installation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed font-medium">
                Complete end-to-end service from initial assessment to ongoing maintenance, ensuring your biodigester
                system performs optimally for years to come.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                const gradients = [
                  "from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200",
                  "from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200",
                  "from-yellow-100 to-orange-100 group-hover:from-yellow-200 group-hover:to-orange-200",
                  "from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200",
                ]
                const bottomGradients = [
                  "from-green-500 to-emerald-600",
                  "from-blue-500 to-cyan-600",
                  "from-yellow-500 to-orange-600",
                  "from-purple-500 to-pink-600",
                ]

                return (
                  <Card
                    key={index}
                    className="group text-center border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardContent className="p-8 lg:p-10 relative z-10">
                      <div
                        className={`bg-gradient-to-br ${gradients[index]} rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      >
                        <IconComponent className="h-12 w-12 text-black drop-shadow-sm" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium">{service.description}</p>
                    </CardContent>

                    <div
                      className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${bottomGradients[index]} group-hover:w-full transition-all duration-500`}
                    ></div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 shadow-2xl overflow-hidden relative">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
                  <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/25 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>

              <CardContent className="text-center p-12 lg:p-16 relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Energy Future?
                </h2>
                <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                  Contact us today for a free consultation and site assessment. Our experts will help you choose the
                  perfect biodigester solution for your specific needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setIsBookingOpen(true)}
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </Button>
                  <Button
                    onClick={() => setIsBookingOpen(true)}
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />

      {/* BookingForm Component */}
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
