'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Coffee } from 'lucide-react';

const SpecialItem = ({ item }) => {
  if (!item) return null;

  return (
    <section className="mb-12 md:mb-16">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/90 to-cream border border-terracota/20 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-terracota/5 to-olive/5 z-0"></div>
        
        <div className="relative z-10 p-6 md:p-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Coffee className="w-4 h-4 text-terracota" />
            <span className="px-4 py-2 bg-terracota/10 text-terracota text-sm font-semibold rounded-full border border-terracota/20">
              La Obra del Día
            </span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Imagen del plato especial */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/5"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-square md:aspect-auto md:h-80">
                <Image 
                  src={item.image} 
                  alt={item.alt || item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Información del plato */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-3/5"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-olive font-medium">Categoría: </span>
                  <span className="text-sm text-charcoal capitalize">
                    {item.category || 'Especial'}
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-serif font-semibold text-terracota">
                  ${item.price}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialItem;