import { render, screen } from '@testing-library/react';
import CountryThumbDetail from './CountryThumbDetail';

const mockCountryInfo = {
  name: {
    common: 'TestCountry',
  },
  population: 1000000,
  region: 'Test Region',
  capital: 'Test Capital',
  
};

describe('CountryThumbDetail Component', () => {
  test('renders CountryThumbDetail component with country details', () => {
    render(
      <CountryThumbDetail
        name={mockCountryInfo['name']['common']}
        population={mockCountryInfo.population}
        region={mockCountryInfo.region}
        capital={mockCountryInfo.capital}
       
      />
    );

    
    expect(screen.getByText('Population:')).toBeInTheDocument();
    expect(screen.getByText('1000000')).toBeInTheDocument(); // Adjust based on the actual population value
    expect(screen.getByText('Region:')).toBeInTheDocument();
    expect(screen.getByText('Test Region')).toBeInTheDocument();
    expect(screen.getByText('Capital:')).toBeInTheDocument();
    expect(screen.getByText('Test Capital')).toBeInTheDocument();

    // You can add more assertions based on your component's behavior and the expected UI state
  });
});
