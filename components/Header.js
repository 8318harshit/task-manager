export default function Header() {
  return (
    <header className="bg-black fixed top-0 right-0 left-0 z-50 border-b border-gray-700 shadow-xl rounded-b-lg">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
            Task Tracker
        </h1>
        <p className="text-white font-medium text-sm sm:text-base m-0">
            Stay organised. Get things done.
        </p>
    </div>
    </header>
  )
}