import { Instagram } from 'lucide-react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-sm">© {year} Çukur Gents Salon – Jumeirah 1, Dubai</p>
        <a href="https://instagram.com/cukurgentssalon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-200 hover:text-white"><Instagram size={18}/> Instagram</a>
      </div>
    </footer>
  )
}
