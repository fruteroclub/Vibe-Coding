import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

// Lazy load non-critical components below the fold
const ParticlesBackground = lazy(() => import('@/components/ParticlesBackground'));
const ForWho = lazy(() => import('@/components/ForWho'));
const Problem = lazy(() => import('@/components/Problem'));
const Layers = lazy(() => import('@/components/Layers'));
const Journey = lazy(() => import('@/components/Journey'));
const Includes = lazy(() => import('@/components/Includes'));
const IsForYou = lazy(() => import('@/components/IsForYou'));
const Pricing = lazy(() => import('@/components/Pricing'));
const FAQ = lazy(() => import('@/components/FAQ'));
const FinalCTA = lazy(() => import('@/components/FinalCTA'));
const CookieBanner = lazy(() => import('@/components/CookieBanner'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" itemScope itemType="https://schema.org/WebPage">
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <Navbar />
      <main className="relative z-10" role="main">
        <article itemScope itemType="https://schema.org/Course">
          <Hero />
          <Suspense fallback={<div className="h-screen" />}>
            <ForWho />
            <Problem />
            <Layers />
            <Journey />
            <Includes />
            <IsForYou />
            <Pricing />
            <FAQ />
            <FinalCTA />
          </Suspense>
        </article>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <CookieBanner />
      </Suspense>
    </div>
  );
};

export default Index;
