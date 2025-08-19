// src/app/page.tsx
import Image from "next/image";
import ContactForm from "./components/contact_form";
import FooterSubscribeForm from "./components/footer_subscribe_form";
import VolunteerForm from "./components/volunteer_form";
import Navbar from "./components/nav_bar";
// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* 1. Top Bar */}
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

      {/* 2. Navbar */}
      <Navbar />

      {/* 3. Hero Section */}
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

      {/* 4. About / Story */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div className="fade-in">
            <h2 className="text-3xl font-bold mb-4">About DSS</h2>
            <p className="mb-4">
              Dura Students Society (DSS) is a registered NGO based in Lamjung,
              Nepal. We work with elders, youth, and partners to revitalize the
              Dura language and celebrate our cultural heritage through classes,
              documentation, publications, and events.
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Registered NGO; community-led and youth-driven</li>
              <li>Language education & orthography support</li>
              <li>Cultural documentation and publications</li>
              <li>Community events and advocacy</li>
            </ul>
          </div>

          {/* About Image */}
          <div className="fade-in">
            <img
              src="https://example.com/about.jpg"
              alt="About DSS"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="container mx-auto px-4 mt-12">
          <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
          <div className="relative border-s-2 border-gray-200 pl-6 space-y-8">
            <div>
              <div className="text-sm text-gray-500">2018</div>
              <div className="font-semibold">
                Community gatherings and first youth group
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">2021</div>
              <div className="font-semibold">
                DSS formally registered as an NGO
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">2023</div>
              <div className="font-semibold">
                Launched language classes & oral history project
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">2025</div>
              <div className="font-semibold">
                Publishing beginner resources & mobile learning pilot
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Programs */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Programs & Activities
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Language Classes */}
            <article className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition fade-in">
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="font-semibold text-lg mb-1">Language Classes</h3>
              <p className="text-sm">
                Weekly classes for youth & elders; teaching materials and basic
                literacy.
              </p>
            </article>

            {/* Documentation */}
            <article className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition fade-in">
              <div className="text-4xl mb-2">📜</div>
              <h3 className="font-semibold text-lg mb-1">Documentation</h3>
              <p className="text-sm">
                Oral histories, songs, and vocabulary; community archiving.
              </p>
            </article>

            {/* Cultural Events */}
            <article className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition fade-in">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold text-lg mb-1">Cultural Events</h3>
              <p className="text-sm">
                Festivals, performances, exhibitions, and school outreach.
              </p>
            </article>

            {/* Publications */}
            <article className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition fade-in">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-semibold text-lg mb-1">Publications</h3>
              <p className="text-sm">
                Books, primers, and digital resources for learners.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Impact */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-blue-50">
              <div className="text-4xl font-bold">250+</div>
              <div className="text-sm mt-1">Learners Reached</div>
            </div>

            <div className="p-6 rounded-xl bg-green-50">
              <div className="text-4xl font-bold">40+</div>
              <div className="text-sm mt-1">Events Organized</div>
            </div>

            <div className="p-6 rounded-xl bg-yellow-50">
              <div className="text-4xl font-bold">12+</div>
              <div className="text-sm mt-1">Publications & Resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Resources / Downloads */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Resources & Downloads
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/docs/constitution.pdf"
              className="block p-6 rounded-xl bg-white shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">DSS Constitution (PDF)</h3>
              <p className="text-sm text-gray-600 mt-1">
                Legal framework and objectives
              </p>
            </a>

            <a
              href="/docs/annual-report-2024.pdf"
              className="block p-6 rounded-xl bg-white shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">Annual Report 2024 (PDF)</h3>
              <p className="text-sm text-gray-600 mt-1">
                Programs, finance & impact
              </p>
            </a>

            <a
              href="/docs/program-summary.pdf"
              className="block p-6 rounded-xl bg-white shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">Program Summary (PDF)</h3>
              <p className="text-sm text-gray-600 mt-1">
                Overview of current activities
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 8. News / Blogs */}
      <section id="news" className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">News & Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Community Workshop</h3>
            <p className="text-gray-600">
              Highlights from our recent language workshop.
            </p>
          </article>
          <article className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Research Updates</h3>
            <p className="text-gray-600">
              Latest findings on Dura cultural practices.
            </p>
          </article>
          <article className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Student Voices</h3>
            <p className="text-gray-600">
              Stories from Dura students across Nepal.
            </p>
          </article>
        </div>
      </section>

      {/* 8. Partners / Supporters */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8">Partners & Supporters</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            <img
              src="https://dummyimage.com/160x60/ededed/999&text=Partner+1"
              alt="Partner 1"
              className="mx-auto opacity-80"
            />
            <img
              src="https://dummyimage.com/160x60/ededed/999&text=Partner+2"
              alt="Partner 2"
              className="mx-auto opacity-80"
            />
            <img
              src="https://dummyimage.com/160x60/ededed/999&text=Partner+3"
              alt="Partner 3"
              className="mx-auto opacity-80"
            />
            <img
              src="https://dummyimage.com/160x60/ededed/999&text=Partner+4"
              alt="Partner 4"
              className="mx-auto opacity-80"
            />
            <img
              src="https://dummyimage.com/160x60/ededed/999&text=Partner+5"
              alt="Partner 5"
              className="mx-auto opacity-80"
            />
          </div>
        </div>
      </section>

      {/* 10. Team / Governance */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Team & Governance
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Chairperson */}
            <div className="p-6 rounded-xl border text-center">
              <img
                src="https://dummyimage.com/160x160/ddd/888&text=Photo"
                alt="Chairperson"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <div className="font-semibold">Chairperson Name</div>
              <div className="text-sm text-gray-600">Chairperson</div>
            </div>

            {/* Secretary */}
            <div className="p-6 rounded-xl border text-center">
              <img
                src="https://dummyimage.com/160x160/ddd/888&text=Photo"
                alt="Secretary"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <div className="font-semibold">Secretary Name</div>
              <div className="text-sm text-gray-600">General Secretary</div>
            </div>

            {/* Treasurer */}
            <div className="p-6 rounded-xl border text-center">
              <img
                src="https://dummyimage.com/160x160/ddd/888&text=Photo"
                alt="Treasurer"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <div className="font-semibold">Treasurer Name</div>
              <div className="text-sm text-gray-600">Treasurer</div>
            </div>

            {/* Board Member */}
            <div className="p-6 rounded-xl border text-center">
              <img
                src="https://dummyimage.com/160x160/ddd/888&text=Photo"
                alt="Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <div className="font-semibold">Member Name</div>
              <div className="text-sm text-gray-600">Board Member</div>
            </div>
          </div>

          {/* Board Structure PDF */}
          <div className="mt-8 text-center">
            <a
              href="/docs/board-structure.pdf"
              className="text-blue-600 underline"
            >
              View Board Structure & Policies (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* 11. Donate / Get Involved */}
      <section
        id="donate"
        className="py-20 bg-gradient-to-b from-yellow-50 to-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Support Our Work
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-10">
            Every rupee helps us run classes, document stories, and publish
            resources. Thank you for standing with the Dura community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Donate in Nepal */}
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="font-semibold mb-2">Donate in Nepal</h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt="QR"
                className="w-32 h-32 object-contain mb-3"
              />
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <strong>Bank:</strong> XYZ Bank (Lamjung)
                </li>
                <li>
                  <strong>Name:</strong> Dura Students Society
                </li>
                <li>
                  <strong>Acc No:</strong> 123456789
                </li>
                <li>eSewa ID: 98XXXXXXXX</li>
                <li>Khalti ID: 98XXXXXXXX</li>
              </ul>
            </div>

            {/* International */}
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="font-semibold mb-2">International</h3>
              <p className="text-sm">
                For international donors, please use bank transfer or contact us
                for PayPal details.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mt-2">
                <li>
                  <strong>SWIFT:</strong> XYZBNPKA
                </li>
                <li>
                  <strong>IBAN:</strong> —
                </li>
                <li>
                  <strong>Address:</strong> Lamjung, Nepal
                </li>
              </ul>
            </div>

            {/* Volunteer / Partner */}
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="font-semibold mb-2">Volunteer / Partner</h3>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto divide-y">
            <details className="py-4">
              <summary className="font-semibold cursor-pointer">
                Is DSS a registered organization?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Yes, DSS is registered in Nepal as a non-governmental
                organization (NGO).
              </p>
            </details>

            <details className="py-4">
              <summary className="font-semibold cursor-pointer">
                How can I join language classes?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Follow our Facebook page for schedules or contact us via
                email/phone.
              </p>
            </details>

            <details className="py-4">
              <summary className="font-semibold cursor-pointer">
                Do you publish learning materials?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Yes, we publish print and digital materials. See the Resources
                section.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 13. Contact */}
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
                <a
                  href="mailto:info@durastudents.org"
                  className="text-blue-600"
                >
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

      {/* 14. Footer */}
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
    </main>
  );
}
