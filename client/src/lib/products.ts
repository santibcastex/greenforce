import { Product } from "@/contexts/CartContext";

export const PRODUCTS: Product[] = [
  {
    id: "urea-46-0-0",
    name: "Urea",
    formula: "46-0-0",
    description: "Nitrógeno puro para máximo crecimiento",
    longDescription: "La Urea 46-0-0 es el fertilizante nitrogenado de mayor concentración disponible. Con un 46% de nitrógeno, es ideal para estimular el crecimiento vegetativo y lograr un césped denso y de color verde intenso.",
    price: 12500,
    unit: "bolsa 1 kg",
    badge: "Más vendido",
    tag: "NITRÓGENO",
    benefits: [
      "46% de nitrógeno puro",
      "Estimula crecimiento rápido",
      "Verde intenso garantizado",
      "Alta solubilidad"
    ],
    idealFor: "Rye Grass, Bermuda y Grama Bahiana",
    dose: "1 kg / 100 m²",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop"
  },
  {
    id: "dap-18-46-0",
    name: "DAP",
    formula: "18-46-0",
    description: "Fosfato diamónico para enraizamiento potente",
    longDescription: "El DAP 18-46-0 (Fosfato Diamónico) combina nitrógeno y fósforo en alta concentración. Es el fertilizante de arranque por excelencia, ideal para el establecimiento de nuevas plantas y el fortalecimiento del sistema radicular.",
    price: 15800,
    unit: "bolsa 1 kg",
    tag: "FÓSFORO",
    benefits: [
      "46% de fósforo disponible",
      "Potencia el enraizamiento",
      "Ideal para arranque",
      "Mejora la absorción de nutrientes"
    ],
    idealFor: "Siembra nueva y trasplantes",
    dose: "1 kg / 100 m²",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop"
  },
  {
    id: "map-11-52-0",
    name: "MAP",
    formula: "11-52-0",
    description: "Máxima concentración de fósforo disponible",
    longDescription: "El MAP 11-52-0 (Fosfato Monoamónico) ofrece la mayor concentración de fósforo en el mercado. Su formulación única garantiza una absorción rápida y eficiente, siendo el aliado perfecto para el desarrollo radicular.",
    price: 14300,
    unit: "bolsa 1 kg",
    badge: "Alta concentración",
    tag: "FÓSFORO",
    benefits: [
      "52% de fósforo máxima concentración",
      "Absorción ultra rápida",
      "pH neutro en solución",
      "Compatible con todos los sistemas"
    ],
    idealFor: "Desarrollo radicular intensivo",
    dose: "1 kg / 100 m²",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop"
  },
  {
    id: "micro-12-6-4",
    name: "Micro",
    formula: "12-6-4 + ME",
    description: "Fertilizante completo con microelementos",
    longDescription: "El Micro 12-6-4 + ME es la solución integral para un césped y jardín de alto rendimiento. Combina macronutrientes (N-P-K) con microelementos esenciales: Zinc, Cobre, Manganeso, Hierro y Molibdeno para una nutrición completa.",
    price: 19800,
    unit: "bolsa 1 kg",
    badge: "Fórmula completa",
    tag: "COMPLETO",
    benefits: [
      "N-P-K + 5 microelementos",
      "Zinc, Cobre, Manganeso, Hierro, Molibdeno",
      "Cobertura de 400 m² por kg",
      "Nutrición integral"
    ],
    idealFor: "Mantenimiento integral de jardín",
    dose: "1 kg / 400 m²",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop"
  }
];

export const PROVINCES = [
  "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán"
];
