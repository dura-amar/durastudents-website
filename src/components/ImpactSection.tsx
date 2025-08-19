import ImpactCard from "./common/ImpactCard";

export default function ImpactSection() {
  const stats = [
    { number: "250+", label: "Learners Reached", bgColor: "bg-blue-50" },
    { number: "40+", label: "Events Organized", bgColor: "bg-green-50" },
    {
      number: "12+",
      label: "Publications & Resources",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <ImpactCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
