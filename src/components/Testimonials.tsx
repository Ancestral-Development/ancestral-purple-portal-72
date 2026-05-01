import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'ArrowTan',
    role: 'Hosting & Server Owner',
    content: 'Vouch for Ancestral! They made a plugin that I have been wanting for a long time!',
    rating: 5,
    avatar: 'AT',
    index: '01',
  },
  {
    name: 'Night',
    role: 'Server Owner',
    content: 'Vouch for Ancestral for high quality plugins for very affordable price, kind people, fast support.',
    rating: 5,
    avatar: 'NT',
    index: '02',
  },
  {
    name: 'Pmanden',
    role: 'BuiltByBit User',
    content: 'Awesome plugin that works off the bat! Support on Discord is also extremely fast and they can answer questions within minutes.',
    rating: 5,
    avatar: 'PM',
    index: '03',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: 'transparent' }}
      />

      {/* Accent blob */}
      <div
        className="absolute top-0 right-0 w-[340px] h-[340px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">

        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px bg-purple-600" />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-600"
              style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
            >
              Client Voices
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#0a0a0a',
              }}
            >
              What Clients{' '}
              <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>Say</span>
            </h2>

            <p
              className="max-w-xs text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#4a4a4a' }}
            >
              Don't take our word for it — here's what our clients have to say.
            </p>
          </div>

          <div className="mt-8 h-px w-full bg-black/8" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.index}
              className="flex flex-col justify-between p-7 rounded-2xl transition-all duration-300"
              style={{ border: '1.5px solid #e8e8e8', background: '#fff' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#7c3aed';
                el.style.boxShadow = '0 8px 40px rgba(124,58,237,0.1)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#e8e8e8';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Index + stars */}
              <div className="flex items-center justify-between mb-6">
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#cccccc',
                  }}
                >
                  {t.index}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: '#f59e0b' }} />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#4a4a4a' }}
              >
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-semibold"
                  style={{
                    background: '#f3f0ff',
                    color: '#7c3aed',
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: '0.05em',
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#0a0a0a' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#8a8a8a' }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Testimonials;