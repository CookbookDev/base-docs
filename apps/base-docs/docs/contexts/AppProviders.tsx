import { lazy, Suspense } from 'react';

// const CookieBannerWrapper = lazy(async () => import('./CookieBannerWrapper.tsx'));
import pkg from '@coinbase/cookie-banner';
const { CookieBanner } = pkg;

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <CookieBanner />
      </Suspense>
    </>
  );
}
