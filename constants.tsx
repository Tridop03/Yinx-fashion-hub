
import React from 'react';
import { FabricType, Product } from './types';
import { PRODUCTS } from './assets/index';

export const BRAND_COLORS = {
  GOLD: '#997010',
  GOLD_LIGHT: '#b39032',
  GOLD_DARK: '#70520d',
  WHATSAPP: '#25D366'
};

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Monochrome Dotted Ankara',
    price: 14500,
    type: FabricType.ANKARA,
    image: PRODUCTS.PRODUCT_7, // Black & White pattern vibe
    description: 'A sophisticated black and white Ankara print featuring rhythmic dotted patterns and geometric borders. Perfect for modern traditional wear.',
    material: '100% Cotton',
    color: 'Black, White',
    size: '6 Yards',
    care: 'Hand wash cold, line dry in shade.'
  },
  {
    id: '2',
    name: 'Earth-Tone Cracked Adire Batik',
    price: 25000,
    type: FabricType.ADIRE,
    image: PRODUCTS.PRODUCT_4, // Brown/Orange texture vibe
    description: 'Exquisite hand-dyed Adire Batik on soft brocade. Features a stunning cracked earth pattern in warm orange and brown tones.',
    material: 'Premium Brocade Cotton',
    color: 'Orange, Brown, Yellow',
    size: '6 Yards',
    care: 'Dry clean recommended.'
  },
  {
    id: '3',
    name: 'Indigo Blue Mandala Adire',
    price: 28000,
    type: FabricType.ADIRE,
    image: PRODUCTS.PRODUCT_5, // Blue mandala vibe
    description: 'A masterpiece of traditional craftsmanship. This deep indigo fabric features a large, intricate hand-drawn mandala motif.',
    material: '100% Organic Cotton',
    color: 'Indigo, Royal Blue',
    size: '6 Yards',
    care: 'Wash separately in cold water.'
  },
  {
    id: '4',
    name: 'Fiery Sunset Geometric Ankara',
    price: 15000,
    type: FabricType.ANKARA,
    image: PRODUCTS.PRODUCT_2, // Multi-color geometric vibe
    description: 'Bold geometric patterns meeting vibrant sunset hues. This high-quality Ankara fabric is durable and retains its color after many washes.',
    material: '100% Cotton Wax',
    color: 'Orange, Purple, Black',
    size: '6 Yards',
    care: 'Machine wash delicate cycle.'
  },
  {
    id: '5',
    name: 'Azure Mosaic Batik Adire',
    price: 25000,
    type: FabricType.ADIRE,
    image: PRODUCTS.PRODUCT_3, // Blue/white mosaic vibe
    description: 'Modern interpretation of classic Adire. Features a tiled mosaic effect in various shades of blue and white.',
    material: 'Polished Cotton',
    color: 'White, Blue, Navy',
    size: '6 Yards',
    care: 'Iron on reverse side.'
  },
  {
    id: '6',
    name: 'Emerald Swirl Abstract Ankara',
    price: 14500,
    type: FabricType.ANKARA,
    image: PRODUCTS.PRODUCT_1, // Green swirl vibe
    description: 'An artistic blend of emerald green swirls on a deep black background, highlighted with shimmering gold dust patterns.',
    material: '100% Cotton Wax',
    color: 'Green, Black, Gold',
    size: '6 Yards',
    care: 'Do not bleach.'
  },
  {
    id: '7',
    name: 'Royal Purple Geometric Print',
    price: 16000,
    type: FabricType.ANKARA,
    image: PRODUCTS.PINK_AND_BLACK_ANKARA, // Purple geometric vibe
    description: 'A majestic combination of deep purple and vibrant yellow geometric shapes. Designed for making a statement at any occasion.',
    material: 'High-Grade Cotton Wax',
    color: 'Purple, Yellow, White',
    size: '6 Yards',
    care: 'Hand wash cold.'
  },
  {
    id: '8',
    name: 'Floral Bloom Signature Ankara',
    price: 15500,
    type: FabricType.ANKARA,
    image: PRODUCTS.PRODUCT_8, // Flower pattern vibe
    description: 'A refreshing white-base Ankara fabric featuring large, colorful floral and leaf motifs in blue, green, and orange.',
    material: 'Super Wax Cotton',
    color: 'White, Blue, Orange, Green',
    size: '6 Yards',
    care: 'Tumble dry low or line dry.'
  }
];

export const BANK_DETAILS = {
  bankName: 'Stanbic Ibtc',
  accountNumber: '0032620176',
  accountName: 'Azeez Aminat Olayinka',
  phone: '08136865204'
};
