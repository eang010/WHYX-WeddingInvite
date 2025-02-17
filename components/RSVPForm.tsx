import { useState } from 'react';

export default function RSVPForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg transform hover:scale-105 transition-all"
      >
        RSVP Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-100 p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-semibold mb-4">RSVP</h2>
            <p className="mb-4">Please fill out this form to let us know if you can attend our special day.</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf3jo4PNwKBQ8zRCnULlHKirRxsNo6oBnSf5_ith9VYFfjvHQ/viewform?embedded=true"
                width="100%"
                height="600px"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

