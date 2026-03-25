/*
 * GREEN FORCE™ – Home Page
 * Style: Neo-Ruralismo Contemporáneo
 * Integrates all sections: Hero, Products, Benefits, HowItWorks, Testimonials, FAQ, Order, Footer
 */

import { useState } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FieldBannerSection from "@/components/FieldBannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingCartButton from "@/components/FloatingCartButton";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  const scrollToOrder = () => {
    document.querySelector("#pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar onCartClick={() => setCartOpen(true)} />
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FieldBannerSection />
        <TestimonialsSection />
        <FAQSection />
        <OrderSection />
        <Footer />
        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          onCheckout={scrollToOrder}
        />
        <FloatingCartButton onClick={() => setCartOpen(true)} />
      </div>
    </CartProvider>
  );
}
