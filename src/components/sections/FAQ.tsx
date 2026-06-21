import { useState } from 'react';
import { faqs } from '../../data';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-orange-500 text-sm font-semibold bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4">Everything you need to know about Totely.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-blue-200 shadow-lg shadow-blue-50/50' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50/50 rounded-2xl transition"
                >
                  <span className="font-semibold text-dark">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}