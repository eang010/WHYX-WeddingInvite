"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MailOpenIcon as Envelope } from "lucide-react"
import RotatePhoneIndicator from "@/components/RotatePhoneIndicator"

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [showRotateIndicator, setShowRotateIndicator] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      if (isEnvelopeOpen && window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
        setShowRotateIndicator(true)
      } else {
        setShowRotateIndicator(false)
      }
    }

    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    
    return () => window.removeEventListener('resize', checkOrientation)
  }, [isEnvelopeOpen])

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(!isEnvelopeOpen)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-main-bg">
      {showRotateIndicator && <RotatePhoneIndicator />}
      <div className="text-center relative w-11/12 md:w-3/4 lg:w-2/3 aspect-[3/2] flex items-center justify-center">
        <div 
          className={`envelope-container relative w-full h-full before:content-[''] before:absolute before:inset-0 before:bg-[url('/background/envelopecover.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-90 before:z-20 ${isEnvelopeOpen ? 'before:opacity-0 before:invisible' : 'before:visible'}`}
          onClick={handleEnvelopeClick}
        >
          <div className={`envelope ${isEnvelopeOpen ? "open" : ""} relative z-10 bg-white`}>
            <div className="envelope-flap top"></div>
            <div className="envelope-flap left"></div>
            <div className="envelope-flap right"></div>
            <div className="envelope-flap bottom"></div>
            <div className="envelope-body"></div>
            <div className={`envelope-content ${isEnvelopeOpen ? "visible" : ""}`}>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-6 lg:mb-8">You're invited!</h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 lg:mb-10">by Weihao & Yuxin</p>
              <Link
                href="/invitation"
                className="inline-flex items-center bg-blue-300 text-white rounded-full hover:bg-blue-400 transition-colors duration-200 animate-pulse"
              >
                <button className="p-2 md:p-3 lg:p-4">
                  <Envelope className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </button>
                <span className="pr-4 md:pr-5 lg:pr-6 pl-2 text-base md:text-lg font-semibold">Click Here</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

