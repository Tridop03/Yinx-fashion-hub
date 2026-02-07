
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="max-w-md mx-auto py-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[#997010] text-center mb-8 uppercase tracking-tight">Create Account</h1>
      
      <form onSubmit={handleRegister} className="space-y-5">
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

        <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
          Your Personal data will be used to manage access to your account and for other purposes described in our <Link to="/privacy" className="text-[#997010] font-bold hover:underline">Privacy Policy</Link>
        </p>

        <button 
          type="submit"
          className="w-full py-3.5 border-2 border-[#997010] text-[#997010] rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
        >
          Register
        </button>

        <div className="space-y-3 text-center pt-4">
            <p className="text-[#997010] font-bold text-xs leading-snug uppercase tracking-tight opacity-80">
              Registering on this site allows you to access your order history
            </p>
            <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
              Already have an account? <Link to="/login" className="text-[#997010] font-black hover:underline">Log in</Link>
            </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
