import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: "The Builder's Collection — Built Threads",
  description: "Apparel for the ones already doing the work. Grit. Discipline. Self-made. Zero excuses.",
};

export const revalidate = 60;

export default async function BuildersCollectionPage() {
  const products = await getProducts();

  return (
    <div className="pt-16">

      {/* Collection Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-05-truck.png"
            alt="The Builder's Collection"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">COLLECTION</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-white mb-4">
            THE BUILDER&apos;S<br />COLLECTION
          </h1>
          <p className="text-white/50 text-sm tracking-[0.2em] uppercase">
            GRIT &nbsp;·&nbsp; DISCIPLINE &nbsp;·&nbsp; SELF-MADE
          </p>
        </div>
      </section>

      {/* Collection Intro */}
      <section className="bg-[#111111] border-b border-white/10 py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="w-8 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-white/70 text-lg leading-relaxed">
              These aren&apos;t motivational quotes slapped on a shirt. These are statements of fact — for the people who live by them.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              Premium heavyweight cotton. Bold type. Zero apology. If you&apos;re out here doing the work, you know what these words mean.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'HEAVYWEIGHT', sub: '100% ring-spun cotton' },
              { label: 'PRINTED USA', sub: 'Every shirt, every time' },
              { label: '48HR SHIP', sub: 'No delays, no excuses' },
            ].map(item => (
              <div key={item.label} className="border border-white/10 p-4">
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-semibold mb-1">{item.label}</p>
                <p className="text-white/40 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-3xl tracking-wider">
            ALL {products.length} PIECES
          </h2>
          <p className="text-white/30 text-sm tracking-widest uppercase">
            Free shipping over $75
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
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
      </section>

      {/* Story Snippet */}
      <section className="bg-[#0D0D0D] border-t border-white/10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-[#C9A84C] pt-10">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">THE STANDARD</p>
            <blockquote className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-wider text-white mb-8 max-w-2xl">
              &ldquo;YOU DON&apos;T BUY A BUILT THREADS SHIRT HOPING SOMEDAY YOU&apos;LL EARN IT. YOU BUY IT BECAUSE YOU ALREADY HAVE.&rdquo;
            </blockquote>
            <Link
              href="/story"
              className="inline-block text-[#C9A84C] text-sm tracking-[0.25em] uppercase border-b border-[#C9A84C]/40 pb-1 hover:border-[#C9A84C] transition-colors"
            >
              READ OUR FULL STORY →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
