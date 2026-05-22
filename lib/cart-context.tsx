'use client';
import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

export interface CartItem {
  variantId: number;
  productId: number;
  title: string;
  variantTitle: string;
  price: string;
  quantity: number;
  imageSrc?: string;
  handle: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { variantId: number } }
  | { type: 'UPDATE_QTY'; payload: { variantId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'HYDRATE'; payload: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, items: action.payload };
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.variantId === action.payload.variantId);
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map(i =>
            i.variantId === action.payload.variantId
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { ...state, isOpen: true, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.variantId !== action.payload.variantId) };
    case 'UPDATE_QTY':
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter(i => i.variantId !== action.payload.variantId) };
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.variantId === action.payload.variantId ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (variantId: number) => void;
  updateQty: (variantId: number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  checkoutUrl: string;
}

const CartContext = createContext<CartContextType | null>(null);

const SHOPIFY_STORE = 'xmehii-zm.myshopify.com';
const STORAGE_KEY = 'bt_cart_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        if (Array.isArray(parsed)) dispatch({ type: 'HYDRATE', payload: parsed });
      }
    } catch {/* ignore */}
    setHydrated(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, hydrated]);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);

  // Build multi-item Shopify cart URL
  const checkoutUrl = state.items.length > 0
    ? `https://${SHOPIFY_STORE}/cart/${state.items.map(i => `${i.variantId}:${i.quantity}`).join(',')}`
    : '#';

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
      removeItem: (variantId) => dispatch({ type: 'REMOVE_ITEM', payload: { variantId } }),
      updateQty: (variantId, quantity) => dispatch({ type: 'UPDATE_QTY', payload: { variantId, quantity } }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
      checkoutUrl,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
