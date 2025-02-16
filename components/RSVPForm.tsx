export default function RSVPForm() {
  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-semibold mb-4">RSVP</h2>
      <p className="mb-4">Please fill out this form to let us know if you can attend our special day.</p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf3jo4PNwKBQ8zRCnULlHKirRxsNo6oBnSf5_ith9VYFfjvHQ/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}

