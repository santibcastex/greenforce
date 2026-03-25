/*
 * GREEN FORCE™ – Products Section
 * Style: Neo-Ruralismo Contemporáneo
 * Light cream background, grid layout, sort functionality
 */

import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export default function ProductsSection() {
  const [sort, setSort] = useState<SortOption>("featured");

  const sortedProducts = [...PRODUCTS].sort((a, b) => {
    switch (sort) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "name": return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  return (
    <section id="productos" className="py-20 bg-[#FAFAF7]">
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-[Nunito_Sans] font-semibold text-[#3D6B2C] text-sm uppercase tracking-widest">Catálogo</span>
              <h2 className="font-[Barlow_Condensed] font-black text-[#1C3A0E] text-5xl md:text-6xl leading-none mt-1">
                NUESTROS<br />
                <span className="text-[#3D6B2C]">PRODUCTOS</span>
              </h2>
              <p className="font-[Nunito_Sans] text-gray-600 mt-3 max-w-lg">
                Fertilizantes Green Force™ de alta concentración para césped, jardín y campo. Formulados para el campo argentino.
              </p>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="font-[Nunito_Sans] text-gray-500 text-sm">{PRODUCTS.length} productos</span>
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortOption)}
                className="font-[Nunito_Sans] text-sm border border-gray-200 rounded-sm px-3 py-2 bg-white text-[#1C3A0E] focus:outline-none focus:border-[#3D6B2C]"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="name">Nombre A–Z</option>
              </select>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-6 h-px bg-gradient-to-r from-[#1C3A0E] via-[#E8B84B] to-transparent" />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="font-[Nunito_Sans] text-gray-500 text-sm text-center mt-8">
          Los precios son con entrega en zona de Pilar y pueden variar según zona de entrega.
        </p>
      </div>
    </section>
  );
}
