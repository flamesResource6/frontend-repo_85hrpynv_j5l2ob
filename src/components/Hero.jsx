import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1614729939124-032a1760ce55?q=80&w=1920&auto=format&fit=crop"
          alt="Modern barbershop interior with chairs and mirrors"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Çukur Gents Salon – Premium Men’s Grooming in Jumeirah 1, Dubai
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-neutral-200">
            Haircuts, Beard & Shave, Styling – late until midnight
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md text-white bg-yellow-600 hover:bg-yellow-500 font-semibold shadow">
              Book Your Appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 font-medium">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
