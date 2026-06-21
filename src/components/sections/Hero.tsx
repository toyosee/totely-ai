import { Button } from '../ui/Button';
import { WhatsAppMockup } from '../ui/WhatsAppMockup';
import { useWhatsAppLink } from '../../hooks/useWhatsAppLink';
import { Sparkles, ArrowRight, ShoppingBag, Store, Truck } from 'lucide-react';

export function Hero() {
  const whatsappLink = useWhatsAppLink();

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 animate-fadeInUp">
              <Sparkles size={14} />
              Your Shopping AI Assistant on WhatsApp
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-[1.1] animate-fadeInUp animation-delay-100">
              Shopping Made Simple.
              <span className="gradient-text-primary block"> Just Chat.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg animate-fadeInUp animation-delay-200">
              Totely is your personal shopping AI assistant on WhatsApp. Find, compare, and buy products from trusted vendors — all through natural conversation.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-300">
              <Button
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Start Shopping
              </Button>
              <Button href="#how-it-works" variant="outline">
                See How It Works
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 animate-fadeInUp animation-delay-400">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShoppingBag size={12} className="text-blue-600" />
                </div>
                Free to use
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <Store size={12} className="text-purple-600" />
                </div>
                100+ Stores
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck size={12} className="text-green-600" />
                </div>
                1-2 Hour Delivery
              </div>
            </div>
          </div>

          {/* WhatsApp Mockup */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp animation-delay-300">
            <WhatsAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}