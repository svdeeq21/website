import Link from "next/link";

const posts = [
  {
    slug: "getting-started-with-machine-learning",
    title: "Getting Started with Machine Learning in Python",
    excerpt:
      "A practical guide to setting up your first ML pipeline using NumPy, Pandas, and Scikit-learn. No PhD required.",
    date: "January 2025",
    readTime: "8 min read",
    tag: "Machine Learning",
  },
  {
    slug: "java-oop-principles",
    title: "Object-Oriented Programming Principles Every Java Developer Should Know",
    excerpt:
      "SOLID principles, design patterns, and practical OOP techniques that separate maintainable Java code from spaghetti.",
    date: "February 2025",
    readTime: "10 min read",
    tag: "Java",
  },
  {
    slug: "streamlit-ml-deployment",
    title: "Deploying ML Models with Streamlit: A Complete Walkthrough",
    excerpt:
      "How I went from a trained Scikit-learn model to a live, interactive web app in under an hour — including the parts no tutorial mentions.",
    date: "March 2025",
    readTime: "12 min read",
    tag: "Machine Learning",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Writing</p>
          <h1 className="font-display font-800 text-5xl sm:text-6xl mb-6">
            Blog
          </h1>
          <p className="text-dark-30 max-w-xl text-base leading-relaxed">
            Technical writing on machine learning, software engineering, and
            lessons from building real projects.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          <div className="card-glow border border-dark-70 bg-dark-85 p-10 mb-6 group">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-display tracking-widest uppercase text-orange">
                {posts[0].tag}
              </span>
              <span className="text-dark-60">·</span>
              <span className="text-xs text-dark-40 font-display">
                {posts[0].date}
              </span>
              <span className="text-dark-60">·</span>
              <span className="text-xs text-dark-40 font-display">
                {posts[0].readTime}
              </span>
            </div>
            <h2 className="font-display font-700 text-3xl mb-4 group-hover:text-orange transition-colors">
              {posts[0].title}
            </h2>
            <p className="text-dark-30 leading-relaxed mb-8 max-w-2xl">
              {posts[0].excerpt}
            </p>
            <Link
              href={`/blog/${posts[0].slug}`}
              className="text-xs font-display tracking-widest uppercase text-orange border border-orange px-5 py-2 hover:bg-orange hover:text-white transition-all inline-block"
            >
              Read Article →
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid lg:grid-cols-2 gap-6">
            {posts.slice(1).map((post) => (
              <div
                key={post.slug}
                className="card-glow border border-dark-70 bg-dark-85 p-8 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-display tracking-widest uppercase text-orange">
                    {post.tag}
                  </span>
                  <span className="text-dark-60">·</span>
                  <span className="text-xs text-dark-40 font-display">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display font-700 text-xl mb-3 group-hover:text-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-dark-30 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-display tracking-widest uppercase text-dark-40 hover:text-orange transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-12 border border-dashed border-dark-60 p-8 text-center">
            <p className="text-dark-40 text-xs font-display tracking-widest uppercase">
              More articles coming soon — this section will be MDX-powered in
              the next phase
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
