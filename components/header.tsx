"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "HOME", href: "/", active: true },
    { name: "ABOUT US", href: "/about" },
    { name: "OUR PRODUCTS", href: "/products" },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT US", href: "/contact" },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');
        
        .nav-text {
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.12em;
          font-size: 14px; /* Slightly increased for better visibility */
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/WhatsApp Image 2025-09-02 at 14.14.40_9618baaa.jpg"
              alt="Green Fuel Ltd"
              width={200}
              height={70}
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation Items - Extra Bold Styling */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-text font-extrabold transition-all duration-300 relative py-2
                  ${item.active 
                    ? 'text-[#b08d57]' 
                    : 'text-gray-900 hover:text-green-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Button - Bold & Solid */}
          <div className="hidden lg:block">
            <Link href="/products">
              <Button className="nav-text bg-green-700 text-white hover:bg-green-800 font-extrabold px-10 py-3 rounded-none transition-all duration-300 shadow-md">
                GET A QUOTE
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute left-0 w-full animate-in fade-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col p-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-text font-extrabold tracking-[0.2em]
                    ${item.active ? 'text-[#b08d57]' : 'text-gray-900'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-green-700 text-white rounded-none font-extrabold py-8 nav-text shadow-lg">
                GET QUOTE
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}