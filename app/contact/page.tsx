"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, HelpCircle, Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const contactTiles = [
    { icon: MapPin, label: "HEADQUARTERS", value: "Nyagatare, Kigali, Rwanda" },
    { icon: Phone, label: "DIRECT LINE", value: "+250 789 374 747" },
    { icon: Mail, label: "SUPPORT EMAIL", value: "info1.greenfuel@gmail.com" },
    { icon: Clock, label: "WORKING HOURS", value: "Mon - Sat: 8AM - 6PM" },
  ]

  const faqs = [
    {
      question: "How do I pay for the gas?",
      answer: "Green Fuel gas is accessible through a flexible, affordable pay-as-you-cook model. Our customers pay by cash or mobile money."
    },
    {
      question: "What happens if the system stops working?",
      answer: "Our Biodigester systems are digitally monitored allowing us to see the risks alerts in real time, enabling our team to act on time. "
    },
    {
      question: "Is it really cheaper than charcoal?",
      answer: "Yes. our customers has reported 60% savings on their monthly cooking expenses."
    },
    {
      question: " What are the requirements to get For Green Fuel solution?",
      answer: "A Rwandan ID Card or At least five year valid Passport, a table or stand at your place for stove installation. For Biodigester installation and monitoring we require you to be generating at least 20kg of organic waste daily."
    }
    //  {
    //   question: "Is your biogas really cheaper than charcoal?",
    //   answer: "Yes. On average, our customers save 60% on their monthly cooking expenses."
    // }
  ]

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .montserrat { font-family: 'Montserrat', sans-serif; }
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
        .tracking-ultra { letter-spacing: 0.4em; }
      `}</style>

      <Header />

      {/* IMPROVED TRANSPARENT BANNER */}
      <section className="relative h-[60vh] lg:h-[65vh] flex items-center justify-center overflow-hidden bg-[#001a3d]">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] hover:scale-105"
          style={{ backgroundImage: "url('/contactimage.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/15" />

      
      </section>

      <main className="montserrat">
        
        {/* SECTION 1: GLOBAL CONTACT BAR */}
        <section className="bg-[#001a3d] py-12 px-6 lg:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactTiles.map((tile, i) => (
              <div key={i} className="flex items-center space-x-4 border-l border-white/10 pl-6">
                <tile.icon className="h-6 w-6 text-green-500 shrink-0" />
                <div>
                  <p className="text-[10px] font-extrabold tracking-widest text-gray-400 uppercase">{tile.label}</p>
                  <p className="text-white font-bold text-xs mt-1">{tile.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: THE ENQUIRY HUB */}
        <section className="py-24 bg-white px-6 lg:px-12 text-center md:text-left">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden border border-gray-100">
              <div className="lg:w-2/5 relative min-h-[400px] bg-gray-900">
                <img src="/igare gas.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Green Fuel Tech" />
                <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
              
                </div>
              </div>

              <div className="lg:w-3/5 p-10 lg:p-20 bg-white">
                <h3 className="montserrat-bold text-3xl lg:text-4xl text-[#002868] uppercase tracking-tighter mb-10">Make an order with us</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-2 border-b-2 border-gray-100 focus-within:border-green-600 transition-colors">
                    <label className="text-[9px] font-extrabold tracking-widest text-gray-400 uppercase">First Name</label>
                    <Input className="border-0 shadow-none rounded-none px-0 h-10 font-bold text-gray-800 placeholder:text-gray-200" placeholder="NAME" />
                  </div>
                  <div className="space-y-2 border-b-2 border-gray-100 focus-within:border-green-600 transition-colors">
                    <label className="text-[9px] font-extrabold tracking-widest text-gray-400 uppercase">Email Address</label>
                    <Input className="border-0 shadow-none rounded-none px-0 h-10 font-bold text-gray-800 placeholder:text-gray-200" placeholder="EMAIL" />
                  </div>
                  <div className="md:col-span-2 space-y-2 border-b-2 border-gray-100 focus-within:border-green-600 transition-colors">
                    <label className="text-[9px] font-extrabold tracking-widest text-gray-400 uppercase">Subject</label>
                    <Input className="border-0 shadow-none rounded-none px-0 h-10 font-bold text-gray-800 placeholder:text-gray-200" placeholder="HOW CAN WE HELP?" />
                  </div>
                  <div className="md:col-span-2 space-y-2 border-b-2 border-gray-100 focus-within:border-green-600 transition-colors">
                    <label className="text-[9px] font-extrabold tracking-widest text-gray-400 uppercase">Message</label>
                    <Textarea className="border-0 shadow-none rounded-none px-0 font-bold text-gray-800 resize-none min-h-[100px] placeholder:text-gray-200" placeholder="TELL US ABOUT YOUR CHOICE YOU MADE TO OUR PRODUCTS..." />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <Button className="w-full bg-[#001a3d] hover:bg-green-700 text-white rounded-none py-8 font-extrabold tracking-[0.3em] uppercase transition-all shadow-xl">
                      Submit your order <Send className="ml-3 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="w-full h-[500px] px-6 lg:px-12 mb-24">
          <div className="max-w-7xl mx-auto h-full shadow-2xl overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127176.36503314814!2d30.21157299999999!3d-1.3066894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dbced6dc7a3e37%3A0x7e7f5b45e8c5c3b1!2sNyagatare%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1693925847284!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-[1.2] brightness-[0.9]"
            ></iframe>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-gray-50 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1 text-center md:text-left">
                <div className="bg-white p-10 shadow-xl border-l-8 border-green-600">
                  
                  <h3 className="montserrat-bold text-3xl text-[#002868] uppercase tracking-tighter mb-4">FREQUENTLY ASKED QUESTIONS</h3>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className={`transition-all duration-500 overflow-hidden border border-gray-200 ${activeFaq === i ? 'bg-[#002868] shadow-2xl translate-x-2' : 'bg-white hover:bg-gray-100'}`}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left outline-none">
                      <span className={`montserrat-bold text-sm tracking-widest uppercase transition-colors duration-300 ${activeFaq === i ? 'text-white' : 'text-[#002868]'}`}>
                        {faq.question}
                      </span>
                      {activeFaq === i ? <Minus className="h-4 w-4 text-green-400" /> : <Plus className="h-4 w-4 text-gray-400" />}
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                          <div className="px-8 pb-8">
                            <p className="text-gray-300 font-medium leading-relaxed text-base border-t border-white/10 pt-6">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}