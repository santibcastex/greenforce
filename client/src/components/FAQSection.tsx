/*
 * GREEN FORCE™ – FAQ Section
 * Style: Neo-Ruralismo Contemporáneo
 * Light cream background, accordion-style FAQ
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la entrega?",
    answer: "El tiempo de entrega promedio es de 48 horas desde la confirmación del pedido. Para zonas cercanas a Pilar puede ser en el mismo día o al día siguiente. Te confirmamos la fecha exacta cuando te llamamos para verificar el pedido."
  },
  {
    question: "¿Cuál es la zona de cobertura de entrega?",
    answer: "Actualmente entregamos en toda la zona norte del Gran Buenos Aires: Pilar, Escobar, Tigre, San Isidro, Vicente López, San Fernando, Zárate y alrededores. Para otras zonas consultanos por WhatsApp."
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer: "El pago se coordina al momento de la confirmación telefónica. Aceptamos transferencia bancaria, Mercado Pago y efectivo contra entrega en zonas cercanas."
  },
  {
    question: "¿Cuántas bolsas necesito para mi jardín?",
    answer: "Depende del producto y el tamaño de tu jardín. Como referencia: la Urea 46-0-0 y el DAP 18-46-0 se aplican a razón de 1 kg cada 100 m². El Micro 12-6-4+ME cubre hasta 400 m² por kg. Si tenés dudas, escribinos y te asesoramos."
  },
  {
    question: "¿Con qué frecuencia debo fertilizar?",
    answer: "Para un mantenimiento óptimo, se recomienda fertilizar cada 30-45 días durante la temporada de crecimiento (primavera-verano). En otoño e invierno, reducir la frecuencia o usar fertilizantes de liberación lenta."
  },
  {
    question: "¿Los productos son seguros para mascotas y niños?",
    answer: "Los fertilizantes son seguros una vez aplicados correctamente y el césped está seco. Recomendamos mantener a mascotas y niños alejados del área tratada durante las primeras 24-48 horas después de la aplicación."
  },
  {
    question: "¿Puedo combinar diferentes productos?",
    answer: "Sí, los productos Green Force™ son compatibles entre sí. Sin embargo, recomendamos aplicarlos en momentos diferentes para maximizar la absorción. Consultanos para un plan de fertilización personalizado."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#FAFAF7]">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-[Nunito_Sans] font-semibold text-[#3D6B2C] text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="font-[Barlow_Condensed] font-black text-[#1C3A0E] text-5xl md:text-6xl leading-none mt-2">
              PREGUNTAS<br />
              <span className="text-[#3D6B2C]">FRECUENTES</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-sm overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-[Nunito_Sans] font-semibold text-[#1C3A0E] text-sm pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3D6B2C] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="font-[Nunito_Sans] text-gray-600 text-sm leading-relaxed pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact prompt */}
          <div className="mt-8 text-center">
            <p className="font-[Nunito_Sans] text-gray-600 text-sm">
              ¿Tenés otra pregunta?{" "}
              <a
                href="https://wa.me/5491121581171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D6B2C] font-semibold hover:underline"
              >
                Escribinos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
