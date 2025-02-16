import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Great_Vibes } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})

export const metadata: Metadata = {
  title: "Save the date",
  description: "Mark your calendars! We're tying the knot and would love to have you there!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${greatVibes.variable} min-h-screen`}>{children}</body>
    </html>
  )
}



import './globals.css'