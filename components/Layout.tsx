
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, Instagram, Phone } from 'lucide-react';
import { Logo, WhatsAppIcon } from './Icons';
import { BRAND_COLORS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, cartCount }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-2 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform">
            <Logo className="h-12 w-12 md:h-16 md:w-16" />
          </Link>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-gray-600 hover:text-[#997010] transition-colors">
              <Search size={22} />
            </button>
            <Link to="/profile" className="text-gray-600 hover:text-[#997010] transition-colors">
              <User size={22} />
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-[#997010] transition-colors">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 md:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-10 pb-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col space-y-8">
          
          {/* Top Row: Logo, Information, and Products side-by-side */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 items-start">
            {/* Logo Column */}
            <div className="flex flex-col items-center md:items-start overflow-hidden">
              <Logo className="h-12 w-12 md:h-20 md:w-20" />
              <span className="text-[7px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] mt-2 uppercase font-black text-[#997010] text-center md:text-left">
                YINX FASHION
              </span>
            </div>

            {/* Information Column */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-[#997010] mb-2 md:mb-4 uppercase tracking-[0.1em] md:tracking-[0.15em] text-[9px] md:text-xs">Information</h3>
              <ul className="space-y-1 md:space-y-2 text-[9px] md:text-xs text-gray-600 font-medium">
                <li><Link to="/about" className="hover:text-[#997010] transition-colors">About Us</Link></li>
                <li><Link to="/return-policy" className="hover:text-[#997010] transition-colors">Returns</Link></li>
                <li><Link to="/privacy" className="hover:text-[#997010] transition-colors">Privacy</Link></li>
              </ul>
            </div>
            
            {/* Products Column */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-[#997010] mb-2 md:mb-4 uppercase tracking-[0.1em] md:tracking-[0.15em] text-[9px] md:text-xs">Products</h3>
              <ul className="space-y-1 md:space-y-2 text-[9px] md:text-xs text-gray-600 font-medium">
                <li><Link to="/fabrics/ankara" className="hover:text-[#997010] transition-colors">Ankara</Link></li>
                <li><Link to="/fabrics/adire" className="hover:text-[#997010] transition-colors">Adire</Link></li>
                <li><Link to="/fabrics" className="hover:text-[#997010] transition-colors">View All</Link></li>
              </ul>
            </div>
          </div>

          {/* Second Row: Contact Us and Phone Number */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-10 pt-6 border-t border-gray-50">
            <Link to="/enquiries" className="flex-1 sm:flex-none text-center bg-[#997010] text-white px-4 md:px-8 py-2 md:py-2.5 rounded-lg font-bold hover:bg-[#70520d] transition-all transform hover:scale-105 shadow-lg shadow-[#997010]/10 uppercase text-[9px] md:text-xs tracking-widest whitespace-nowrap">
              Contact Us
            </Link>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-base font-black text-[#997010] whitespace-nowrap">
              <Phone size={16} className="md:w-[20px] md:h-[20px]" strokeWidth={2.5} />
              <span className="tracking-tight">08136865204</span>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="border-t border-gray-100 pt-6 flex flex-row justify-between items-center gap-4">
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-[#997010]/60">
              © 2025. Yinx Fashion hub.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-[#997010] hover:scale-125 transition-transform"><Instagram size={18} className="md:w-[20px] md:h-[20px]" /></a>
              <a href="https://wa.me/2348136865204" target="_blank" rel="noopener noreferrer" className="text-[#997010] hover:scale-125 transition-transform"><WhatsAppIcon className="h-4 w-4 md:h-5 md:w-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <a 
        href="https://wa.me/2348136865204" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-6 md:bottom-12 md:right-12 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110 active:scale-95"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="font-bold text-sm uppercase tracking-wide hidden md:inline">Chat with us</span>
      </a>
    </div>
  );
};

export default Layout;
