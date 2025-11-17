import { Instagram, Phone, MapPin } from 'lucide-react'

export default function Contact(){
  const phone = '+97145485332'
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g,'')}?text=Hi%20Çukur%20Gents%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment.`
  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Contact & Booking</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Palm Strip Mall, Jumeirah 1, Jumeirah Road, Dubai</p>
            <div className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
              <p className="flex items-center gap-2"><Phone size={18}/> <a href={`tel:${phone}`} className="hover:underline">+971 4 548 5332</a></p>
              <p className="flex items-center gap-2"><Instagram size={18}/> <a href="https://instagram.com/cukurgentssalon" className="hover:underline" target="_blank" rel="noreferrer">@cukurgentssalon</a></p>
              <p className="flex items-center gap-2"><MapPin size={18}/> Palm Strip Mall, Jumeirah 1, Dubai</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex px-5 py-3 rounded-md bg-green-600 hover:bg-green-500 text-white font-semibold">Book via WhatsApp</a>
              <a href="#services" className="inline-flex px-5 py-3 rounded-md bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white">View Services</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            <iframe title="Çukur Gents Salon Location" src="https://www.google.com/maps?q=Palm%20Strip%20Mall%20Jumeirah%201%20Dubai&output=embed" className="w-full h-[360px] md:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
