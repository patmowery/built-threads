'use client';

export default function EmailCapture() {
  return (
    <section className="bg-[#111111] border-y border-white/10 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">FIRST ACCESS</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">GET FIRST ACCESS.</h2>
        <p className="text-white/50 mb-8 leading-relaxed">
          New drops. Limited runs. No spam.<br />
          If you&apos;re building, we&apos;ll give you a reason to check your inbox.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="flex-1 bg-[#0A0A0A] border border-white/20 text-white px-5 py-4 text-sm tracking-wider placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#C9A84C] text-black px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#b8913d] transition-colors whitespace-nowrap"
          >
            I&apos;M IN
          </button>
        </form>
        <p className="text-white/20 text-xs mt-4 tracking-wider">We hate spam as much as you hate excuses.</p>
      </div>
    </section>
  );
}
