# Yinx Fashion Hub

A modern e-commerce platform for premium African fabrics, specializing in Ankara and Adire textiles. Built with React, TypeScript, and Vite for a fast, responsive shopping experience.

## 🌟 Features

- **Product Browsing**: Browse curated collections of Ankara and Adire fabrics
- **Product Details**: Detailed product information with images, pricing, and specifications
- **Shopping Cart**: Add products to cart with quantity management
- **Checkout Process**: Streamlined checkout experience
- **Payment Integration**: Secure payment processing
- **User Accounts**: User authentication with login and registration
- **User Profiles**: Manage personal information and order history
- **Contact & Enquiries**: Direct contact form for customer inquiries
- **Responsive Design**: Fully responsive mobile-first design using Tailwind CSS
- **WhatsApp Integration**: Quick messaging via WhatsApp button

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Project Structure

```
Yinx-fashion-hub/
├── components/
│   ├── Icons.tsx           # SVG icons and branding assets
│   ├── Layout.tsx          # Main layout wrapper with header/footer
│   └── ProductCard.tsx     # Reusable product card component
├── pages/
│   ├── Home.tsx            # Landing page with featured products
│   ├── FabricListing.tsx   # Product catalog and filtering
│   ├── ProductDetail.tsx   # Individual product details
│   ├── Cart.tsx            # Shopping cart management
│   ├── Checkout.tsx        # Checkout process
│   ├── Payment.tsx         # Payment page
│   ├── Success.tsx         # Order confirmation
│   ├── Enquiries.tsx       # Contact/inquiry form
│   └── Account/
│       ├── Login.tsx       # User login
│       ├── Register.tsx    # User registration
│       └── Profile.tsx     # User profile management
├── assets/                 # Static images (product photos, hero images)
├── App.tsx                 # Main app component with routing
├── types.ts                # TypeScript interfaces and enums
├── constants.tsx           # Brand colors, sample products data
├── index.tsx               # React entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Yinx-fashion-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Design System

### Brand Colors
- **Primary Gold**: `#997010`
- **Gold Light**: `#b39032`
- **Gold Dark**: `#70520d`
- **WhatsApp Green**: `#25D366`

### Typography
- Clean, modern sans-serif fonts (via Tailwind defaults)
- Responsive font scaling for mobile and desktop

## 📱 Key Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page with featured products |
| Fabrics | `/fabrics` | Browse all fabrics by type |
| Product Detail | `/product/:id` | View product details & add to cart |
| Cart | `/cart` | Review and manage cart items |
| Checkout | `/checkout` | Enter shipping information |
| Payment | `/payment` | Process payment |
| Success | `/success` | Order confirmation |
| Account Login | `/login` | User authentication |
| Account Register | `/register` | Create new account |
| Profile | `/profile` | Manage user profile |
| Enquiries | `/enquiries` | Contact form |

## 🛒 Shopping Features

### Product Information
- Product ID, name, and price (in Nigerian Naira ₦)
- Fabric type (Ankara or Adire)
- Material composition
- Color variants
- Size (typically 6 yards)
- Care instructions

### Cart Management
- Add products to cart with quantity selection
- Update quantities in real-time
- Remove items from cart
- View total cart count in header

## 💳 Commerce Flow

1. Browse products on Home or FabricListing pages
2. Click product to view details
3. Add to cart with desired quantity
4. Navigate to Cart to review
5. Proceed to Checkout
6. Enter shipping details
7. Process Payment
8. View Success confirmation

## 🌐 Contact & Support

- **WhatsApp**: Integrated chat button on all pages
- **Phone**: +234 813 686 5204
- **Contact Form**: Available on Enquiries page
- **Instagram**: Social media integration in footer

## 📝 Notes

- All prices are in Nigerian Naira (₦)
- Products use image assets from `/assets/` directory
- Sample product data is stored in `constants.tsx`
- Cart state is managed at the App component level
- HashRouter is used for client-side routing compatibility

## 🔒 Data Types

Key TypeScript interfaces defined in `types.ts`:

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  type: FabricType;
  image: string;
  description: string;
  material: string;
  color: string;
  size: string;
  care: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  country: string;
  state: string;
}
```

## 📄 License

This project is part of Yinx Fashion Hub. All rights reserved.

---

**Version**: 0.0.0  
**Last Updated**: February 2025
