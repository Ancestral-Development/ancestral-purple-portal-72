
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'ArrowTan',
      role: 'Hosting & Server Owner',
      content: 'Vouch for Luka! he made a plugin that I have been wanting for a long time!',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Night',
      role: 'Server Owner',
      content: 'Vouch for Luka for high quality plugins for very affordable price, kind person, fast support.',
      rating: 5,
      avatar: 'NT'
    },
    {
      name: 'Pmanden',
      role: 'BuiltByBit User',
      content: 'Awesome plugin that works off the bat! support on Discord is also extremely fast and they can answer questions within minutes.',
      rating: 5,
      avatar: 'PM'
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
            <Card key={index} className="p-8 rounded-2xl transition-all duration-300 relative bg-white">
              <Quote className="h-8 w-8 text-purple-600 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold text-sm mr-4">
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
