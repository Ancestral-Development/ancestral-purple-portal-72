import { Users, Gamepad2, MessageCircleQuestion, Laptop, LucideLaptop2, Phone, LucideSmartphone } from 'lucide-react';

const services = [
  {
    icon: LucideSmartphone,
    label: '01',
    title: 'Android Development',
    description:
      'Jetpack Compose Android apps with modern UI/UX and seamless performance.',
    features: ['Material Design', 'Database Integration', 'Premium Feel'],
  },
  {
    icon: Gamepad2,
    label: '02',
    title: 'Minecraft Plugins',
    description:
      'Custom Spigot plugins that enhance server gameplay and management.',
    features: ['Custom Commands', 'Gamemode Systems', 'Discord Bot Integration'],
  },
  {
    icon: LucideLaptop2,
    label: '03',
    title: 'Desktop Development',
    description:
      "Feature-rich desktop apps that are easy to use with various integrations. ",
    features: ['.NET', 'Compose', 'Cross-platform'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Subtle grid texture — matches Hero */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: 'transparent' }}
      />

      {/* Accent blob */}
      <div
        className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
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
              What We Build
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
              Our{' '}
              <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>Services</span>
            </h2>

            <p
              className="max-w-sm text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#4a4a4a' }}
            >
              An online store? A whole gamemode? A simple utility app?
              We're always up for a challenge.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-black/8 w-full" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col p-7 rounded-2xl border transition-all duration-300 cursor-default"
                style={{
                  border: '1.5px solid #e8e8e8',
                  background: '#fff',
                }}
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
    

                {/* Icon */}
                <div
                  className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: '#f3f0ff' }}
                >
                  <Icon className="h-5 w-5" style={{ color: '#7c3aed' }} />
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0a0a0a',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#6a6a6a' }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                        color: '#7c3aed',
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: '#7c3aed' }}
                      />
                      {f.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Services;