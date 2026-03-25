/*
 * GREEN FORCE™ – How It Works Section
 * Style: Neo-Ruralismo Contemporáneo
 * Light cream background, horizontal steps with large decorative numbers
 */

import { ShoppingCart, ClipboardList, Phone, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Elegí el producto",
    description: "Seleccioná el fertilizante y la cantidad de bolsas que necesitás para tu jardín o campo."
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Completá el formulario",
    description: "Ingresá tus datos de contacto y la dirección de entrega. Solo tarda 2 minutos."
  },
  {
    number: "03",
    icon: Phone,
    title: "Te confirmamos",
    description: "En menos de 2 horas te llamamos para confirmar el pedido, el pago y la fecha de entrega."
  },
  {
    number: "04",
    icon: Truck,
    title: "Entrega en campo",
    description: "Coordinamos el flete y entregamos en el punto exacto que elijas, sin complicaciones."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-[#FAFAF7]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-[Nunito_Sans] font-semibold text-[#3D6B2C] text-sm uppercase tracking-widest">Proceso</span>
          <h2 className="font-[Barlow_Condensed] font-black text-[#1C3A0E] text-5xl md:text-6xl leading-none mt-2">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="font-[Nunito_Sans] text-gray-600 mt-4 max-w-lg mx-auto">
            Cuatro pasos simples y el fertilizante llega a tu campo o jardín.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#E8B84B]/20 via-[#E8B84B] to-[#E8B84B]/20 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Step number (decorative background) */}
              <div className="relative z-10 mb-4">
                <div className="w-24 h-24 bg-white border-2 border-[#E8B84B]/30 rounded-lg flex flex-col items-center justify-center shadow-sm relative">
                  <span className="font-[Barlow_Condensed] font-black text-[#E8B84B]/30 text-4xl leading-none absolute top-1 right-2">{step.number}</span>
                  <step.icon className="w-8 h-8 text-[#1C3A0E] relative z-10" />
                </div>
              </div>

              <h3 className="font-[Barlow_Condensed] font-bold text-[#1C3A0E] text-xl mb-2">{step.title}</h3>
              <p className="font-[Nunito_Sans] text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.querySelector("#pedido")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#1C3A0E] hover:bg-[#2d5a1a] text-white font-[Barlow_Condensed] font-bold uppercase tracking-wide px-10 py-4 rounded-sm transition-all duration-200 text-lg"
          >
            Hacer mi pedido ahora
          </button>
        </div>
      </div>
    </section>
  );
}
