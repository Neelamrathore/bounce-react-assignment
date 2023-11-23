import { render, screen } from '@testing-library/react';
import CountryThumbDetail from './CountryThumbDetail';

const mockCountryInfo = {
  name: {
    common: 'Ireland',
  },
  population: 4994724,
  image_url:'https://flagcdn.com/w320/ie.png',
  region: 'Europe',
  capital: 'Dublin',
  
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
    expect(screen.getByText('4994724')).toBeInTheDocument(); 
    expect(screen.getByText('Region:')).toBeInTheDocument();
    expect(screen.getByText('Europe')).toBeInTheDocument();
    expect(screen.getByText('Capital:')).toBeInTheDocument();
    expect(screen.getByText('Dublin')).toBeInTheDocument();

    
  });
});
