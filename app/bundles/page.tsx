import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Bundle Deals — Built Threads",
  description: "Build your whole uniform. Bundle deals on Built Threads apparel — the more you build, the more you save.",
};

const BUNDLES = [
  {
    name: "BUILDER PACK",
    subtitle: "3-Shirt Bundle",
    price: "$109.99",
    savings: "Save ~$15",
    description: "Three shirts. One mission. Pick any 3 tees from the Builder's Collection and save. Your uniform, your way.",
    items: ["Any 3 Builder's Collection tees", "Free shipping included", "Mix sizes and designs"],
    cta: "BUILD YOUR PACK",
    href: "/products",
    badge: "MOST POPULAR",
  },
  {
    name: "FOUNDATION PACK",
    subtitle: "5-Shirt Bundle",
    price: "$169.99",
    savings: "Save ~$25",
    description: "Five shirts for five days. The full week, all Builder's Collection. Never wonder what to wear when the work starts.",
    items: ["Any 5 Builder's Collection tees", "Free shipping included", "Mix sizes and designs", "Priority fulfillment"],
    cta: "BUILD YOUR FOUNDATION",
    href: "/products",
    badge: "BEST VALUE",
  },
];

export default function BundlesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-01-jobsite.png"
            alt="Built Threads Bundle Deals"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">BUILT THREADS</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-wider text-white">
            BUNDLE<br />DEALS
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#111111] border-b border-white/10 py-10 px-6 text-center">
        <p className="text-white/60 max-w-lg mx-auto leading-relaxed">
          Build the uniform properly. The more you commit, the more you save. Free shipping on all bundles.
        </p>
      </section>

      {/* Bundle cards */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {BUNDLES.map(bundle => (
            <div key={bundle.name} className="border border-white/10 p-10 relative hover:border-[#C9A84C]/40 transition-colors">
              {bundle.badge && (
                <span className="absolute -top-3 left-8 bg-[#C9A84C] text-black text-xs tracking-widest uppercase px-3 py-1 font-bold">
                  {bundle.badge}
                </span>
              )}
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-1">{bundle.subtitle}</p>
              <h2 className="font-display text-4xl tracking-wider mb-2">{bundle.name}</h2>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-3xl text-white">{bundle.price}</span>
                <span className="text-[#C9A84C] text-sm tracking-wider">{bundle.savings}</span>
              </div>
              <div className="h-px bg-white/10 mb-6" />
              <p className="text-white/60 leading-relaxed mb-6 text-sm">{bundle.description}</p>
              <ul className="space-y-2 mb-8">
                {bundle.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="text-[#C9A84C]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={bundle.href}
                className="block w-full bg-[#C9A84C] text-black text-center py-4 text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#b8913d] transition-colors"
              >
                {bundle.cta}
              </Link>
              <p className="text-white/20 text-xs text-center mt-3 tracking-wider">
                Select your shirts on the next page
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="border border-white/5 p-8 mt-10 text-center">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">HOW IT WORKS</p>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto">
            Select your bundle above, then add individual shirts to your cart. Apply the bundle discount at checkout. Mix designs, mix sizes — as long as you hit the count, the discount applies. Use code <span className="text-white font-mono">BUILDER3</span> (3-pack) or <span className="text-white font-mono">BUILDER5</span> (5-pack) at checkout.
          </p>
        </div>
      </section>

      {/* Full line CTA */}
      <section className="bg-[#0D0D0D] border-t border-white/10 py-16 px-6 text-center">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">BROWSE FIRST</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">SEE THE FULL LINE</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/collections/builders" className="inline-block bg-[#C9A84C] text-black px-10 py-4 text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8913d] transition-colors">
            BUILDER&apos;S COLLECTION
          </Link>
          <Link href="/collections/performance" className="inline-block border border-white/30 text-white px-10 py-4 text-sm tracking-[0.25em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
            PERFORMANCE SERIES
          </Link>
        </div>
      </section>
    </div>
  );
}
