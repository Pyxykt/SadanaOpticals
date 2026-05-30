import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { useToast } from '../context/ToastContext';

export default function Footer({ variant = 'full' }) {
  const { showToast } = useToast();

  const handleNewsletter = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('.newsletter-input');
    if (input?.value.trim()) {
      showToast('Subscribed! Welcome to Sadana Opticals.');
      input.value = '';
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-brand" aria-label="Sadana Opticals home">
              <div className="brand-logo" aria-hidden="true">
                <BrandLogo />
              </div>
              <span className="brand-name">
                Sadana <span>Opticals</span>
              </span>
            </Link>
            <p>
              {variant === 'full'
                ? 'Premium eyewear crafted for every face and every lifestyle. Precision optics, timeless design, genuine UV protection.'
                : 'Premium eyewear crafted for every face and every lifestyle.'}
            </p>
            <div className="social-links" aria-label="Social media links">
              <a href="#" className="social-btn" aria-label="Follow Sadana Opticals on Instagram">
                📸
              </a>
              <a href="#" className="social-btn" aria-label="Follow Sadana Opticals on Facebook">
                👍
              </a>
              <a href="#" className="social-btn" aria-label="Follow Sadana Opticals on Twitter">
                🐦
              </a>
            </div>
          </div>

          <nav aria-label="Shop links">
            <h3 className="footer-title">Shop</h3>
            <ul className="footer-links">
              <li>
                <Link to="/products?cat=Sunglasses" className="footer-link">
                  Sunglasses
                </Link>
              </li>
              <li>
                <Link to="/products?cat=Eyeglasses" className="footer-link">
                  Eyeglasses
                </Link>
              </li>
              <li>
                <Link to="/products?cat=Computer+Glasses" className="footer-link">
                  Computer Glasses
                </Link>
              </li>
              <li>
                <Link to="/products?cat=Sports" className="footer-link">
                  Sports Eyewear
                </Link>
              </li>
              {variant === 'full' && (
                <li>
                  <Link to="/products" className="footer-link">
                    New Arrivals
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label={variant === 'full' ? 'Company links' : 'Help links'}>
            <h3 className="footer-title">{variant === 'full' ? 'Company' : 'Help'}</h3>
            <ul className="footer-links">
              {variant === 'full' && (
                <li>
                  <Link to="/#why-us" className="footer-link">
                    About Us
                  </Link>
                </li>
              )}
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Returns &amp; Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-newsletter">
            <h3 className="footer-title">{variant === 'full' ? 'Stay in the Loop' : 'Newsletter'}</h3>
            <p>
              {variant === 'full'
                ? 'Get new arrivals, exclusive offers, and eye care tips delivered to your inbox.'
                : 'New arrivals and exclusive offers in your inbox.'}
            </p>
            <form className="newsletter-form" aria-label="Newsletter signup" onSubmit={handleNewsletter}>
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                className="newsletter-input"
                placeholder="your@email.com"
                required
              />
              <button type="submit" className="newsletter-btn">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Sadana Opticals. All rights reserved.</p>
          <nav className="footer-bottom-links" aria-label="Legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
