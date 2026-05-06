"use client";

import React from "react";
import { motion } from "framer-motion";

export const PartnersSection = () => {
  // Using only your three specific images
  const basePartners = [
    { name: "Partner 1", logo: "/pattern1.jpeg" },
    { name: "Partner 2", logo: "/pattern2.jpeg" },
    { name: "Partner 3", logo: "/pattern3.jpeg" },
  ];

  // Duplicate the array multiple times to ensure the track is long enough 
  // for a "hidden" reset during the infinite loop
  const partners = [...basePartners, ...basePartners, ...basePartners, ...basePartners];

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Side: Title with Vertical Divider (Matches image_d9eebc.png) */}
        <div className="flex items-center space-x-12 mb-10 md:mb-0">
          <h2 className="montserrat-bold text-[#2b6cb0] text-xl tracking-widest uppercase whitespace-nowrap">
            Our Partners
          </h2>
          <div className="hidden md:block h-24 w-[2px] bg-[#2b6cb0]/30" />
        </div>

        {/* Right Side: The Ultra-Slow Sliding Marquee */}
        <div className="relative w-full overflow-hidden ml-0 md:ml-12">
          {/* Edge Fading for a clean entrance/exit */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <motion.div 
            className="flex space-x-24 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 60, // Increased to 60s for extremely slow, imperceptible movement
              repeat: Infinity 
            }}
          >
            {partners.map((partner, i) => (
              <div key={i} className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 md:h-20 w-auto object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};