import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';

// Mock the useFetchCountry hook
jest.mock('../hooks/useFetchCountry', () => ({
  __esModule: true,
  default: () => ({
    getCountryInfo: jest.fn(),
    countryData: null,
  }),
}));

describe('Dashboard Component', () => {
  test('renders Dashboard component with a form and country details', async () => {
    render(<Dashboard />);

    // Assert that the "Search Country" heading is rendered
    expect(screen.getByText('Search Country')).toBeInTheDocument();

    
    const searchInput = screen.getByPlaceholderText('Search for a country...');
    fireEvent.change(searchInput, { target: { value: 'Canada' } });

   
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    // Wait for the asynchronous operation to complete (you may need to adjust the timing based on your actual API call)
    await waitFor(() => {
      expect(screen.getByText('Loading default country.....')).toBeInTheDocument();
    });

    
  });
});
