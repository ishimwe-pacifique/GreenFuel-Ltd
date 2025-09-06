import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-white p-3 rounded-lg inline-block">
              <Image
                src="/images/WhatsApp Image 2025-09-02 at 14.14.40_9618baaa.jpg"
                alt="Green Fuel Ltd"
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-base">
              Transforming waste into clean energy across Africa. Empowering communities with sustainable bio-energy
              solutions for a greener future.
            </p>
            <div className="flex space-x-3">
  <a href="https://www.facebook.com/share/1Eas7LWbMS/" target="_blank" rel="noopener noreferrer">
    <Button 
      size="sm" 
      variant="ghost" 
      className="text-white hover:bg-white/10 hover:text-green-400 transition-colors p-2 rounded-full"
    >
      <Facebook className="h-5 w-5" />
    </Button>
  </a>

  <a href="https://x.com/Green_Fuel_ltd?t=jPJ9BthQ-yDhUakdueeb9Q&s=09" target="_blank" rel="noopener noreferrer">
    <Button 
      size="sm" 
      variant="ghost" 
      className="text-white hover:bg-white/10 hover:text-green-400 transition-colors p-2 rounded-full"
    >
      <Twitter className="h-5 w-5" />
    </Button>
  </a>

  <a href="https://www.linkedin.com/company/green-fuel-ltd/" target="_blank" rel="noopener noreferrer">
    <Button 
      size="sm" 
      variant="ghost" 
      className="text-white hover:bg-white/10 hover:text-green-400 transition-colors p-2 rounded-full"
    >
      <Linkedin className="h-5 w-5" />
    </Button>
  </a>

  <a href="https://www.instagram.com/green_fuel_ltd?igsh=ZzJzaml0dHFhYWY=" target="_blank" rel="noopener noreferrer">
    <Button 
      size="sm" 
      variant="ghost" 
      className="text-white hover:bg-white/10 hover:text-green-400 transition-colors p-2 rounded-full"
    >
      <Instagram className="h-5 w-5" />
    </Button>
  </a>
</div>
</div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500"></div>
            </h3>
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-green-400 transition-colors text-base hover:translate-x-1 transform duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className="text-gray-300 hover:text-green-400 transition-colors text-base hover:translate-x-1 transform duration-200"
              >
                Our Products
              </Link>
              <Link 
                href="/news" 
                className="text-gray-300 hover:text-green-400 transition-colors text-base hover:translate-x-1 transform duration-200"
              >
                News & Updates
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-green-400 transition-colors text-base hover:translate-x-1 transform duration-200"
              >
                Contact Us
              </Link>
              <Link 
                href="/careers" 
                className="text-gray-300 hover:text-green-400 transition-colors text-base hover:translate-x-1 transform duration-200"
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Contact Info
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-gray-300 text-base">Nyagatare, Rwanda</span>
                  <p className="text-gray-400 text-sm mt-1">East Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-base">+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-base">info@greenfuel.rw</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Stay Updated
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500"></div>
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Subscribe to our newsletter for the latest updates on clean energy solutions and sustainability news.
            </p>
            <div className="space-y-4">
              <Input
                placeholder="Enter your email address"
                className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500 h-12"
              />
              <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors h-12 font-semibold">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-20 pt-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-lg mb-2">
                © 2025 Green Fuel Ltd. All rights reserved.
              </p>
              <p className="text-green-400 font-medium text-base">
                Empowering Africa with clean energy solutions 🌱
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-base">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200 text-center">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200 text-center">
                Terms of Service
              </Link>
              <Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200 text-center">
                Sustainability Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}