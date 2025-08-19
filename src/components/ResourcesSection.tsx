export default function ResourcesSection() {
  const resources = [
    {
      title: "DSS Constitution (PDF)",
      desc: "Legal framework and objectives",
      link: "/docs/constitution.pdf",
    },
    {
      title: "Annual Report 2024 (PDF)",
      desc: "Programs, finance & impact",
      link: "/docs/annual-report-2024.pdf",
    },
    {
      title: "Program Summary (PDF)",
      desc: "Overview of current activities",
      link: "/docs/program-summary.pdf",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Resources & Downloads
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.link}
              className="block p-6 rounded-xl bg-white shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
