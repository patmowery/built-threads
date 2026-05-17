import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from '@/content/blog';

export const metadata: Metadata = {
  title: 'The Field Notes — Built Threads',
  description: "Real talk from the ones doing the work. No inspiration porn. No listicles. Just honest perspectives from inside the build.",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#0a0a0a] border-b border-white/10 py-20 px-6 text-center">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">BUILT THREADS</p>
        <h1 className="font-display text-5xl md:text-7xl tracking-wider mb-4">THE FIELD NOTES</h1>
        <p className="text-white/40 text-sm tracking-widest max-w-md mx-auto">
          No inspiration porn. No listicles. Honest perspectives from inside the build.
        </p>
      </section>

      {/* Featured post */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {allPosts[0] && (
          <Link href={`/blog/${allPosts[0].slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-0 border border-white/10 hover:border-[#C9A84C]/40 transition-colors overflow-hidden">
              <div className="relative aspect-video md:aspect-auto md:min-h-[400px]">
                <Image
                  src={allPosts[0].heroImage}
                  alt={allPosts[0].title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/40" />
              </div>
              <div className="bg-[#111111] p-10 flex flex-col justify-center">
                <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">LATEST — {allPosts[0].readTime} read</p>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-4 leading-tight group-hover:text-[#C9A84C] transition-colors">
                  {allPosts[0].title}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">{allPosts[0].excerpt}</p>
                <span className="text-[#C9A84C] text-sm tracking-[0.25em] uppercase border-b border-[#C9A84C]/40 pb-1 self-start">
                  READ →
                </span>
              </div>
            </div>
          </Link>
        )}
      </section>

      {/* Rest of posts */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.slice(1).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block border border-white/10 hover:border-[#C9A84C]/40 transition-colors overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">{post.readTime} read</p>
                <h3 className="font-display text-xl tracking-wider mb-2 leading-tight group-hover:text-[#C9A84C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
