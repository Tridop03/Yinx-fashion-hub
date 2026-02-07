
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onUpdateQuantity }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone1: '',
    phone2: '',
    email: '',
    address: '',
    country: '',
    state: '',
    saveAddress: false,
    note: ''
  });

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/payment');
  };

  const inputStyles = "w-full bg-transparent border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:border-[#997010] transition-colors placeholder:text-gray-400";

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#997010] text-center uppercase tracking-tight">Checkout</h1>

      <form onSubmit={handleProceed} className="space-y-12">
        <section>
          <h2 className="text-lg md:text-xl font-bold text-[#997010] mb-6 uppercase tracking-wider">Shipping Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" name="firstName" placeholder="First name *" required
              className={inputStyles}
              onChange={handleInputChange}
            />
            <input 
              type="text" name="lastName" placeholder="Last name *" required
              className={inputStyles}
              onChange={handleInputChange}
            />
            <input 
              type="tel" name="phone1" placeholder="Phone Number 1 *" required
              className={inputStyles}
              onChange={handleInputChange}
            />
            <input 
              type="tel" name="phone2" placeholder="Phone Number 2"
              className={inputStyles}
              onChange={handleInputChange}
            />
            <div className="col-span-2">
              <input 
                type="email" name="email" placeholder="Email Address *" required
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-2">
              <input 
                type="text" name="address" placeholder="Shipping Address *" required
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <input 
              type="text" name="country" placeholder="Country *" required
              className={inputStyles}
              onChange={handleInputChange}
            />
            <input 
              type="text" name="state" placeholder="State *" required
              className={inputStyles}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input 
              type="checkbox" name="saveAddress" id="saveAddress"
              className="accent-[#997010] w-4 h-4"
              onChange={handleInputChange}
            />
            <label htmlFor="saveAddress" className="text-[11px] font-bold text-[#997010] uppercase tracking-widest cursor-pointer">Save the above shipping address</label>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-[#997010] mb-3 uppercase tracking-widest">Additional Information</h2>
          <textarea 
            name="note" placeholder="Order notes (Optional)"
            className={`${inputStyles} min-h-[120px] resize-none`}
            onChange={handleInputChange}
          ></textarea>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#997010] border-y border-gray-100 py-4 mb-8 text-center uppercase tracking-wider">Your Order</h2>
          <div className="flex justify-between font-black text-[10px] text-gray-400 mb-6 uppercase tracking-widest px-1">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          
          <div className="space-y-6 mb-8 px-1">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xs font-bold text-gray-800 uppercase tracking-tight line-clamp-1">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center border border-gray-200 rounded-lg scale-90 origin-left overflow-hidden bg-white">
                        <button type="button" onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 px-2 text-[#997010] hover:bg-gray-50"><Minus size={10} strokeWidth={3} /></button>
                        <span className="px-2 text-xs font-black text-[#997010] border-x border-gray-200">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 px-2 text-[#997010] hover:bg-gray-50"><Plus size={10} strokeWidth={3} /></button>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-black text-[#997010] whitespace-nowrap">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6 flex justify-between items-center px-1">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total</span>
            <span className="text-2xl font-black text-[#997010]">₦{total.toLocaleString()}</span>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-gray-50/50 p-6 rounded-2xl space-y-4 border border-gray-100">
            <h3 className="text-xs font-black text-[#997010] uppercase tracking-widest">Payment Method</h3>
            <div className="flex items-center gap-3">
               <div className="w-5 h-5 rounded-full border-2 border-[#997010] flex items-center justify-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#997010]"></div>
               </div>
               <span className="text-sm font-bold text-gray-700 uppercase tracking-tight">Pay Online Via Bank Transfer</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
              After confirming your order, you will be redirected to our bank transfer details. Please ensure you send the receipt via WhatsApp after payment.
            </p>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-[#997010] text-white rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#70520d] transition-all transform active:scale-95 shadow-xl shadow-[#997010]/20"
          >
            Confirm Order
          </button>
        </section>
      </form>
    </div>
  );
};

export default Checkout;
