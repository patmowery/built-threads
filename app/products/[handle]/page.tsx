'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Variant {
  id: number;
  title: string;
  price: string;
  available: boolean;
  option1: string | null;
}

interface Product {
  id: number;
  title: string;
  body_html: string;
  images: { src: string; alt: string }[];
  variants: Variant[];
  options: { name: string; values: string[] }[];
}

function formatPrice(price: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(price));
}

export default function ProductPage() {
  const params = useParams();
  const handle = params.handle as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    fetch(`/api/products/${handle}`)
      .then(r => r.json())
      .then(data => {
        setProduct(data.product);
        setSelectedVariant(data.product?.variants?.[0] || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [handle]);

  if (loading) return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-[#1a1a1a] animate-pulse" />
        <div className="space-y-4">
          <div className="h-10 bg-[#1a1a1a] animate-pulse rounded w-3/4" />
          <div className="h-6 bg-[#1a1a1a] animate-pulse rounded w-1/3" />
        </div>
      </div>
    </div>
  );

  if (!product) return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20 text-center">
      <p className="font-display text-3xl tracking-wider text-white/40">PRODUCT NOT FOUND</p>
    </div>
  );

  const checkoutUrl = selectedVariant
    ? `https://xmehii-zm.myshopify.com/cart/${selectedVariant.id}:1`
    : '#';

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="aspect-square bg-[#1a1a1a] overflow-hidden relative mb-4">
            {product.images?.[activeImage]?.src ? (
              <Image
                src={product.images[activeImage].src}
                alt={product.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20">
                <span className="font-display text-3xl tracking-widest">BUILT THREADS</span>
              </div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 bg-[#1a1a1a] overflow-hidden relative border-2 transition-colors ${i === activeImage ? 'border-[#c41e1e]' : 'border-transparent'}`}
                >
                  <Image src={img.src} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <h1 className="font-display text-4xl tracking-wider mb-2">{product.title}</h1>
          <p className="text-2xl font-medium mb-6">
            {selectedVariant ? formatPrice(selectedVariant.price) : ''}
          </p>

          {/* Options */}
          {product.options?.map(option => (
            <div key={option.name} className="mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">{option.name}</p>
              <div className="flex flex-wrap gap-2">
                {option.values.map(value => {
                  const variant = product.variants.find(v => v.option1 === value);
                  const isSelected = selectedVariant?.option1 === value;
                  return (
                    <button
                      key={value}
                      onClick={() => variant && setSelectedVariant(variant)}
                      className={`px-4 py-2 text-sm tracking-wider border transition-colors ${
                        isSelected
                          ? 'border-[#c41e1e] bg-[#c41e1e] text-white'
                          : 'border-white/30 text-white hover:border-white'
                      } ${!variant?.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                      disabled={!variant?.available}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <a
            href={checkoutUrl}
            className="block w-full bg-[#c41e1e] text-white text-center py-4 text-sm tracking-[0.2em] uppercase hover:bg-red-700 transition-colors mb-4"
          >
            Add to Cart
          </a>

          {product.body_html && (
            <div
              className="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-6 mt-6 prose prose-invert prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: product.body_html }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
