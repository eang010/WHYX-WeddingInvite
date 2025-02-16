"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

const images = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
]

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    touchThreshold: 10,
  }

  return (
    <div className="bg-white bg-opacity-50 p-5 rounded-lg shadow-lg h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Wedding Gallery</h2>
      <div className="flex-grow">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="outline-none h-full">
              <div className="relative w-full h-0 pb-[60%]">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Wedding image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

