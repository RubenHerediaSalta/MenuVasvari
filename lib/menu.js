/**
 * Archivo de datos del menú - Casa Vasvari Café + Arte
 * 
 * INSTRUCCIONES PARA EDITAR:
 * 
 * 1. Para cambiar precios: Modifica el valor de la propiedad "price"
 * 2. Para cambiar el plato del día: Cambia "isSpecial: true" al ítem deseado
 *    (solo un ítem debe tener esta propiedad en true)
 * 3. Para editar descripciones: Modifica el texto dentro de "description"
 * 4. Para agregar/eliminar ítems: Sigue la misma estructura JSON
 */

export const menuData = {
  // Plato especial del día - se mostrará destacado
  specialItem: {
    id: 1,
    name: "Tarta de Quesillo y Cayote",
    description: "Postre tradicional salteño con quesillo artesanal y dulce de cayote de los valles Calchaquíes. Acompañado de crema chantilly.",
    price: 1250,
    category: "pasteleria",
    isSpecial: true, // Cambia esta propiedad a "false" para quitar como especial
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop",
    alt: "Tarta de quesillo y cayote tradicional"
  },

  // Categorías del menú
  categories: [
    {
      id: "cafeteria",
      name: "Cafetería de Altura",
      description: "Cafés de especialidad tostados localmente en Animaná",
      items: [
        {
          id: 101,
          name: "Café de Filtro - Blend Casa Vasvari",
          description: "Mezcla exclusiva de granos de Cachi y Cafayate. Notas a chocolate amargo y nuez.",
          price: 850,
          isSpecial: false
        },
        {
          id: 102,
          name: "Espresso Doble",
          description: "Intenso y equilibrado, extraído a la perfección para disfrutar puro o en preparaciones.",
          price: 750,
          isSpecial: false
        },
        {
          id: 103,
          name: "Café con Leche de Cabra",
          description: "Espresso con leche de cabra espumada de producción local.",
          price: 950,
          isSpecial: false
        },
        {
          id: 104,
          name: "Té de Hierbas Serranas",
          description: "Infusión de peperina, cedrón y muña-muña cosechadas en la Quebrada de las Flechas.",
          price: 600,
          isSpecial: false
        }
      ]
    },
    {
      id: "pasteleria",
      name: "Pastelería Regional",
      description: "Elaboraciones artesanales con ingredientes de los valles",
      items: [
        {
          id: 201,
          name: "Alfajores de Maicena con Dulce de Leche de Cabra",
          description: "Dos galletas de maicena rellenas de dulce de leche artesanal y espolvoreadas con coco rallado.",
          price: 450,
          isSpecial: false
        },
        {
          id: 202,
          name: "Postre de Chocolate con Sal de los Valles",
          description: "Mousse de chocolate 70% con toque de sal rosada de Salinas Grandes y crocante de almendras.",
          price: 1100,
          isSpecial: false
        },
        {
          id: 203,
          name: "Pan Dulce Salteño con Frutas Secas",
          description: "Elaborado con nueces, almendras y pasas de uva de Cafayate.",
          price: 700,
          isSpecial: false
        }
      ]
    },
    {
      id: "salados",
      name: "Salados",
      description: "Preparaciones con ingredientes locales",
      items: [
        {
          id: 301,
          name: "Empanadas de Cordero con Cebolla de Verdeo",
          description: "Tres empanadas horneadas rellenas de cordero de los valles, cebolla de verdeo y comino.",
          price: 1800,
          isSpecial: false
        },
        {
          id: 302,
          name: "Sándwich de Queso de Cabra y Tomates Secos",
          description: "Pan de campo, queso de cabra cremoso, tomates secos hidratados en aceite de oliva y rúcula.",
          price: 1600,
          isSpecial: false
        },
        {
          id: 303,
          name: "Tabla de Quesos Regionales",
          description: "Selección de queso de cabra, queso de oveja y queso criollo, acompañados de nueces y membrillo.",
          price: 2200,
          isSpecial: false
        }
      ]
    },
    {
      id: "vinos",
      name: "Vinos de los Valles",
      description: "Selección de vinos de altura de bodegas de Animaná y Cafayate",
      items: [
        {
          id: 401,
          name: "Torrontés - El Transito",
          description: "Vino blanco afrutado y aromático, con notas de durazno blanco y flores. Ideal para el clima soleado.",
          price: 1900,
          isSpecial: false
        },
        {
          id: 402,
          name: "Malbec - Finca las Nubes",
          description: "Cuerpo medio, taninos suaves y notas de ciruela y chocolate. Viñedos a 2300msnm.",
          price: 2100,
          isSpecial: false
        },
        {
          id: 403,
          name: "Tannat Rosé - Viñas de Altura",
          description: "Rosado fresco y vibrante, con notas de frutos rojos y final mineral.",
          price: 1800,
          isSpecial: false
        }
      ]
    }
  ]
};

/**
 * Función para obtener el ítem especial del día
 */
export function getDailySpecial() {
  // Primero revisamos si el specialItem está marcado como especial
  if (menuData.specialItem && menuData.specialItem.isSpecial) {
    return menuData.specialItem;
  }
  
  // Si no, buscamos en las categorías
  for (const category of menuData.categories) {
    const specialItem = category.items.find(item => item.isSpecial);
    if (specialItem) return { ...specialItem, category: category.name };
  }
  
  // Si no hay ningún ítem especial, retornamos null
  return null;
}

/**
 * Función para obtener todas las categorías
 */
export function getMenuCategories() {
  return menuData.categories;
}

/**
 * Ejemplo de cómo cambiar el plato del día:
 * 
 * 1. En el objeto "specialItem", cambiar "isSpecial: true" a "isSpecial: false"
 * 2. En alguno de los ítems de las categorías, cambiar "isSpecial: false" a "isSpecial: true"
 * 
 * Ejemplo: Para hacer del "Malbec" el plato del día:
 * {
 *   id: 402,
 *   name: "Malbec - Finca las Nubes",
 *   ...,
 *   isSpecial: true  // Cambiar de false a true
 * }
 */