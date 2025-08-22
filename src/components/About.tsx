
import { Code, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Ancestral Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers dedicated to creating high-performance solutions 
            that drive innovation and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              At Ancestral Development, we believe in finishing your project in a timely manner without compromising performance or usability. We ensure the product 
              is visually pleasing and easy to use. Not only that, but we also strive to make things optimized and smooth. With us, you dont't have to worry about
              crashes or giving up performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-600 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Code className="h-8 w-8 text-white-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Clean Code</h4>
                <p className="text-sm text-gray-600">Maintainable & scalable</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Performance</h4>
                <p className="text-sm text-gray-600">Lightning fast solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Support</h4>
                <p className="text-sm text-gray-600">Dedicated team support</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">5+ years of combined development experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Expertise across multiple platforms and technologies</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Focus on performance optimization and user experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Transparent communication throughout the development process</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
