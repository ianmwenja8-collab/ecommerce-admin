import React, { useState } from 'react';
import { initialProducts } from '../data/Products';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log("Rendering SearchPage with search term:", searchTerm);

  const filteredProducts = initialProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      {/* Search Product Header (No Admin header) */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Search Product</h2>
        <p className="text-sm text-slate-500 mt-1">Look up inventory items by name or category and click view to check details.</p>
      </div>

      {/* Search Input Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => { console.log("Search term updated:", e.target.value); setSearchTerm(e.target.value); }}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Search Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{product.id}</span>
              <h3 className="text-base font-bold text-slate-800 mt-2">{product.name}</h3>
              <p className="text-sm text-slate-500">{product.category} • ${product.price}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onClick={() => { console.log("View clicked for:", product.name); setSelectedProduct(product); }} className="text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg transition shadow">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-bold text-slate-800">Product Details</h3>
              <button onClick={() => setSelectedProduct(null)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>ID:</strong> {selectedProduct.id}</p>
              <p><strong>Name:</strong> {selectedProduct.name}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Price:</strong> ${selectedProduct.price}</p>
              <p><strong>Status:</strong> {selectedProduct.status || "In Stock"}</p>
            </div>
            <button onClick={() => setSelectedProduct(null)} className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}