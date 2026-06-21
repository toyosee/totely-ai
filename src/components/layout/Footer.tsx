import { FiShoppingBag } from 'react-icons/fi';
import { FaXTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa6';

function getCurrentDate() {
  const year = new Date().getFullYear()
  return year
}

export function Footer() {
  const socialLinks = [
    { icon: FaXTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <footer className="bg-gray-50/80 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              {/* react-icons uses standard React CSS style sizing instead of 'size' prop strings */}
              <FiShoppingBag size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Totely</span>
            <span className="text-xs text-gray-400 ml-2">v1.0</span>
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index} // Changed key from link.href since href is the same ('#') for all elements
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-700 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-md transition-all border border-gray-200"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          © {getCurrentDate()} Totely. All rights reserved. <br />
          {`By Barterverse Technologies Ltd.`}
        </div>
      </div>
    </footer>
  );
}
