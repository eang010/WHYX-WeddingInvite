"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    setTimeLeft(calculateTimeLeft()) // Initial calculation

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="bg-blue-100 bg-opacity-70 p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">We're tying the knot!</h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-white bg-opacity-60 p-3 rounded-md">
            <div className="text-3xl font-bold mb-1 text-blue-600">{value}</div>
            <div className="text-xs uppercase text-blue-800">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

