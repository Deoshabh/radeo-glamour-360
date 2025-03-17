
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ShoeModel from '../components/ShoeModel';
import CategoryBanner from '../components/CategoryBanner';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show welcome toast
      toast.success('Welcome to Radeo', {
        description: 'Explore our premium collection of leather shoes and ethnic wear.',
        duration: 5000,
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll animation
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    
    const targetId = href === '#' ? 'header' : href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Add scroll event listener to handle smooth scrolling for all anchor links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll as unknown as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll as unknown as EventListener);
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-leather-dark">
        <div className="w-24 h-24 relative">
          <motion.div 
            className="absolute w-full h-full border-4 border-t-gold border-r-gold-light border-b-gold-dark border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        <motion.p 
          className="text-gold mt-8 text-xl font-playfair"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          RADEO
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-roboto overflow-x-hidden">
      <Header />
      
      <ShoeModel />
      
      <CategoryBanner 
        id="leather-shoes"
        title="Step into Luxury – Shop Premium Leather Shoes"
        description="Elegantly crafted leather shoes designed for comfort and style. Each pair is a testament to our commitment to excellence."
        imageUrl="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop"
        bgClass="leather-bg"
        direction="right"
        animationType="slide"
      />
      
      <CategoryBanner 
        id="mens-ethnic"
        title="Celebrate Tradition in Style – Explore Ethnic Wear"
        description="Our collection of men's ethnic wear combines traditional designs with modern aesthetics, perfect for celebrations and special occasions."
        imageUrl="https://images.unsplash.com/photo-1594549181132-9045fed330ce?q=80&w=1964&auto=format&fit=crop"
        bgClass="bg-gradient-to-br from-royalblue-dark to-royalblue"
        direction="left"
        animationType="slide"
      />
      
      <CategoryBanner 
        id="womens-ethnic"
        title="Graceful Elegance – Shop Women's Ethnic Wear"
        description="Exquisite lehengas, sarees, and suits crafted with intricate detailing and premium fabrics for the modern woman."
        imageUrl="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1972&auto=format&fit=crop"
        bgClass="bg-gradient-to-br from-maroon-dark to-maroon"
        direction="right"
        animationType="twirl"
      />
      
      <CTASection />
      
      <Footer />
      
      {/* Scroll to top button */}
      <motion.a 
        href="#"
        className="fixed right-6 bottom-6 w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-gold-light transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={handleSmoothScroll}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </motion.a>
    </div>
  );
};

export default Index;
