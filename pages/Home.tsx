
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../constants';
import { FabricType } from '../types';

const Home: React.FC = () => {
  const ankaraProducts = SAMPLE_PRODUCTS.filter(p => p.type === FabricType.ANKARA).slice(0, 4);
  const adireProducts = SAMPLE_PRODUCTS.filter(p => p.type === FabricType.ADIRE).slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Section - Compact Full Bleed Design */}
      <section className="-mx-4 md:-mx-8 -mt-8 relative overflow-hidden">
        <div className="relative h-[300px] md:h-[450px] lg:h-[500px] w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000&h=1000" 
            alt="Premium African Fabrics" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Headline White Box Overlay - Reduced size and width for compact view */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-white py-6 px-6 md:py-12 md:px-12 lg:py-16 lg:px-16 pr-12 md:pr-24 lg:pr-32 rounded-r-[2rem] md:rounded-r-[4rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] max-w-[80%] md:max-w-[55%] lg:max-w-[45%] animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#997010] leading-[0.95] tracking-tighter">
              Shop your quality <br className="hidden lg:block" /> fabrics here!
            </h1>
          </div>
        </div>

        {/* Narrative and Buttons below the hero image - Tightened spacing */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mt-8 md:mt-16 text-center">
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed font-medium mb-8">
            We are a trusted destination for premium 100% cotton African print Ankara and stunning hand-dyed Adire Batik. We specialize in both wholesale and retail, offering vibrant, durable, and expressive prints that celebrate African heritage with a modern touch.
          </p>
          
          {/* Call to action with lines above and below */}
          <div className="border-y border-gray-200 py-8 flex flex-row gap-3 md:gap-8 justify-center items-center">
            <Link to="/fabrics" className="flex-1 sm:flex-none px-6 md:px-12 py-3 md:py-4 bg-[#997010] text-white text-center rounded-xl font-black text-xs md:text-lg hover:bg-[#70520d] transition-all transform hover:scale-105 shadow-lg shadow-[#997010]/30 whitespace-nowrap">
              Shop Now
            </Link>
            <Link to="/enquiries" className="flex-1 sm:flex-none px-6 md:px-12 py-3 md:py-4 border-2 md:border-2 border-[#997010] text-[#997010] text-center rounded-xl font-black text-xs md:text-lg hover:bg-gray-50 transition-all shadow-sm whitespace-nowrap">
              Make Enquiries
            </Link>
          </div>
        </div>
      </section>

      {/* Ankara Section - Now visible higher up */}
      <section>
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#997010]">Ankara Fabrics</h2>
            <p className="text-gray-500 text-xs md:text-base mt-1">Authentic 100% Cotton Wax Prints</p>
          </div>
          <Link to="/fabrics/ankara" className="text-[10px] md:text-sm font-bold text-[#997010] hover:underline flex items-center gap-2 bg-[#997010]/10 px-4 py-2 rounded-full transition-colors">
            See All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {ankaraProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Adire Section */}
      <section>
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#997010]">Adire Batik</h2>
            <p className="text-gray-500 text-xs md:text-base mt-1">Hand-Dyed Traditional Masterpieces</p>
          </div>
          <Link to="/fabrics/adire" className="text-[10px] md:text-sm font-bold text-[#997010] hover:underline flex items-center gap-2 bg-[#997010]/10 px-4 py-2 rounded-full transition-colors">
            See All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {adireProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
