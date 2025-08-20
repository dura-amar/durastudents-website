// src/components/PartnersSection.tsx
"use client";

// 1. Data
const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partners/partner_1.jpg" },
  { id: 2, name: "Partner 2", logo: "/images/partners/partner_2.jpg" },
  { id: 3, name: "Partner 3", logo: "/images/partners/partner_3.jpg" },
  { id: 4, name: "Partner 4", logo: "/images/partners/partner_4.jpg" },
];

// 2. Layout
export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-20 text-center">
        <h2 className="text-2xl font-semibold mb-12">Partners & Supporters</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              className="max-h-20 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
