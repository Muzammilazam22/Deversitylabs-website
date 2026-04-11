import React from 'react';

const Logo = ({ className, style }) => {
  return (
    <svg 
      viewBox="0 0 330 40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className} 
      style={{ display: 'block', height: '36px', width: 'auto', ...style }}
    >
      {/* D - Vertical line + 3 atomic ellipses */}
      <path d="M 5 5 L 5 35" />
      <ellipse cx="22" cy="20" rx="8" ry="15" transform="rotate(0 22 20)" />
      <ellipse cx="22" cy="20" rx="8" ry="15" transform="rotate(-50 22 20)" />
      <ellipse cx="22" cy="20" rx="8" ry="15" transform="rotate(50 22 20)" />
      
      {/* E - curved back, no vertical line */}
      <path d="M 58 5 C 40 5 40 35 58 35 M 44 20 L 54 20" />
      
      {/* V */}
      <path d="M 70 5 L 80 35 L 90 5" />
      
      {/* E */}
      <path d="M 110 5 C 92 5 92 35 110 35 M 96 20 L 106 20" />
      
      {/* R - separated loop */}
      <path d="M 120 5 L 120 35 M 126 5 C 142 5 142 19 126 19 L 126 19 M 128 19 L 140 35" />
      
      {/* S */}
      <path d="M 160 10 C 160 2 148 2 148 10 C 148 20 160 20 160 28 C 160 38 148 38 148 30" />
      
      {/* I */}
      <path d="M 172 5 L 172 35" />
      
      {/* T */}
      <path d="M 180 5 L 202 5 M 191 5 L 191 35" />
      
      {/* Y */}
      <path d="M 210 5 L 220 20 L 230 5 M 220 20 L 220 35" />
      
      {/* L */}
      <path d="M 242 5 L 242 35 L 258 35" />
      
      {/* A - no crossbar */}
      <path d="M 268 35 L 278 5 L 288 35" />
      
      {/* B - separated loops */}
      <path d="M 298 5 L 298 35 M 304 5 C 314 5 314 18 304 18 C 318 18 318 35 304 35" />
      
      {/* S */}
      <path d="M 328 10 C 328 2 316 2 316 10 C 316 20 328 20 328 28 C 328 38 316 38 316 30" />
    </svg>
  );
};

export default Logo;
