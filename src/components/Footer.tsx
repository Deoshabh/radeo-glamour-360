
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socialIcons = [
    { 
      name: 'Instagram', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      ) 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ) 
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ) 
    },
    { 
      name: 'Pinterest', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="8" y2="16"></line>
          <line x1="8" x2="16" y1="12" y2="12"></line>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ) 
    },
  ];

  return (
    <footer id="contact" className="bg-leather-dark py-16 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={childVariants} className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gold mb-6">RADEO</h3>
            <p className="text-ivory-dark mb-6">
              Premium leather shoes and ethnic wear crafted for those who appreciate excellence.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold text-ivory mb-6">Categories</h4>
            <ul className="space-y-3">
              {['Leather Shoes', 'Men\'s Ethnic', 'Women\'s Ethnic', 'Accessories'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-ivory-dark hover:text-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={childVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold text-ivory mb-6">Customer Care</h4>
            <ul className="space-y-3">
              {['Track Order', 'Returns & Exchanges', 'Shipping Information', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-ivory-dark hover:text-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={childVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold text-ivory mb-6">Subscribe</h4>
            <p className="text-ivory-dark mb-4">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <form className="mb-6">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-leather border border-gold/30 rounded-md py-3 px-4 text-ivory focus:outline-none focus:border-gold"
                />
                <button 
                  type="submit" 
                  className="absolute right-0 top-0 h-full bg-gold hover:bg-gold-light text-black rounded-r-md px-4 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </button>
              </div>
            </form>
            <p className="text-ivory-dark text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
              Handcrafted with love in India
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={childVariants}
          className="border-t border-leather-light mt-12 pt-8 text-center text-ivory-dark"
        >
          <p>&copy; {new Date().getFullYear()} Radeo. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
