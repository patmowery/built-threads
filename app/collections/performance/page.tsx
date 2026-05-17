import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: "Performance Series — Built Threads",
  description: "Tri-blend athletic tees built for the work, the recovery, and every rep in between. Bella+Canvas 3413. 50/25/25 cotton-poly-rayon.",
};

export const revalidate = 60;

export default async function PerformanceCollectionPage() {
  const allProducts = await getProducts();
  // Filter to Performance Series products
  const performanceProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes('performance') ||
    p.tags?.toLowerCase().includes('performance series')
  );
  // Fallback: show all products if filtering yields nothing yet
  const products = performanceProducts.length > 0 ? performanceProducts : [];

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-04-gym.png"
            alt="Built Threads Performance Series"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">BUILT THREADS</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-wider text-white mb-3">
            PERFORMANCE<br />SERIES
          </h1>
          <p className="text-white/50 text-sm tracking-[0.2em] uppercase">
            TRI-BLEND &nbsp;·&nbsp; BUILT TO MOVE &nbsp;·&nbsp; $44.99
          </p>
        </div>
      </section>

      {/* What makes it different */}
      <section className="bg-[#111111] border-b border-white/10 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-6 h-0.5 bg-[#C9A84C] mb-4" />
              <h3 className="font-display text-xl tracking-wider mb-2 text-white">50/25/25 TRI-BLEND</h3>
              <p className="text-white/50 text-sm leading-relaxed">Cotton, polyester, rayon. The combination that gives you soft stretch, moisture management, and a broken-in feel on day one.</p>
            </div>
            <div>
              <div className="w-6 h-0.5 bg-[#C9A84C] mb-4" />
              <h3 className="font-display text-xl tracking-wider mb-2 text-white">BUILT TO MOVE</h3>
              <p className="text-white/50 text-sm leading-relaxed">Lightweight. Breathable. Recovers its shape. Whether you're under a bar or under pressure, this shirt moves with you.</p>
            </div>
            <div>
              <div className="w-6 h-0.5 bg-[#C9A84C] mb-4" />
              <h3 className="font-display text-xl tracking-wider mb-2 text-white">BELLA+CANVAS 3413</h3>
              <p className="text-white/50 text-sm leading-relaxed">The gold standard tri-blend blank. Used by Born Primitive, NoBull, and serious performance brands. We don't cut corners on the blank.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-2">PERFORMANCE SERIES</p>
            <h2 className="font-display text-3xl tracking-wider">
              {products.length > 0 ? `${products.length} PIECES` : 'LAUNCHING SOON'}
            </h2>
          </div>
          <Link href="/collections/builders" className="text-sm tracking-wider text-white/40 hover:text-white transition-colors uppercase">
            Builder&apos;s Collection →
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="border border-white/10 p-16 text-center">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">DROPPING SOON</p>
            <h3 className="font-display text-3xl tracking-wider mb-4">PERFORMANCE SERIES</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto mb-8">
              Bella+Canvas 3413 tri-blend. 50/25/25. Soft stretch. Built for the work, the recovery, and every rep in between. Launching shortly.
            </p>
            <Link href="/collections/builders" className="inline-block bg-[#C9A84C] text-black px-8 py-3 text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#b8913d] transition-colors">
              SHOP BUILDER&apos;S COLLECTION
            </Link>
          </div>
        )}
      </section>

      {/* Compare to Builder's Collection */}
      <section className="bg-[#0D0D0D] border-y border-white/10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6 text-center">FIND YOUR FIT</p>
          <h2 className="font-display text-3xl tracking-wider text-center mb-10">TWO COLLECTIONS. ONE STANDARD.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-white/10 p-8">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">BUILDER&apos;S COLLECTION</p>
              <p className="font-display text-2xl tracking-wider mb-4">HEAVYWEIGHT COTTON</p>
              <ul className="text-white/50 text-sm space-y-2">
                <li>· 100% ring-spun cotton</li>
                <li>· Heavyweight, structured</li>
                <li>· Holds shape under pressure</li>
                <li>· Bold, durable screen print</li>
                <li>· $34.99–$54.99</li>
              </ul>
              <Link href="/collections/builders" className="mt-6 inline-block text-sm tracking-wider text-[#C9A84C] border-b border-[#C9A84C]/40 pb-1 hover:border-[#C9A84C] transition-colors uppercase">
                Shop Builder&apos;s →
              </Link>
            </div>
            <div className="border border-[#C9A84C]/30 p-8">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">PERFORMANCE SERIES</p>
              <p className="font-display text-2xl tracking-wider mb-4">TRI-BLEND ATHLETIC</p>
              <ul className="text-white/50 text-sm space-y-2">
                <li>· 50% cotton / 25% poly / 25% rayon</li>
                <li>· Soft stretch, lightweight</li>
                <li>· Moisture-wicking feel</li>
                <li>· Broken-in from day one</li>
                <li>· $44.99</li>
              </ul>
              <span className="mt-6 inline-block text-sm tracking-wider text-[#C9A84C]/50 uppercase">You&apos;re here</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
