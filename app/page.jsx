import Header from './components/Header';
import SpecialItem from './components/SpecialItem';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import { getDailySpecial, getMenuCategories } from '@/lib/menu';

export default function Home() {
  const specialItem = getDailySpecial();
  const categories = getMenuCategories();

  return (
    <>
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Sección especial del día */}
        {specialItem && <SpecialItem item={specialItem} />}

        {/* Menú principal */}
        <div className="mt-12 md:mt-16">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-2">
            Nuestro Menú
          </h2>
          <p className="text-center text-olive mb-12">
            Ingredientes locales, preparaciones con historia
          </p>

          {/* Categorías del menú */}
          <div className="space-y-16">
            {categories.map((category, index) => (
              <CategorySection 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}