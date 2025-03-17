
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CategoryBannerProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  bgClass: string;
  direction?: 'left' | 'right';
  animationType?: 'slide' | 'twirl';
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({ 
  id, 
  title, 
  description, 
  imageUrl, 
  bgClass, 
  direction = 'right',
  animationType = 'slide'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'right' ? -30 : 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'right' ? 30 : -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }
    }
  };

  const twirlVariants = {
    hidden: { 
      opacity: 0, 
      rotate: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      rotate: animationType === 'twirl' ? 360 : 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 1.2 
      }
    }
  };

  return (
    <div id={id} className={`py-24 ${bgClass}`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className={`flex flex-col ${direction === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="md:w-1/2" variants={textVariants}>
            <span className="inline-block px-4 py-1 border border-gold/30 rounded-full text-gold text-sm tracking-wider mb-4">
              PREMIUM COLLECTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ivory">{title}</h2>
            <p className="text-lg mb-8 text-ivory-dark">{description}</p>
            <button className="gold-button group">
              <span className="relative z-10 flex items-center">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </motion.div>

          <motion.div 
            className="md:w-1/2 perspective"
            variants={animationType === 'twirl' ? twirlVariants : imageVariants}
          >
            <div className="relative preserve-3d">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              
              {/* Subtle 3D lighting effect */}
              <div className="absolute inset-0 rounded-xl shine-effect"></div>
              
              {/* Reflection/shadow */}
              {animationType !== 'twirl' && (
                <div 
                  className="w-[80%] h-10 mt-4 rounded-full mx-auto"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
                    transform: 'rotateX(60deg) translateZ(-30px) scale(1)',
                    opacity: 0.3,
                    filter: 'blur(4px)'
                  }}
                ></div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryBanner;
