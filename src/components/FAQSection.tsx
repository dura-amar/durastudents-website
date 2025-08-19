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
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="bg-white p-6 rounded-xl shadow cursor-pointer"
            >
              <summary className="font-semibold text-lg">{f.q}</summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
