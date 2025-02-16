import { Calendar, Clock, MapPin, Heart } from "lucide-react"

export default function EventDetails({ eventDate }: { eventDate: Date }) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-SG", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Singapore",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-SG", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Singapore",
    })
  }

  const endTime = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000) // Event lasts 3 hours

  return (
    <div className="bg-white bg-opacity-50 p-5 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <Calendar className="mr-3 h-5 w-5 text-text" />
          <span>{formatDate(eventDate)}</span>
        </li>
        <li className="flex items-center">
          <Clock className="mr-3 h-5 w-5 text-text" />
          <span>
            {formatTime(eventDate)} - {formatTime(endTime)}
          </span>
        </li>
        <li className="flex flex-col">
          <div className="flex items-start">
            <MapPin className="mr-3 h-5 w-5 text-text mt-1" />
            <span>Singapore Marriott Tang Plaza Hotel</span>
          </div>
          <a
            href="https://goo.gl/maps/X7P5JvDQAKJ2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center px-3 py-1 bg-blue-300 text-white text-sm rounded-md hover:bg-blue-400 transition-colors duration-200 self-start ml-8"
          >
            <Heart className="w-3 h-3 mr-1 flex-shrink-0" />
            <span>Maps</span>
          </a>
        </li>
      </ul>
      <p className="mt-4">Mark your calendars! We're tying the knot and would love to have you there!</p>
    </div>
  )
}

