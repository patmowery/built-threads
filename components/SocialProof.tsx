const testimonials = [
  {
    quote: "Wore it to the jobsite on day one. Took three compliments before lunch. The weight of the fabric is real — this isn't some Gildan throwaway.",
    name: "Mike T.",
    location: "Cincinnati, OH",
    product: "BUILT NOT BORN Tee",
  },
  {
    quote: "I've tried every 'motivational' brand out there. This one actually talks to me like I'm an adult. The shirt is built like the words on it.",
    name: "Jordan R.",
    location: "Phoenix, AZ",
    product: "NO ONE IS COMING TO SAVE YOU Tee",
  },
  {
    quote: "Got the 3-pack. Wore them to the gym, on site, and out to dinner. They hold up. The message doesn't wear off.",
    name: "Derrick P.",
    location: "Nashville, TN",
    product: "Builder 3-Pack",
  },
  {
    quote: "The silence is a superpower one just hits different. I know what it means. Everyone who reads it does too.",
    name: "Sarah K.",
    location: "Denver, CO",
    product: "SILENCE IS A SUPERPOWER Tee",
  },
  {
    quote: "Finally, a brand that doesn't preach at me. The shirt says what I've been living for ten years. Worth every dollar.",
    name: "T. Rodriguez",
    location: "San Antonio, TX",
    product: "THE GRIND IS THE GIFT Tee",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">THE COMMUNITY</p>
          <p className="text-white/20 text-xs tracking-widest uppercase">BUILT IN THE WILD</p>
        </div>
      </div>

      {/* Scrolling testimonials */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-none w-72 border border-white/10 p-6 hover:border-[#C9A84C]/30 transition-colors"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-[#C9A84C] text-sm">★</span>
              ))}
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-white text-sm font-semibold">{t.name}</p>
              <p className="text-white/30 text-xs">{t.location}</p>
              <p className="text-[#C9A84C] text-xs tracking-wider uppercase mt-1">{t.product}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
