import Link from 'next/link'
import FallingCoins from '@/components/effects/FallingCoins'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated coins background */}
        <FallingCoins />
        
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-green-500 mb-6 animate-fade-in">
            Welcome to Casino Night!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the thrill of casino games from the comfort of your home
          </p>
          <div className="space-x-4">
            <Link 
              href="/games" 
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Start Playing
            </Link>
            <Link 
              href="/about" 
              className="border border-green-500 text-green-500 hover:bg-green-500/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Slots', 'Blackjack', 'Roulette'].map((game) => (
              <div key={game} className="bg-gray-900 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">{game}</h3>
                <p className="text-gray-400 mb-4">
                  Try your luck at our exciting {game.toLowerCase()} games!
                </p>
                <Link 
                  href={`/games/${game.toLowerCase()}`}
                  className="text-green-500 hover:text-green-400"
                >
                  Play Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
