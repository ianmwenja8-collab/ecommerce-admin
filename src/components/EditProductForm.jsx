import React, { useState } from 'react';

export default function EditProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    });
  };

  return (
    <form onSubmit={handleSubmit} >
      <h3>Edit Product</h3>
      <div >
        <label>Name: </label>
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} required />
      </div>
      <div >
        <label>Description: </label>
        <input type="text" name="description" value={formData.description || ''} onChange={handleChange} />
      </div>
      <div >
        <label>Origin: </label>
        <input type="text" name="origin" value={formData.origin || ''} onChange={handleChange} />
      </div>
      <div >
        <label>Price: </label>
        <input type="number" name="price" value={formData.price || ''} onChange={handleChange} required />
      </div>
      <div >
        <label>Stock: </label>
        <input type="number" name="stock" value={formData.stock || ''} onChange={handleChange} required />
      </div>
      <button type="submit" >Save</button>
      <button type="button" onClick={onCancel} >Cancel</button>
    </form>
  );
}