
import React, { useState, useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import Profile from './pages/Account/Profile';
import Enquiries from './pages/Enquiries';
import FabricListing from './pages/FabricListing';
import { CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p);
      }
      return [...prev, item];
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  }, []);

  const removeItem = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fabrics" element={<FabricListing />} />
          <Route path="/fabrics/:type" element={<FabricListing />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/cart" element={
            <Cart 
              items={cart} 
              onUpdateQuantity={updateQuantity} 
              onRemoveItem={removeItem}
              onClearCart={clearCart}
            />
          } />
          <Route path="/checkout" element={
            <Checkout items={cart} onUpdateQuantity={updateQuantity} />
          } />
          <Route path="/payment" element={<Payment items={cart} email="azeezomolola2002@gmail.com" />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/enquiries" element={<Enquiries />} />
          {/* Simple catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
