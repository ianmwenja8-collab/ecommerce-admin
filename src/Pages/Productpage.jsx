import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { initialProducts } from '../data/Products';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', category: '', price: '' });

  // Load initial product items on mount
  useEffect(() => {
    console.log("ProductPage mounted: loading initial products.");
    setProducts(initialProducts);
  }, []);

  // Handle adding a new product with minimum price validation (>= 1)
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.price || parseFloat(form.price) < 1) return;
    console.log("Adding new product:", form);
    setProducts([{
      id: `P-${10 + products.length + 1}`,
      name: form.name,
      category: form.category,
      price: parseFloat(form.price),
      status: "In Stock"
    }, ...products]);
    setForm({ name: '', category: '', price: '' });
  };

  // Handle product deletion
  const handleDeleteProduct = (id) => {
    console.log("Deleting product ID:", id);
    setProducts(products.filter(p => p.id !== id));
  };

  // Handle updating a product via API fetch request (fixes ProductPage.test.jsx)
  const handleUpdateProduct = async (id, updatedFields) => {
    console.log("Updating product ID:", id, updatedFields);
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields),
      });
      if (res.ok) {
        setProducts(products.map(p => p.id === id ? { ...p, ...updatedFields } : p));
      }
    } catch (err) {
      console.warn("API request failed, falling back to local update:", err);
      setProducts(products.map(p => p.id === id ? { ...p, ...updatedFields } : p));
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Product Catalog Management Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Product Catalog Management</h2>
        <p className="text-sm text-slate-500 mt-1">Add, update, or remove inventory items.</p>
      </div>

      {/* Add New Product Form */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Add New Product</h3>
        <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['name', 'category', 'price'].map((field) => (
            <input
              key={field}
              type={field === 'price' ? 'number' : 'text'}
              min={field === 'price' ? '1' : undefined}
              step={field === 'price' ? '0.01' : undefined}
              placeholder={field === 'price' ? 'Price ($)' : field === 'name' ? 'Product Name' : 'Category (e.g. Electronics)'}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          ))}
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition shadow">
            Add Product
          </button>
        </form>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onUpdateProduct={handleUpdateProduct} onDeleteProduct={handleDeleteProduct} />
        ))}
      </div>
    </div>
  );
}