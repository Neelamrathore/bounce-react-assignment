import { useState, ChangeEvent, useEffect } from "react";
import Button from "../components/shared/Button/Button"
import useFetchCountry from "../hooks/useFetchCountry";
import { CountryInfo } from "../common/Types";
import CountryThumbDetail from "../components/countrythumbdetail/CountryThumbDetail";




const Dashboard: React.FC = () => {
    const [country, setCountry] = useState<string>('');
    
    const [countries, setCountries] = useState<CountryInfo>()
    const { getCountryInfo, countryData } = useFetchCountry();
    useEffect(() => {
        if (countryData) {
            setCountries(countryData)
        }
    }, [countryData])
    const searchCountry = async (event:any) => {
        event.preventDefault();
        if (country.length < 3 || country === '') return
       
        try {
            await getCountryInfo(country);
            await setCountries(countryData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }


    }

    return <>
       {/*  <div className="flex container mx-auto mb-16">

            <input type="text" value={country} onChange={(e: ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)} placeholder="Search for a country..." className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700" />
            
           
            <Button onClick={searchCountry} success={1}>Search</Button>
        </div> */}
        <div>
      <form onSubmit={searchCountry}>
        <div className="space-y-12 p-2  m-1">
          <div className="border-b border-gray-900/10 pb-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Search Country</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Please use this form to search your own country.</p>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="Portfolio-name" className="block text-sm font-medium leading-6 text-gray-900">Country name</label>
                <div className="mt-2">
                <input type="text" value={country} onChange={(e: ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)} placeholder="Search for a country..." className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700" />
            
           
                </div>
              </div>

             
            </div>
            <div className="mt-6 flex items-center justify-start gap-x-6">
         
         
          <Button size="sm"
            onClick={searchCountry}
            success={1}>Search</Button>
        </div>
          </div>
          
        </div>

        
      </form>
    </div>
        <div className="container grid grid-cols-4 gap-16 ">
        {countries ? (
              <CountryThumbDetail
              name={countries?.name}
              image_url={countries?.flags.png}
              population={countries?.population}
              region={countries?.region}
              capital={countries?.capital}
          />
          ) : (
            <p className="mt-1 text-sm leading-6 text-gray-600">Loading default country.....</p>
          )}
          
        </div>


    </>
}
export default Dashboard