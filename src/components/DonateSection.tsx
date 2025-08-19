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
  );
}
