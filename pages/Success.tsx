
import React from 'react';
import { WhatsAppIcon } from '../components/Icons';

const Success: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto py-20 text-center space-y-12">
      <div className="space-y-6">
        <p className="text-xl text-[#997010] font-medium leading-relaxed">
          Thank you for placing your order, kindly send the payment receipt of your order to our WhatsApp line <span className="font-bold">08136865204</span>
        </p>
        
        <p className="text-[#997010] font-bold text-lg max-w-sm mx-auto">
          Your personal data provided earlier will be used to process your order
        </p>
      </div>

      <a 
        href="https://wa.me/2348136865204"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 border border-[#997010] text-[#997010] rounded-lg font-medium hover:bg-gray-50 transition-colors"
      >
        <WhatsAppIcon className="h-6 w-6" />
        WhatsApp
      </a>
    </div>
  );
};

export default Success;
