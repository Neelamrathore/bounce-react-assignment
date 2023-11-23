import { render, screen } from '@testing-library/react';
import CountryThumbDetail from './CountryThumbDetail';

const mockCountryInfo = {
  name: {
    common: 'Ireland',
  },
  population: 1000000,
  image_url:'https://flagcdn.com/w320/ie.png',
  region: 'Test Region',
  capital: 'Test Capital',
  
};
const name:any = mockCountryInfo.name.common

describe('CountryThumbDetail Component', () => {
  test('renders CountryThumbDetail component with country details', () => {
    render(
      <CountryThumbDetail
        name={name}
        image_url={mockCountryInfo.image_url}
        population={mockCountryInfo.population}
        region={mockCountryInfo.region}
        capital={mockCountryInfo.capital}
       
      />
    );

    
    expect(screen.getByText('Population:')).toBeInTheDocument();
    expect(screen.getByText('1000000')).toBeInTheDocument(); 
    expect(screen.getByText('Region:')).toBeInTheDocument();
    expect(screen.getByText('Test Region')).toBeInTheDocument();
    expect(screen.getByText('Capital:')).toBeInTheDocument();
    expect(screen.getByText('Test Capital')).toBeInTheDocument();

    
  });
});
