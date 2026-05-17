import Link from 'next/link';
import Image from 'next/image';
import { ShopifyProduct, formatPrice } from '@/lib/shopify';

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const price = product.variants?.[0]?.price || '0.00';
  const image = product.images?.[0]?.src;

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="aspect-square bg-[#1a1a1a] overflow-hidden mb-3 relative">
        {image ? (
          <Image
            src={image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-[#c41e1e]/0 group-hover:bg-[#c41e1e]/10 transition-colors duration-300" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm tracking-wide group-hover:text-[#c41e1e] transition-colors">{product.title}</h3>
          <p className="text-white/50 text-xs mt-0.5">{product.product_type}</p>
        </div>
        <span className="text-sm font-medium">{formatPrice(price)}</span>
      </div>
    </Link>
  );
}
