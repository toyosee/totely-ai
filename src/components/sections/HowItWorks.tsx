import { howItWorks } from '../../data';
import { ArrowRight } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50/80 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple-600 text-sm font-semibold bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Shopping is as Simple as Sending a Message
          </h2>
          <p className="text-gray-600 mt-4">Three steps to get what you need, delivered to your doorstep.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200" />

          {howItWorks.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              <div className="relative z-10 w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-200">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-dark mt-4">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2 max-w-xs mx-auto">{item.description}</p>
              {idx < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-gray-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}