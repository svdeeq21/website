import Link from "next/link";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="text-xs font-display tracking-widest uppercase text-dark-40 hover:text-orange transition-colors mb-12 block"
          >
            ← Back to Blog
          </Link>
          <div className="border border-dashed border-dark-60 p-12 text-center">
            <p className="text-xs font-display tracking-widest uppercase text-dark-40 mb-4">
              Post: {params.slug}
            </p>
            <h1 className="font-display font-700 text-2xl mb-4">
              Article Coming Soon
            </h1>
            <p className="text-dark-30 text-sm">
              This blog will be powered by MDX in the next phase of the build.
              Full article content, syntax highlighting, and embedded
              components coming.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
