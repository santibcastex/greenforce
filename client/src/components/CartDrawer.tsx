/*
 * GREEN FORCE™ – Cart Drawer Component
 * Style: Neo-Ruralismo Contemporáneo
 * Slide-in cart from the right, dark green header, item list
 */

import { X, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({ open, onClose, onCheckout }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const formatPrice = (price: number) =>
    `$${price.toLocaleString("es-AR")}`;

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[#1C3A0E] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-[#E8B84B]" />
            <span className="font-[Barlow_Condensed] font-bold text-white text-xl uppercase tracking-wide">
              Mi Pedido
            </span>
            {totalItems > 0 && (
              <span className="bg-[#E8B84B] text-[#1C3A0E] text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-gray-200 mb-4" />
              <p className="font-[Barlow_Condensed] font-bold text-gray-400 text-xl">Tu pedido está vacío</p>
              <p className="font-[Nunito_Sans] text-gray-400 text-sm mt-2">Agregá productos desde el catálogo</p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#1C3A0E] text-white font-[Barlow_Condensed] font-bold uppercase tracking-wide px-6 py-3 rounded-sm text-sm hover:bg-[#2d5a1a] transition-colors"
              >
                Ver Productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4 p-4 bg-gray-50 rounded-sm border border-gray-100">
                  {/* Product visual */}
                  <div className="w-14 h-14 bg-[#1C3A0E] rounded-sm flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[#E8B84B] font-[Barlow_Condensed] font-black text-xs leading-none text-center px-1">
                      {item.product.formula.split("+")[0].trim()}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-[Barlow_Condensed] font-bold text-[#1C3A0E] text-sm">
                          {item.product.name} {item.product.formula}
                        </p>
                        <p className="font-[Nunito_Sans] text-gray-500 text-xs">{item.product.unit}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#1C3A0E] hover:bg-gray-100 transition-colors text-sm font-bold"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-[Nunito_Sans] font-semibold text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#1C3A0E] hover:bg-gray-100 transition-colors text-sm font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-[Barlow_Condensed] font-bold text-[#1C3A0E] text-sm">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="font-[Nunito_Sans] font-semibold text-gray-600">Total estimado</span>
              <span className="font-[Barlow_Condensed] font-black text-[#1C3A0E] text-2xl">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <p className="font-[Nunito_Sans] text-gray-400 text-xs">
              * El precio final puede variar según zona de entrega.
            </p>

            {/* Checkout button */}
            <button
              onClick={() => { onClose(); onCheckout(); }}
              className="w-full bg-[#E8B84B] hover:bg-[#f0c860] text-[#1C3A0E] font-[Barlow_Condensed] font-bold uppercase tracking-wide py-4 rounded-sm transition-all duration-200 text-lg flex items-center justify-center gap-2"
            >
              Completar Pedido
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="w-full text-gray-400 hover:text-gray-600 font-[Nunito_Sans] text-sm transition-colors flex items-center justify-center gap-1"
            >
              <Trash2 className="w-3 h-3" />
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
