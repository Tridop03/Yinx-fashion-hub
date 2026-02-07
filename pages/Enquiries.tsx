
import React from 'react';
import { Instagram, Mail, Music2 } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons';

const Enquiries: React.FC = () => {
  const platforms = [
    { name: 'Instagram', icon: <Instagram size={16} />, href: '#' },
    { name: 'WhatsApp', icon: <WhatsAppIcon className="h-4 w-4" />, href: 'https://wa.me/2348136865204' },
    { name: 'Tiktok', icon: <Music2 size={16} />, href: '#' },
    { name: 'E-mail', icon: <Mail size={16} />, href: 'mailto:contact@yinxfashion.com' },
  ];

  return (
    <div className="max-w-md mx-auto -mt-4 pt-2 pb-8 text-center space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold text-[#997010] uppercase tracking-tight">
          Make enquiries
        </h1>
        <p className="text-xs md:text-sm text-[#997010]/80 leading-relaxed font-medium max-w-xs mx-auto">
          Contact us on our various platforms. You can make orders for custom Ankara and Adire fabrics.
        </p>
      </div>

      <div className="space-y-3">
        {platforms.map(platform => (
          <a 
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 border-2 border-[#997010] text-[#997010] rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
          >
            {platform.icon}
            {platform.name}
          </a>
        ))}
      </div>

      <div className="pt-8 opacity-60">
        <p className="text-[10px] font-black text-[#997010] uppercase tracking-[0.2em]">
          Yinx Fashion Hub
        </p>
      </div>
    </div>
  );
};

export default Enquiries;
