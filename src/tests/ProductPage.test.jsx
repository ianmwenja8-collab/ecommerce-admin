import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProductPage from "../Pages/Productpage";

// Mock products data
const mockProducts = [
  { id: '1', name: 'Wireless Mouse', description: 'Ergonomic mouse', origin: 'USA', price: 29.99, stock: 15 },
  { id: '2', name: 'Mechanical Keyboard', description: 'RGB switches', origin: 'Germany', price: 89.99, stock: 8 },
];

describe('ProductPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially and then displays fetched products', async () => {
    // Mock global fetch for GET request
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    render(<ProductPage />);

    // Check loading indicator if applicable, or wait for products to appear
    expect(await screen.findByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('Germany')).toBeInTheDocument();
  });

  it('handles product deletion correctly', async () => {
    // Mock GET products
    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      })
      // Mock DELETE request
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

    render(<ProductPage />);

    // Wait for products to load
    const mouseProduct = await screen.findByText('Wireless Mouse');
    expect(mouseProduct).toBeInTheDocument();

   
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    fireEvent.click(deleteButtons[0]);

    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/products/1'),
        expect.objectContaining({ method: 'DELETE' })
      );
    });
  });
});