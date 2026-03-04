"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "GREEN FUEL LTD FEATURED IN WOMEN'S FORUM GLOBAL NETWORK",
      excerpt: "Green Fuel Ltd is showcased in the Women's Forum for the Economy & Society's global network, highlighting female entrepreneurship in clean energy from Rwanda to the world stage.",
      date: "2025-06-10",
      category: "",
      image: "/cloudewhite.jpg",
      featured: true,
      link: "https://www.linkedin.com/posts/women-s-forum-for-the-economy-and-society_womensforum-womenintech-globalnetwork-ugcPost-7354180062255935488-FeXk?utm_source=share&utm_medium=member_android&rcm=ACoAAFSda5kBMIWST1HV7svnZvc69P0AuiWJUHg",
    },
    {
      id: 3,
      title: "AWARD RECOGNITION FOR ENVIRONMENTAL IMPACT",
      excerpt: "Green Fuel Ltd receives recognition for outstanding contribution to environmental sustainability and community development in Rwanda.",
      date: "2024-12-20",
      category: "AWARDS",
      image: "/claudeaward.jpeg",
      link: "https://www.linkedin.com/posts/regional-leadership-center-east-africa_cohort60-designchallenge-yaliimpact-activity-7275516138782928898-zDPW?utm_source=share&utm_medium=member_android&rcm=ACoAAFSda5kBMIWST1HV7svnZvc69P0AuiWJUHg",
    },
    {
      id: 4,
      title: "NEW GEO-MEMBRANE TECHNOLOGY",
      excerpt: "Our latest geo-membrane biodigester technology delivers unprecedented efficiency improvements, making clean energy more accessible than ever.",
      date: "2026-01-10",
      category: "TECHNOLOGY",
      image: "/bg4.jpg",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "COMPANY NEWS": return "bg-green-700 text-white"
      case "AWARDS": return "bg-[#b08d57] text-white"
      case "TECHNOLOGY": return "bg-[#002868] text-white"
      default: return "bg-gray-800 text-white"
    }
  }

  const handleReadMore = (article: any) => {
    if (article.link) {
      window.open(article.link, '_blank', 'noopener,noreferrer')
    }
  }

  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .montserrat { font-family: 'Montserrat', sans-serif; }
        .montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 800; }
      `}</style>
      
      <Header />

      {/* IMPROVED TRANSPARENT BANNER */}
     <section className="relative h-[60vh] lg:h-[65vh] flex items-center justify-center overflow-hidden bg-[#001a3d]">
  {/* First Image - News/Landscape focus */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ 
      backgroundImage: "url('/Greenfuel_news.png')",
      animation: "slide-cycle 12s infinite" 
    }}
  />
  
  {/* Second Image - twogas.jpeg - Focused and "Pushed Back" */}
  <div 
    className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-0 scale-90"
    style={{ 
      backgroundImage: "url('/twogas.jpeg')", 
      animation: "slide-cycle 12s infinite 6s" 
    }}
  />

  {/* Overlay to unify the two different image styles */}
  <div className="absolute inset-0 bg-black/20" />

  {/* CSS for the smooth cross-fade and slight zoom */}
  <style>{`
    @keyframes slide-cycle {
      0%, 5% { opacity: 0; transform: scale(1.05); }
      10%, 45% { opacity: 1; transform: scale(1); }
      50%, 55% { opacity: 0; transform: scale(1.05); }
      100% { opacity: 0; }
    }
  `}</style>
</section>

      <main className="montserrat pt-24 pb-24 px-6 lg:px-12">
        {/* Featured Article Section */}
        {featuredArticle && (
          <section className="max-w-7xl mx-auto mb-24">
            <Card className="group relative overflow-hidden border-0 rounded-none shadow-2xl flex flex-col lg:flex-row h-full lg:min-h-[500px]">
              <div className="lg:w-1/2 relative min-h-[300px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2 bg-[#001a3d] p-10 lg:p-16 flex flex-col justify-center text-white">
                <Badge className={`${getCategoryColor(featuredArticle.category)} rounded-none mb-6 px-4 py-1 text-[10px] font-extrabold tracking-widest`}>
                  {featuredArticle.category}
                </Badge>
                <h3 className="text-2xl lg:text-4xl font-extrabold leading-tight mb-6 tracking-tighter">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-300 text-base lg:text-lg font-medium leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-4 mb-8 text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <Calendar className="h-4 w-4 text-green-500" />
                  <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                </div>
                <Button 
                  onClick={() => handleReadMore(featuredArticle)}
                  className="w-fit bg-green-700 text-white font-extrabold py-6 px-10 rounded-none tracking-widest uppercase hover:bg-white hover:text-[#001a3d] transition-all duration-300"
                >
                  READ FULL STORY <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </section>
        )}

        {/* Recent Updates Grid */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-xs font-extrabold tracking-[0.4em] text-green-700 uppercase mb-12">
            Recent Updates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularArticles.map((article) => (
              <Card key={article.id} className="group flex flex-col rounded-none border-0 bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(article.category)} rounded-none font-extrabold tracking-widest text-[9px] px-3 py-1`}>
                    {article.category}
                  </Badge>
                </div>
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center text-gray-400 text-[10px] font-extrabold tracking-widest mb-4">
                    <Calendar className="h-3 w-3 mr-2 text-green-600" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <CardTitle className="text-lg lg:text-xl font-extrabold text-[#002868] leading-tight tracking-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 flex-1">
                    {article.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    onClick={() => handleReadMore(article)}
                    className="p-0 h-fit text-green-700 font-extrabold tracking-widest text-[11px] uppercase group-hover:translate-x-2 transition-transform duration-300 flex items-center"
                  >
                    READ MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}