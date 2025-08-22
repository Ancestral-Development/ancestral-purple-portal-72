
import { Zap, Users, Gamepad2, MessageCircleQuestion } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Android & Desktop Development',
      description: 'Jetpack Compose Android apps with modern UI/UX and seamless performance.',
      features: ['Material Design', 'Database Integration', 'More...']
    },
    {
      icon: Gamepad2,
      title: 'Minecraft Plugins',
      description: 'Custom Spigot plugins that enhance server gameplay and management.',
      features: ['Custom Commands', 'Gamemode Systems', 'Moderation']
    },
      {
      icon: MessageCircleQuestion,
      title: 'Other Services',
      description: 'If you do not see what you are looking for but believe we could make it, contact us.',
      features: ['Up to you!']
    }
  ];

  return (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          An online store? A whole gamemode? A simple utility app? Look no further, we are always up for a challenge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-8 rounded-2xl !border-0 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-600 rounded-xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
              <service.icon className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="text-sm text-purple-600 flex items-center"
                >
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
};

export default Services;
