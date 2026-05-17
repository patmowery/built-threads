'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ShopifyProduct, formatPrice } from '@/lib/shopify';

function getCollectionBadge(product: ShopifyProduct): string | null {
  const title = product.title.toLowerCase();
  const tags = (product.tags || '').toLowerCase();
  if (tags.includes('performance series') || title.includes('performance')) return 'PERFORMANCE';
  if (tags.includes('muscle tank') || title.includes('muscle tank')) return 'MUSCLE TANK';
  if (title.includes('hoodie')) return 'HOODIE';
  if (title.includes('tank')) return 'TANK';
  return null;
}

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const price = product.variants?.[0]?.price || '0.00';
  const primaryImage = product.images?.[0]?.src;
  const hoverImage = product.images?.[1]?.src; // lifestyle/model shot
  const [hovered, setHovered] = useState(false);
  const badge = getCollectionBadge(product);

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="aspect-square bg-[#111111] overflow-hidden mb-3 relative border border-white/5 group-hover:border-[#C9A84C]/20 transition-colors duration-300">

        {/* Primary image */}
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={product.title}
            fill
            className={`object-cover transition-all duration-700 ${
              hovered && hoverImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/10">
            <span className="font-display text-lg tracking-widest">BUILT</span>
          </div>
        )}

        {/* Hover image (lifestyle/model shot) */}
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${product.title} — lifestyle`}
            fill
            className={`object-cover absolute inset-0 transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* Collection badge */}
        {badge && (
          <div className="absolute top-2 left-2 bg-[#C9A84C] text-black text-[10px] tracking-widest uppercase px-2 py-0.5 font-bold">
            {badge}
          </div>
        )}

        {/* Quick view CTA on hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="bg-[#C9A84C] text-black text-center py-2 text-xs tracking-[0.2em] uppercase font-bold">
            VIEW →
          </div>
        </div>
      </div>

      {/* Info row */}
      <div className="space-y-0.5">
        <h3 className={`text-sm tracking-wide font-medium leading-tight transition-colors duration-200 ${hovered ? 'text-[#C9A84C]' : 'text-white'}`}>
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs tracking-wider">
            {product.options?.[0]?.values?.length
              ? `${product.options[0].values.length} sizes`
              : ''}
          </span>
          <span className="text-sm font-semibold text-white">{formatPrice(price)}</span>
        </div>
      </div>
    </Link>
  );
}
