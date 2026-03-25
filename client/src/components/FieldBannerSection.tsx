/*
 * GREEN FORCE™– Field Banner Section
 * Style: Neo-Ruralismo Contemporáneo
 * Full-width image banner with CTA, dark overlay → WHITE text
 */

const FIELD_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475074413/UpJxDhvWdWkxE3jrcBS6yZ/campo-cesped-verde-PaBYNUoUTSG5c2j5KqfTzB.webp";

export default function FieldBannerSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FIELD_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-[#1C3A0E]/75" />

      {/* Content */}
      <div className="relative container text-center">
        <span className="font-[Nunito_Sans] font-semibold text-[#E8B84B] text-sm uppercase tracking-widest">Resultados reales</span>
        <h2 className="font-[Barlow_Condensed] font-black text-white text-5xl md:text-7xl leading-none mt-3 mb-6">
          UN CÉSPED<br />
          <span className="text-[#E8B84B]">QUE HABLA SOLO</span>
        </h2>
        <p className="font-[Nunito_Sans] text-white/80 text-lg max-w-xl mx-auto mb-8">
          Con las fórmulas Green Force™ tu jardín o campo alcanza el verde intenso y la densidad que siempre quisiste.
        </p>
        <button
          onClick={() => document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-[#E8B84B] hover:bg-[#f0c860] text-[#1C3A0E] font-[Barlow_Condensed] font-bold uppercase tracking-wide px-10 py-4 rounded-sm transition-all duration-200 text-lg shadow-lg"
        >
          Ver Productos
        </button>
      </div>
    </section>
  );
}
