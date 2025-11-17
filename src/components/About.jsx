import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">About Us</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              At Çukur Gents Salon, located in Palm Strip Mall, Jumeirah 1, we specialise in modern men’s grooming – precision haircuts, beard styling/shaving, Turkish-style barber experience and attentive service. Convenient hours, skilled barbers and stylish ambiance.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>• Palm Strip Mall, Jumeirah Road, Dubai</li>
              <li>• Open late until midnight</li>
              <li>• Turkish-style grooming with modern techniques</li>
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop" alt="Barber team and salon exterior" className="w-full h-80 object-cover rounded-xl shadow-lg" />
            <div className="absolute -bottom-4 -right-4 hidden sm:block h-24 w-24 rounded-lg bg-gradient-to-br from-neutral-800 to-yellow-600/80 blur-xl opacity-60" aria-hidden></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
