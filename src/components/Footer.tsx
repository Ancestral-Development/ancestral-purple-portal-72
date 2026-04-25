import { Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const services = [
    'Android/Desktop Development',
    'Minecraft Plugins',
    'Custom Solutions',
  ];

  return (
    <footer id="contact" className="relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent blob */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Top CTA band */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "'DM Mono', monospace", color: '#7c3aed' }}
            >
              Ready to build?
            </p>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Let's work{' '}
              <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>together.</span>
            </h3>
          </div>

          <a href="https://discord.gg/StDudTGgQg" target="_blank" rel="noopener noreferrer">
            <button
              className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] flex-shrink-0"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: '#7c3aed',
                boxShadow: '0 4px 24px rgba(124,58,237,0.3)',
                letterSpacing: '0.01em',
              }}
            >
              Join Discord
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </a>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/lovable-uploads/4b252ba2-b2d9-46fd-bf38-d91f00398313.png"
              alt="Ancestral Development Logo"
              className="h-8 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.4)' }}
            >
              Crafting high-performance solutions that bring your digital vision to life.
            </p>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(255,255,255,0.3)' }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.5)' }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(255,255,255,0.3)' }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(255,255,255,0.3)' }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#7c3aed' }} />
                <a
                  href="mailto:support@ancestraldev.com"
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  support@ancestraldev.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#7c3aed' }} />
                <span
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.5)' }}
                >
                  Remote & Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}
          >
            © 2026 ANCESTRAL DEVELOPMENT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-px" style={{ background: '#7c3aed' }} />
            <span
              className="text-xs"
              style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}
            >
              BUILT WITH PRECISION
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;