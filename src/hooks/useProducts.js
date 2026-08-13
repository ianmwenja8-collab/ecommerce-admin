import { useState, useEffect, useCallback } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../components/productService";

// Custom hook: centralizes product data + CRUD actions + loading/error state
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      setProducts(await getProducts());
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const createProduct = async (product) => {
    const newProduct = await addProduct(product);
    setProducts((prev) => [...prev, newProduct]);
  };

  const editProduct = async (id, updates) => {
    const updated = await updateProduct(id, updates);
    setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, loading, error, createProduct, editProduct, removeProduct, refetch: fetchProducts };
}