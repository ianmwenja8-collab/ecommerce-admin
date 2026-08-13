import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductProvider, useProductContext } from "../components/ProductContext";

const mockProduct = { id: "1", name: "Vanilla Bean", price: 10 };

function TestConsumer() {
  const { products, loading } = useProductContext();
  if (loading) return <p>Loading...</p>;
  return <p>{products[0]?.name}</p>;
}

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => [mockProduct] });
});

describe("ProductContext", () => {
  it("provides product data to a consuming component", async () => {
    render(
      <ProductProvider>
        <TestConsumer />
      </ProductProvider>
    );
    expect(await screen.findByText("Vanilla Bean")).toBeInTheDocument();
  });
});
