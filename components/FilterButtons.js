'use client'

export default function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 border-b border-gray-700 pb-5 mb-5">
      {['all', 'pending', 'completed'].map((option) => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-gray-400 transition-colors duration-200 text-sm sm:text-base capitalize ${
            filter === option
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-gray-300'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}