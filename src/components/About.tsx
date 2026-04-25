import { Code, Users, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Maintainable & scalable',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning fast solutions',
  },
  {
    icon: Users,
    title: 'Support',
    description: 'Dedicated team support',
  },
];

const reasons = [
  '5+ years of combined development experience',
  'Expertise across multiple platforms and technologies',
  'Focus on performance optimization and user experience',
  'Transparent communication throughout the development process',
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: 'transparent' }}
      />

      {/* Accent blob — top left */}
      <div
        className="absolute top-0 left-0 w-[360px] h-[360px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
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
              Who We Are
            </span>
          </div>

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
            About{' '}
            <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>Ancestral.</span>
          </h2>

          <div className="mt-8 h-px w-full bg-black/8" />
        </div>

        {/* Main two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">

          {/* Left — mission + pillars */}
          <div>
            <p
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#4a4a4a' }}
            >
              At Ancestral Development, we believe in finishing your project in a timely
              manner without compromising performance or usability. We ensure the product
              is visually pleasing and easy to use — optimized, smooth, and crash-free.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#f3f0ff' }}
                  >
                    <Icon className="h-4.5 w-4.5" style={{ color: '#7c3aed' }} strokeWidth={2} size={18} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: '#0a0a0a' }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-xs mt-0.5 leading-snug"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: '#8a8a8a' }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Why Choose Us card */}
          <div
            className="rounded-2xl p-8"
            style={{ border: '1.5px solid #e8e8e8', background: '#fff' }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-4 h-px bg-purple-600" />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-600"
                style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
              >
                Why Choose Us
              </span>
            </div>

            <ul className="space-y-5">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      color: '#cccccc',
                      paddingTop: '2px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#4a4a4a' }}
                  >
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
};

export default About;