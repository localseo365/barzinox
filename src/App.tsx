import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load non-critical components
const Zones = lazy(() => import('./components/Zones'));
const FAQ = lazy(() => import('./components/FAQ'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <Zones />
          <FAQ />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      </div>
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;