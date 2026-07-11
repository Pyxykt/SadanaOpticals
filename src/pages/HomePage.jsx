import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CategoryStrip from '../components/CategoryStrip';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const TESTIMONIALS = [
  {
    stars: '★★★★★',
    text: '"The Aviator Classic Gold is everything I wanted — lightweight, stylish, and the UV protection is genuinely top-notch. Arrived in 2 days with a gorgeous hard case."',
    name: 'Arjun Mehta',
    role: 'Mumbai, Maharashtra',
    initial: 'A',
  },
  {
    stars: '★★★★★',
    text: '"I spend 10+ hours a day on screens and the Blue Light Shield Pro has completely eliminated my evening headaches. Best investment I\'ve made for my eye health."',
    name: 'Priya Sharma',
    role: 'Bengaluru, Karnataka',
    initial: 'P',
  },
  {
    stars: '★★★★★',
    text: '"The Cat Eye Noir frames got compliments on day one. Quality is exceptional — the acetate feels premium and the gradient lenses are just stunning."',
    name: 'Sneha Kapoor',
    role: 'Delhi, NCR',
    initial: 'S',
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  useEffect(() => {
    document.title = 'Sadana Opticals | Premium Eyewear in Jamshedpur';
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-inner container">
          <div className="hero-content">
            <div className="hero-badge" aria-label="New arrivals available">
              ✦ New Collection 2026
            </div>
            <h1 className="hero-title" id="hero-heading">
              See the World in
              <span className="accent"> Perfect Clarity</span>
            </h1>
            <p className="hero-desc">
              Premium eyewear crafted for every face and every occasion. UV400 protection, precision optics, and
              timeless style — all starting at ₹999.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Collection
              </Link>
              <a href="#why-us" className="btn btn-ghost-white btn-lg">
                Why Sadana Opticals
              </a>
            </div>
            <div className="hero-stats" role="list">
              <div className="stat-item" role="listitem">
                <div className="stat-number">500+</div>
                <div className="stat-label">Frame Styles</div>
              </div>
              <div className="stat-item" role="listitem">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item" role="listitem">
                <div className="stat-number">100%</div>
                <div className="stat-label">UV Protected</div>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-img-wrap">
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14168-c4-eyeglasses_vincent-chase-vc-e14168-c4-eyeglasses_G_4670.jpg"
                alt="Sadana Opticals premium eyewear collection — assorted designer frames displayed in store"
                width="800"
                height="600"
              />
            </div>
            <div className="hero-float-card" role="complementary" aria-label="Free shipping offer">
              <div className="float-icon" aria-hidden="true">
                🚚
              </div>
              <div>
                <div className="float-label">Enjoy</div>
                <div className="float-value">Free Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryStrip mode="links" />

      <section className="section featured-products" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Handpicked for You</span>
            <h2 className="section-title" id="featured-heading">
              Featured Eyewear
            </h2>
            <p className="section-subtitle">
              Our most-loved styles — from classic aviators to blue-light defenders. Free home try-on available.
            </p>
          </div>

          <div className="products-grid" role="list" aria-label="Featured products">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-dark btn-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="why-us section" id="why-us" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ color: 'var(--color-accent)' }}>
              Why Sadana Opticals
            </span>
            <h2 className="section-title" id="why-heading" style={{ color: 'white' }}>
              The Sadana Opticals Difference
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,.6)' }}>
              Every pair we sell meets strict quality standards — because your vision deserves the best.
            </p>
          </div>
          <div className="why-grid">
            <article className="why-item">
              <div className="why-icon" aria-hidden="true">
                🔬
              </div>
              <h3>Precision Optics</h3>
              <p>
                Every lens is crafted to stringent optical standards, ensuring distortion-free vision from edge to edge.
              </p>
            </article>
            <article className="why-item">
              <div className="why-icon" aria-hidden="true">
                ☀️
              </div>
              <h3>UV400 Protection</h3>
              <p>
                100% UVA and UVB protection on all sunglasses — your eyes stay safe even in the harshest Indian summer.
              </p>
            </article>
            <article className="why-item">
              <div className="why-icon" aria-hidden="true">
                🪶
              </div>
              <h3>Feather-Light Frames</h3>
              <p>
                Premium materials like TR90 and Italian acetate keep our frames comfortable through the longest days.
              </p>
            </article>
            <article className="why-item">
              <div className="why-icon" aria-hidden="true">
                🔄
              </div>
              <h3>30-Day Easy Returns</h3>
              <p>
                Not the right fit? Return or exchange within 30 days — no questions, no hassle, full refund guaranteed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Customer Stories</span>
            <h2 className="section-title" id="testimonials-heading">
              What Our Customers Say
            </h2>
            <p className="section-subtitle">
              Trusted by customers across Jamshedpur and beyond for quality eyewear every day.
            </p>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="testi-card">
                <div className="testi-stars" aria-label="5 out of 5 stars">
                  {t.stars}
                </div>
                <blockquote className="testi-text">{t.text}</blockquote>
                <footer className="testi-author">
                  <div className="author-avatar" aria-hidden="true">
                    {t.initial}
                  </div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Ready to Find Your Perfect Pair?</h2>
          <p>Browse our complete collection of 500+ styles. Free delivery. Easy 30-day returns.</p>
          <div className="cta-actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              Shop All Eyewear
            </Link>
            <Link to="/contact" className="btn btn-ghost-white btn-lg">
              Get Expert Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
