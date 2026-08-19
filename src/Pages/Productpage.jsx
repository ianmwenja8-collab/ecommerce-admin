import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import EditProductForm from '../components/EditProductForm';

const EMPTY_FORM = { name: '', description: '', origin: '', price: '', stock: '' };

export default function ProductPage({ products: extProd, setProducts: setExtProd, addToCart = () => {} }) {
  const [intProd, setIntProd] = useState([]);
  const [loading, setLoading] = useState(false);
  const products = extProd !== undefined ? extProd : intProd;
  const setProducts = setExtProd !== undefined ? setExtProd : setIntProd;

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState(EMPTY_FORM);

  useEffect(() => {
    if (extProd === undefined) {
      setLoading(true);
      fetch('/products').then(res => res.json()).then(data => { setIntProd(data); setLoading(false); }).catch(() => setLoading(false));
    }
  }, [extProd]);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...newProduct, id: Date.now().toString(), price: Number(newProduct.price), stock: Number(newProduct.stock) }]);
    setNewProduct(EMPTY_FORM);
    setShowAddForm(false);
  };

  const handleDelete = async (id) => {
    try { await fetch(`/products/${id}`, { method: 'DELETE' }); setProducts(products.filter(p => p.id !== id)); } catch (e) { console.error(e); }
  };

  return (
    <div className="product-page" >
      <h2>Product Catalog Management</h2>
      <button onClick={() => setShowAddForm(!showAddForm)} >
        {showAddForm ? 'Cancel' : 'Add New Product'}
      </button>

      {showAddForm && (
        <form onSubmit={handleAddSubmit} >
          <h3>Add New Product</h3>
          {['name', 'description', 'origin', 'price', 'stock'].map((field) => (
            <div key={field} >
              <label >{field}: </label>
              <input type={['price', 'stock'].includes(field) ? 'number' : 'text'} value={newProduct[field]} 
                onChange={(e) => setNewProduct({ ...newProduct, [field]: e.target.value })} 
                required={['name', 'price', 'stock'].includes(field)} />
            </div>
          ))}
          <button type="submit" >Save Product</button>
        </form>
      )}

      {editingProduct && <EditProductForm product={editingProduct} onSave={(updated) => { setProducts(products.map(p => p.id === updated.id ? updated : p)); setEditingProduct(null); }} onCancel={() => setEditingProduct(null)} />}

      {loading ? <p>Loading...</p> : (
        <div className="product-grid" >
          {products.length === 0 ? <p>No products available.</p> : products.map(product => (
            <ProductCard key={product.id} product={product} onDelete={() => handleDelete(product.id)} onStartEdit={() => setEditingProduct(product)} onAddToCart={() => addToCart(product)} />
          ))}
        </div>
      )}
    </div>
  );
}