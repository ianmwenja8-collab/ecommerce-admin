import React, { useId } from "react";
import useProductForm from "../hooks/useProductForm";

function ProductForm({ onSubmit }) {
  //Getting the form data and the functions we need from our custom hook
  const { form, handleChange, validateForm, resetForm } = useProductForm();
  //Each input gets its own id.
  const nameId = useId();
  const descriptionId = useId();
  const originId = useId();
  const priceId = useId();
  const stockId = useId();

  function handleSubmit(evt) {
    evt.preventDefault();

    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    // Creating the product object with the form data.
    const newProduct = {
      name: form.name,
      description: form.description,
      origin: form.origin,
      price: Number(form.price),
      stock: Number(form.stock)
    };
    onSubmit(newProduct);
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Product name</label>
      <input
        id={nameId}
        type="text"
        name="name"
        placeholder="Product name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor={descriptionId}>Description</label>
      <input
        id={descriptionId}
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <label htmlFor={originId}>Origin</label>
      <input
        id={originId}
        type="text"
        name="origin"
        placeholder="Origin"
        value={form.origin}
        onChange={handleChange}
      />
      <label htmlFor={priceId}>Price</label>
      <input
        id={priceId}
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <label htmlFor={stockId}>Stock</label>
      <input
        id={stockId}
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;