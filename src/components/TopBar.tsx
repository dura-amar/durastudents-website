export default function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-100 text-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Contact Info */}
        <div className="space-x-4">
          <a href="tel:+977XXXXXXXXXX" className="hover:underline">
            📞 +977-XXXXXXXXXX
          </a>
          <a href="mailto:info@durastudents.org" className="hover:underline">
            ✉️ info@durastudents.org
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          {/* Small screens: icons */}
          <a
            href="#"
            aria-label="Facebook"
            className="sm:hidden hover:text-blue-400"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 2 .1v2.3h-1.2c-1 0-1.2.5-1.2 1.1v1.5h2.4l-.3 3h-2.1v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="sm:hidden hover:text-red-400"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.6 3H4.4C3 3 2 4 2 5.4v13.2C2 20 3 21 4.4 21h15.2c1.4 0 2.4-1 2.4-2.4V5.4C22 4 21 3 19.6 3zM10 16V8l6 4-6 4z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="sm:hidden hover:text-orange-400"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </a>

          {/* Large screens: text */}
          <div className="hidden sm:flex items-center space-x-3">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-400">
              YouTube
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-400"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
