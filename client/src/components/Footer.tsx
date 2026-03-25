/*
 * GREEN FORCE™ – Footer Component
 * Style: Neo-Ruralismo Contemporáneo
 * Very dark green footer with contact info, schedule, legal
 */

import { Phone, Mail, MessageCircle, Clock, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0f2007] border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8B84B] rounded-sm flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#1C3A0E]" />
              </div>
              <div>
                <div className="font-[Barlow_Condensed] font-black text-white text-lg leading-none">GREEN FORCE™</div>
                <div className="font-[Nunito_Sans] text-[#E8B84B] text-[9px] tracking-[0.2em] uppercase">Línea Profesional</div>
              </div>
            </div>
            <p className="font-[Nunito_Sans] text-white/50 text-sm leading-relaxed">
              Tu marca de fertilizantes de confianza. Productos de alta concentración para el campo y jardín argentino.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[Barlow_Condensed] font-bold text-white text-lg uppercase tracking-wide mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="tel:+5491121581171"
                className="flex items-center gap-3 text-white/60 hover:text-[#E8B84B] transition-colors group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-[#E8B84B]" />
                <span className="font-[Nunito_Sans] text-sm">+54 9 11 2158-1171</span>
              </a>
              <a
                href="mailto:greenforcearg@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-[#E8B84B] transition-colors group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-[#E8B84B]" />
                <span className="font-[Nunito_Sans] text-sm">greenforcearg@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5491121581171"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-[#E8B84B] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0 group-hover:text-[#E8B84B]" />
                <span className="font-[Nunito_Sans] text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-[Barlow_Condensed] font-bold text-white text-lg uppercase tracking-wide mb-4">Horario</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-[Nunito_Sans] text-sm">Lunes a Viernes</p>
                  <p className="font-[Nunito_Sans] text-[#E8B84B] text-sm font-semibold">8:00 a 18:00 hs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p className="font-[Nunito_Sans] text-sm">Sábados</p>
                  <p className="font-[Nunito_Sans] text-[#E8B84B] text-sm font-semibold">8:00 a 13:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-[Barlow_Condensed] font-bold text-white text-lg uppercase tracking-wide mb-4">Legal</h4>
            <p className="font-[Nunito_Sans] text-white/50 text-sm leading-relaxed">
              Los precios son con entrega en la zona de Pilar y pueden variar según zona de entrega. Precios sujetos a cambios sin previo aviso.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-[Nunito_Sans] text-white/30 text-xs">
            © 2025 Green Force™ — Todos los derechos reservados.
          </p>
          <p className="font-[Nunito_Sans] text-white/30 text-xs">
            Diseñado con ♥ para el campo argentino
          </p>
        </div>
      </div>
    </footer>
  );
}
