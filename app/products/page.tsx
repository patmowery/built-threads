import { getProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
      <div className="mb-12">
        <p className="text-[#c41e1e] text-xs tracking-[0.3em] uppercase mb-2">All Products</p>
        <h1 className="font-display text-5xl tracking-wider">THE COLLECTION</h1>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-white/40">
          <p className="font-display text-3xl tracking-wider mb-4">COMING SOON</p>
          <p className="text-sm">New drops loading. Check back shortly.</p>
        </div>
      )}
    </div>
  );
}
