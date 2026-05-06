"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // High-end scroll interaction for a sleek UI
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "OUR PRODUCTS", href: "/products" },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT US", href: "/contact" },
  ]

  return (
    <header 
      className={`sticky top-0 z-[100] transition-all duration-700 ${
        scrolled ? "bg-white/95 shadow-sm py-2" : "bg-white py-5"
      } border-b border-gray-50`}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');
        
        .header-font {
          font-family: 'Montserrat', sans-serif;
        }
        
        .nav-item {
          font-weight: 900;
          letter-spacing: 0.18em;
          font-size: 12.5px;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center">
          
          {/* Logo Section - Scaled for Clarity */}
          <Link href="/" className="relative z-10 transition-transform duration-500 hover:scale-[1.02] active:scale-95">
            <Image
              src="/images/WhatsApp Image 2025-09-02 at 14.14.40_9618baaa.jpg"
              alt="Green Fuel Ltd"
              width={180}
              height={50}
              className={`object-contain transition-all duration-500 ${scrolled ? 'h-12' : 'h-16'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation - Ultra-Clean Grid */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`header-font nav-item transition-all duration-300 relative py-1 group
                    ${isActive ? 'text-[#b08d57]' : 'text-[#001a3d] hover:text-[#b08d57]'}`}
                >
                  {item.name}
                  {/* Flat Horizontal Bar Indicator */}
                  <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#b08d57] transition-all duration-500 
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full group-hover:opacity-50'}`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Call to Action - Bold Forest Green */}
          <div className="hidden lg:block">
            <Link href="/products">
              <Button className="header-font nav-item bg-[#1a4d2e] hover:bg-[#2d6a4f] text-white px-10 py-7 rounded-none border-none transition-all duration-500 hover:shadow-[0_8px_30px_rgb(26,77,46,0.15)]">
                MAKE AN ORDER
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="lg:hidden p-2 text-[#001a3d] hover:text-green-600 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
          </button>
        </div>

        {/* Mobile Dropdown - Optimized Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute left-0 w-full bg-white border-t border-gray-100 shadow-2xl pt-4 pb-12"
            >
              <nav className="flex flex-col px-10 space-y-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`header-font nav-item text-xl tracking-[0.25em]
                      ${pathname === item.href ? 'text-[#b08d57]' : 'text-[#001a3d]'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="header-font nav-item bg-[#1a4d2e] text-white rounded-none py-8 tracking-[0.3em] text-sm mt-4">
                  MAKE AN ORDER
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}