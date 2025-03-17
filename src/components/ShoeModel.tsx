
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ShoeModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -15;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Update light position (for shine effect)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newScale = e.deltaY > 0 ? 
      Math.max(0.8, scale - 0.05) : 
      Math.min(1.5, scale + 0.05);
    setScale(newScale);
  };

  // Reset rotation when not hovering
  useEffect(() => {
    if (!isHovering) {
      const timeout = setTimeout(() => {
        setRotation({ x: 0, y: 0 });
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isHovering]);

  return (
    <div className="py-20 bg-gradient-to-b from-leather-dark to-leather">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-ivory mb-4">Craftsmanship in Every Detail</h2>
          <p className="text-lg text-ivory-dark max-w-2xl mx-auto">
            Explore our premium collection of hand-crafted leather shoes, designed for comfort and style.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="perspective max-w-4xl mx-auto h-[500px] flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}
        >
          <motion.div
            animate={{
              rotateX: rotation.x,
              rotateY: rotation.y,
              scale: scale,
              transition: { type: "spring", stiffness: 100, damping: 15 }
            }}
            className="preserve-3d relative w-full max-w-lg"
          >
            {/* 3D Shoe Model (represented with a placeholder image for now) */}
            <div className="relative">
              <div 
                className="w-full h-full absolute top-0 left-0 rounded-xl"
                style={{
                  background: `radial-gradient(circle at ${position.x * 100}% ${position.y * 100}%, rgba(212, 175, 55, 0.3) 0%, rgba(0, 0, 0, 0) 60%)`,
                  opacity: isHovering ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              ></div>
              <img 
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop" 
                alt="Premium Leather Shoe" 
                className="w-full h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Reflection effect */}
            <div 
              className="w-full h-20 mt-6 rounded-lg mx-auto"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
                transform: 'rotateX(180deg) translateZ(-120px) scale(0.8)',
                opacity: 0.4,
                filter: 'blur(4px)'
              }}
            ></div>

            {/* Interactive hints */}
            <motion.div 
              className="absolute top-4 right-4 text-gold-light text-sm bg-leather-dark bg-opacity-80 px-3 py-1 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                Scroll to zoom
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <a href="#leather-shoes" className="gold-button inline-flex items-center">
            <span>Explore Collection</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ShoeModel;
