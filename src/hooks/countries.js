import axios from 'axios';
import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';


const CountriesContext = createContext({});

export const CountriesProvider = (props) => {
    const [countriesData, setCountriesData] = useState([]);
    const [countriesList, setCountriesList] = useState([]);

    const getAllCountries = useCallback(async () => {
      const data = await axios.get('https://restcountries.com/v2/all')
        .then(response => response.data)
        .catch(err => console.log(err));

      setCountriesList(data);
      setCountriesData(data);
    }, [])

    useEffect(() => {
      getAllCountries()
    }, [getAllCountries]);


    const filterCountries = (filter) => {
      if(filter) {
        const filtered = countriesData.filter(
          country => 
              country.name.toLowerCase().includes(filter.toLowerCase()) || 
              country.region.toLowerCase().includes(filter.toLowerCase())
        );

        setCountriesList(filtered)
      } else {
        setCountriesList(countriesData);
      }
    }

    return (
      <CountriesContext.Provider
        value={{
          getAllCountries,
          filterCountries,
          countriesList
        }}
      >
        {props.children}
      </CountriesContext.Provider>
    )
}


export function useCountries() {
  const context = useContext(CountriesContext);
  
  return context;
}
