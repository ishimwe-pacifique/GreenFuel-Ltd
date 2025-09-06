import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageBanner({ title, subtitle, backgroundImage = "/green-energy-biogas-plant-with-solar-panels.jpg" }: PageBannerProps) {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Green Fuel Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-balance">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-gray-200 text-pretty">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
