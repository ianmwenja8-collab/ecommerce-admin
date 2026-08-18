import React from "react";
import { useProductContext } from "../components/ProductContext";
import ProductForm from "../components/ProductForm";

function AddProductPage() {
  // Getting the createProduct function.
  const { createProduct } = useProductContext();

  // Handling submission of the product form.
  async function handleAddProduct(newProduct) {
    try {
      await createProduct(newProduct);
      alert("Product added successfully!");
    } catch (error) {
      alert("Error adding the product!");
    }
  }

  return (
    <div className="add-product-page">
      <h1>Add a Product</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
}

export default AddProductPage;