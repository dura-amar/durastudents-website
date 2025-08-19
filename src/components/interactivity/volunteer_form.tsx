"use client"; // ← Client Component for interactivity
import { useState } from "react";

export default function VolunteerForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${fullName}! We will contact you soon.`);
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        type="email"
        required
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      />
      <textarea
        placeholder="How would you like to help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 h-24"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
        Submit
      </button>
    </form>
  );
}
