import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageBanner({ title, subtitle, backgroundImage = "/green-energy-biogas-plant-with-solar-panels.jpg" }: PageBannerProps) {
  return (
    <div className="relative h-48 md:h-60 overflow-hidden">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Green Fuel Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-5xl mx-auto">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full mb-4 border border-green-400/30">
            <div className="w-8 h-8 bg-green-400 rounded-full animate-pulse" />
          </div> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">{title}</h1>
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-green-100 leading-relaxed font-medium max-w-4xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
