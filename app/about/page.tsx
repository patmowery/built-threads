import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0a0a0a] py-28 px-4 text-center border-b border-white/10">
        <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] tracking-wider leading-none">
          WE DON&apos;T MAKE<br />CLOTHING FOR<br />EVERYONE.
        </h1>
      </section>

      {/* Manifesto */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <div className="space-y-6 text-white/70 leading-relaxed text-lg">
          <p>
            Most people are waiting. Waiting for permission. Waiting for the right moment. Waiting for someone to hand them the life they want. BUILT THREADS isn&apos;t made for those people.
          </p>
          <p>
            This is for the ones who woke up one day and decided to stop asking. Who understood that nobody is coming — that the work, the sacrifice, the discipline, all of it lands on you and only you. That&apos;s not a burden. That&apos;s freedom.
          </p>
          <p>
            We make clothing for builders. Not the idea of building — the actual thing. The 5am alarm. The cold calls. The failed reps. The failed launches. The getting-back-up. If that&apos;s your life, this is your uniform.
          </p>
          <p className="text-white font-medium text-xl">
            BUILT THREADS. Not inherited. Not stumbled into. Built — rep by rep, day by day, decision by decision. Wear what you&apos;ve earned.
          </p>
        </div>
      </section>

      {/* Image + Brand Story */}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
            <Image
              src="/hero/hero-02-garage.png"
              alt="Built Threads — Built in America"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-[#111111] px-10 py-16 flex flex-col justify-center">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-6">THE STANDARD</p>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6 leading-tight">
              BUILT THREADS STARTED WITH A SIMPLE OBSERVATION.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Most &ldquo;motivational&rdquo; brands are selling a fantasy. Feel-good phrases for people who want to look like they&apos;re grinding without actually doing it.
              </p>
              <p>
                We wanted no part of that. We make apparel for a specific kind of person. The one who&apos;s up before everyone else. The entrepreneur on their third rebuild. The athlete who treats rest days like a discipline, not a reward.
              </p>
              <p>
                Every design we release is a statement — not an aspiration. You don&apos;t buy a BUILT THREADS shirt hoping someday you&apos;ll earn it. You buy it because you already have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0D0D0D] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl tracking-wider text-center mb-2">WHAT WE STAND FOR</h2>
          <p className="text-center text-white/30 text-sm tracking-widest uppercase mb-12">The code we operate by</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'DISCIPLINE', desc: 'Show up. Do the work. Every day, regardless of how you feel. Especially on the days you don\'t want to.' },
              { title: 'GRIT', desc: 'Earn it. Nothing worth having comes without the kind of resistance that reveals who you actually are.' },
              { title: 'SELF-MADE', desc: 'No one is coming to save you. That\'s not a threat — it\'s the most liberating truth you\'ll ever hear.' },
            ].map(v => (
              <div key={v.title} className="border border-white/10 p-8 hover:border-[#C9A84C]/40 transition-colors">
                <div className="w-8 h-0.5 bg-[#C9A84C] mb-5" />
                <h3 className="font-display text-xl tracking-wider mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">THE UNIFORM</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-8">READY TO WEAR IT?</h2>
        <Link href="/products" className="inline-block bg-[#C9A84C] text-black px-10 py-4 text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8913d] transition-colors">
          SHOP THE LINE
        </Link>
      </section>
    </div>
  );
}
