const BASE_URL = "http://localhost:3001/products";

// GET all products
export async function getProducts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

// GET single product
export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

// POST new product
export async function addProduct(product) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to add product");
  return res.json();
}

// PATCH existing product (e.g. price, stock)
export async function updateProduct(id, updates) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
}

// DELETE product
export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete product");
  return true;
}