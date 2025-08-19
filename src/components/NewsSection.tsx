export default function NewsSection() {
  const posts = [
    {
      title: "Community Workshop",
      desc: "Highlights from our recent language workshop.",
    },
    {
      title: "Research Updates",
      desc: "Latest findings on Dura cultural practices.",
    },
    {
      title: "Student Voices",
      desc: "Stories from Dura students across Nepal.",
    },
  ];

  return (
    <section id="news" className="py-16 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">News & Blogs</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <article key={i} className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
