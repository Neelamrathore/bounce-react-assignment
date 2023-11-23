import { renderHook, act } from '@testing-library/react';
import useFetchCountry from './useFetchCountry';

describe('useFetchCountry Hook', () => {
  test('fetches country information and updates state', async () => {
    // Mock the fetch function to return a resolved promise with the expected data
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        name: 'Ireland',
        population: 5000000,
        region: 'Europe',
        capital: 'Dublin',
        // Add other properties based on your CountryInfo type
      }),
    });

    // Render the hook
    const { result } = renderHook(() => useFetchCountry());

    // Initial state should be undefined
    expect(result.current.countryData).toBeUndefined();

    // Trigger the asynchronous fetch operation
    await act(async () => {
      result.current.getCountryInfo('Ireland');
      
    });

    // After the fetch, the state should be updated with the fetched data
    expect(result.current.countryData).toEqual({
      name: 'Ireland',
      population: 5000000,
      region: 'Europe',
      capital: 'Dublin',
      // Add other properties based on your CountryInfo type
    });

    // Ensure that fetch was called with the correct arguments
    expect(global.fetch).toHaveBeenCalledWith('https://bounce-react-assignment.vercel.app/getCountryInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country: 'Ireland' }),
    });
  });
});
