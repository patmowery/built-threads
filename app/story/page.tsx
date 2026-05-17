import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Story — Built Threads',
  description: 'Nobody is coming. That\'s the whole point. The story behind Built Threads — built for the ones already doing the work.',
};

export default function StoryPage() {
  return (
    <div className="pt-16">

      {/* Chapter 1 — Opening hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-01-jobsite.png"
            alt="Built Threads — The Story"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 w-full">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">THE STORY</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-white">
            NOBODY IS<br />COMING.<br />THAT&apos;S THE<br />POINT.
          </h1>
        </div>
      </section>

      {/* Opening copy */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
          <p className="text-white text-xl font-medium leading-relaxed">
            Most people are waiting. Waiting for permission. Waiting for the right moment. Waiting for someone to hand them the life they want.
          </p>
          <p>
            BUILT THREADS isn&apos;t made for those people.
          </p>
          <p>
            This is for the ones who woke up one day and decided to stop asking. Who understood that nobody is coming — that the work, the sacrifice, the discipline, all of it lands on you and only you.
          </p>
          <p>
            That&apos;s not a burden. That&apos;s freedom.
          </p>
        </div>
      </section>

      {/* Chapter 2 — The observation */}
      <section className="border-y border-white/10 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
            <Image
              src="/hero/hero-02-garage.png"
              alt="Built in America"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="px-10 py-16 flex flex-col justify-center">
            <div className="w-8 h-0.5 bg-[#C9A84C] mb-8" />
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6 leading-tight text-white">
              WE STARTED WITH A<br />SIMPLE OBSERVATION.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Most &ldquo;motivational&rdquo; brands are selling a fantasy. Feel-good phrases on cheap fabric for people who want to look like they&apos;re grinding without actually doing it.
              </p>
              <p>
                The shirts are soft. The copy is inspirational. The whole thing is designed to make you feel like you&apos;re part of something — without asking anything of you.
              </p>
              <p className="text-white/80">
                We wanted no part of that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3 — Who it's for */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">WHO IT&apos;S FOR</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-10 leading-tight">
          WE MAKE APPAREL FOR<br />A SPECIFIC KIND OF<br />PERSON.
        </h2>
        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
          <p>The one who&apos;s up before everyone else. The entrepreneur on their third rebuild. The athlete who treats rest days like a discipline, not a reward. The person who&apos;s read enough to know that nothing replaces showing up.</p>
          <p>The tradesman who takes pride in the work — not the recognition. The guy who drives the beat-up truck because the money went back into the business. The woman who outworks the room every single day without making noise about it.</p>
          <p>Every design we release is a statement — not an aspiration. You don&apos;t buy a BUILT THREADS shirt hoping someday you&apos;ll earn it.</p>
          <p className="text-white text-xl font-medium">You buy it because you already have.</p>
        </div>
      </section>

      {/* Chapter 4 — The standard */}
      <section className="border-y border-white/10 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2">
          <div className="px-10 py-16 flex flex-col justify-center order-2 md:order-1">
            <div className="w-8 h-0.5 bg-[#C9A84C] mb-8" />
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6 leading-tight text-white">
              THE STANDARD WE<br />HOLD.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>Heavyweight 100% ring-spun cotton. Pre-shrunk. Built to hold its shape and its statement for years.</p>
              <p>We don&apos;t cut corners on materials because you don&apos;t cut corners on the work.</p>
              <p>Printed in the USA. Ships in 48 hours. No delays, no excuses — we treat our operation the same way we expect you to treat yours.</p>
              <p className="text-white/80">If it isn&apos;t built right, it doesn&apos;t leave our hands.</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] order-1 md:order-2">
            <Image
              src="/hero/hero-04-gym.png"
              alt="Built to standard"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Full manifesto */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">THE MANIFESTO</p>
        <div className="border-l-2 border-[#C9A84C] pl-8 space-y-5 text-white/70 text-lg leading-relaxed">
          <p>Most people are waiting. Waiting for permission. Waiting for the right moment. Waiting for someone to hand them the life they want. BUILT THREADS isn&apos;t made for those people.</p>
          <p>This is for the ones who woke up one day and decided to stop asking. Who understood that nobody is coming — that the work, the sacrifice, the discipline, all of it lands on you and only you. That&apos;s not a burden. That&apos;s freedom.</p>
          <p>We make clothing for builders. Not the idea of building — the actual thing. The 5am alarm. The cold calls. The failed reps. The failed launches. The getting-back-up. If that&apos;s your life, this is your uniform.</p>
          <p className="text-white font-medium text-xl">BUILT THREADS. Not inherited. Not stumbled into. Built — rep by rep, day by day, decision by decision. Wear what you&apos;ve earned.</p>
        </div>
      </section>

      {/* Chapter 5 — Open range image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/hero/hero-03-ranch.png"
          alt="Built Threads — American Made"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-display text-[clamp(2rem,6vw,5rem)] leading-tight tracking-wider text-white max-w-lg">
              BUILT IN<br />AMERICA.<br />FOR THE ONES<br />WHO BUILT IT.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4 bg-[#0D0D0D]">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">THE UNIFORM</p>
        <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">WEAR WHAT<br />YOU&apos;VE EARNED.</h2>
        <p className="text-white/40 mb-10 tracking-wider max-w-md mx-auto">This is your uniform. If the words on the chest describe your life — it&apos;s already yours.</p>
        <Link
          href="/products"
          className="inline-block bg-[#C9A84C] text-black px-12 py-4 text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8913d] transition-colors"
        >
          SHOP THE LINE
        </Link>
      </section>

    </div>
  );
}
