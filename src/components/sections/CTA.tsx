import { Button } from '../ui/Button';
import { useWhatsAppLink } from '../../hooks/useWhatsAppLink';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  const whatsappLink = useWhatsAppLink();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 text-center shadow-2xl shadow-blue-200">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-6">
              <Sparkles size={14} />
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Shop Smarter?
            </h2>
            <p className="text-white/80 mt-4 max-w-lg mx-auto">
              Join thousands of happy customers. Start shopping on WhatsApp today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Start Shopping Now
              </Button>
              <Button href="#faq" variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}