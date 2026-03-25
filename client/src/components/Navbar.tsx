/*
 * GREEN FORCE™ – Navbar Component
 * Style: Neo-Ruralismo Contemporáneo
 * Dark green background with yellow accent for cart button
 * Sticky header with backdrop blur on scroll
 */

import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#productos", label: "Productos" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#contacto", label: "Contacto" },
  ];

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1C3A0E]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#1C3A0E]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 bg-[#E8B84B] rounded-sm flex items-center justify-center group-hover:bg-[#f0c860] transition-colors">
              <Leaf className="w-5 h-5 text-[#1C3A0E]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-[Barlow_Condensed] font-black text-white text-xl tracking-tight">GREEN FORCE</span>
              <span className="font-[Nunito_Sans] text-[#E8B84B] text-[10px] tracking-[0.2em] uppercase font-semibold">Línea Profesional</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-[Nunito_Sans] font-semibold text-white/80 hover:text-[#E8B84B] transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 bg-[#E8B84B] hover:bg-[#f0c860] text-[#1C3A0E] font-[Barlow_Condensed] font-bold px-4 py-2 rounded-sm transition-all duration-200 text-sm uppercase tracking-wide"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Mi Pedido</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#1C3A0E] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1C3A0E] border-t border-white/10">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-[Nunito_Sans] font-semibold text-white/80 hover:text-[#E8B84B] transition-colors text-sm uppercase tracking-wider text-left py-2 border-b border-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
