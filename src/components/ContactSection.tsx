import ContactForm from "./interactivity/contact_form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Questions, suggestions, or collaboration? We'd love to hear from you.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
