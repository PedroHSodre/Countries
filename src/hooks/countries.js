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
    const [countriesList, setCountriesList] = useState([]);

    const getAllCountries = useCallback(async () => {
      let data;
      await axios.get('https://restcountries.com/v2/all')
        .then(response => {data = response.data})
        .catch(err => console.log(err));

      setCountriesList(data);
    }, [])

    useEffect(() => {
      getAllCountries()
    }, [getAllCountries]);

    return (
      <CountriesContext.Provider
        value={{
          getAllCountries,
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
