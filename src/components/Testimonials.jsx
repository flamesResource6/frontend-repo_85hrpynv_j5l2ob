export default function Testimonials(){
  const quotes = [
    { t: "Great service, closed at midnight made it easy after work.", a: "Omar" },
    { t: "Turkish shave was spot on. Clean and professional.", a: "James" },
    { t: "Nice ambience and skilled barbers. Will return.", a: "Ahmed" },
  ]
  return (
    <section id="reviews" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">What our clients say</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">We will add verified reviews soon.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6">
              <blockquote className="text-neutral-700 dark:text-neutral-300">“{q.t}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">— {q.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
