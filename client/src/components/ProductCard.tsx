/*
 * GREEN FORCE™ – Product Card Component
 * Style: Neo-Ruralismo Contemporáneo
 * Clean white card with green accents, formula badge, hover elevation
 */

import { useState } from "react";
import { Plus, Minus, ShoppingCart, Check } from "lucide-react";
import { Product } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    toast.success(`${quantity} bolsa${quantity > 1 ? "s" : ""} de ${product.name} ${product.formula} agregada${quantity > 1 ? "s" : ""} al pedido`, {
      description: `$${(product.price * quantity).toLocaleString("es-AR")} total`,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  const formatPrice = (price: number) =>
    `$${price.toLocaleString("es-AR")}`;

  const tagColors: Record<string, string> = {
    "NITRÓGENO": "bg-blue-100 text-blue-800",
    "FÓSFORO": "bg-orange-100 text-orange-800",
    "COMPLETO": "bg-[#E8B84B]/20 text-[#8B6914]",
  };

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm flex flex-col">
      {/* Image area */}
      <div className="relative bg-gradient-to-br from-[#f0f7ec] to-[#e8f5e0] h-52 flex items-center justify-center overflow-hidden">
        {/* Formula badge */}
        <div className="absolute top-3 left-3 bg-[#1C3A0E] text-white font-[Barlow_Condensed] font-bold text-sm px-3 py-1 rounded-sm">
          {product.formula}
        </div>
        {/* Tag */}
        {product.tag && (
          <div className={`absolute top-3 right-3 text-xs font-[Nunito_Sans] font-bold px-2 py-1 rounded-sm ${tagColors[product.tag] || "bg-gray-100 text-gray-700"}`}>
            {product.tag}
          </div>
        )}
        {/* Badge */}
        {product.badge && (
          <div className="absolute bottom-3 left-3 bg-[#E8B84B] text-[#1C3A0E] text-xs font-[Nunito_Sans] font-bold px-2 py-1 rounded-sm">
            ★ {product.badge}
          </div>
        )}
        {/* Product visual - Logo */}
        <img
          src={product.image}
          alt={`${product.name} ${product.formula}`}
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-[Barlow_Condensed] font-black text-[#1C3A0E] text-2xl leading-none">
            {product.name} <span className="text-[#3D6B2C]">{product.formula}</span>
          </h3>
          <p className="font-[Nunito_Sans] text-gray-600 text-sm mt-1">{product.description}</p>
        </div>

        {/* Benefits */}
        <div className="mb-4 flex-1">
          <ul className="space-y-1">
            {product.benefits.slice(0, 3).map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-[Nunito_Sans] text-gray-600">
                <span className="text-[#3D6B2C] mt-0.5 flex-shrink-0">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-2 text-xs font-[Nunito_Sans] text-gray-500">
            <span className="font-semibold">Dosis:</span> {product.dose}
          </div>
          <div className="text-xs font-[Nunito_Sans] text-gray-500">
            <span className="font-semibold">Ideal para:</span> {product.idealFor}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="font-[Barlow_Condensed] font-black text-[#1C3A0E] text-3xl leading-none">
            {formatPrice(product.price)}
          </div>
          <div className="font-[Nunito_Sans] text-gray-500 text-xs">/ {product.unit}</div>
        </div>

        {/* Quantity + Add */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="w-9 h-9 flex items-center justify-center text-[#1C3A0E] hover:bg-gray-50 transition-colors font-bold"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-10 text-center font-[Nunito_Sans] font-semibold text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="w-9 h-9 flex items-center justify-center text-[#1C3A0E] hover:bg-gray-50 transition-colors font-bold"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-sm font-[Barlow_Condensed] font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
              added
                ? "bg-[#3D6B2C] text-white"
                : "bg-[#1C3A0E] text-white hover:bg-[#2d5a1a]"
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Agregado
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
