import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-2xl tracking-widest mb-3">BUILT THREADS</div>
          <p className="text-white/50 text-sm leading-relaxed">Premium apparel built for those who move with purpose.</p>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-white/40 mb-4">Navigate</div>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link>
            <Link href="/products" className="text-sm text-white/60 hover:text-white transition-colors">Shop</Link>
            <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">About</Link>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-white/40 mb-4">Contact</div>
          <p className="text-sm text-white/60">builtthreads.com</p>
        </div>
      </div>
      <div className="border-t border-white/5 text-center py-4 text-white/30 text-xs">
        © {new Date().getFullYear()} Built Threads. All rights reserved.
      </div>
    </footer>
  );
}
