import { NextRequest, NextResponse } from 'next/server';

const SHOPIFY_STORE = process.env.SHOPIFY_STORE || 'xmehii-zm.myshopify.com';
const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN || '';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Create/update customer in Shopify with newsletter opt-in
    const res = await fetch(
      `https://${SHOPIFY_STORE}/admin/api/2026-04/customers.json`,
      {
        method: 'POST',
        headers: {
          'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: {
            email,
            email_marketing_consent: {
              state: 'subscribed',
              opt_in_level: 'single_opt_in',
            },
            tags: 'newsletter,homepage-capture',
          },
        }),
      }
    );

    const data = await res.json();

    // 422 = customer already exists — check if we should update
    if (res.status === 422 && data.errors?.email) {
      // Already subscribed or exists — still a success from user perspective
      return NextResponse.json({ success: true, message: 'Already subscribed.' });
    }

    if (!res.ok) {
      console.error('Shopify subscribe error:', data);
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
