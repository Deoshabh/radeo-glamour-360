
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Oxford Brown Leather",
    price: "$249",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Royal Blue Sherwani",
    price: "$399",
    image: "https://images.unsplash.com/photo-1574548057486-9b7a4e83a5c2?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Maroon Bridal Lehenga",
    price: "$599",
    image: "https://images.unsplash.com/photo-1609248946573-cf89cb9dc42f?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Black Derby Shoes",
    price: "$279",
    image: "https://images.unsplash.com/photo-1605908580297-f3e32c587b29?q=80&w=1974&auto=format&fit=crop"
  }
];

const CTASection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-leather to-leather-dark relative overflow-hidden" ref={ref}>
      {/* Animated background waves */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-64 bg-gold-light opacity-10 rounded-[100%]"
            style={{ 
              top: `${i * 15 + 10}%`,
              left: `-10%`,
              right: `-10%`,
              width: '120%'
            }}
            animate={{ 
              y: [0, -10, 0],
              scaleX: [1, 1.05, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8 + i,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6 text-ivory">
            Discover Our Latest Collection
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-ivory-dark max-w-2xl mx-auto mb-10">
            Handcrafted with precision and designed for those who appreciate the finer things in life.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className="gold-button group">
              <span className="relative z-10 flex items-center">
                Shop All Products
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-all duration-500 ease-out"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-leather-light bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-ivory mb-2">{product.name}</h3>
                      <p className="text-gold font-semibold mb-4">{product.price}</p>
                      <button className="gold-button w-full">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-leather-dark bg-opacity-80 text-gold hover:text-gold-light rounded-full p-3 shadow-lg transform hover:scale-110 transition-transform duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-leather-dark bg-opacity-80 text-gold hover:text-gold-light rounded-full p-3 shadow-lg transform hover:scale-110 transition-transform duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-gold w-6' : 'bg-gold-dark'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
