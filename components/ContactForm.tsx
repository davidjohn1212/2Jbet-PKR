"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setStatus("sent");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder="How can we help?"
        />
      </div>

      <button type="submit" className="btn-primary contact-form-submit">
        Send Message
      </button>

      {status === "sent" && (
        <p className="contact-form-note" role="status">
          Thank you. Your message has been submitted.
        </p>
      )}
    </form>
  );
}
