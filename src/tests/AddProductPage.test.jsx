import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AddProductPage from "../Pages/AddProductPage";

const createProduct = vi.fn();

vi.mock("../components/ProductContext", () => ({
  useProductContext: () => ({
    createProduct
  })
}));

describe("AddProductPage", () => {
  it("updates the product name when typed", () => {
    const { getByPlaceholderText } = render(
      <AddProductPage />
    );

    const nameInput = getByPlaceholderText("Product name");

    fireEvent.change(nameInput, {
      target: { value: "Tisya coffee" }
    });

    expect(nameInput.value).toBe("Tisya coffee");
  });

  it("does not add a product when the name is empty", () => {
    const { getByPlaceholderText, getByText } = render(
      <AddProductPage />
    );

    fireEvent.change(getByPlaceholderText("Description"), {
      target: { value: "Dark roast coffee" }
    });

    fireEvent.change(getByPlaceholderText("Origin"), {
      target: { value: "Kenya" }
    });

    fireEvent.change(getByPlaceholderText("Price"), {
      target: { value: "15" }
    });

    fireEvent.change(getByPlaceholderText("Stock"), {
      target: { value: "20" }
    });

    fireEvent.click(getByText("Add Product"));

    expect(createProduct).not.toHaveBeenCalled();
  });
});