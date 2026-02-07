
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../constants';
import { CartItem } from '../types';

interface ProductDetailProps {
  onAddToCart: (item: CartItem) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = SAMPLE_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-20 font-bold text-[#997010]">Product not found</div>;
  }

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    navigate('/cart');
  };

  const handleBuyNow = () => {
    onAddToCart({ ...product, quantity });
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col">
      {/* Product Image - Full Width (Side to Side), No Top Space, Controlled Height */}
      <div className="-mx-4 md:-mx-8 -mt-8 mb-8">
        <div className="w-full overflow-hidden h-[300px] md:h-[350px] lg:h-[400px]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Information - Centered Content */}
      <div className="max-w-2xl mx-auto w-full px-4">
        {/* Centered Title and Price */}
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-3xl font-bold text-[#997010] mb-1 uppercase tracking-tight">
            {product.name}
          </h1>
          <p className="text-lg md:text-2xl font-black text-[#997010]">
            ₦{product.price.toLocaleString()}
          </p>
        </div>

        {/* Centered Quantity Controls */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center border-2 border-[#997010] rounded-xl overflow-hidden bg-white">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-4 py-2 text-[#997010] hover:bg-gray-50 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={18} strokeWidth={3} />
            </button>
            <span className="px-6 py-2 border-x-2 border-[#997010] min-w-[50px] text-center font-black text-[#997010]">
              {quantity}
            </span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="px-4 py-2 text-[#997010] hover:bg-gray-50 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 w-full mb-12">
          <button 
            onClick={handleAddToCart}
            className="py-3.5 border-2 border-[#997010] text-[#997010] rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-gray-50 transition-all active:scale-95"
          >
            Add to Cart
          </button>
          <button 
            onClick={handleBuyNow}
            className="py-3.5 bg-[#997010] text-white rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#70520d] transition-all active:scale-95 shadow-lg shadow-[#997010]/20"
          >
            Buy now
          </button>
        </div>

        {/* Updated Product Description Section - Left Aligned */}
        <div className="space-y-6 text-left border-t border-gray-100 pt-8">
          <h3 className="text-lg font-semibold text-[#997010] uppercase tracking-tight">Product Description</h3>
          
          <div className="space-y-4">
            <p className="text-gray-600 text-sm leading-relaxed italic">
              {product.description}
            </p>
            
            <div className="space-y-1.5 pt-2">
              <div className="text-sm font-medium text-gray-800">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mr-1">Material :</span>
                {product.material}
              </div>
              <div className="text-sm font-medium text-gray-800">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mr-1">Color :</span>
                {product.color}
              </div>
              <div className="text-sm font-medium text-gray-800">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mr-1">Size :</span>
                {product.size}
              </div>
              <div className="text-sm font-medium text-gray-800">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mr-1">Care :</span>
                {product.care}
              </div>
            </div>
          </div>

          <div className="pt-10">
            <p className="text-[#997010] font-black text-xs tracking-widest leading-relaxed uppercase opacity-75">
              Thank you for choosing Yinx Fashion Hub
            </p>
          </div>
        </div>

        <div className="text-center pt-16 pb-8">
          <button 
            onClick={() => navigate('/fabrics')}
            className="px-8 py-3 border border-gray-200 text-gray-400 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:border-[#997010] hover:text-[#997010] transition-all"
          >
            View Other Fabrics
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
