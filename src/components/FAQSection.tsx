export default function FAQSection() {
  const faqs = [
    {
      q: "Who can join DSS programs?",
      a: "Anyone interested in Dura language and culture, youth or elders.",
    },
    {
      q: "Are the classes free?",
      a: "Yes, our language classes are completely free.",
    },
    {
      q: "How can I contribute?",
      a: "You can donate, volunteer, or share resources.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="font-semibold">{f.q}</div>
              <p className="text-gray-600 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
