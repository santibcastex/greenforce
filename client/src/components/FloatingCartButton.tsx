/*
 * GREEN FORCE™ – Floating Cart Button
 * Style: Neo-Ruralismo Contemporáneo
 * Fixed bottom-right cart button with item count badge
 */

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";

interface FloatingCartButtonProps {
  onClick: () => void;
}

export default function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { totalItems, totalPrice } = useCart();
  const [animate, setAnimate] = useState(false);
  const [prevItems, setPrevItems] = useState(totalItems);

  useEffect(() => {
    if (totalItems !== prevItems && totalItems > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 400);
      setPrevItems(totalItems);
    }
  }, [totalItems, prevItems]);

  if (totalItems === 0) return null;

  const formatPrice = (price: number) =>
    `$${price.toLocaleString("es-AR")}`;

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-40 bg-[#E8B84B] hover:bg-[#f0c860] text-[#1C3A0E] shadow-lg shadow-black/20 rounded-sm flex items-center gap-3 px-5 py-3 transition-all duration-200 ${
        animate ? "scale-110" : "scale-100"
      }`}
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 bg-[#1C3A0E] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="font-[Barlow_Condensed] font-bold text-sm uppercase tracking-wide">Ver Pedido</span>
        <span className="font-[Nunito_Sans] text-xs font-semibold opacity-80">{formatPrice(totalPrice)}</span>
      </div>
    </button>
  );
}
