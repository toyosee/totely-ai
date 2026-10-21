import { Header, Hero, WhatYouCanOrder } from './sections/Top';
import { Earn, Features, HowItWorks, PhotoProof, Safety } from './sections/Middle';
import { Areas, FAQ, FinalCTA, Footer } from './sections/Bottom';

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <WhatYouCanOrder />
        <HowItWorks />
        <PhotoProof />
        <Features />
        <Safety />
        <Earn />
        <Areas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
