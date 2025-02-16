"use client"

import { useState } from "react"
import Link from "next/link"
import { MailOpenIcon as Envelope } from "lucide-react"

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(!isEnvelopeOpen)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-main-bg">
      <div className="text-center relative w-11/12 aspect-[3/2] flex items-center justify-center">
        <div 
          className={`envelope-container relative w-full h-full before:content-[''] before:absolute before:inset-0 before:bg-[url('/background/envelopecover.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-90 before:z-20 ${isEnvelopeOpen ? 'before:opacity-0 before:invisible' : 'before:visible'}`}
          onClick={handleEnvelopeClick}
        >
          <div className={`envelope ${isEnvelopeOpen ? "open" : ""} relative z-10`}>
            <div className="envelope-flap top"></div>
            <div className="envelope-flap left"></div>
            <div className="envelope-flap right"></div>
            <div className="envelope-flap bottom"></div>
            <div className="envelope-body"></div>
            <div className={`envelope-content ${isEnvelopeOpen ? "visible" : ""}`}>
              <h1 className="text-7xl font-semibold mb-8">You're invited!</h1>
              <p className="text-xl mb-10">by Weihao & Yuxin</p>
              <Link
                href="/invitation"
                className="inline-flex items-center bg-blue-300 text-white rounded-full hover:bg-blue-400 transition-colors duration-200 animate-pulse"
              >
                <button className="p-4">
                  <Envelope className="w-8 h-8" />
                </button>
                <span className="pr-6 pl-2 text-lg font-semibold">Click Here</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

