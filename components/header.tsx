"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]
  
  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Made more prominent */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/WhatsApp Image 2025-09-02 at 14.14.40_9618baaa.jpg"
              alt="Green Fuel Ltd"
              width={230}
              height={90}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-lg font-semibold">
              Get Quote
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mx-2 mt-4 text-lg font-semibold">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}