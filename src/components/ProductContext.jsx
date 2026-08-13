import { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductContext = createContext(null);

// Wrap <App /> in this so all pages share one product state (no duplicate fetches)
export function ProductProvider({ children }) {
  const value = useProducts();
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

// Consumer hook — used instead of calling useProducts() directly in pages
export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProductContext must be used within a ProductProvider");
  return context;
}