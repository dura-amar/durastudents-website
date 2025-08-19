import ContactForm from "./interactivity/contact_form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Info & Map */}
          <div className="space-y-2">
            <p>📍 Lamjung, Gandaki, Nepal</p>
            <p>
              📞{" "}
              <a href="tel:+977XXXXXXXXXX" className="text-blue-600">
                +977-XXXXXXXXXX
              </a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:info@durastudents.org" className="text-blue-600">
                info@durastudents.org
              </a>
            </p>
            <p>
              🌐{" "}
              <a href="#" className="text-blue-600">
                Facebook Page
              </a>
            </p>
            <div className="mt-4 rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!..."
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
