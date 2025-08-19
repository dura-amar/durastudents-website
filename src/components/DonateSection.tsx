import VolunteerForm from "./interactivity/volunteer_form";


export default function DonateSection() {
  return (
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
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Donate Online</h3>
            <p className="text-sm mb-4">
              Secure online payments accepted via local banks.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Donate Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Bank Transfer</h3>
            <p className="text-sm">
              Account: DSS-1234567890, Bank Name, Branch
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Volunteer</h3>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
