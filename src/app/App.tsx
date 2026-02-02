import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { WhyChooseUs } from '@/app/components/WhyChooseUs';
import { AreasWeServe } from '@/app/components/AreasWeServe';
import { Gallery } from '@/app/components/Gallery';
import { Testimonials } from '@/app/components/Testimonials';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Map } from '@/app/components/Map';
import { FloatingWhatsApp } from '@/app/components/FloatingWhatsApp';
import { Header } from '@/app/components/Header';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <AreasWeServe />
      <Testimonials />
      <Map />
      <FinalCTA />
      <FloatingWhatsApp />
    </div>
  );
}
