import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#C9A84C]/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-widest mb-3 text-white">BUILT THREADS</div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
              Wear What You&apos;ve Earned. Apparel for the ones who are already doing the work.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://instagram.com/builtthreads" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-[#C9A84C] transition-colors text-sm tracking-wider uppercase">
                Instagram
              </a>
              <span className="text-white/20">·</span>
              <a href="https://tiktok.com/@builtthreads" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-[#C9A84C] transition-colors text-sm tracking-wider uppercase">
                TikTok
              </a>
              <span className="text-white/20">·</span>
              <a href="https://x.com/builtthreads" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-[#C9A84C] transition-colors text-sm tracking-wider uppercase">
                X
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase text-white/30 mb-4">Shop</div>
            <div className="flex flex-col gap-2.5">
              <Link href="/collections/builders" className="text-sm text-white/50 hover:text-white transition-colors">Builder&apos;s Collection</Link>
              <Link href="/collections/performance" className="text-sm text-white/50 hover:text-white transition-colors">Performance Series</Link>
              <Link href="/products" className="text-sm text-white/50 hover:text-white transition-colors">All Products</Link>
              <Link href="/bundles" className="text-sm text-white/50 hover:text-white transition-colors">Bundle Deals</Link>
              <Link href="/blog" className="text-sm text-white/50 hover:text-white transition-colors">The Field Notes</Link>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase text-white/30 mb-4">Support</div>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link>
              <span className="text-sm text-white/50">Shipping Policy</span>
              <span className="text-sm text-white/50">Returns</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} BUILT THREADS · Made in the USA
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            Privacy · Terms
          </p>
        </div>
      </div>
    </footer>
  );
}
