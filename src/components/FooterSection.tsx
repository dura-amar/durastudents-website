import FooterSubscribeForm from "./interactivity/footer_subscribe_form";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">About DSS</h3>
          <p className="text-gray-400 text-sm">
            Dura Students Society, Lamjung, Nepal. Revitalizing Dura language
            and culture through education and community programs.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <FooterSubscribeForm />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">info@durastudents.org.np</p>
          <p className="text-gray-400 text-sm">+977-XXXXX</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-6">
        © 2025 Dura Students Society. All rights reserved.
      </div>
    </footer>
  );
}
