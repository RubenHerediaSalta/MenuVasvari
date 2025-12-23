'use client';

import { motion } from 'framer-motion';

const MenuItem = ({ item }) => {
  const itemVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.005, transition: { duration: 0.2 } }
  };

  const lineVariants = {
    rest: { width: "0%" },
    hover: { width: "100%", transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4 py-4">
        {/* Nombre y descripción */}
        <div className="flex-1">
          <div className="flex items-start justify-between md:justify-start md:gap-4">
            <h4 className="font-serif text-lg md:text-xl text-charcoal font-medium mb-1">
              {item.name}
            </h4>
            
            {/* Línea conectora en móvil */}
            <div className="md:hidden flex-1 mx-4 relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-terracota/20 transform -translate-y-1/2"></div>
            </div>
            
            {/* Precio en móvil */}
            <div className="md:hidden">
              <span className="font-serif text-terracota font-medium">
                ${item.price}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Línea conectora y precio en desktop */}
        <div className="hidden md:flex items-center flex-1 mx-4 relative">
          <motion.div 
            variants={lineVariants}
            className="absolute top-1/2 left-0 h-px bg-terracota/30 transform -translate-y-1/2"
          ></motion.div>
        </div>
        
        <div className="hidden md:block min-w-[100px] text-right">
          <span className="font-serif text-xl text-terracota font-medium">
            ${item.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;