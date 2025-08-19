interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  const members: TeamMember[] = [
    {
      name: "Raj Sharma",
      role: "Chairperson",
      image: "/images/team/raj.jpg",
    },
    {
      name: "Sita Gurung",
      role: "General Secretary",
      image: "/images/team/raj.jpg",
    },
    {
      name: "Hari Tamang",
      role: "Treasurer",
      image: "/images/team/raj.jpg",
    },
    {
      name: "Anita Rai",
      role: "Board Member",
      image: "/images/team/raj.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Team & Governance
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {members.map((member, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border bg-white shadow hover:shadow-lg transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <div className="font-semibold text-lg">{member.name}</div>
              <div className="text-gray-600">{member.role}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/docs/board-structure.pdf"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            View Board Structure & Policies (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
