import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        {/* Top rule — matches section dividers */}
        <div className="h-px w-full" style={{ background: 'rgba(0,0,0,0.06)' }} />

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">

            <a href="#home" className="flex items-center flex-shrink-0">
              <img
                src="/lovable-uploads/4b252ba2-b2d9-46fd-bf38-d91f00398313.png"
                alt="Ancestral Development Logo"
                className="h-7 w-auto"
              />
            </a>

            {/* Desktop nav — show from lg upward so tablets get the drawer */}
            <nav className="hidden lg:flex items-center gap-7">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#6a6a6a',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0a0a0a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6a6a6a')}
                >
                  {item.name}
                  {/* Underline on hover */}
                  <span
                    className="absolute left-0 -bottom-0.5 w-0 h-px group-hover:w-full"
                    style={{
                      background: '#7c3aed',
                      transition: 'width 0.25s ease',
                    }}
                  />
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a href="mailto:support@ancestraldev.com">
                <button
                  className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: 'transparent',
                    border: '1.5px solid #e0e0e0',
                    color: '#4a4a4a',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#7c3aed';
                    (e.currentTarget as HTMLElement).style.color = '#7c3aed';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0';
                    (e.currentTarget as HTMLElement).style.color = '#4a4a4a';
                  }}
                >
                  Email Us
                </button>
              </a>

              <a href="https://discord.gg/StDudTGgQg" target="_blank" rel="noopener noreferrer">
                <button
                  className="group flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: '#7c3aed',
                    letterSpacing: '0.02em',
                    boxShadow: '0 2px 16px rgba(124,58,237,0.22)',
                  }}
                >
                  Join Discord
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </a>
            </div>

            {/* Hamburger — shown on mobile and tablet */}
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
              style={{
                color: '#0a0a0a',
                background: isMenuOpen ? '#f3f0ff' : 'transparent',
                border: isMenuOpen ? '1px solid #e0d9ff' : '1px solid transparent',
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="h-px w-full" style={{ background: 'rgba(0,0,0,0.06)' }} />

        {/* Mobile drawer */}
        <div
          style={{
            maxHeight: isMenuOpen ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
            background: 'rgba(255,255,255,0.97)',
          }}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 flex flex-col gap-1">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center py-3 group"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#4a4a4a',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.04)',
                  transition: 'color 0.2s ease',
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a4a4a')}
              >
                {item.name}
              </a>
            ))}

            <div className="flex gap-2.5 pt-5">
              <a href="mailto:support@ancestraldev.com" className="flex-1">
                <button
                  className="w-full px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: 'transparent',
                    border: '1.5px solid #e0e0e0',
                    color: '#4a4a4a',
                    letterSpacing: '0.02em',
                  }}
                >
                  Email Us
                </button>
              </a>

              <a href="https://discord.gg/StDudTGgQg" target="_blank" rel="noopener noreferrer" className="flex-1">
                <button
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: '#7c3aed',
                    letterSpacing: '0.02em',
                    boxShadow: '0 2px 16px rgba(124,58,237,0.22)',
                  }}
                >
                  Join Discord
                  <ArrowRight className="h-3 w-3" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </>
  );
};

export default Header;