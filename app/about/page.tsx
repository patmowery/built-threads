import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0a0a0a] py-28 px-4 text-center border-b border-white/10">
        <p className="text-[#c41e1e] text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] tracking-wider leading-none">
          BUILT WITH<br />PURPOSE
        </h1>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <div className="space-y-8 text-white/70 leading-relaxed text-lg">
          <p>
            Built Threads started with a simple frustration: premium quality shouldn't require premium compromise. Too many brands charge premium prices for average materials and lazy construction.
          </p>
          <p>
            We set out to fix that. Every piece in the Built Threads lineup is sourced from the best materials we can find, crafted by makers who share our obsession with quality, and designed to move with you — through the grind, the wins, and everything in between.
          </p>
          <p>
            No trends. No fast fashion. Just apparel that earns its place in your rotation and stays there.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#111] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl tracking-wider text-center mb-12">WHAT WE STAND FOR</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'QUALITY FIRST', desc: 'We don\'t cut corners. Every stitch, every thread is chosen for durability and feel.' },
              { title: 'BUILT TO MOVE', desc: 'Designed for real life. Whether you\'re training or traveling, our gear moves with you.' },
              { title: 'NO SHORTCUTS', desc: 'We take the long road every time. That\'s the only way to build something worth wearing.' },
            ].map(v => (
              <div key={v.title} className="border border-white/10 p-8">
                <div className="w-8 h-1 bg-[#c41e1e] mb-4" />
                <h3 className="font-display text-xl tracking-wider mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4">
        <h2 className="font-display text-4xl tracking-wider mb-6">READY TO WEAR IT?</h2>
        <Link href="/products" className="inline-block bg-[#c41e1e] text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-red-700 transition-colors">
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
