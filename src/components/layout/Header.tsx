import { useState } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { useWhatsAppLink } from '../../hooks/useWhatsAppLink';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = useWhatsAppLink();

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <ShoppingBag size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Totely</span>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 flex items-center gap-1">
            <Sparkles size={10} /> Beta
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition"
            >
              {link.label}
            </a>
          ))}
          <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}