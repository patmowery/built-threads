'use client';
import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage("You're in. We'll be in touch.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  };

  return (
    <section className="bg-[#111111] border-y border-white/10 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">FIRST ACCESS</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">GET FIRST ACCESS.</h2>
        <p className="text-white/50 mb-8 leading-relaxed">
          New drops. Limited runs. No spam.<br />
          If you&apos;re building, we&apos;ll give you a reason to check your inbox.
        </p>

        {status === 'success' ? (
          <div className="max-w-md mx-auto">
            <p className="text-[#C9A84C] text-lg tracking-wider font-medium">✓ {message}</p>
            <p className="text-white/30 text-xs mt-2 tracking-wider">First drop notification incoming.</p>
          </div>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 bg-[#0A0A0A] border border-white/20 text-white px-5 py-4 text-sm tracking-wider placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#C9A84C] text-black px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#b8913d] transition-colors whitespace-nowrap disabled:opacity-70"
            >
              {status === 'loading' ? '...' : "I'M IN"}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400/70 text-xs mt-3 tracking-wider">{message}</p>
        )}
        {status !== 'success' && (
          <p className="text-white/20 text-xs mt-4 tracking-wider">We hate spam as much as you hate excuses.</p>
        )}
      </div>
    </section>
  );
}
