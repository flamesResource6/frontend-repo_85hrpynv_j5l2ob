import { Scissors, Beard, Sparkles, Palette } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Scissors,
    title: "Men’s Haircut & Styling",
    desc: "Precision clipper or scissor cut tailored to your style.",
  },
  {
    icon: Beard,
    title: "Beard Trim & Shave",
    desc: "Classic straight-razor shave with hot towel finish.",
  },
  {
    icon: Sparkles,
    title: "Men’s Facial / Grooming / Wax",
    desc: "Deep cleanse and rejuvenating treatments for fresh skin.",
  },
  {
    icon: Palette,
    title: "Hair Styling or Colour",
    desc: "Textured styling or subtle colour shades when applicable.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Our Services</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Professional grooming tailored for modern men.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({icon:Icon, title, desc}) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
