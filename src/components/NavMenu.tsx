
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', url: '#' },
    { name: 'Leather Shoes', url: '#leather-shoes' },
    { name: 'Men\'s Ethnic', url: '#mens-ethnic' },
    { name: 'Women\'s Ethnic', url: '#womens-ethnic' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <nav className="py-6 relative z-20">
      <div className="flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gold flex items-center"
        >
          <span className="text-3xl mr-1">R</span>ADEO
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              className="text-ivory-light hover:text-gold transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-ivory-light hover:text-gold transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </a>
          <a href="#" className="text-ivory-light hover:text-gold transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"></path>
              <polyline points="9 17 21 5"></polyline>
              <line x1="15" x2="21" y1="9" y2="9"></line>
              <line x1="9" x2="9" y1="15" y2="21"></line>
            </svg>
          </a>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-ivory-light hover:text-gold transition-colors duration-300">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-leather-dark rounded-md overflow-hidden"
          >
            <div className="py-2 px-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  className="block py-2 text-ivory-light hover:text-gold transition-colors duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavMenu;
