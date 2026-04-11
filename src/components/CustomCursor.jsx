import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.body.classList.add('custom-cursor-active');

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      if (outlineRef.current) {
        // Use animation for the outline to give it a very smooth, 0-lag trailing effect
        outlineRef.current.animate({
          left: `${x}px`,
          top: `${y}px`
        }, { duration: 150, fill: "forwards" });
      }
    };
    
    const onMouseOver = (e) => {
      const isClickable = 
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('clickable');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hover' : ''}`} 
      ></div>
      <div 
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? 'hover' : ''}`} 
      ></div>
    </>
  );
};

export default CustomCursor;
