import React from 'react';

export default function ProductCard({ product = {}, onDelete, onStartEdit, onAddToCart, onViewProduct }) {
  return (
    <div className="product-card">
      <h3>{product?.name}</h3>
      <p><strong>Description:</strong> {product?.description}</p>
      <p><strong>Origin:</strong> {product?.origin}</p>
      <p><strong>Price:</strong> ${product?.price}</p>
      <p><strong>Stock:</strong> {product?.stock}</p>

      <div >
        {onViewProduct && (
          <button onClick={() => onViewProduct(product)}>
            View
          </button>
        )}
        {onAddToCart && (
          <button onClick={() => onAddToCart(product)} >
            Add to Cart
          </button>
        )}
        {onStartEdit && (
          <button onClick={() => onStartEdit(product)} >
            Edit
          </button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(product?.id)} >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}