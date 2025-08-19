export default function PartnersSection() {
  const partners = [1, 2, 3, 4, 5];
  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-8">Partners & Supporters</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {partners.map((n) => (
            <img
              key={n}
              src={`https://dummyimage.com/160x60/ededed/999&text=Partner+${n}`}
              alt={`Partner ${n}`}
              className="mx-auto opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
