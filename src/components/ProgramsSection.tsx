export default function ProgramsSection() {
  const programs = [
    {
      emoji: "🎓",
      title: "Language Classes",
      description:
        "Weekly classes for youth & elders; teaching materials and basic literacy.",
    },
    {
      emoji: "📜",
      title: "Documentation",
      description:
        "Oral histories, songs, and vocabulary; community archiving.",
    },
    {
      emoji: "🎉",
      title: "Cultural Events",
      description: "Festivals, performances, exhibitions, and school outreach.",
    },
    {
      emoji: "📚",
      title: "Publications",
      description: "Books, primers, and digital resources for learners.",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Programs & Activities
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <article
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition fade-in"
            >
              <div className="text-4xl mb-2">{p.emoji}</div>
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-sm">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
