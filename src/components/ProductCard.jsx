import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';

export default function ProductCard({ product: p }) {
  const badge = p.badge ? (
    <span className={`product-badge badge-${p.badge.toLowerCase()}`}>{p.badge}</span>
  ) : null;

  return (
    <Link to={`/product/${p.slug}`} className="product-card" aria-label={`View ${p.name}`}>
      <div className="product-card-img">
        <img
          src={p.image}
          alt={`${p.name} — ${p.category.toLowerCase()}, ${p.specs.frame} frame, ${p.specs.lens}`}
          loading="lazy"
          width="600"
          height="450"
        />
        {badge}
      </div>
      <div className="product-card-body">
        <div className="product-cat">{p.category}</div>
        <h3 className="product-name">{p.name}</h3>
        <p className="product-short">{p.shortDesc}</p>
        <div className="product-footer">
          <div className="price-wrap">
            <span className="price-now">{formatPrice(p.price)}</span>
            {p.originalPrice && <span className="price-was">{formatPrice(p.originalPrice)}</span>}
          </div>
          <div className="product-rating" aria-label={`Rating: ${p.rating} out of 5, ${p.reviewCount} reviews`}>
            <span className="stars" aria-hidden="true">
              {'★'.repeat(Math.round(p.rating))}
            </span>
            <span>{p.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
