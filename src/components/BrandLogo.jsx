export default function BrandLogo({ full = false }) {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="8" r="5" stroke="#C9A84C" strokeWidth="1.8" />
      <circle cx="18" cy="8" r="5" stroke="#C9A84C" strokeWidth="1.8" />
      <line x1="11" y1="8" x2="13" y2="8" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />
      {full && (
        <>
          <line x1="1" y1="8" x2="0" y2="8" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="23" y1="8" x2="24" y2="8" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
