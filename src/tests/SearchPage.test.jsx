import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPage from '../Pages/SearchPage';

describe('SearchPage Component', () => {
  test('renders initial product list correctly', async () => {
    render(<SearchPage />);

    expect(await screen.findByText('Vanilla Bean')).toBeInTheDocument();
    expect(screen.getByText('House Blend')).toBeInTheDocument();
    expect(screen.getByText('Kepta')).toBeInTheDocument();
  });

  test('filters products dynamically based on search query input', async () => {
    render(<SearchPage />);

    // Wait for initial load
    expect(await screen.findByText('Vanilla Bean')).toBeInTheDocument();

    // Type into the search input
    const searchInput = screen.getByRole('textbox', { name: /search/i });
    fireEvent.change(searchInput, { target: { value: 'Vanilla' } });

    // Verify filtered results
    expect(screen.getByText('Vanilla Bean')).toBeInTheDocument();
    expect(screen.queryByText('House Blend')).not.toBeInTheDocument();
    expect(screen.queryByText('Kepta')).not.toBeInTheDocument();
  });

  test('shows empty state or no results message when query matches nothing', async () => {
    render(<SearchPage />);

    // Wait for initial load
    expect(await screen.findByText('Vanilla Bean')).toBeInTheDocument();

    // Type non-existent product search
    const searchInput = screen.getByRole('textbox', { name: /search/i });
    fireEvent.change(searchInput, { target: { value: 'NonExistentProductXYZ' } });

    // Verify products are hidden or empty message shows up
    expect(screen.queryByText('Vanilla Bean')).not.toBeInTheDocument();
    expect(screen.queryByText('House Blend')).not.toBeInTheDocument();
    expect(screen.queryByText('Kepta')).not.toBeInTheDocument();
  });
});