"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutUsSection() {
  return (
    <section className="relative w-full bg-white py-12 lg:py-16 overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
        .montserrat-medium { font-family: 'Montserrat', sans-serif; font-weight: 600; }
      `}</style>

      <div className="w-full max-w-[1400px] mx-auto px-6">
        {/* Flat Corporate Unit - Reduced Height and No Shadows */}
        <div className="flex flex-col lg:flex-row items-stretch bg-[#001a3d] border border-gray-100">
          
          {/* Image Side - Focused and Flat */}
          <div className="relative w-full lg:w-1/2 min-h-[300px] lg:h-[500px]">
            <Image
              src="/aboutbanner.png"
              alt="Green Fuel Onsite Installation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Side - Flat Text Layout with No Extra Spacing */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
             

                {/* Primary Paragraph - Exact Content */}
                <h2 className="montserrat-bold text-lg lg:text-xl text-white leading-snug">
                  Green Fuel empowers households and schools in rural and peri urban areas of Rwanda with affordable, clean cooking gas made from local organic wastes, improving health through clean cookings, save 60% of cooking fuel expenses, reduces emissions by diverting organic wastes from open dumping and forest cutting for cooking while also creating jobs for women and youths.
                </h2>
                
                {/* Flat Green Divider */}
                <div className="h-1 w-12 bg-green-500" />

                {/* Body Text - Exact Content */}
                <div className="montserrat-medium text-gray-300 text-sm lg:text-base leading-relaxed">
                  <p>
                    We make cooking experience affordable, healthy, convenient and reliable for our customers through onsite installed Biodigester or through cylinder stored Bio-gas.
                  </p>
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