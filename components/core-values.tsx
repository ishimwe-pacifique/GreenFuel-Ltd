"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Shield, Users, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      title: "Impact Driven",
      description:
        "We are focused on cultivating positive change by lowering emission, making clean energy accessible while also creating green jobs.",
      color: "from-emerald-500 to-teal-600",
      image: "/rwanda-faustin-tuyambaze-credit-photo-unsplash.jpg",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Persistently seeking and implementing new solutions for clean energy access.",
      color: "from-amber-500 to-orange-600",
      image: "/rwanda-faustin-tuyambaze-credit-photo-unsplash.jpg",
    },
    {
      icon: Shield,
      title: "Ethical",
      description: "Trustworthy, transparency, reliable solution for peri-urban and rural community.",
      color: "from-blue-500 to-indigo-600",
      image: "/rwanda-faustin-tuyambaze-credit-photo-unsplash.jpg",
    },
    {
      icon: Users,
      title: "Social Inclusion",
      description: "We create opportunities; empower local underserved communities with clean energy access.",
      color: "from-purple-500 to-pink-600",
      image: "/rwanda-faustin-tuyambaze-credit-photo-unsplash.jpg",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description:
        "We provide clean energy that reduces pollution, protecting natural resources through innovative technology that turn waste into value.",
      color: "from-green-500 to-emerald-600",
      image: "/rwanda-faustin-tuyambaze-credit-photo-unsplash.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
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
        damping: 12,
        duration: 0.6,
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50 relative overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 text-balance"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Core Values
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The principles that guide our mission to transform waste into clean energy and empower communities across
            Africa.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative h-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/85 to-white/70 group-hover:from-white/90 group-hover:via-white/75 group-hover:to-white/60 transition-all duration-500" />
                </div>

                <CardContent className="p-8 relative z-10">
                  <motion.div
                    className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:bg-green-500 transition-all duration-300 border border-gray-100"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <value.icon className="h-10 w-10 text-black group-hover:text-white drop-shadow-sm transition-colors duration-300" />
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-green-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {value.title}
                  </motion.h3>

                  <motion.p
                    className="text-slate-700 leading-relaxed text-base group-hover:text-slate-800 transition-colors duration-300 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {value.description}
                  </motion.p>

                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color} w-0 group-hover:w-full transition-all duration-500`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
