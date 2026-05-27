import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { MouseGlow } from './components/MouseGlow';
import { ParticleField } from './components/ParticleField';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductFeatures } from './components/ProductFeatures';
import { SneakerTechnology } from './components/SneakerTechnology';
import { AthleteShowcase } from './components/AthleteShowcase';
import { ColorVariants } from './components/ColorVariants';
import { ProductGallery } from './components/ProductGallery';
import { CustomerReviews } from './components/CustomerReviews';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MouseGlow />
          <ParticleField />
          <Navbar />
          <main>
            <HeroSection />
            <ProductFeatures />
            <SneakerTechnology />
            <AthleteShowcase />
            <ColorVariants />
            <ProductGallery />
            <CustomerReviews />
            <PricingSection />
            <FAQSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
