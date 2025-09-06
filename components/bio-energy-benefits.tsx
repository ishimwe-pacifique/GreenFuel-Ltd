"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Leaf, DollarSign, Sprout, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function BioEnergyBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const benefits = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description:
        "Reduces greenhouse gas emissions by capturing methane from biodegradable wastes and turning it into useful cooking and lighting energy.",
      color: "text-green-600",
      bgImage: "/WhatsApp Image 2025-09-02 at 14.14.40_097bddf6.jpg",
      gradient: "from-emerald-500/20 to-green-600/20",
    },
    {
      icon: DollarSign,
      title: "Cost Saving",
      description:
        "Lowers household energy bills by providing renewable alternative on a long run, making clean energy affordable for everyone.",
      color: "text-green-600",
      bgImage: "/WhatsApp Image 2025-09-02 at 14.14.40_097bddf6.jpg",
      gradient: "from-yellow-500/20 to-green-600/20",
    },
    {
      icon: Sprout,
      title: "Agricultural Benefits",
      description:
        "The waste to energy transition generates very rich nutritious fertilizer as byproduct that boosts crop yields significantly.",
      color: "text-green-600",
      bgImage: "/WhatsApp Image 2025-09-02 at 14.14.40_097bddf6.jpg",
      gradient: "from-lime-500/20 to-green-600/20",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description:
        "Produces clean bio-energy that reduces indoor air pollution, improving respiratory health compared to firewood and charcoal fuels.",
      color: "text-green-600",
      bgImage: "/WhatsApp Image 2025-09-02 at 14.14.40_097bddf6.jpg",
      gradient: "from-pink-500/20 to-green-600/20",
    },
  ]

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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Leaf className="w-4 h-4 mr-2" />
              Sustainable Solutions
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 bg-clip-text text-transparent">
              Why Bio-Energy?
            </span>
          </h2>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover the transformative benefits of bio-energy for your family, community, and the environment.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`} />
                  <img
                    src={benefit.bgImage || "/placeholder.svg"}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white/90" />
                </div>

                <CardContent className="relative p-8 lg:p-10 h-full flex flex-col">
                  <div className="flex items-start space-x-6 mb-6">
                    <motion.div
                      className="relative flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <div className="relative bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100 group-hover:border-green-300 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-black group-hover:text-white transition-colors duration-300" />
                        <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <benefit.icon className="absolute inset-0 m-4 h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    <div className="flex-1 space-y-4">
                      <motion.h3
                        className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300"
                        layoutId={`title-${index}`}
                      >
                        {benefit.title}
                      </motion.h3>
                    </div>
                  </div>

                  <motion.p
                    className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300 flex-1"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {benefit.description}
                  </motion.p>

                  <motion.div
                    className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredIndex === index ? 1 : 0.7 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </CardContent>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More About Our Solutions</span>
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
