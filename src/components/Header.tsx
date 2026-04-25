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

  const navLinkStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#4a4a4a',
    textDecoration: 'none',
    letterSpacing: '0.01em',
    transition: 'color 0.2s ease',
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
              <img
                src="/lovable-uploads/4b252ba2-b2d9-46fd-bf38-d91f00398313.png"
                alt="Ancestral Development Logo"
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={navLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4a4a4a')}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:support@ancestraldev.com">
                <button
                  className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: 'transparent',
                    border: '1.5px solid #d4d4d4',
                    color: '#0a0a0a',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#7c3aed';
                    (e.currentTarget as HTMLElement).style.color = '#7c3aed';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#d4d4d4';
                    (e.currentTarget as HTMLElement).style.color = '#0a0a0a';
                  }}
                >
                  Email Us
                </button>
              </a>

              <a href="https://discord.gg/StDudTGgQg" target="_blank" rel="noopener noreferrer">
                <button
                  className="group flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: '#7c3aed',
                    letterSpacing: '0.01em',
                    boxShadow: '0 4px 20px rgba(124,58,237,0.22)',
                  }}
                >
                  Join Discord
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200"
              style={{ color: '#0a0a0a', background: isMenuOpen ? '#f3f0ff' : 'transparent' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          style={{
            maxHeight: isMenuOpen ? '400px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            borderTop: isMenuOpen ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          }}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  ...navLinkStyle,
                  fontSize: '1rem',
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a4a4a')}
              >
                {item.name}
              </a>
            ))}

            {/* Divider */}
            <div className="h-px" style={{ background: 'rgba(0,0,0,0.06)' }} />

            <div className="flex flex-col gap-2.5">
              <a href="mailto:support@ancestraldev.com">
                <button
                  className="w-full px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: 'transparent',
                    border: '1.5px solid #d4d4d4',
                    color: '#0a0a0a',
                  }}
                >
                  Email Us
                </button>
              </a>

              <a href="https://discord.gg/StDudTGgQg" target="_blank" rel="noopener noreferrer">
                <button
                  className="w-full flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: '#7c3aed',
                    boxShadow: '0 4px 20px rgba(124,58,237,0.22)',
                  }}
                >
                  Join Discord
                  <ArrowRight className="h-3.5 w-3.5" />
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