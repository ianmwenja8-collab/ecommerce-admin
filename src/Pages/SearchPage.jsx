import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const INITIAL_PRODUCTS = [
   {
    id: "1",
    name: "Vanilla Bean",
    description: "Medium roast, nutty flavor",
    origin: "Colombia",
    price: 10,
    stock: 25
  },
  {
    id: "2",
    name: "House Blend",
    description: "Dark roast, rich flavor",
    origin: "Vietnam",
    price: 12,
    stock: 40
  },
  {
    id: "Jsi-doCXuI0",
    name: "Kepta",
    description: "leaves",
    origin: "Kisii",
    price: 7,
    stock: 9
  }
];

export default function SearchPage({ products: externalProducts, addToCart = () => {} }) {
  const [internalProducts] = useState(INITIAL_PRODUCTS);
  const products = externalProducts !== undefined ? externalProducts : internalProducts;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.origin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page" >
      <h2>Search & View Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {selectedProduct && (
        <div >
          <h3>Product Details</h3>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Description:</strong> {selectedProduct.description}</p>
          <p><strong>Origin:</strong> {selectedProduct.origin}</p>
          <p><strong>Price:</strong> ${selectedProduct.price}</p>
          <p><strong>Stock:</strong> {selectedProduct.stock}</p>
          <button onClick={() => setSelectedProduct(null)} >Close</button>
        </div>
      )}

      <div className="product-grid" >
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewProduct={() => setSelectedProduct(product)}
              onAddToCart={() => addToCart(product)}
            />
          ))
        )}
      </div>
    </div>
  );
}