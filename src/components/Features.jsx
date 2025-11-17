import { MapPin, Clock, ShieldCheck, Sparkle } from 'lucide-react'

export default function Features(){
  const items = [
    { icon: MapPin, title: "Prime Location", text: "Located in Dubai’s Jumeirah 1 – Palm Strip Mall" },
    { icon: Clock, title: "Late Hours", text: "Open until midnight (Sat–Thu) & from 1:30 PM on Friday" },
    { icon: ShieldCheck, title: "Experienced Barbers", text: "Turkish-style grooming with modern techniques" },
    { icon: Sparkle, title: "Premium Ambience", text: "Relaxed, stylish environment dedicated to men’s grooming" },
  ]
  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Why Choose Us</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">We blend tradition with contemporary style.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, text}) => (
            <div key={title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
