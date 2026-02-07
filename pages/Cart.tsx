
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, Minus, Plus, X } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const navigate = useNavigate();
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#997010] flex items-center gap-4 uppercase tracking-tight mb-6">
          Cart <ShoppingCart size={40} className="md:w-12 md:h-12" />
        </h1>
        
        <div className="space-y-2 mb-10">
          <p className="text-lg md:text-xl font-bold text-[#997010] uppercase tracking-wide">
            Your Cart is Currently Empty
          </p>
          <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-[0.15em]">
            procced to shop to fill your cart!
          </p>
        </div>

        <button 
          onClick={() => navigate('/fabrics')}
          className="px-10 py-4 bg-[#997010] text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-[#70520d] transition-all transform active:scale-95 shadow-xl shadow-[#997010]/20"
        >
          Shop now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#997010] flex items-center gap-3 uppercase tracking-tight">
          Cart <ShoppingCart size={28} />
        </h1>
        <button 
          onClick={onClearCart}
          className="flex items-center gap-1.5 text-gray-400 hover:text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors"
        >
          <Trash2 size={14} /> Clear Cart
        </button>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 md:gap-6 items-center border-b border-gray-50 pb-6 last:border-0">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-tight line-clamp-1">{item.name}</h3>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm md:text-lg font-black text-[#997010]">₦{item.price.toLocaleString()}</p>
              
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="p-1.5 px-3 text-[#997010] hover:bg-gray-50 transition-colors"
                  >
                    <Minus size={12} strokeWidth={3} />
                  </button>
                  <span className="px-4 py-1.5 border-x border-gray-200 text-xs md:text-sm min-w-[40px] text-center font-black text-[#997010]">
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="p-1.5 px-3 text-[#997010] hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={12} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-6 flex justify-between items-center mb-4">
        <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">Total Amount</span>
        <span className="text-xl md:text-2xl font-black text-[#997010]">₦{total.toLocaleString()}</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button 
          onClick={() => navigate('/checkout')}
          className="flex-1 py-4 bg-[#997010] text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-[#70520d] transition-all transform active:scale-95 shadow-xl shadow-[#997010]/20"
        >
          Proceed to Check Out
        </button>
        <button 
          onClick={() => navigate('/fabrics')}
          className="flex-1 py-4 border-2 border-[#997010] text-[#997010] rounded-xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-gray-50 transition-all active:scale-95"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
