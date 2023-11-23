import { useEffect, useState } from "react";
import { CountryInfo } from "../common/Types";



const useFetchCountry = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [countryInfo, setCountryInfo] = useState<CountryInfo>();
  useEffect(() => {
    getCountryInfo("ireland");
 }, []);
  const getCountryInfo = async (countryName: string) => {
    try {
     
      const response = await fetch(`${apiUrl}/getCountryInfo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country: countryName }), 
      });

      if (!response.ok) {
        alert('Country Not Found')
        throw new Error('Network response was not ok');
      }

      const data: CountryInfo = await response.json();
      setCountryInfo(data);
    } catch (error) {
      console.error('Error:', error);
     
    
    }
  };


  

  return { countryData: countryInfo, getCountryInfo }; 
};

export default useFetchCountry;
