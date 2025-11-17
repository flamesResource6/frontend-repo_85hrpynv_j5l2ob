import { useEffect, useState } from 'react'
import { Instagram, Moon, Sun, Phone, MapPin, Clock } from 'lucide-react'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = stored ? stored === 'dark' : prefersDark
    setDark(shouldDark)
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neutral-800 to-yellow-600" aria-hidden></div>
            <div className="text-left leading-tight">
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">Çukur Gents Salon</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Jumeirah 1, Dubai</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">About</a>
            <a href="#services" className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Services</a>
            <a href="#gallery" className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Gallery</a>
            <a href="#reviews" className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Reviews</a>
            <a href="#contact" className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-300"><Clock size={14}/> Open until Midnight</span>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition"><Phone size={16}/> Book</a>
            <a href="https://instagram.com/cukurgentssalon" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"><Instagram size={18} /></a>
            <button onClick={toggleDark} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
