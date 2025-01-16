import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-green-500">
            Casino Night!
          </Link>
          <nav>
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
              Play Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
