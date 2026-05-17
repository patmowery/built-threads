import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allPosts } from '@/content/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} — Built Threads`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const otherPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-10">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">
            THE FIELD NOTES &nbsp;·&nbsp; {post.readTime} read &nbsp;·&nbsp; {post.date}
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight tracking-wider text-white">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-white/70 text-lg leading-relaxed space-y-5 prose-headings:font-display prose-headings:text-white prose-headings:tracking-wider prose-strong:text-white/90 prose-hr:border-white/10">
          {post.body.trim().split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('---')) {
              return <hr key={i} className="border-white/10 my-8" />;
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={i} className="text-white font-semibold text-xl">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            }
            if (paragraph.startsWith('**')) {
              return (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                }} />
              );
            }
            if (paragraph.startsWith('— Built Threads')) {
              return (
                <p key={i} className="text-[#C9A84C] text-sm tracking-widest uppercase mt-10">
                  — BUILT THREADS
                </p>
              );
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#111111] border-y border-white/10 py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">BUILT THREADS</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">WEAR WHAT YOU&apos;VE EARNED.</h2>
          <Link href="/products" className="inline-block bg-[#C9A84C] text-black px-10 py-4 text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8913d] transition-colors">
            SHOP THE LINE
          </Link>
        </div>
      </section>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-8">MORE FIELD NOTES</p>
          <div className="grid md:grid-cols-3 gap-6">
            {otherPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block border border-white/10 hover:border-[#C9A84C]/40 transition-colors overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={p.heroImage} alt={p.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">{p.readTime} read</p>
                  <h3 className="font-display text-lg tracking-wider leading-tight group-hover:text-[#C9A84C] transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back */}
      <div className="text-center pb-12">
        <Link href="/blog" className="text-sm tracking-wider text-white/30 hover:text-white transition-colors uppercase">
          ← The Field Notes
        </Link>
      </div>
    </div>
  );
}
