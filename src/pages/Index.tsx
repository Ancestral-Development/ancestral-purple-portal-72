
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div        
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        >
         <Hero />
          <Services />
          <About />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
