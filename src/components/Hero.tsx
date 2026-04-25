import { ArrowRight, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.transform = 'scaleX(0)';
    el.style.transformOrigin = 'left';
    el.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transform = 'scaleX(1)';
      });
    });
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: 'transparent' }}
      />

      {/* Accent blob — top right */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      {/* Accent blob — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      {/* Main content — left-aligned, vertically centered with flex-1 */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 pb-16">

        {/* Headline */}
        <h1
          className="opacity-0"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#0a0a0a',
            animation: 'fadeUp 0.7s ease forwards 0.2s',
          }}
        >
          Building the
          <br />
          <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>Future.</span>
        </h1>

        {/* Animated underline */}
        <div
          ref={lineRef}
          className="mt-6 mb-8 h-px bg-black/10 w-full max-w-lg"
        />

        {/* Body copy */}
        <p
          className="opacity-0 max-w-xl text-base sm:text-lg leading-relaxed"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#4a4a4a',
            animation: 'fadeUp 0.7s ease forwards 0.35s',
          }}
        >
          We tailor Desktop &amp; Mobile applications and Minecraft plugins to
          your liking — built to our standards of excellence.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-row items-start gap-3 opacity-0"
          style={{ animation: 'fadeUp 0.7s ease forwards 0.48s' }}
        >
          <a
            href="https://discord.gg/StDudTGgQg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none"
          >
            <button
              className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
              style={{
                background: '#7c3aed',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.01em',
                boxShadow: '0 4px 24px rgba(124,58,237,0.25)',
              }}
            >
              Contact Us
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </a>
 
          <button
            className="group flex sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
            style={{
              background: 'transparent',
              border: '1.5px solid #d4d4d4',
              color: '#0a0a0a',
              fontFamily: "'DM Sans', sans-serif",
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
            Our Portfolio
            <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
 
      </div>

      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;