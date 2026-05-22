'use client';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, checkoutUrl, itemCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0f0f0f] z-50 flex flex-col shadow-2xl border-l border-white/10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-0.5">YOUR CART</p>
            <p className="font-display text-xl tracking-wider">{itemCount} {itemCount === 1 ? 'ITEM' : 'ITEMS'}</p>
          </div>
          <button
            onClick={closeCart}
            className="text-white/40 hover:text-white transition-colors p-1"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <p className="font-display text-2xl tracking-wider text-white/20 mb-3">EMPTY</p>
              <p className="text-white/30 text-sm mb-6">Your cart is waiting for the work.</p>
              <button onClick={closeCart} className="text-[#C9A84C] text-sm tracking-wider uppercase border-b border-[#C9A84C]/40 pb-0.5">
                Shop the Line →
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.variantId} className="flex gap-4 py-4 border-b border-white/5">
                {/* Image */}
                <div className="relative w-20 h-20 flex-shrink-0 bg-[#1a1a1a] overflow-hidden">
                  {item.imageSrc ? (
                    <Image src={item.imageSrc} alt={item.title} fill className="object-cover" sizes="80px" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/10 text-xs font-display tracking-wider">BUILT</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${item.handle}`} onClick={closeCart} className="block text-sm font-medium tracking-wide hover:text-[#C9A84C] transition-colors leading-tight mb-1">
                    {item.title}
                  </Link>
                  <p className="text-white/40 text-xs mb-2">{item.variantTitle}</p>
                  
                  {/* Qty controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-white/10">
                      <button
                        onClick={() => updateQty(item.variantId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-white transition-colors text-sm"
                      >−</button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.variantId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-white transition-colors text-sm"
                      >+</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold">{formatPrice(parseFloat(item.price) * item.quantity)}</span>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-white/20 hover:text-[#c41e1e] transition-colors"
                        aria-label="Remove item"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-white/10 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50 tracking-wider uppercase">Subtotal</span>
              <span className="font-display text-xl tracking-wider">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-white/30 text-xs">Shipping calculated at checkout.</p>

            {/* Checkout button */}
            <a
              href={checkoutUrl}
              className="block w-full bg-[#C9A84C] text-black text-center py-4 text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8913d] transition-colors"
            >
              CHECKOUT — {formatPrice(subtotal)}
            </a>

            {/* Continue shopping */}
            <button onClick={closeCart} className="block w-full text-center text-white/40 hover:text-white text-xs tracking-widest uppercase py-2 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
