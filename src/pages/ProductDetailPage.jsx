import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useToast } from '../context/ToastContext';
import { PRODUCTS, formatPrice, getProductById, getProductBySlug } from '../data/products';

const SPECS_ICONS = { frame: '🖼️', lens: '🔭', weight: '⚖️', fit: '📐', gender: '👤', origin: '🌍' };
const ALT_LABELS = ['front view', 'side profile', 'lens detail', 'full product view'];

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const product =
    getProductBySlug(slug) || getProductById(searchParams.get('id'));

  const [imageIndex, setImageIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
    setColorIndex(0);
    setSizeIndex(0);
  }, [slug]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | ClearGaze`;
    } else {
      document.title = 'Product Detail | ClearGaze';
    }
  }, [product]);

  if (!product) {
    return (
      <div className="detail-section">
        <div className="container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
          <h2>Product not found</h2>
          <p style={{ margin: '1rem 0 2rem' }}>The product you are looking for does not exist.</p>
          <Link to="/products" className="btn btn-primary">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="detail-section">
      <div className="container">
        <nav className="breadcrumb" style={{ paddingTop: '1.5rem' }} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">
            ›
          </span>
          <Link to="/products">Shop</Link>
          <span className="breadcrumb-sep" aria-hidden="true">
            ›
          </span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="detail-grid">
          <div className="gallery" aria-label="Product images">
            <div className="gallery-main">
              <img
                src={product.images[imageIndex]}
                alt={`${product.name} — ${ALT_LABELS[imageIndex] || 'detail view'}, ${product.specs.frame} frame`}
                width="600"
                height="450"
              />
            </div>
            <div className="gallery-thumbs" role="list" aria-label="Product image thumbnails">
              {product.images.map((img, i) => (
                <div
                  key={img}
                  className={`thumb-item${i === imageIndex ? ' active' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${product.name} ${ALT_LABELS[i] || ''}`}
                  onClick={() => setImageIndex(i)}
                  onKeyDown={(e) => e.key === 'Enter' && setImageIndex(i)}
                >
                  <img
                    src={img}
                    alt={`${product.name} — ${ALT_LABELS[i] || 'detail view'}`}
                    loading="lazy"
                    width="120"
                    height="120"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-cat">{product.category}</div>
            <h1>{product.name}</h1>

            <div className="detail-rating" aria-label="Product rating">
              <span className="stars" title={`${product.rating} out of 5`}>
                {'★'.repeat(Math.round(product.rating))}
              </span>
              <span className="rating-value">{product.rating}</span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '.875rem' }}>
                ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="detail-price">
              <span className="detail-price-now">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="detail-price-was">{formatPrice(product.originalPrice)}</span>
              )}
              {product.originalPrice && (
                <span className="discount-pill">{product.discount}% OFF</span>
              )}
            </div>

            <div className="detail-desc">
              <p>{product.description}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div className="variant-label">Colour</div>
              <div className="color-swatch-wrap" aria-label="Select colour" role="radiogroup">
                {product.colors.map((c, i) => (
                  <div
                    key={c}
                    className={`color-swatch${i === colorIndex ? ' active' : ''}`}
                    style={{ background: c }}
                    title={product.colorNames?.[i] || c}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select colour ${product.colorNames?.[i] || c}`}
                    onClick={() => setColorIndex(i)}
                    onKeyDown={(e) => e.key === 'Enter' && setColorIndex(i)}
                  />
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <div className="variant-label">Frame Size</div>
              <div className="variant-btns" aria-label="Select frame size" role="radiogroup">
                {product.sizes.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    className={`variant-btn${i === sizeIndex ? ' active' : ''}`}
                    onClick={() => setSizeIndex(i)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="detail-actions">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                aria-label="Add to cart"
                onClick={() => showToast(`${product.name} added to cart!`)}
              >
                🛒 Add to Cart
              </button>
              <button
                type="button"
                className="btn btn-outline btn-lg"
                aria-label="Add to wishlist"
                onClick={() => showToast(`${product.name} added to wishlist!`)}
              >
                ♡ Wishlist
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                padding: '.875rem 1rem',
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '.375rem', fontSize: '.8rem', color: 'var(--color-text-muted)' }}>
                <span aria-hidden="true">🚚</span> Free delivery above ₹999
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.375rem', fontSize: '.8rem', color: 'var(--color-text-muted)' }}>
                <span aria-hidden="true">🔄</span> 30-day returns
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.375rem', fontSize: '.8rem', color: 'var(--color-text-muted)' }}>
                <span aria-hidden="true">🛡️</span> Genuine UV400
              </div>
            </div>

            <div className="detail-meta" aria-label="Product details">
              <div className="meta-row">
                <span className="meta-key">SKU</span>
                <span className="meta-val">PG-{String(product.id).padStart(4, '0')}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Availability</span>
                <span className="meta-val" style={{ color: product.inStock ? '#10B981' : '#EF4444' }}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Tags</span>
                <span className="meta-val">{product.tags?.join(', ') || ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="specs-section" aria-labelledby="specs-heading">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Technical Details</span>
            <h2 id="specs-heading">Frame Specifications</h2>
          </div>
          <div className="specs-grid" role="list" aria-label="Product specifications">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="spec-tile">
                <div className="spec-icon" aria-hidden="true">
                  {SPECS_ICONS[key] || '📌'}
                </div>
                <div className="spec-key">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                <div className="spec-val">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-section" aria-labelledby="related-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-label">You May Also Like</span>
              <h2 id="related-heading">Related Products</h2>
            </div>
            <div className="products-grid" role="list" aria-label="Related products">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
