import Link from 'next/link';
import { getProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c41e1e]/5 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block border border-[#c41e1e]/40 text-[#c41e1e] text-xs tracking-[0.3em] uppercase px-4 py-2 mb-8">
            Premium Apparel
          </div>
          <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-none tracking-wider text-white mb-6">
            BUILT<br />THREADS
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Apparel built for those who move with purpose. No shortcuts. No compromises. Just quality that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-[#c41e1e] text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-red-700 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-white/30 text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:border-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
        {/* Decorative line */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-[#c41e1e] text-xs tracking-[0.3em] uppercase mb-2">Collection</p>
            <h2 className="font-display text-4xl tracking-wider">FEATURED PIECES</h2>
          </div>
          <Link href="/products" className="text-sm tracking-wider text-white/60 hover:text-white transition-colors uppercase border-b border-white/20 pb-1">
            View All →
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
      </section>

      {/* Manifesto */}
      <section className="bg-[#c41e1e] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-[clamp(2rem,6vw,5rem)] leading-tight tracking-wider text-white">
            BUILT DIFFERENT.<br />BUILT TO LAST.
          </p>
          <p className="text-white/80 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            We don't do trends. We do timeless. Every thread, every stitch, built to move with you — through the grind, the wins, and everything in between.
          </p>
        </div>
      </section>

      {/* About Teaser */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#1a1a1a] aspect-video flex items-center justify-center text-white/20">
            <span className="font-display text-2xl tracking-widest">BUILT THREADS</span>
          </div>
          <div>
            <p className="text-[#c41e1e] text-xs tracking-[0.3em] uppercase mb-4">About Us</p>
            <h2 className="font-display text-4xl tracking-wider mb-6">THE BRAND BEHIND THE THREAD</h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Built Threads was founded on one principle: quality without compromise. We source the best materials, work with the best makers, and deliver apparel that earns its place in your rotation.
            </p>
            <Link href="/about" className="inline-block border border-white/30 text-white px-8 py-3 text-sm tracking-wider uppercase hover:border-white transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
