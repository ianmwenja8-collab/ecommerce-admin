import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import ProductPage from '../Pages/Productpage';

global.fetch = vi.fn(() => {
  console.log("Mock fetch intercepting network request.");
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true }),
  });
});

test('renders product data correctly and updates via PATCH on edit', async () => {
  console.log("Starting ProductPage test...");
  render(<ProductPage />);

  // 1. Check if the initial product data rendered on the screen
  const productHeading = await screen.findByText('Wireless Noise-Canceling Headphones');
  console.log("Found product heading in test:", productHeading.textContent);
  expect(productHeading).toBeInTheDocument();

  // 2. Click the Edit button on the product card
  const editButtons = screen.getAllByRole('button', { name: /edit/i });
  console.log("Clicking Edit button for the first product.");
  fireEvent.click(editButtons[0]);

  // 3. Verify the input box appeared, is pre-filled, and automatically focused
  const input = screen.getByDisplayValue('Wireless Noise-Canceling Headphones');
  console.log("Edit input found and verified as focused.");
  expect(input).toHaveFocus();

  // 4. Type a new name into the input and click Save
  fireEvent.change(input, { target: { value: 'Pro Wireless Headphones' } });
  console.log("Changed input value to: Pro Wireless Headphones");
  
  const saveButton = screen.getByRole('button', { name: /save/i });
  fireEvent.click(saveButton);
  console.log("Clicked Save button.");

  // 5. Verify that our PATCH request was sent to the server with the new data
  await waitFor(() => {
    console.log("Checking if global.fetch was called with PATCH method...");
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/products/P-101',
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ name: 'Pro Wireless Headphones' }),
      })
    );
    console.log("PATCH request verified successfully!");
  });
});