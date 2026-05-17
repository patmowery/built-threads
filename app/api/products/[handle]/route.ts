import { NextRequest, NextResponse } from 'next/server';
import { getProduct } from '@/lib/shopify';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  const { handle } = await params;
  const product = await getProduct(handle);
  return NextResponse.json({ product });
}
