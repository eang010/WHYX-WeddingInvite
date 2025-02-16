import { Smartphone } from "lucide-react"

export default function RotatePhoneIndicator() {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center md:hidden">
      <div className="text-center text-white p-6">
        <Smartphone className="w-12 h-12 mx-auto mb-4 animate-[rotate_2s_ease-in-out_infinite]" />
        <p className="text-lg font-medium">Please rotate your phone</p>
        <p className="text-sm text-white/80">For better viewing experience</p>
      </div>
    </div>
  )
} 