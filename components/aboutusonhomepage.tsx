"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutUsSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
        .montserrat-medium { font-family: 'Montserrat', sans-serif; font-weight: 600; }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Unit - Sharp Edges for a Corporate, Professional Look */}
        <div className="flex flex-col lg:flex-row items-stretch shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">
          
          {/* Image Side - Maximum Clarity */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
            <Image
              src="/gas ishiga.jpeg"
              alt="Green Fuel Onsite Installation"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
          </div>

          {/* Content Side - Precise Text Usage Only */}
          <div className="w-full lg:w-1/2 bg-[#001a3d] p-10 lg:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {/* Provided Paragraph 1 */}
                <p className="montserrat-bold text-xl lg:text-2xl text-white leading-tight">
                  Green Fuel empowers households and institutions with affordable clean cooking gas made from local organic wastes, displacing smoky wood fuel dependency while also helping them save 60% of their cooking fuel costs.
                </p>
                
                {/* Minimalist Divider */}
                <div className="h-1 w-20 bg-green-500" />

                {/* Provided Body Text */}
                <div className="montserrat-medium text-gray-300 text-base lg:text-lg leading-relaxed space-y-6">
                  <p>
                    We make cooking experience healthy, convenient and reliable for our customers through onsite installed; digital monitored biodigesters or through cylinder stored bio-gas. 
                  </p>

                  {/* Closing Statement Highlighted in Green */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-green-400 font-extrabold text-sm lg:text-base tracking-wide italic">
                      Green Fuel was born to provide cleaner, affordable, healthier, sustainable cooking energy for everyone
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUsSection