
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../constants';
import { FabricType } from '../types';

const FabricListing: React.FC = () => {
  const { type } = useParams();
  const [activeCategory, setActiveCategory] = useState<string>(type || 'all');

  const filteredProducts = SAMPLE_PRODUCTS.filter(p => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ankara') return p.type === FabricType.ANKARA;
    if (activeCategory === 'adire') return p.type === FabricType.ADIRE;
    return true;
  });

  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-[#997010] mb-2 capitalize">
          {activeCategory === 'all' ? 'Our Collections' : `${activeCategory} Fabrics`}
        </h1>
        <div className="w-20 h-1.5 bg-[#997010] rounded-full mb-8"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">
          <div className="relative flex-grow w-full">
            <select 
              className="w-full appearance-none bg-white border-2 border-[#997010]/20 px-6 py-3 rounded-xl text-[#997010] font-semibold focus:outline-none focus:border-[#997010] transition-colors cursor-pointer"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              <option value="all">All Fabrics</option>
              <option value="ankara">Ankara Wax Prints</option>
              <option value="adire">Adire Batik Collection</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-[#997010] pointer-events-none" size={20} />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-500 font-medium hover:border-[#997010] hover:text-[#997010] transition-all w-full md:w-auto justify-center">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No fabrics found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default FabricListing;
