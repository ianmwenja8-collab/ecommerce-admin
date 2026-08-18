import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductForm from "../components/ProductForm";

describe("ProductForm", () => {
  it("submits the correct product information", () => {
    const onSubmit = vi.fn();

    const { getByPlaceholderText, getByText } = render(
      <ProductForm onSubmit={onSubmit} />
    );

    fireEvent.change(getByPlaceholderText("Product name"), {
      target: { value: "Tisya coffee" }
    });

    fireEvent.change(getByPlaceholderText("Description"), {
      target: { value: "Dark roast coffee from the Tisya region" }
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

    expect(onSubmit).toHaveBeenCalledWith({
      name: "Tisya coffee",
      description: "Dark roast coffee from the Tisya region",
      origin: "Kenya",
      price: 15,
      stock: 20
    });
  });
});