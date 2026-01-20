import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ForWho from '@/components/ForWho';
import Problem from '@/components/Problem';
import Layers from '@/components/Layers';
import Journey from '@/components/Journey';
import Includes from '@/components/Includes';
import IsForYou from '@/components/IsForYou';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ForWho />
        <Problem />
        <Layers />
        <Journey />
        <Includes />
        <IsForYou />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
