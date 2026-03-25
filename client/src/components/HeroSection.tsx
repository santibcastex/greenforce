/*
 * GREEN FORCE™ – Hero Section
 * Style: Neo-Ruralismo Contemporáneo
 * Full-screen hero with campo argentino image, dark overlay, bold typography
 * Dark background → use WHITE/LIGHT text
 */

import { ChevronDown } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475074413/UpJxDhvWdWkxE3jrcBS6yZ/hero-campo-argentino-RMekbfk3RjhDZkG6DdTCYN.webp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2000, "");
  return (
    <div ref={ref} className="text-center">
      <div className="font-[Barlow_Condensed] font-black text-[#E8B84B] text-4xl md:text-5xl leading-none">
        {count}{suffix}
      </div>
      <div className="font-[Nunito_Sans] text-white/70 text-xs uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const scrollToProducts = () => {
    document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToOrder = () => {
    document.querySelector("#pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C3A0E]/80 via-[#1C3A0E]/60 to-[#1C3A0E]/90" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center pt-24 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8B84B]/20 border border-[#E8B84B]/40 text-[#E8B84B] text-xs font-[Nunito_Sans] font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 bg-[#E8B84B] rounded-full animate-pulse" />
              Green Force™ — Línea Profesional
            </div>

            {/* Main headline */}
            <h1 className="font-[Barlow_Condensed] font-black text-white leading-none mb-4">
              <span className="block text-5xl md:text-7xl lg:text-8xl">FERTILIZANTES</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-[#E8B84B]">PREMIUM</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90 font-bold mt-2">para tu jardín y campo</span>
            </h1>

            {/* Subtitle */}
            <p className="font-[Nunito_Sans] text-white/80 text-lg md:text-xl max-w-xl mt-6 mb-8 leading-relaxed">
              Pedí tus bolsas Green Force™ desde casa. Seleccioná el producto, la cantidad y te lo entregamos directo en tu jardín o campo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProducts}
                className="bg-[#E8B84B] hover:bg-[#f0c860] text-[#1C3A0E] font-[Barlow_Condensed] font-bold uppercase tracking-wide px-8 py-4 rounded-sm transition-all duration-200 text-lg shadow-lg shadow-[#E8B84B]/20"
              >
                Ver Productos
              </button>
              <button
                onClick={scrollToOrder}
                className="border-2 border-white text-white font-[Barlow_Condensed] font-bold uppercase tracking-wide px-8 py-4 rounded-sm hover:bg-white hover:text-[#1C3A0E] transition-all duration-200 text-lg"
              >
                Hacer un Pedido
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-[#1C3A0E]/95 border-t border-white/10">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value={500} suffix="+" label="Clientes activos" />
            <StatItem value={4} suffix="" label="Productos disponibles" />
            <StatItem value={48} suffix="hs" label="Entrega promedio" />
            <StatItem value={100} suffix="%" label="Garantía de calidad" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
