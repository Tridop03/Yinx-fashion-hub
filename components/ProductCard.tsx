
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-[#997010]">{product.name}</h3>
      <p className="text-sm font-bold text-[#997010] mt-1">
        ₦{product.price.toLocaleString()}
      </p>
    </Link>
  );
};

export default ProductCard;
