import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const NAVBAR_CTA = {
  '/products': { label: 'Get Help', to: '/contact' },
  '/contact': { label: 'Shop Now', to: '/products' },
};

export default function Layout() {
  const { pathname } = useLocation();
  const isDetail = pathname.startsWith('/product/');
  const cta = NAVBAR_CTA[pathname] ?? (isDetail ? { label: '← All Products', to: '/products' } : { label: 'Shop Now', to: '/products' });
  const footerVariant = pathname === '/' ? 'full' : 'compact';

  return (
    <>
      <Navbar ctaLabel={cta.label} ctaTo={cta.to} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer variant={footerVariant} />
    </>
  );
}
