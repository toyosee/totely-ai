import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { CTA } from './components/sections/CTA';
import { FAQ } from './components/sections/FAQ';
import { TrustBadges } from './components/ui/TrustBadges';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />

        {/* Trust Badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
          <TrustBadges />
        </div>

        <Features />
        <HowItWorks />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;