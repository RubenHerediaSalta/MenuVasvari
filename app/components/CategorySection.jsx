'use client';

import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const CategorySection = ({ category, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border-b border-olive/20 pb-8 last:border-b-0"
    >
      <div className="mb-8">
        <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">
          {category.name}
        </h3>
        <p className="text-olive italic">{category.description}</p>
      </div>

      <div className="space-y-6">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default CategorySection;