export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-24 px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Preserving Dura Language & Culture
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Together we can revitalize our heritage through education, technology,
        and community.
      </p>
      <div className="mt-6">
        <a
          href="#programs"
          className="bg-white text-green-700 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition"
        >
          Explore Programs
        </a>
      </div>
    </section>
  );
}
