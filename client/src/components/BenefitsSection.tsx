/*
 * GREEN FORCE™ – Benefits Section
 * Style: Neo-Ruralismo Contemporáneo
 * Dark green background with before/after image, benefits grid
 * Dark background → use WHITE/LIGHT text
 */

import { Zap, Shield, Truck, Leaf, Award, Clock } from "lucide-react";

const BENEFITS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475074413/UpJxDhvWdWkxE3jrcBS6yZ/beneficios-fertilizante-4oYXVY6Esg2fnuLqmF9MbP.webp";

const benefits = [
  {
    icon: Zap,
    title: "Alta concentración",
    description: "Fórmulas de máxima pureza con los niveles más altos de nutrientes disponibles en el mercado."
  },
  {
    icon: Shield,
    title: "Calidad garantizada",
    description: "Cada lote es analizado y certificado. Si no estás conforme, te devolvemos el dinero."
  },
  {
    icon: Truck,
    title: "Entrega en campo",
    description: "Coordinamos el flete y entregamos en el punto exacto que elijas, sin complicaciones."
  },
  {
    icon: Leaf,
    title: "Para todo tipo de césped",
    description: "Compatible con Rye Grass, Bermuda, Grama Bahiana, Fescue y todas las variedades locales."
  },
  {
    icon: Award,
    title: "Línea profesional",
    description: "Los mismos productos que usan los campos de golf, canchas de fútbol y jardines premium."
  },
  {
    icon: Clock,
    title: "Confirmación en 2 horas",
    description: "Te llamamos en menos de 2 horas para confirmar el pedido, el pago y la fecha de entrega."
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-[#1C3A0E]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={BENEFITS_IMAGE}
                alt="Antes y después del fertilizante Green Force"
                className="w-full h-80 object-cover"
              />
              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-[Nunito_Sans] font-semibold px-3 py-1.5 rounded-sm">
                Sin fertilizar
              </div>
              <div className="absolute bottom-4 right-4 bg-[#E8B84B] text-[#1C3A0E] text-xs font-[Nunito_Sans] font-bold px-3 py-1.5 rounded-sm">
                Con Green Force™
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-px h-full bg-white/50" />
                <div className="absolute bg-white text-[#1C3A0E] font-[Barlow_Condensed] font-black text-xs px-2 py-1 rounded-sm shadow">
                  ANTES / DESPUÉS
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E8B84B]/10 rounded-lg -z-10" />
          </div>

          {/* Right: Benefits */}
          <div>
            <span className="font-[Nunito_Sans] font-semibold text-[#E8B84B] text-sm uppercase tracking-widest">¿Por qué elegirnos?</span>
            <h2 className="font-[Barlow_Condensed] font-black text-white text-5xl md:text-6xl leading-none mt-2 mb-8">
              LA DIFERENCIA<br />
              <span className="text-[#E8B84B]">GREEN FORCE™</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E8B84B]/10 border border-[#E8B84B]/20 rounded-sm flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <div>
                    <h3 className="font-[Barlow_Condensed] font-bold text-white text-lg leading-tight">{benefit.title}</h3>
                    <p className="font-[Nunito_Sans] text-white/60 text-sm mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
