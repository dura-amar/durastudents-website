"use client"; // ← This enables interactivity

import { useState } from "react";

export default function FooterSubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-3 py-2 rounded-lg border"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Join
      </button>
    </form>
  );
}
