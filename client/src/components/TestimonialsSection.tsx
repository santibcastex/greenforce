/*
 * GREEN FORCE™ – Testimonials Section
 * Style: Neo-Ruralismo Contemporáneo
 * Dark green background, testimonial cards with star ratings
 */

const testimonials = [
  {
    name: "Carlos Rodríguez",
    location: "Pilar, Buenos Aires",
    role: "Propietario de jardín",
    rating: 5,
    text: "Increíble resultado con la Urea 46-0-0. En dos semanas el Rye Grass se puso verde intenso. El servicio de entrega fue puntual y el producto llegó en perfectas condiciones.",
    initials: "CR"
  },
  {
    name: "Marcela Fernández",
    location: "Escobar, Buenos Aires",
    role: "Paisajista",
    rating: 5,
    text: "Uso Green Force en todos mis proyectos de paisajismo. El DAP 18-46-0 es excelente para el arranque de nuevas plantas. Mis clientes siempre quedan satisfechos con los resultados.",
    initials: "MF"
  },
  {
    name: "Diego Martínez",
    location: "Tigre, Buenos Aires",
    role: "Encargado de campo de golf",
    rating: 5,
    text: "Probamos el Micro 12-6-4+ME en el campo de golf y los resultados superaron las expectativas. El verde quedó parejo y denso. Definitivamente seguiremos comprando.",
    initials: "DM"
  },
  {
    name: "Laura Gómez",
    location: "San Isidro, Buenos Aires",
    role: "Jardinera amateur",
    rating: 5,
    text: "Nunca había usado fertilizantes profesionales antes. El proceso de pedido fue muy fácil y me llamaron para confirmar todo. El jardín quedó espectacular.",
    initials: "LG"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#1C3A0E]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-[Nunito_Sans] font-semibold text-[#E8B84B] text-sm uppercase tracking-widest">Testimonios</span>
          <h2 className="font-[Barlow_Condensed] font-black text-white text-5xl md:text-6xl leading-none mt-2">
            LO QUE DICEN<br />
            <span className="text-[#E8B84B]">NUESTROS CLIENTES</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#E8B84B] text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="font-[Nunito_Sans] text-white/80 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8B84B] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-[Barlow_Condensed] font-bold text-[#1C3A0E] text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-[Nunito_Sans] font-semibold text-white text-sm">{t.name}</div>
                  <div className="font-[Nunito_Sans] text-white/50 text-xs">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
