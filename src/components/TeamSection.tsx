export default function TeamSection() {
  const members = [
    { name: "Chairperson Name", role: "Chairperson" },
    { name: "Secretary Name", role: "General Secretary" },
    { name: "Treasurer Name", role: "Treasurer" },
    { name: "Member Name", role: "Board Member" },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Team & Governance
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div key={i} className="p-6 rounded-xl border text-center">
              <img
                src="https://dummyimage.com/160x160/ddd/888&text=Photo"
                alt={m.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="/docs/board-structure.pdf"
            className="text-blue-600 underline"
          >
            View Board Structure & Policies (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
