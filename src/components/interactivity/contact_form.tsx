"use client"; // ← This makes it a Client Component
import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll be in touch.");
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow space-y-3"
      onSubmit={handleSubmit}
    >
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          required
          placeholder="Full name"
          className="border rounded-lg px-3 py-2"
        />
        <input
          type="email"
          required
          placeholder="Email address"
          className="border rounded-lg px-3 py-2"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="w-full border rounded-lg px-3 py-2"
      />
      <textarea
        required
        placeholder="Your message"
        className="w-full border rounded-lg px-3 py-2 h-28"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Send Message
      </button>
    </form>
  );
}
