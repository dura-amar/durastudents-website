import FooterSubscribeForm from "./interactivity/footer_subscribe_form";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://example.com/logo.png"
              className="h-10 w-10 rounded-full"
              alt="DSS Logo"
            />
            <span className="font-semibold">Dura Students Society</span>
          </div>
          <p className="text-sm">
            Preserving the Dura language & culture through education,
            documentation, and community programs.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#programs" className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#news" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#donate" className="hover:underline">
                Donate
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Downloads</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/docs/constitution.pdf" className="hover:underline">
                Constitution
              </a>
            </li>
            <li>
              <a
                href="/docs/annual-report-2024.pdf"
                className="hover:underline"
              >
                Annual Report
              </a>
            </li>
            <li>
              <a href="/docs/program-summary.pdf" className="hover:underline">
                Program Summary
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Subscribe</h4>
          <FooterSubscribeForm />
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-sm flex flex-col sm:flex-row items-center justify-between">
          <p>
            © {new Date().getFullYear()} Dura Students Society. All rights
            reserved.
          </p>
          <p className="text-gray-400">Designed & developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
