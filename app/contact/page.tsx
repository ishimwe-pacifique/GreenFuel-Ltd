import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Kigali, Rwanda", "Eastern Province Office", "Available Nationwide"],
      color: "from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+250 788 123 456", "+250 722 987 654", "Emergency: +250 700 111 222"],
      color: "from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@greenfuel.rw", "sales@greenfuel.rw", "support@greenfuel.rw"],
      color: "from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency Only"],
      color: "from-orange-100 to-red-100 group-hover:from-orange-200 group-hover:to-red-200"
    },
  ]

  const services = [
    "Site Assessment & Consultation",
    "Biodigester Installation",
    "Maintenance & Repair Services",
    "Training & Technical Support",
    "Custom Solutions Design",
    "Emergency Services",
  ]

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Typical installation takes 3-5 days depending on the system size and site conditions. We handle all aspects from excavation to final testing."
    },
    {
      question: "What maintenance is required?",
      answer: "Minimal maintenance is required. We provide comprehensive training and offer annual maintenance packages to ensure optimal performance."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we work with various financing partners to make clean energy accessible. Contact us to discuss payment plans and financing options."
    },
    {
      question: "What warranty do you provide?",
      answer: "We offer comprehensive warranties: 10 years for geo-membrane systems and 25 years for fixed dome systems, plus ongoing technical support."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-green-50/30 to-emerald-50/20">
      <Header />

      <PageBanner
        title="Get In Touch"
        subtitle="Ready to transform your energy needs with clean, sustainable biodigester solutions? Contact our expert team for a free consultation and personalized quote."
        backgroundImage="/green-energy-biogas-plant-with-solar-panels.jpg"
      />

      <main className="pt-16 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-60 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Contact Form & Info */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Contact Our Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Ready to start your clean energy journey? Our team is here to help you every step of the way.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="group border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 rounded-2xl p-4 mr-4 transition-all duration-300 shadow-lg">
                      <MessageSquare className="h-8 w-8 text-black drop-shadow-sm" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      Send Us a Message
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 font-medium text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">First Name</label>
                      <Input 
                        placeholder="Enter your first name" 
                        className="border-2 border-gray-200 focus:border-green-400 rounded-xl py-3 px-4 font-medium transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">Last Name</label>
                      <Input 
                        placeholder="Enter your last name" 
                        className="border-2 border-gray-200 focus:border-green-400 rounded-xl py-3 px-4 font-medium transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="border-2 border-gray-200 focus:border-green-400 rounded-xl py-3 px-4 font-medium transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="border-2 border-gray-200 focus:border-green-400 rounded-xl py-3 px-4 font-medium transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Service Needed</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 focus:border-green-400 rounded-xl bg-white text-gray-800 font-medium transition-colors duration-300 focus:outline-none">
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project, location, and specific requirements..."
                      rows={4}
                      className="border-2 border-gray-200 focus:border-green-400 rounded-xl py-3 px-4 font-medium transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                    <Send className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
                    Reach out to us through any of the following channels. Our team is ready to assist you with all your
                    clean energy needs.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <Card key={index} className="group border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-start">
                            <div className={`bg-gradient-to-br ${info.color} rounded-2xl p-3 mr-4 mt-1 flex-shrink-0 transition-all duration-300 shadow-lg group-hover:scale-110`}>
                              <IconComponent className="h-6 w-6 text-black drop-shadow-sm" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">{info.title}</h3>
                              <div className="space-y-2">
                                {info.details.map((detail, detailIndex) => (
                                  <p key={detailIndex} className="text-gray-600 font-medium hover:text-green-600 transition-colors duration-200 cursor-default">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-r from-green-50/50 via-emerald-50/50 to-teal-50/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Find Us in Nyagatare
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Visit our offices or schedule an on-site consultation. We serve customers across Rwanda with
                professional installation and support services.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="h-96 lg:h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127176.36503314814!2d30.21157299999999!3d-1.3066894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dbced6dc7a3e37%3A0x7e7f5b45e8c5c3b1!2sNyagatare%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1693925847284!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-2 mr-3">
                      <MapPin className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Green Fuel Ltd</h4>
                      <p className="text-sm text-gray-600">Nyagatare, Rwanda</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Quick answers to common questions about our biodigester systems and services.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="group border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300 leading-tight">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                  
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 shadow-2xl overflow-hidden relative">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
                  <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/25 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              
              <CardContent className="text-center p-12 lg:p-16 relative z-10">
                <div className="bg-white/10 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                  <Send className="h-10 w-10 text-white drop-shadow-sm" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                  Join hundreds of satisfied customers who have transformed their energy needs with our sustainable
                  biodigester solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Schedule Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Download Brochure
                  </Button>
                </div>
                <p className="text-green-100/80 text-sm mt-6 font-medium">
                  Free consultation • No obligation • Expert advice
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}