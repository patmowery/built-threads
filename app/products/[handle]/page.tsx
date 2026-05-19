'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Variant {
  id: number;
  title: string;
  price: string;
  available: boolean;
  option1: string | null;
  option2: string | null;
}

interface Product {
  id: number;
  title: string;
  body_html: string;
  images: { src: string; alt: string; variant_ids?: number[] }[];
  variants: Variant[];
  options: { name: string; values: string[] }[];
}

function formatPrice(price: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(price));
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim();
}

export default function ProductPage() {
  const params = useParams();
  const handle = params.handle as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    fetch(`/api/products/${handle}`)
      .then(r => r.json())
      .then(data => {
        const p = data.product;
        setProduct(p);
        if (p?.variants?.[0]) {
          const first = p.variants[0];
          const opts: Record<string, string> = {};
          p.options?.forEach((opt: { name: string }, i: number) => {
            const val = [first.option1, first.option2, first.option3][i];
            if (val) opts[opt.name] = val;
          });
          setSelectedOptions(opts);
          setSelectedVariant(first);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [handle]);

  function selectOption(optionName: string, value: string, p: Product) {
    const newOpts = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOpts);
    // Find variant matching all selected options
    const match = p.variants.find(v => {
      return p.options.every((opt, i) => {
        const selected = newOpts[opt.name];
        const variantVal = [v.option1, v.option2, v.option3][i];
        return !selected || variantVal === selected;
      });
    });
    if (match) {
      setSelectedVariant(match);
      // Swap to matching variant image if available
      const imgIdx = p.images.findIndex(img => img.variant_ids?.includes(match.id));
      if (imgIdx >= 0) setActiveImage(imgIdx);
    }
  }

  if (loading) return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="aspect-square bg-[#1a1a1a] animate-pulse" />
        <div className="space-y-4 pt-4">
          <div className="h-10 bg-[#1a1a1a] animate-pulse w-3/4" />
          <div className="h-6 bg-[#1a1a1a] animate-pulse w-1/4" />
          <div className="h-px bg-[#1a1a1a] w-full mt-6" />
          <div className="h-4 bg-[#1a1a1a] animate-pulse w-full" />
          <div className="h-4 bg-[#1a1a1a] animate-pulse w-5/6" />
        </div>
      </div>
    </div>
  );

  if (!product) return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20 text-center">
      <p className="font-display text-3xl tracking-wider text-white/40">PRODUCT NOT FOUND</p>
      <Link href="/products" className="mt-6 inline-block text-[#C9A84C] text-sm tracking-wider uppercase border-b border-[#C9A84C]/40 pb-1">
        Back to Shop →
      </Link>
    </div>
  );

  const checkoutUrl = selectedVariant
    ? `https://xmehii-zm.myshopify.com/cart/${selectedVariant.id}:1`
    : '#';

  const descriptionText = product.body_html ? stripHtml(product.body_html) : '';

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-20">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/30 text-xs tracking-widest uppercase mb-8">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>·</span>
          <Link href="/collections/builders" className="hover:text-white/60 transition-colors">Collection</Link>
          <span>·</span>
          <span className="text-white/50">{product.title}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Images */}
          <div>
            <div className="aspect-square bg-[#111111] overflow-hidden relative mb-4 border border-white/5">
              {product.images?.[activeImage]?.src ? (
                <Image
                  src={product.images[activeImage].src}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/10">
                  <span className="font-display text-4xl tracking-widest">BUILT THREADS</span>
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 bg-[#111111] overflow-hidden relative border-2 transition-colors ${
                      i === activeImage ? 'border-[#C9A84C]' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <Image src={img.src} alt="" fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">BUILT THREADS</p>
            <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-4 leading-tight">{product.title}</h1>
            <p className="text-2xl font-semibold mb-6 text-white">
              {selectedVariant ? formatPrice(selectedVariant.price) : ''}
            </p>

            <div className="w-full h-px bg-white/10 mb-6" />

            {/* Size options */}
            {product.options?.map((option, optIdx) => (
              <div key={option.name} className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/50">{option.name}</p>
                  {option.name.toLowerCase() === 'size' && (
                    <button className="text-xs text-[#C9A84C]/70 hover:text-[#C9A84C] tracking-wider uppercase transition-colors">
                      Size Guide
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {option.values.map(value => {
                    const isSelected = selectedOptions[option.name] === value;
                    // Check if any variant with this option value is available
                    const hasAvailable = product.variants.some(v => {
                      const variantVal = [v.option1, v.option2, v.option3][optIdx];
                      return variantVal === value && v.available !== false;
                    });
                    return (
                      <button
                        key={value}
                        onClick={() => hasAvailable && selectOption(option.name, value, product)}
                        className={`px-4 py-2.5 text-sm tracking-wider border transition-all ${
                          isSelected
                            ? 'border-[#C9A84C] bg-[#C9A84C] text-black font-semibold'
                            : hasAvailable
                              ? 'border-white/20 text-white hover:border-white/60'
                              : 'border-white/10 text-white/20 cursor-not-allowed line-through'
                        }`}
                        disabled={!hasAvailable}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* CTA */}
            <a
              href={checkoutUrl}
              className="block w-full bg-[#C9A84C] text-black text-center py-4 text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8913d] transition-colors mb-3"
            >
              ADD TO CART — {selectedVariant ? formatPrice(selectedVariant.price) : ''}
            </a>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 text-white/30 text-xs tracking-widest uppercase py-3 border-y border-white/5 mb-6">
              <span>Free shipping $75+</span>
              <span>·</span>
              <span>Ships in 48hrs</span>
              <span>·</span>
              <span>Printed in USA</span>
            </div>

            {/* Description */}
            {descriptionText && (
              <div className="text-white/60 text-sm leading-relaxed">
                <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">ABOUT THIS PIECE</p>
                <p>{descriptionText}</p>
              </div>
            )}

            {/* Material callout */}
            <div className="mt-6 border border-white/10 p-5 space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">BUILT TO STANDARD</p>
              <div className="grid grid-cols-2 gap-y-2 text-xs text-white/50 tracking-wider">
                <span>· Heavyweight ring-spun cotton</span>
                <span>· Pre-shrunk</span>
                <span>· Bold screen print</span>
                <span>· Unisex fit</span>
                <span>· Printed in the USA</span>
                <span>· Ships within 48hrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to collection */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/collections/builders"
            className="text-sm tracking-wider text-white/40 hover:text-white transition-colors uppercase"
          >
            ← Back to The Builder&apos;s Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
