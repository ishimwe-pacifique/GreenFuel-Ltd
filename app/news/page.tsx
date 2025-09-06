import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Leaf, Users, Award } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Green Fuel Ltd Expands Operations to Eastern Province",
      excerpt:
        "We're excited to announce the expansion of our biodigester installation services to the Eastern Province, bringing clean energy solutions to more rural communities.",
      date: "2024-08-15",
      readTime: "3 min read",
      category: "Company News",
      image: "/biodigester-installation-in-rural-area.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Partnership with Local Schools Brings Clean Energy to Education",
      excerpt:
        "Our new partnership program with local schools is providing sustainable energy solutions while creating educational opportunities about renewable energy.",
      date: "2024-07-28",
      readTime: "4 min read",
      category: "Partnerships",
      image: "/school-with-biodigester-system.jpg",
    },
    {
      id: 3,
      title: "Award Recognition for Environmental Impact",
      excerpt:
        "Green Fuel Ltd receives recognition for outstanding contribution to environmental sustainability and community development in Rwanda.",
      date: "2024-07-10",
      readTime: "2 min read",
      category: "Awards",
      image: "/environmental-award-ceremony.jpg",
    },
    {
      id: 4,
      title: "New Geo-membrane Technology Increases Efficiency by 30%",
      excerpt:
        "Our latest geo-membrane biodigester technology delivers unprecedented efficiency improvements, making clean energy more accessible than ever.",
      date: "2024-06-22",
      readTime: "5 min read",
      category: "Technology",
      image: "/advanced-biodigester-technology.jpg",
    },
    {
      id: 5,
      title: "Community Training Program Launches in Kigali",
      excerpt:
        "New comprehensive training program empowers local technicians with biodigester installation and maintenance skills, creating employment opportunities.",
      date: "2024-06-05",
      readTime: "3 min read",
      category: "Training",
      image: "/technical-training-session.jpg",
    },
    {
      id: 6,
      title: "1000th Biodigester Installation Milestone Reached",
      excerpt:
        "Celebrating a major milestone as we complete our 1000th biodigester installation, impacting thousands of lives across Rwanda.",
      date: "2024-05-18",
      readTime: "4 min read",
      category: "Milestones",
      image: "/celebration-milestone-biodigester.jpg",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Company News":
        return Leaf
      case "Partnerships":
        return Users
      case "Awards":
        return Award
      default:
        return Leaf
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Company News":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
      case "Partnerships":
        return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      case "Awards":
        return "bg-gradient-to-r from-yellow-500 to-orange-600 text-white"
      case "Technology":
        return "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
      case "Training":
        return "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
      case "Milestones":
        return "bg-gradient-to-r from-orange-500 to-red-600 text-white"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-600 text-white"
    }
  }

  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-green-50/30 to-emerald-50/20">
      <Header />

      <PageBanner
        title="Latest News & Updates"
        subtitle="Stay informed about our latest developments, partnerships, and impact in the clean energy sector across Rwanda and beyond."
        backgroundImage="/green-energy-biogas-plant-with-solar-panels.jpg"
      />

      <main className="pt-16 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-60 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  Featured Story
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full"></div>
              </div>

              <Card className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-full overflow-hidden">
                    <img
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Badge className={`absolute top-6 left-6 ${getCategoryColor(featuredArticle.category)} font-semibold px-3 py-1 shadow-lg`}>
                      {featuredArticle.category}
                    </Badge>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-balance group-hover:text-green-700 transition-colors duration-300 leading-tight">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 text-pretty leading-relaxed font-medium">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-8 space-x-6">
                        <div className="flex items-center">
                          <div className="bg-green-100 rounded-full p-1 mr-2">
                            <Calendar className="h-4 w-4 text-black" />
                          </div>
                          <span className="font-medium">{new Date(featuredArticle.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-blue-100 rounded-full p-1 mr-2">
                            <Clock className="h-4 w-4 text-black" />
                          </div>
                          <span className="font-medium">{featuredArticle.readTime}</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-20 bg-gradient-to-r from-green-50/50 via-emerald-50/50 to-teal-50/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Recent Updates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Discover our latest achievements, partnerships, and innovations in clean energy solutions
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => {
                const IconComponent = getCategoryIcon(article.category)
                return (
                  <Card key={article.id} className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Badge className={`absolute top-4 left-4 ${getCategoryColor(article.category)} font-semibold px-3 py-1 shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                        {article.category}
                      </Badge>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="pb-2 relative z-10">
                        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300 text-balance leading-tight">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="relative z-10">
                        <p className="text-gray-600 mb-6 text-pretty leading-relaxed font-medium">{article.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                          <div className="flex items-center">
                            <div className="bg-green-100 rounded-full p-1 mr-2">
                              <Calendar className="h-3 w-3 text-black" />
                            </div>
                            <span className="font-medium">{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-blue-100 rounded-full p-1 mr-2">
                              <Clock className="h-3 w-3 text-black" />
                            </div>
                            <span className="font-medium">{article.readTime}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full border-2 border-green-200 hover:border-green-400 hover:bg-green-50 font-semibold py-2 rounded-xl transition-all duration-300 group">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                      
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
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
                  <Leaf className="h-10 w-10 text-white drop-shadow-sm" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Stay Updated with Green Fuel
                </h2>
                <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                  Subscribe to our newsletter to receive the latest news, updates, and insights about clean energy
                  solutions and our impact in the community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                  />
                  <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </Button>
                </div>
                <p className="text-green-100/80 text-sm mt-4 font-medium">
                  Join 2,000+ subscribers already staying informed about clean energy innovations
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