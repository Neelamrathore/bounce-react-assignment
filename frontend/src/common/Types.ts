export interface CountryInfo {
  name: {
    common: string;
  };
  capital: string;
  region:string;
  population:number;
  flags:{
    png:string;
    alt:string
  }

}

export interface CountryThumbDetailProps {
  image_url: string |undefined;
  name: {
    common: string ;
  } | undefined ;
  population: number |undefined;
  region: string |undefined;
  capital: string |undefined;
}