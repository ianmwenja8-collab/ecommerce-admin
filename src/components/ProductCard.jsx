import { useState } from 'react';
import EditProductForm from './EditProductForm';

export default function ProductCard({ product, onUpdateProduct, onDeleteProduct }) {

  const [isEditing, setIsEditing] = useState(false);

  const [isViewing, setIsViewing] = useState(false);

  const handleSave = (newName) => {
    console.log("Saving new name for product ID:", product.id, "New Name:", newName);
    onUpdateProduct(product.id, { name: newName });
    setIsEditing(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
            {product.id}
          </span>
          <span className="text-xs text-slate-500 font-medium">{product.status || "In Stock"}</span>
        </div>

        /* Conditionally render EditProductForm or product name */
        {isEditing ? (
          <EditProductForm
            initialValue={product.name}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <div>
            /* Clickable Product Name to open/close details */
            <h3 
              onClick={() => {
                console.log("Toggling view details for product:", product.name);
                setIsViewing(!isViewing);
              }}
              className="text-base font-bold text-slate-800 cursor-pointer hover:text-indigo-600 transition"
              title="Click to view product details"
            >
              {product.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{product.category} • ${product.price}</p>

            {/* Detailed View Section */}
            {isViewing && (
              <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                <p><strong>Product ID:</strong> {product.id}</p>
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <button 
                  onClick={() => {
                    console.log("Closing details for product:", product.name);
                    setIsViewing(false);
                  }}
                  className="mt-2 text-indigo-600 font-medium hover:underline"
                >
                  Close Details
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Buttons: Edit and Delete */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        {!isEditing && (
          <button 
            onClick={() => {
              console.log("Edit button clicked for product:", product.name);
              setIsEditing(true);
            }}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg transition"
          >
            Edit
          </button>
        )}
        <button 
          onClick={() => {
            console.log("Delete button clicked for product ID:", product.id);
            onDeleteProduct(product.id);
          }}
          className="text-xs font-medium text-red-600 hover:text-red-800 bg-red-50 px-3 py-1.5 rounded-lg transition ml-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
}