'use client';

import { motion } from 'framer-motion';
import { Instagram, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-8 px-4 border-t border-terracota/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Texto del footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
              <Heart className="w-4 h-4 text-terracota fill-terracota/20" />
              Hecho con amor en los Valles Calchaquíes
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Casa Vasvari © {currentYear} | Todos los precios en AR$
            </p>
          </motion.div>

          {/* Botones de redes y ubicación */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-6"
          >
            <a 
              href="https://www.instagram.com/casavasvari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-olive group-hover:text-terracota transition-colors" />
              <span className="text-olive hover:text-terracota transition-colors duration-300 text-sm font-medium border-b border-transparent group-hover:border-terracota pb-1">
                Instagram
              </span>
            </a>
            
            <a 
              href="https://maps.google.com/?q=Casa+Vasvari+Café+Arte+Animaná+Salta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-olive group-hover:text-terracota transition-colors" />
              <span className="text-olive hover:text-terracota transition-colors duration-300 text-sm font-medium border-b border-transparent group-hover:border-terracota pb-1">
                Ubicación
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;