import { Link, useSearchParams } from 'react-router-dom';

const CATEGORIES = [
  { id: 'All', linkLabel: '👓 All Eyewear', chipLabel: '👓 All' },
  { id: 'Sunglasses', linkLabel: '🕶️ Sunglasses', chipLabel: '🕶️ Sunglasses' },
  { id: 'Eyeglasses', linkLabel: '🔍 Eyeglasses', chipLabel: '🔍 Eyeglasses' },
  { id: 'Computer Glasses', linkLabel: '💻 Computer Glasses', chipLabel: '💻 Computer Glasses' },
  { id: 'Sports', linkLabel: '🏃 Sports', chipLabel: '🏃 Sports' },
];

export default function CategoryStrip({ mode = 'links', activeCat, onSelect }) {
  const [searchParams] = useSearchParams();
  const urlCat = searchParams.get('cat') || 'All';
  const current = activeCat ?? urlCat;

  return (
    <section className="category-strip" aria-label="Browse by category">
      <div className="container">
        <nav className="category-list" aria-label="Product categories">
          {CATEGORIES.map((cat) => {
            const isActive = current === cat.id;
            const label = mode === 'links' ? cat.linkLabel : cat.chipLabel;

            if (mode === 'buttons') {
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`cat-chip${isActive ? ' active' : ''}`}
                  data-cat={cat.id}
                  onClick={() => onSelect?.(cat.id)}
                >
                  {label}
                </button>
              );
            }

            return (
              <Link
                key={cat.id}
                to={`/products?cat=${encodeURIComponent(cat.id)}`}
                className={`cat-chip${isActive ? ' active' : ''}`}
                data-cat={cat.id}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
