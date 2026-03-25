/*
 * GREEN FORCE™ – Order Section
 * Style: Neo-Ruralismo Contemporáneo
 * Dark green background, two-column layout: cart summary + form
 */

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { PROVINCES } from "@/lib/products";
import { Trash2, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function OrderSection() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    direccion: "",
    provincia: "",
    notas: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatPrice = (price: number) =>
    `$${price.toLocaleString("es-AR")}`;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!form.apellido.trim()) newErrors.apellido = "El apellido es requerido";
    if (!form.telefono.trim()) newErrors.telefono = "El teléfono es requerido";
    if (!form.direccion.trim()) newErrors.direccion = "La dirección es requerida";
    if (!form.provincia) newErrors.provincia = "Seleccioná una provincia";
    if (items.length === 0) newErrors.cart = "Agregá al menos un producto";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (newErrors.cart) toast.error("Agregá al menos un producto al pedido");
      return;
    }

    setLoading(true);

    // Build WhatsApp message
    const productList = items
      .map(i => `• ${i.quantity}x ${i.product.name} ${i.product.formula} – ${formatPrice(i.product.price * i.quantity)}`)
      .join("\n");

    const message = encodeURIComponent(
      `🌿 *NUEVO PEDIDO – Green Force™*\n\n` +
      `*Cliente:* ${form.nombre} ${form.apellido}\n` +
      `*Teléfono:* ${form.telefono}\n` +
      `*Email:* ${form.email || "No indicado"}\n` +
      `*Dirección:* ${form.direccion}, ${form.provincia}\n\n` +
      `*Productos:*\n${productList}\n\n` +
      `*Total estimado:* ${formatPrice(totalPrice)}\n\n` +
      `${form.notas ? `*Notas:* ${form.notas}` : ""}`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      clearCart();
      window.open(`https://wa.me/5491121581171?text=${message}`, "_blank");
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="pedido" className="py-20 bg-[#1C3A0E]">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle className="w-20 h-20 text-[#E8B84B] mx-auto mb-6" />
            <h2 className="font-[Barlow_Condensed] font-black text-white text-4xl mb-4">¡PEDIDO ENVIADO!</h2>
            <p className="font-[Nunito_Sans] text-white/70 mb-8">
              Te redirigimos a WhatsApp para confirmar tu pedido. En menos de 2 horas te contactamos para coordinar la entrega y el pago.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#E8B84B] hover:bg-[#f0c860] text-[#1C3A0E] font-[Barlow_Condensed] font-bold uppercase tracking-wide px-8 py-3 rounded-sm transition-all duration-200"
            >
              Hacer otro pedido
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pedido" className="py-20 bg-[#1C3A0E]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-[Nunito_Sans] font-semibold text-[#E8B84B] text-sm uppercase tracking-widest">Pedido</span>
          <h2 className="font-[Barlow_Condensed] font-black text-white text-5xl md:text-6xl leading-none mt-2">
            HACER UN PEDIDO
          </h2>
          <p className="font-[Nunito_Sans] text-white/60 mt-3">
            Revisá tu selección y completá tus datos. Te contactamos en menos de 2 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cart Summary */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="font-[Barlow_Condensed] font-bold text-white text-2xl mb-5 flex items-center gap-2">
              <span className="text-[#E8B84B]">🛒</span> Tu Carrito
            </h3>

            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="font-[Nunito_Sans] text-white/40 text-sm">No hay productos en el carrito.</p>
                <button
                  onClick={() => document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-4 text-[#E8B84B] font-[Nunito_Sans] font-semibold text-sm hover:underline"
                >
                  Ver productos →
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-3 bg-white/5 rounded-sm p-3">
                      <div className="w-10 h-10 bg-[#E8B84B]/10 border border-[#E8B84B]/20 rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="text-[#E8B84B] font-[Barlow_Condensed] font-black text-xs text-center leading-none">
                          {item.product.formula.split("-")[0]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-[Nunito_Sans] font-semibold text-white text-xs truncate">
                          {item.product.name} {item.product.formula}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center border border-white/20 rounded-sm overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold"
                            >
                              −
                            </button>
                            <span className="w-7 text-center font-[Nunito_Sans] text-white text-xs">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-[Nunito_Sans] text-white/50 text-xs">×</span>
                          <span className="font-[Nunito_Sans] text-white/70 text-xs">{formatPrice(item.product.price)}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-[Barlow_Condensed] font-bold text-white text-sm">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-white/30 hover:text-red-400 transition-colors mt-1"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="font-[Nunito_Sans] text-white/60 text-sm">Total estimado</span>
                  <span className="font-[Barlow_Condensed] font-black text-[#E8B84B] text-2xl">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <button
                  onClick={clearCart}
                  className="mt-3 text-white/30 hover:text-white/60 font-[Nunito_Sans] text-xs transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  Vaciar carrito
                </button>
              </>
            )}
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="font-[Barlow_Condensed] font-bold text-white text-2xl mb-5 flex items-center gap-2">
              <span className="text-[#E8B84B]">📝</span> Tus Datos
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-wider block mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                    placeholder="Juan"
                    className={`w-full bg-white/10 border ${errors.nombre ? "border-red-400" : "border-white/20"} rounded-sm px-3 py-2.5 text-white placeholder-white/30 font-[Nunito_Sans] text-sm focus:outline-none focus:border-[#E8B84B] transition-colors`}
                  />
                  {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-wider block mb-1">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    value={form.apellido}
                    onChange={e => setForm(f => ({ ...f, apellido: e.target.value }))}
                    placeholder="García"
                    className={`w-full bg-white/10 border ${errors.apellido ? "border-red-400" : "border-white/20"} rounded-sm px-3 py-2.5 text-white placeholder-white/30 font-[Nunito_Sans] text-sm focus:outline-none focus:border-[#E8B84B] transition-colors`}
                  />
                  {errors.apellido && <p className="text-red-400 text-xs mt-1">{errors.apellido}</p>}
                </div>
              </div>

              <div>
                <label className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-wider block mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                  placeholder="11 5123-4444"
                  className={`w-full bg-white/10 border ${errors.telefono ? "border-red-400" : "border-white/20"} rounded-sm px-3 py-2.5 text-white placeholder-white/30 font-[Nunito_Sans] text-sm focus:outline-none focus:border-[#E8B84B] transition-colors`}
                />
                {errors.telefono && <p className="text-red-400 text-xs mt-1">{errors.telefono}</p>}
              </div>

              <div>
                <label className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-wider block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="juan@correo.com"
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-3 py-2.5 text-white placeholder-white/30 font-[Nunito_Sans] text-sm focus:outline-none focus:border-[#E8B84B] transition-colors"
                />
              </div>

              <div>
                <label className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-wider block mb-1">
                  Dirección de entrega *
                </label>
                <input
                  type="text"
                  value={form.direccion}
                  onChange={e => setForm(f => ({ ...f, direccion: e.target.value }))}
                  placeholder="Calle 123, Barrio Los Pinos"
                  className={`w-full bg-white/10 border ${errors.direccion ? "border-red-400" : "border-white/20"} rounded-sm px-3 py-2.5 text-white placeholder-white/30 font-[Nunito_Sans] text-sm focus:outline-none focus:border-[#E8B84B] transition-colors`}
                />
                {errors.direccion && <p className="text-red-400 text-xs mt-1">{errors.direccion}</p>}
              </div>

              <div>
                <label className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-wider block mb-1">
                  Provincia *
                </label>
                <select
                  value={form.provincia}
                  onChange={e => setForm(f => ({ ...f, provincia: e.target.value }))}
                  className={`w-full bg-[#1C3A0E] border ${errors.provincia ? "border-red-400" : "border-white/20"} rounded-sm px-3 py-2.5 text-white font-[Nunito_Sans] text-sm focus:outline-none focus:border-[#E8B84B] transition-colors`}
                >
                  <option value="">Seleccioná una provincia...</option>
                  {PROVINCES.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {errors.provincia && <p className="text-red-400 text-xs mt-1">{errors.provincia}</p>}
              </div>

              <div>
                <label className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-wider block mb-1">
                  Notas adicionales
                </label>
                <textarea
                  value={form.notas}
                  onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                  placeholder="Horario de entrega, portón de acceso, referencias..."
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-3 py-2.5 text-white placeholder-white/30 font-[Nunito_Sans] text-sm focus:outline-none focus:border-[#E8B84B] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E8B84B] hover:bg-[#f0c860] disabled:opacity-60 text-[#1C3A0E] font-[Barlow_Condensed] font-bold uppercase tracking-wide py-4 rounded-sm transition-all duration-200 text-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="animate-spin w-5 h-5 border-2 border-[#1C3A0E] border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Pedido por WhatsApp
                  </>
                )}
              </button>

              <p className="font-[Nunito_Sans] text-white/40 text-xs text-center">
                Al enviar, serás redirigido a WhatsApp para confirmar tu pedido.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
