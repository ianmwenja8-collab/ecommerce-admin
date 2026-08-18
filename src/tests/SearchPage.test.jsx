import { render, screen, fireEvent } from '@testing-library/react';
import SearchPage from '../Pages/SearchPage';

test('renders full list initially and filters list when typing', () => {
  console.log("Starting SearchPage test...");
  render(<SearchPage />);

  console.log("Checking initial render of product list.");
  expect(screen.getByText('Wireless Noise-Canceling Headphones')).toBeInTheDocument();
  expect(screen.getByText('Ergonomic Mesh Office Chair')).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText(/search by name or category/i);
  console.log("Typing 'Keyboard' into search input during test.");
  fireEvent.change(searchInput, { target: { value: 'Keyboard' } });

  console.log("Verifying filter results...");
  expect(screen.getByText('Mechanical Gaming Keyboard (RGB)')).toBeInTheDocument();
  
  expect(screen.queryByText('Ergonomic Mesh Office Chair')).not.toBeInTheDocument();
  console.log("Search filtering test passed successfully!");
});