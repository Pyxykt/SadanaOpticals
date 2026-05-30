import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CategoryStrip from '../components/CategoryStrip';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

const PRICE_RANGES = [
  { id: '0-2000', label: 'Under ₹2,000' },
  { id: '2000-3500', label: '₹2,000 – ₹3,500' },
  { id: '3500+', label: 'Above ₹3,500' },
];

function matchesPrice(price, range) {
  if (range === '0-2000') return price <= 2000;
  if (range === '2000-3500') return price > 2000 && price <= 3500;
  if (range === '3500+') return price > 3500;
  return false;
}

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'All';

  const [activeCat, setActiveCat] = useState(initialCat);
  const [sidebarCats, setSidebarCats] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [sortVal, setSortVal] = useState('featured');

  useEffect(() => {
    document.title = 'Shop All Eyewear | Sadana Opticals — Sunglasses, Frames & Computer Glasses';
  }, []);

  useEffect(() => {
    const cat = searchParams.get('cat') || 'All';
    setActiveCat(cat);
  }, [searchParams]);

  const setCategory = (cat) => {
    setActiveCat(cat);
    if (cat === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat });
    }
  };

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeCat && activeCat !== 'All') {
      list = list.filter((p) => p.category === activeCat);
    } else if (sidebarCats.length > 0) {
      list = list.filter((p) => sidebarCats.includes(p.category));
    }

    if (priceRanges.length > 0) {
      list = list.filter((p) => priceRanges.some((range) => matchesPrice(p.price, range)));
    }

    if (sortVal === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortVal === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortVal === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (sortVal === 'newest') list.sort((a, b) => (b.badge === 'New') - (a.badge === 'New'));

    return list;
  }, [activeCat, sidebarCats, priceRanges, sortVal]);

  const clearFilters = () => {
    setActiveCat('All');
    setSidebarCats([]);
    setPriceRanges([]);
    setSortVal('featured');
    setSearchParams({});
  };

  const toggleSidebarCat = (cat) => {
    setSidebarCats((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  };

  const togglePrice = (range) => {
    setPriceRanges((prev) => (prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]));
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
            <span aria-current="page">Shop All</span>
          </nav>
          <h1 id="page-title">Shop All Eyewear</h1>
          <p>Discover 500+ styles — from timeless classics to modern statement pieces.</p>
        </div>
      </section>

      <CategoryStrip mode="buttons" activeCat={activeCat} onSelect={setCategory} />

      <section className="products-page" aria-label="Product listing">
        <div className="container">
          <div className="products-layout">
            <aside className="sidebar" aria-label="Product filters">
              <div className="sidebar-head">
                <h2 className="sidebar-title">Filters</h2>
                <button type="button" className="filter-clear-btn" aria-label="Clear all filters" onClick={clearFilters}>
                  Clear all
                </button>
              </div>

              <fieldset className="filter-group">
                <legend className="filter-group-label">Category</legend>
                {['Sunglasses', 'Eyeglasses', 'Computer Glasses', 'Sports'].map((cat) => (
                  <label key={cat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={sidebarCats.includes(cat)}
                      onChange={() => toggleSidebarCat(cat)}
                    />{' '}
                    {cat}
                  </label>
                ))}
              </fieldset>

              <fieldset className="filter-group">
                <legend className="filter-group-label">Price Range</legend>
                {PRICE_RANGES.map(({ id, label }) => (
                  <label key={id} className="filter-option">
                    <input type="checkbox" checked={priceRanges.includes(id)} onChange={() => togglePrice(id)} />{' '}
                    {label}
                  </label>
                ))}
              </fieldset>

              <fieldset className="filter-group">
                <legend className="filter-group-label">Gender</legend>
                <label className="filter-option">
                  <input type="checkbox" readOnly /> Unisex
                </label>
                <label className="filter-option">
                  <input type="checkbox" readOnly /> Women
                </label>
                <label className="filter-option">
                  <input type="checkbox" readOnly /> Men
                </label>
              </fieldset>
            </aside>

            <div className="products-main">
              <div className="products-bar">
                <p className="results-count">
                  Showing <strong>{filtered.length}</strong> products
                </p>
                <div className="sort-wrap">
                  <label htmlFor="sortSelect" className="sr-only">
                    Sort by
                  </label>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '.875rem' }}>Sort by:</span>
                  <select
                    id="sortSelect"
                    className="sort-select"
                    aria-label="Sort products"
                    value={sortVal}
                    onChange={(e) => setSortVal(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              <div className="products-grid" role="list" aria-label="Products">
                {filtered.length === 0 ? (
                  <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: '#6B7280' }}>
                    No products found. Try adjusting your filters.
                  </p>
                ) : (
                  filtered.map((p) => <ProductCard key={p.id} product={p} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner" aria-labelledby="products-cta-heading">
        <div className="container">
          <h2 id="products-cta-heading">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p>Our eyewear experts are ready to help you choose the perfect pair for your face shape and lifestyle.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
