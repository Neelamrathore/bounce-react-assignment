
import { CountryThumbDetailProps } from '../../common/Types';



const  CountryThumbDetail=({ image_url, name, population, region, capital }: CountryThumbDetailProps) =>{
  return  (
    
    <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img src={image_url} alt={name?.common} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" />
      <div className="p-4">
      <h3 className="font-bold mb-4">{name?.common}</h3>
        <p className="text-xs">
          Population: <span className="text-gray-700 dark:text-gray-300">{population}</span>
        </p>
        <p className="text-xs">
          Region: <span className="text-gray-700 dark:text-gray-300">{region}</span>
        </p>
        <p className="text-xs">
          Capital: <span className="text-gray-700 dark:text-gray-300">{capital}</span>
        </p>
      </div>
      
    
    </div>
  );
  }
export default CountryThumbDetail;
