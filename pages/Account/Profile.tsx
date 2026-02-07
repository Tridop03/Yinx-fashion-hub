
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ShoppingBag, LogOut, ChevronRight } from 'lucide-react';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'menu' | 'details' | 'orders'>('menu');

  if (view === 'details') {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-xl md:text-2xl font-semibold text-[#997010] text-center mb-10 uppercase tracking-tight">Account Details</h1>
        <div className="grid grid-cols-2 gap-4">
          {/* First Name and Last Name beside each other */}
          <input type="text" defaultValue="Omolola" className="bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
          <input type="text" defaultValue="Azeez" className="bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
          
          {/* Phone Numbers beside each other */}
          <input type="text" defaultValue="09139104536" className="bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
          <input type="text" defaultValue="09151553896" className="bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
          
          {/* Email Address - on its own (full width) */}
          <input type="email" defaultValue="azeezomolola2002@gmail.com" className="col-span-2 bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
          
          {/* Campus Gate / Address - on its own (full width) */}
          <input type="text" defaultValue="OAU Ife Campus Gate" className="col-span-2 bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
          
          {/* Country and State beside each other */}
          <input type="text" defaultValue="Nigeria" className="bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
          <input type="text" defaultValue="Osun State" className="bg-transparent border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-[#997010] text-sm" />
        </div>
        <button onClick={() => setView('menu')} className="mt-8 text-xs text-[#997010] font-bold hover:underline">Back to Menu</button>
      </div>
    );
  }

  if (view === 'orders') {
    return (
      <div className="max-w-xl mx-auto py-8 text-center space-y-8">
        <h1 className="text-xl md:text-2xl font-semibold text-[#997010] uppercase tracking-tight">My Orders</h1>
        <button 
          onClick={() => navigate('/fabrics')}
          className="px-10 py-3 border-2 border-[#997010] text-[#997010] rounded-lg font-bold text-base hover:bg-gray-50 transition-colors"
        >
          Proceed to Shop
        </button>
        <div className="pt-4">
           <button onClick={() => setView('menu')} className="text-xs text-[#997010] font-bold hover:underline">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-xl md:text-2xl font-semibold text-[#997010] text-center mb-10 uppercase tracking-tight">My Account</h1>
      
      <div className="space-y-3">
        <button 
          onClick={() => setView('details')}
          className="w-full flex items-center justify-between bg-transparent border border-gray-200 p-4 rounded-lg group hover:border-[#997010]/50 hover:bg-gray-50 transition-all"
        >
          <div className="flex items-center gap-3 text-[#997010]">
            <User size={18} />
            <span className="text-sm font-bold uppercase tracking-wide">Account Details</span>
          </div>
          <ChevronRight size={18} className="text-[#997010]" />
        </button>

        <button 
          onClick={() => setView('orders')}
          className="w-full flex items-center justify-between bg-transparent border border-gray-200 p-4 rounded-lg group hover:border-[#997010]/50 hover:bg-gray-50 transition-all"
        >
          <div className="flex items-center gap-3 text-[#997010]">
            <ShoppingBag size={18} />
            <span className="text-sm font-bold uppercase tracking-wide">My Orders</span>
          </div>
          <ChevronRight size={18} className="text-[#997010]" />
        </button>

        <button 
          onClick={() => navigate('/login')}
          className="w-full flex items-center justify-between bg-transparent border border-gray-200 p-4 rounded-lg group hover:border-[#997010]/50 hover:bg-gray-50 transition-all"
        >
          <div className="flex items-center gap-3 text-[#997010]">
            <LogOut size={18} />
            <span className="text-sm font-bold uppercase tracking-wide">Logout</span>
          </div>
          <ChevronRight size={18} className="text-[#997010]" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
