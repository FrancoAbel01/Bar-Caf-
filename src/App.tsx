import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Catalog from '@/components/Catalog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-coffee-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Catalog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
