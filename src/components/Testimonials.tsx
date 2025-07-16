
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechStart Inc.',
      content: 'Ancestral Development delivered exceptional performance optimization that scaled seamlessly with our growth. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, GameCraft Studios',
      content: 'The Minecraft plugins they created transformed our server completely. Player engagement increased by 300% and the custom features work flawlessly.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager, MobileFirst',
      content: 'Our Android app has received outstanding reviews thanks to their development work. The user experience is smooth and the performance is exceptional.',
      rating: 5,
      avatar: 'EW'
    },
    {
      name: 'David Kim',
      role: 'CEO, DataFlow Solutions',
      content: 'Working with Ancestral Development was a game-changer. They delivered our optimized systems on time and under budget.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Technical Director, CloudNet',
      content: 'Their expertise in performance optimization helped us solve critical issues. Highly recommended for any serious development project.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'James Miller',
      role: 'Server Owner, CraftRealms',
      content: 'The custom Spigot plugins they developed brought our vision to life. Our players love the new features and the code is rock solid.',
      rating: 5,
      avatar: 'JM'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 rounded-2xl border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg relative bg-white">
              <Quote className="h-8 w-8 text-purple-200 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold text-sm mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
