import { describe, it, expect, vi, beforeEach } from "vitest";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../components/productService";

const mockProduct = { id: "1", name: "Vanilla Bean", price: 10 };

beforeEach(() => {
  global.fetch = vi.fn();
});

describe("productService", () => {
  it("getProducts returns product data", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => [mockProduct] });
    const data = await getProducts();
    expect(data).toEqual([mockProduct]);
  });

  it("addProduct sends POST with correct payload", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => mockProduct });
    await addProduct(mockProduct);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/products"),
      expect.objectContaining({ method: "POST", body: JSON.stringify(mockProduct) })
    );
  });

  it("updateProduct sends PATCH with correct payload", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ ...mockProduct, price: 15 }) });
    await updateProduct("1", { price: 15 });
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/products/1"),
      expect.objectContaining({ method: "PATCH", body: JSON.stringify({ price: 15 }) })
    );
  });

  it("deleteProduct sends DELETE request", async () => {
    fetch.mockResolvedValueOnce({ ok: true });
    const result = await deleteProduct("1");
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/products/1"), { method: "DELETE" });
    expect(result).toBe(true);
  });
});