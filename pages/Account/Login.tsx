
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="max-w-md mx-auto py-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[#997010] text-center mb-8 uppercase tracking-tight">Log In</h1>
      
      <form onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#997010] uppercase tracking-widest">Email Address <span className="text-red-500">*</span></label>
          <input 
            type="email" required
            className="w-full bg-transparent border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:border-[#997010] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#997010] uppercase tracking-widest">Password <span className="text-red-500">*</span></label>
          <input 
            type="password" required
            className="w-full bg-transparent border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:border-[#997010] transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 py-1">
          <input type="checkbox" id="remember" className="w-4 h-4 accent-[#997010] rounded border-gray-300" />
          <label htmlFor="remember" className="text-[10px] font-bold text-[#997010] uppercase tracking-widest cursor-pointer">Remember me</label>
        </div>

        <button 
          type="submit"
          className="w-full py-3.5 border-2 border-[#997010] text-[#997010] rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
        >
          Login
        </button>

        <p className="text-center text-[10px] font-medium text-gray-500 uppercase tracking-widest pt-2">
          Don't have an Account? <Link to="/register" className="text-[#997010] font-black hover:underline ml-1">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
