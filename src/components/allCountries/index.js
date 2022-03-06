import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryView from "../countryView";
import SearchBar from "../searchBar";
import { Container, Header, Grid } from './styles';

async function getCountries(){
    let data;
    await axios.get('https://restcountries.com/v2/all')
        .then(response => {data = response.data})
        .catch(err => console.log(err));

    return data;
}

const AllContries = ({setCountryDetail}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries().then(res => setCountries(res));
    }, []);
    return (
        <Container>
            <Header>
                <SearchBar />
                <div>
                    Filtro    
                </div>
            </Header>
            <Grid>
                {
                    countries.map(country => (
                        <CountryView country={country} />
                    ))
                }
            </Grid>
        </Container>
    )
}

export default AllContries;