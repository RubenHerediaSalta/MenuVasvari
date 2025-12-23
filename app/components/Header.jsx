'use client';

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-8 md:py-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-2 tracking-tight">
          Casa Vasvari
        </h1>
        <div className="w-24 h-0.5 bg-terracota mx-auto my-4"></div>
        <p className="text-lg md:text-xl text-olive font-light">
          Café + Arte | Animaná, Salta
        </p>
      </motion.div>
    </header>
  );
};

export default Header;