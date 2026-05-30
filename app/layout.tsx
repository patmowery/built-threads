import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart-context";
import { Analytics } from "@vercel/analytics/react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  title: "Built Threads — Wear What You've Earned.",
  description: "Apparel for the ones who are already doing the work. Built not borrowed. Earned not given.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
        <CartProvider>
          {GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga4-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `}
              </Script>
            </>
          )}
          {META_PIXEL_ID && (
            <>
              <Script id="meta-pixel" strategy="afterInteractive">
                {`
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `}
              </Script>
              <noscript>
                {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`}
              </noscript>
            </>
          )}
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}
