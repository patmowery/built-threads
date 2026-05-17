import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';
import EmailCapture from '@/components/EmailCapture';

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero — Full-bleed lifestyle image */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-01-jobsite.png"
            alt="Built Threads — Wear What You've Earned"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay: dark at bottom for copy legibility, subtle at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent" />
        </div>

        {/* Copy block — bottom-left aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-2xl">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
              BUILT THREADS · EST. 2026
            </p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-wider text-white mb-6">
              NO ONE IS<br />COMING TO<br />SAVE YOU.
            </h1>
            <p className="text-white/70 text-lg max-w-md mb-10 leading-relaxed">
              Stop waiting. Start building.<br />Wear what you&apos;ve earned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-block bg-[#C9A84C] text-black px-10 py-4 text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8913d] transition-colors"
              >
                SHOP THE LINE
              </Link>
              <Link
                href="/about"
                className="inline-block border border-white/40 text-white px-10 py-4 text-sm tracking-[0.25em] uppercase hover:border-white transition-colors"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase" style={{writingMode: 'vertical-rl'}}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Value Strip */}
      <section className="bg-[#111111] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex items-center gap-4 px-6 py-4 md:py-0 justify-center md:justify-start">
            <span className="text-[#C9A84C] text-xl">⬛</span>
            <div>
              <p className="text-white text-sm font-semibold tracking-wider uppercase">Heavyweight Cotton</p>
              <p className="text-white/40 text-xs mt-0.5">No shortcuts on materials.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 md:py-0 justify-center">
            <span className="text-[#C9A84C] text-xl">🇺🇸</span>
            <div>
              <p className="text-white text-sm font-semibold tracking-wider uppercase">Printed in the USA</p>
              <p className="text-white/40 text-xs mt-0.5">Every shirt. Every time.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 md:py-0 justify-center md:justify-end">
            <span className="text-[#C9A84C] text-xl">⚡</span>
            <div>
              <p className="text-white text-sm font-semibold tracking-wider uppercase">Ships in 48 Hours</p>
              <p className="text-white/40 text-xs mt-0.5">No delays. No excuses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-2">GRIT · DISCIPLINE · SELF-MADE</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">THE BUILDER&apos;S<br />COLLECTION</h2>
          </div>
          <Link href="/products" className="hidden md:block text-sm tracking-wider text-white/50 hover:text-white transition-colors uppercase border-b border-white/20 pb-1">
            View Full Line →
          </Link>
        </div>
        {featured.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="space-y-3">
                <div className="aspect-square bg-[#1a1a1a] animate-pulse" />
                <div className="h-4 bg-[#1a1a1a] rounded animate-pulse w-3/4" />
                <div className="h-4 bg-[#1a1a1a] rounded animate-pulse w-1/3" />
              </div>
            ))}
          </div>
        )}
        <div className="mt-10 text-center md:hidden">
          <Link href="/products" className="text-sm tracking-wider text-white/50 hover:text-white transition-colors uppercase border-b border-white/20 pb-1">
            View Full Line →
          </Link>
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="bg-[#0D0D0D] py-20 px-4 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-2 border-[#C9A84C] pt-12 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">THE MANIFESTO</p>
              <blockquote className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-wider text-white">
                &ldquo;THIS IS FOR THE<br />ONES WHO WOKE UP<br />ONE DAY AND<br />DECIDED TO STOP<br />ASKING.&rdquo;
              </blockquote>
            </div>
            <div className="flex flex-col justify-center space-y-5 text-white/60 leading-relaxed">
              <p>
                Most people are waiting. Waiting for permission. Waiting for the right moment. Waiting for someone to hand them the life they want. BUILT THREADS isn&apos;t made for those people.
              </p>
              <p>
                This is for the ones who understood that nobody is coming — that the work, the sacrifice, the discipline, all of it lands on you and only you. That&apos;s not a burden. That&apos;s freedom.
              </p>
              <p className="text-white/80 font-medium">
                BUILT THREADS. Not inherited. Not stumbled into. Built — rep by rep, day by day, decision by decision.
              </p>
              <div className="pt-2">
                <Link href="/about" className="inline-block text-[#C9A84C] text-sm tracking-[0.25em] uppercase border-b border-[#C9A84C]/40 pb-1 hover:border-[#C9A84C] transition-colors">
                  READ THE FULL STORY →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Snippet */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] bg-[#1a1a1a] overflow-hidden">
            <Image
              src="/hero/hero-03-ranch.png"
              alt="Built Threads — The Brand"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">WHO WE ARE</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-6 leading-tight">
              WE DON&apos;T MAKE<br />CLOTHING FOR<br />EVERYONE.
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Most &ldquo;motivational&rdquo; brands are selling a fantasy. Feel-good phrases for people who want to look like they&apos;re grinding without actually doing it. We wanted no part of that.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Every design we release is a statement — not an aspiration. You don&apos;t buy a BUILT THREADS shirt hoping someday you&apos;ll earn it. You buy it because you already have.
            </p>
            <Link href="/about" className="inline-block border border-white/30 text-white px-8 py-3 text-sm tracking-wider uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture />
    </>
  );
}
