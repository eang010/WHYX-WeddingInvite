"use client"

import { useEffect, useRef, useState } from "react"

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error)
        })
      }
    }

    // Try to play audio when component mounts
    playAudio()

    // Add event listener for user interaction
    const handleInteraction = () => {
      playAudio()
      document.removeEventListener("click", handleInteraction)
    }

    document.addEventListener("click", handleInteraction)

    return () => {
      document.removeEventListener("click", handleInteraction)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/Somewhere only we know.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 z-50 bg-blue-300 text-white p-2 rounded-full shadow-lg hover:bg-blue-400 transition-colors duration-200"
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
      </button>
    </>
  )
}

