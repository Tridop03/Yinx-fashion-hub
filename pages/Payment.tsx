
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons';
import { BANK_DETAILS } from '../constants';
import { CartItem } from '../types';

interface PaymentProps {
  items: CartItem[];
  email: string;
}

const Payment: React.FC<PaymentProps> = ({ items, email }) => {
  const navigate = useNavigate();
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-semibold text-[#997010]">Payment</h1>
        <div className="text-sm text-[#997010] font-medium space-y-1">
          <p>{email || 'azeezomolola2002@gmail.com'}</p>
          <p>Pay <span className="font-bold text-lg">NGN {total.toLocaleString()}</span></p>
        </div>
      </div>

      <div className="bg-white space-y-8 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="space-y-6">
          <div>
            <label className="text-xs uppercase text-gray-400 font-bold mb-1 block">Bank Name</label>
            <p className="text-xl font-medium text-[#997010]">{BANK_DETAILS.bankName}</p>
          </div>
          <div>
            <label className="text-xs uppercase text-gray-400 font-bold mb-1 block">Account Number</label>
            <p className="text-xl font-medium text-[#997010]">{BANK_DETAILS.accountNumber}</p>
          </div>
          <div>
            <label className="text-xs uppercase text-gray-400 font-bold mb-1 block">Account Name</label>
            <p className="text-xl font-medium text-[#997010]">{BANK_DETAILS.accountName}</p>
          </div>
          <div>
            <label className="text-xs uppercase text-gray-400 font-bold mb-1 block">Amount</label>
            <p className="text-xl font-bold text-[#997010]">NGN {total.toLocaleString()}</p>
          </div>
        </div>

        <button 
          onClick={() => navigate('/success')}
          className="w-full py-4 border border-[#997010] text-[#997010] rounded-lg font-bold hover:bg-gray-50 transition-colors"
        >
          I've Sent the money
        </button>

        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={() => navigate('/cart')}
            className="flex items-center gap-2 px-6 py-2 border border-[#997010]/40 text-[#997010]/80 rounded text-sm hover:border-[#997010]"
          >
            <X size={16} /> Cancel payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
