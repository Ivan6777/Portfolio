import { Hero } from '@/app/components/Hero';
import { TechStack } from '@/app/components/TechStack';
import { Portfolio } from '@/app/components/Portfolio';
import { About } from '@/app/components/About';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="bg-[#000000] min-h-screen text-white">
      <Hero />
      <TechStack />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
}