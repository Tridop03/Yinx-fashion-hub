
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goldGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#997010" />
        <stop offset="30%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#F5D76E" />
        <stop offset="70%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#70520D" />
      </linearGradient>
      <filter id="goldShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
        <feOffset dx="2" dy="2" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#goldShadow)">
      {/* Outer Circle */}
      <circle cx="256" cy="256" r="230" stroke="url(#goldGradientLogo)" strokeWidth="24" fill="none" />
      
      {/* Stylized Y and F Monogram based on user image */}
      {/* Horizontal Main Bar */}
      <path d="M60 300 L452 220" stroke="url(#goldGradientLogo)" strokeWidth="28" strokeLinecap="round" />
      
      {/* Left side 'Y' structures */}
      <path d="M120 180 Q 200 220 200 300" stroke="url(#goldGradientLogo)" strokeWidth="26" fill="none" strokeLinecap="round" />
      <path d="M240 100 L200 300" stroke="url(#goldGradientLogo)" strokeWidth="26" strokeLinecap="round" />
      
      {/* Right side 'F' structures */}
      <path d="M320 80 L320 420" stroke="url(#goldGradientLogo)" strokeWidth="26" strokeLinecap="round" />
      <path d="M320 120 L440 120" stroke="url(#goldGradientLogo)" strokeWidth="26" strokeLinecap="round" />
      <path d="M320 230 L400 230" stroke="url(#goldGradientLogo)" strokeWidth="26" strokeLinecap="round" />
      
      {/* Bottom connecting bar/curve */}
      <path d="M200 300 L320 420" stroke="url(#goldGradientLogo)" strokeWidth="26" strokeLinecap="round" />
    </g>
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
