import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const FAQS = [
  {
    q: 'Do you offer prescription lenses?',
    a: 'Yes — bring your prescription to our store or email it to us and we\'ll fit any frame with your exact prescription. Single vision, bifocal, and progressive options available.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer hassle-free 30-day returns on all unused frames. Simply pack the original case and receipt, and we\'ll process a full refund within 3–5 business days.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery takes 3–5 business days across India. Local pickup is available at our Jamshedpur store on G.P Road, Chowk Bazar, Jugsalai.',
  },
  {
    q: 'Are your lenses genuinely UV400?',
    a: 'Absolutely. Every pair of sunglasses we sell is third-party tested to confirm 100% UVA + UVB (UV400) protection. We include a quality certificate with every order.',
  },
];

export default function ContactPage() {
  const { showToast } = useToast();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Sadana Opticals — Eyewear Expert Support';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      e.target.reset();
      setSending(false);
      showToast("Message sent! We'll get back to you within 24 hours.");
    }, 1400);
  };

  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">
              ›
            </span>
            <span aria-current="page">Contact Us</span>
          </nav>
          <h1 id="page-title">Get in Touch</h1>
          <p>We&apos;re here to help you find the perfect pair. Reach out any time.</p>
        </div>
      </section>

      <section className="contact-page section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 id="contact-heading">We&apos;d Love to Hear From You</h2>
              <p>
                Have a question about a frame, need help with your prescription, or just want advice on choosing the
                right pair? Our experts typically respond within 2–4 business hours.
              </p>

              <div className="contact-details" role="list">
                <div className="contact-row" role="listitem">
                  <div className="contact-icon" aria-hidden="true">
                    📍
                  </div>
                  <div>
                    <div className="contact-row-label">Store Address</div>
                    <address className="contact-row-value" style={{ fontStyle: 'normal' }}>
                      G.P Road, Chowk Bazar, Jugsalai
                      <br />
                      Jamshedpur 831005
                    </address>
                  </div>
                </div>

                <div className="contact-row" role="listitem">
                  <div className="contact-icon" aria-hidden="true">
                    📞
                  </div>
                  <div>
                    <div className="contact-row-label">Phone</div>
                    <div className="contact-row-value">
                      <a href="tel:+917004400583" style={{ color: 'inherit' }}>
                        7004400583
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-row" role="listitem">
                  <div className="contact-icon" aria-hidden="true">
                    ✉️
                  </div>
                  <div>
                    <div className="contact-row-label">Email</div>
                    <div className="contact-row-value">
                      <a href="mailto:Puneet.eye@gmail.com" style={{ color: 'inherit' }}>
                        Puneet.eye@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-row" role="listitem">
                  <div className="contact-icon" aria-hidden="true">
                    🕐
                  </div>
                  <div>
                    <div className="contact-row-label">Store Hours</div>
                    <div className="contact-row-value">
                      Mon–Fri: 10:00 AM – 8:00 PM
                      <br />
                      Sat–Sun: 11:00 AM – 7:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Follow Us</h3>
              <div className="social-links" aria-label="Social media profiles">
                <a href="#" className="social-btn" aria-label="Follow Sadana Opticals on Instagram">
                  📸
                </a>
                <a href="#" className="social-btn" aria-label="Follow Sadana Opticals on Facebook">
                  👍
                </a>
                <a href="#" className="social-btn" aria-label="Follow Sadana Opticals on Twitter / X">
                  🐦
                </a>
                <a href="#" className="social-btn" aria-label="Watch Sadana Opticals on YouTube">
                  ▶️
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <p>Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

              <form className="form-grid" noValidate aria-label="Contact form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">
                    First Name <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    placeholder="Arjun"
                    required
                    autoComplete="given-name"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">
                    Last Name <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    placeholder="Mehta"
                    required
                    autoComplete="family-name"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="arjun@example.com"
                    required
                    autoComplete="email"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="7004400583"
                    autoComplete="tel"
                  />
                </div>

                <div className="form-group span-2">
                  <label className="form-label" htmlFor="subject">
                    Subject <span className="req" aria-hidden="true">*</span>
                  </label>
                  <select id="subject" name="subject" className="form-select" required aria-required="true" defaultValue="">
                    <option value="" disabled>
                      Select a topic…
                    </option>
                    <option value="product-enquiry">Product Enquiry</option>
                    <option value="order-status">Order Status</option>
                    <option value="returns">Returns &amp; Exchanges</option>
                    <option value="prescription">Prescription Advice</option>
                    <option value="wholesale">Wholesale / Bulk Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group span-2">
                  <label className="form-label" htmlFor="message">
                    Message <span className="req" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={5}
                    placeholder="Tell us how we can help you…"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                    {sending ? 'Sending…' : 'Send Message →'}
                  </button>
                  <p className="form-note">We reply within 24 business hours. Your information is never shared.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: 'white', borderTop: '1px solid var(--color-border)' }}
        aria-labelledby="faq-heading"
      >
        <div className="container">
          <div className="section-header">
            <span className="section-label">Quick Answers</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.75rem' }}>
            {FAQS.map((faq) => (
              <article
                key={faq.q}
                style={{ padding: '1.5rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)' }}
              >
                <h3 style={{ fontSize: '1rem', marginBottom: '.625rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '.875rem' }}>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner" aria-labelledby="contact-cta-heading">
        <div className="container">
          <h2 id="contact-cta-heading">Ready to Shop?</h2>
          <p>Browse 500+ styles and find your perfect pair today. Free delivery above ₹999.</p>
          <div className="cta-actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              Browse Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
