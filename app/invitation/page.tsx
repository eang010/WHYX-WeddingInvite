"use client"

import { useState } from "react"
import CountdownTimer from "../../components/CountdownTimer"
import EventDetails from "../../components/EventDetails"
import ImageCarousel from "../../components/ImageCarousel"
import RSVPForm from "../../components/RSVPForm"
import AudioPlayer from "../../components/AudioPlayer"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Invitation() {
  const [isExpanded, setIsExpanded] = useState(false)
  const eventDate = new Date("2025-11-09T12:00:00+08:00")

  return (
    <main className="min-h-screen text-text flex flex-col bg-main-bg">
      <AudioPlayer />
      <div className="flex-grow flex flex-col">
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            isExpanded ? "h-auto py-8" : "h-[70vh]"
          }`}
        >
          <div className="text-center">
            <h1 className="text-6xl font-normal mb-3">
              <span className="block">Save the Date</span>
            </h1>
            <h2 className="text-3xl mb-8 text-text/80 font-normal">
              You are cordially invited to the wedding of Weihao & Yuxin
            </h2>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </div>
        <div className="text-center py-4 sticky top-0 z-10 bg-main-bg">
          {!isExpanded && <p className="text-sm mb-2 text-blue-300">More info</p>}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-300 text-white p-2 rounded-full hover:bg-blue-400 transition-colors duration-200"
            aria-label={isExpanded ? "Hide event details" : "Show event details"}
          >
            <ChevronDown
              className={`w-8 h-8 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-auto flex-grow"
            >
              <div className="container mx-auto px-4 py-8 grid gap-8 min-h-full">
                <div className="grid md:grid-cols-10 gap-8">
                  <div className="md:col-span-4">
                    <EventDetails eventDate={eventDate} />
                  </div>
                  <div className="md:col-span-6">
                    <ImageCarousel />
                  </div>
                </div>
                <RSVPForm />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

