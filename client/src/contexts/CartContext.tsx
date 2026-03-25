import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  formula: string;
  description: string;
  longDescription: string;
  price: number;
  unit: string;
  badge?: string;
  benefits: string[];
  idealFor: string;
  dose: string;
  image: string;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = "greenforce-cart";

// Función para serializar el carrito
const serializeCart = (items: CartItem[]): string => {
  return JSON.stringify(items.map(item => ({
    product: {
      id: item.product.id,
      name: item.product.name,
      formula: item.product.formula,
      description: item.product.description,
      longDescription: item.product.longDescription,
      price: item.product.price,
      unit: item.product.unit,
      badge: item.product.badge,
      benefits: item.product.benefits,
      idealFor: item.product.idealFor,
      dose: item.product.dose,
      image: item.product.image,
      tag: item.product.tag
    },
    quantity: item.quantity
  })));
};

// Función para deserializar el carrito desde localStorage
const deserializeCart = (data: string | null): CartItem[] => {
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Error deserializing cart:", e);
    return [];
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Inicializar desde localStorage en el cliente
    if (typeof window !== "undefined") {
      return deserializeCart(localStorage.getItem(CART_STORAGE_KEY));
    }
    return [];
  });
  const [isHydrated, setIsHydrated] = useState(false);

  // Sincronizar con localStorage cuando cambia el carrito
  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, serializeCart(items));
    }
  }, [items]);

  const addItem = useCallback((product: Product, quantity: number) => {
    if (quantity <= 0) return;
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(i =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  // Mostrar contenido solo después de hidratar desde localStorage
  if (!isHydrated) {
    return (
      <CartContext.Provider value={{
        items: [], addItem, removeItem, updateQuantity, clearCart,
        totalItems: 0, totalPrice: 0
      }}>
        {children}
      </CartContext.Provider>
    );
  }

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity, clearCart,
      totalItems, totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
