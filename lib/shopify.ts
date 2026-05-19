const SHOPIFY_STORE = process.env.SHOPIFY_STORE || 'xmehii-zm.myshopify.com';
const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN || '';

export interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string;
  images: { id: number; src: string; alt: string; variant_ids: number[] }[];
  variants: {
    id: number;
    title: string;
    price: string;
    available: boolean;
    option1: string | null;
    option2: string | null;
  }[];
  options: { name: string; values: string[] }[];
}

export async function getProducts(): Promise<ShopifyProduct[]> {
  try {
    const res = await fetch(
      `https://${SHOPIFY_STORE}/admin/api/2026-04/products.json?status=active&limit=50`,
      {
        headers: { 'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) throw new Error(`Shopify error: ${res.status}`);
    const data = await res.json();
    return data.products || [];
  } catch (e) {
    console.error('Failed to fetch products:', e);
    return [];
  }
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  try {
    const res = await fetch(
      `https://${SHOPIFY_STORE}/admin/api/2026-04/products.json?handle=${handle}`,
      {
        headers: { 'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) throw new Error(`Shopify error: ${res.status}`);
    const data = await res.json();
    return data.products?.[0] || null;
  } catch (e) {
    console.error('Failed to fetch product:', e);
    return null;
  }
}

export function getCheckoutUrl(variantId: number, quantity = 1): string {
  return `https://${SHOPIFY_STORE}/cart/${variantId}:${quantity}`;
}

export function formatPrice(price: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(price));
}
