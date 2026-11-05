import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setMessage('Email setup is incomplete. Add your EmailJS keys to the .env file.');
      return;
    }

    setStatus('sending');
    setMessage('Sending your message…');

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });

      form.reset();
      setStatus('success');
      setMessage('Message sent — thank you. I’ll get back to you soon.');
    } catch {
      setStatus('error');
      setMessage('That did not send. Please try again or email me directly.');
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout reveal">
        <div className="contact-intro">
          <p className="eyebrow">04 — YOUR NEXT IDEA STARTS HERE</p>

          <h2>
            Let&apos;s make
            <br />
            it <span className="accent-text">real.</span>
          </h2>

          <p className="contact-copy">
            Have a project, an idea, or simply want to say hello? Send me a
            note and I&apos;ll reply soon.
          </p>

          <div className="availability">
            <span className="status-dot" />
            Currently open to opportunities
          </div>

          <div className="social-links">
            <a
              href="https://github.com/nivakclt"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/nivakclt"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowIcon />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>NEW MESSAGE</span>
            <span>✳</span>
          </div>

          <label>
            <span>Your name</span>
            <input
              type="text"
              name="from_name"
              placeholder="What should I call you?"
              required
            />
          </label>

          <label>
            <span>Your email</span>
            <input
              type="email"
              name="reply_to"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            <span>What&apos;s on your mind?</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me a little about your idea…"
              required
            />
          </label>

          <button
            className="button button-primary form-submit"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
            <ArrowIcon />
          </button>

          <p className={`form-status ${status}`} aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}