"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#001a3d] text-white overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        
        .footer-font {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 footer-font">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Company Info */}
          <div className="space-y-8">
            <div className="bg-white p-4 inline-block shadow-xl">
              <Image
                src="/images/WhatsApp Image 2025-09-02 at 14.14.40_9618baaa.jpg"
                alt="Green Fuel Ltd"
                width={180}
                height={70}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 leading-relaxed font-medium text-sm">
             Transforming lives through affordable, clean cooking gas made from local organic wastes.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1Eas7LWbMS/" },
                { Icon: Twitter, href: "https://x.com/Green_Fuel_ltd?t=jPJ9BthQ-yDhUakdueeb9Q&s=09" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/green-fuel-ltd/" },
                { Icon: Instagram, href: "https://www.instagram.com/green_fuel_ltd?igsh=ZzJzaml0dHFhYWY=" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="bg-white/5 text-white hover:bg-green-600 hover:text-white transition-all p-2 rounded-none border border-white/10"
                  >
                    <social.Icon className="h-5 w-5" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-sm font-extrabold tracking-[0.3em] uppercase text-green-500">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-4">
              {["About Us", "Our Products", "News", "Contact Us"].map((link) => (
                <Link 
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "")}`} 
                  className="text-gray-300 hover:text-white transition-all text-xs font-bold tracking-widest uppercase hover:translate-x-2 transform duration-300"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-sm font-extrabold tracking-[0.3em] uppercase text-green-500">
              Get In Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-300 text-sm font-bold tracking-tight">Nyagatare, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-300 text-sm font-bold">+250 789 374 747</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-300 text-sm font-bold">info1.greenfuel@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-sm font-extrabold tracking-[0.3em] uppercase text-green-500">
              Newsletter
            </h3>
            <p className="text-gray-300 text-xs font-medium leading-relaxed">
              Stay updated with our latest sustainable energy solutions.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="EMAIL ADDRESS"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-green-500 rounded-none h-12 text-[10px] font-bold tracking-widest"
              />
              <Button className="w-full bg-green-600 text-white hover:bg-green-700 rounded-none h-12 text-[10px] font-extrabold tracking-[0.2em] uppercase transition-all shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">
              © 2026 Green Fuel Ltd. All rights reserved.
            </p>
            {/* <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase italic">
              Empowering Communities via Clean Energy solutions 🌱
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}