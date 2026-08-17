import { render, screen, fireEvent } from '@testing-library/react';
import SearchPage from '../Pages/SearchPage';

test('renders full list initially and filters list when typing', () => {
  console.log("Starting SearchPage test...");
  render(<SearchPage />);

  // 1. Verify that multiple products show up initially
  console.log("Checking initial render of product list.");
  expect(screen.getByText('Wireless Noise-Canceling Headphones')).toBeInTheDocument();
  expect(screen.getByText('Ergonomic Mesh Office Chair')).toBeInTheDocument();

  // 2. Find the search input and type a filter keyword
  const searchInput = screen.getByPlaceholderText(/search by name or category/i);
  console.log("Typing 'Keyboard' into search input during test.");
  fireEvent.change(searchInput, { target: { value: 'Keyboard' } });

  // 3. Assert that the matching item stays, and non-matching items disappear
  console.log("Verifying filter results...");
  expect(screen.getByText('Mechanical Gaming Keyboard (RGB)')).toBeInTheDocument();
  
  // queryByText returns null instead of throwing an error if the item is missing
  expect(screen.queryByText('Ergonomic Mesh Office Chair')).not.toBeInTheDocument();
  console.log("Search filtering test passed successfully!");
});