import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-40 pb-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm scale-110"
        style={{
          backgroundImage: "url('https://i.imgur.com/oLeMtqs.jpeg')",
        }}
      />

      {/* Dark overlay (NOT white) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Building the
          <span className="text-transparent bg-clip-text bg-purple-500">
            {" "}Future
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          We tailor Desktop & Mobile applications and Minecraft plugins to your liking, and according to our standards of excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://discord.gg/StDudTGgQg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white rounded-xl px-8 py-4 text-lg font-semibold"
          >
            Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
