import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryView from "../countryView";
import Filter from "../filter";
import SearchBar from "../searchBar";
import { Container, Header, Grid, Pressable } from './styles';

async function getCountries(){
    let data;
    await axios.get('https://restcountries.com/v2/all')
        .then(response => {data = response.data})
        .catch(err => console.log(err));

    return data;
}

const AllContries = ({setCountryDetail}) => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    
    const filtered = countries.filter(country => country.name.includes(filter) || country.region.includes(filter))
    useEffect(() => {
        getCountries().then(res => setCountries(res));
    }, []);
    return (
        <Container>
            <Header>
                <SearchBar setFilter={setFilter} />
                <Filter setFilter={setFilter} />
            </Header>
            <Grid>
                {
                    filtered ? filtered.map((country, index) => (
                        <Pressable key={index} onClick={() => setCountryDetail(country)}>
                            <CountryView  country={country}/>
                        </Pressable>
                    )) : countries.map((country, index) => (
                        <Pressable key={index} onClick={() => setCountryDetail(country)}>
                            <CountryView  country={country} />
                        </Pressable>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default AllContries;