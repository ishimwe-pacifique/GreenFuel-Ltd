import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Target, Eye, Users, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-green-50/30 to-emerald-50/20">
      <Header />
      <PageBanner
        title="Green Fuel"
        subtitle="A Rwandan social enterprise dedicated to providing clean, sustainable energy solutions"
        backgroundImage="/installation.jpg"
      />

      <main className="pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-60 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Why Bio-Energy */}
        <section className="py-20 bg-gradient-to-r from-green-50/50 via-emerald-50/50 to-teal-50/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Why Bio-Energy?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed font-medium">
                Bio-energy represents the future of sustainable power generation, turning organic waste into clean,
                renewable energy.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
              <Card className="group border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="/beforegreenergy.jpg"
                    alt="Environmental challenges before green energy adoption"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-orange-900/40 to-red-900/60 flex items-end">
                    <div className="p-8 text-white w-full">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-red-200 transition-colors duration-300">
                        Before Green Fuel
                      </h3>
                      <p className="text-red-100 leading-relaxed font-medium">
                        Environmental degradation, energy poverty, and unsustainable practices affecting communities
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-orange-600 group-hover:w-full transition-all duration-500"></div>
              </Card>

              <Card className="group border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="/bg5.jpg"
                    alt="Positive impact after green energy adoption"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-emerald-900/40 to-teal-900/60 flex items-end">
                    <div className="p-8 text-white w-full">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-200 transition-colors duration-300">
                        After Green Fuel
                      </h3>
                      <p className="text-green-100 leading-relaxed font-medium">
                        Clean environment, sustainable communities, and energy independence for all
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              <Card className="group text-center border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 lg:p-10 relative z-10">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-green-200 group-hover:to-emerald-200 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Leaf className="h-12 w-12 text-black drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-green-700 transition-colors duration-300">
                    Environmental Impact
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Reduces greenhouse gas emissions and converts organic waste into valuable energy, creating a
                    circular economy model.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>

              <Card className="group text-center border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 lg:p-10 relative z-10">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-200 group-hover:to-teal-200 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Users className="h-12 w-12 text-black drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                    Community Benefits
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Provides affordable energy access to rural communities while creating local employment opportunities
                    and economic growth.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>

              <Card className="group text-center border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 lg:p-10 relative z-10">
                  <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-teal-200 group-hover:to-cyan-200 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Lightbulb className="h-12 w-12 text-black drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-teal-700 transition-colors duration-300">
                    Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Cutting-edge bio-digester technology that maximizes energy output while minimizing maintenance and
                    operational costs.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              {/* <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Vision & Mission
              </h2> */}
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <Card className="group border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 mr-4 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                      <Eye className="h-10 w-10 text-black drop-shadow-sm" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    To be the leading provider of sustainable energy solutions in Africa, transforming waste into
                    valuable resources while protecting our environment for future generations.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>

              <Card className="group border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-4 mr-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300">
                      <Target className="h-10 w-10 text-black drop-shadow-sm" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    To provide affordable, clean energy solutions through bio-digester technology, empowering
                    communities while reducing environmental impact and promoting sustainable development.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="h-12 w-12 text-black drop-shadow-sm" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-600 mx-auto rounded-full"></div>
              </div>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
                <CardContent className="p-10 lg:p-16">
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                    <p className="text-xl leading-relaxed font-medium first-letter:text-6xl first-letter:font-bold first-letter:text-green-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      Green Fuel Ltd was founded with a simple yet powerful vision: to transform the way Africa
                      generates and consumes energy. Born from the recognition that traditional energy sources are both
                      environmentally harmful and economically unsustainable for many communities, we set out to create
                      a better solution.
                    </p>

                    <div className="border-l-4 border-green-500 pl-6 bg-green-50/50 py-4 rounded-r-lg">
                      <p className="text-lg leading-relaxed font-medium">
                        Our journey began in Nyagatare-Rwanda, where we witnessed firsthand the challenges faced by
                        households and institutions in accessing clean, affordable energy. Through extensive research
                        and development, we developed innovative bio-digester systems that convert organic waste into
                        clean biogas and valuable fertilizer.
                      </p>
                    </div>

                    <p className="text-lg leading-relaxed font-medium">
                      Today, we continue to expand our impact across Rwanda, helping communities achieve energy
                      independence while protecting the environment. Every installation represents not just a
                      technological solution, but a step toward a more sustainable and prosperous future for all.
                    </p>
                  </div>

                  {/* Call-to-action highlight */}
                  <div className="mt-12 p-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-center shadow-xl">
                    <p className="text-xl font-semibold text-white mb-2">
                      Join us in building a sustainable future for Africa
                    </p>
                    <p className="text-green-100 font-medium">
                      Together, we can transform waste into wealth and communities into champions of clean energy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
