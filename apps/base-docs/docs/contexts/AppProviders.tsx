import { lazy, Suspense } from 'react';

const CookieBannerWrapper = lazy(async () => import('./CookieBannerWrapper.tsx'));

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <CookieBannerWrapper />
      </Suspense>
    </>
  );
}
