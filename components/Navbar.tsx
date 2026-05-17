'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-2xl tracking-widest text-white hover:text-[#C9A84C] transition-colors">
          BUILT THREADS
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/collections/builders" className="text-sm tracking-wider text-white/70 hover:text-white transition-colors uppercase">Builder&apos;s</Link>
          <Link href="/collections/performance" className="text-sm tracking-wider text-white/70 hover:text-white transition-colors uppercase">Performance</Link>
          <Link href="/products" className="text-sm tracking-wider text-white/70 hover:text-white transition-colors uppercase">Shop All</Link>
          <Link href="/story" className="text-sm tracking-wider text-white/70 hover:text-white transition-colors uppercase">Story</Link>
          <Link href="/about" className="text-sm tracking-wider text-white/70 hover:text-white transition-colors uppercase">About</Link>
          <Link href="/products" className="bg-[#C9A84C] text-black px-5 py-2 text-sm tracking-wider uppercase hover:bg-[#b8913d] transition-colors font-semibold">
            Shop Now
          </Link>
        </div>
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <Link href="/collections/builders" className="text-sm tracking-wider uppercase text-white/80" onClick={() => setOpen(false)}>Builder&apos;s Collection</Link>
          <Link href="/collections/performance" className="text-sm tracking-wider uppercase text-white/80" onClick={() => setOpen(false)}>Performance Series</Link>
          <Link href="/products" className="text-sm tracking-wider uppercase text-white/80" onClick={() => setOpen(false)}>Shop All</Link>
          <Link href="/story" className="text-sm tracking-wider uppercase text-white/80" onClick={() => setOpen(false)}>Story</Link>
          <Link href="/about" className="text-sm tracking-wider uppercase text-white/80" onClick={() => setOpen(false)}>About</Link>
          <Link
            href="/products"
            className="bg-[#C9A84C] text-black px-5 py-3 text-sm tracking-wider uppercase font-bold text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}
