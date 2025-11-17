export default function Gallery(){
  const imgs = [
    'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1619781696084-6afb81b36b6c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610768764270-9c791f6604d1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582095133179-2988d1cf23a0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519415943484-9fa18778d2d1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604709177225-055f99402ea6?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <section id="gallery" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">See our work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Cuts, beard trims and salon interiors.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img src={src} alt={`Barber portfolio ${i+1}`} className="h-full w-full object-cover hover:scale-105 transition" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
