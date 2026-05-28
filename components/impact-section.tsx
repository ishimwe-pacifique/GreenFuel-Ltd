"use client";

import React, { useEffect, useState, useRef } from "react";
import { TreePine, Users, Briefcase, Recycle, Leaf, Wind, Flame, Zap, Factory } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// High-performance counter logic - updated to safely render units
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract leading number only, stopping at first non-numeric character
  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) motionValue.set(numericValue);
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Intl.NumberFormat("en-US").format(Math.floor(latest)));
    });
  }, [springValue]);

  // Safely grab units from strings like "720m3" or "20,736kg"
  const getUnit = () => {
    if (value.includes("m3")) return <span className="text-2xl lg:text-3xl ml-1 font-bold">m³</span>;
    if (value.includes("kg")) return <span className="text-2xl lg:text-3xl ml-1 font-bold">kg</span>;
    if (value.includes("+")) return "+";
    if (value.includes("%")) return "%";
    return "";
  };

  return (
    <span ref={ref}>
      {displayValue}
      {getUnit()}
    </span>
  );
};

export const ImpactSection = () => {
  const stats = [
    { label: "Biodigesters Installed", value: "6", icon: Zap },
    { label: "of biogas has been produced and used", value: "5760m3", icon: Flame },
    { label: "people benefitting from our reliable biogas", value: "50+", icon: Users },
    { label: "Trees have been saved", value: "720", icon: TreePine },
    { label: "tones of C02 emissions have been avoided by replacing firewood use with Biogas", value: "18", icon: Factory },
    { label: "of methane emission avoided", value: "20736kg", icon: Wind },
    { label: "Jobs created", value: "12", icon: Briefcase },
  ];

  return (
    <section className="relative w-full bg-[#001a3d] overflow-hidden py-16">
      {/* Background Image - Flat & Solid Tint */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-10"
        style={{ backgroundImage: "url('/contactimage.jpeg')" }}
      />
      
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6">
        {/* Centralized Header - Flat Style */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="montserrat-bold text-white text-3xl lg:text-5xl tracking-tighter uppercase">
            Green Fuel In <span className="text-green-500">Impact</span>
          </h2>
          <div className="h-1 w-16 bg-green-500 mt-4" />
        </div>

        {/* Flat Grid - Using sharp borders and solid colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-8 lg:p-12 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <stat.icon className="h-6 w-6 text-green-500" />
                
                <div>
                  <div className="text-white text-4xl lg:text-5xl font-extrabold tracking-tighter mb-2">
                    <Counter value={stat.value} />
                  </div>
                  
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-[200px] mx-auto">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};