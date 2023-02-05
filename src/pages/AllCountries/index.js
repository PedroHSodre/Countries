import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCountries } from "../../hooks/countries";
import CountryView from "../../components/countryView";
import Filter from "../../components/filter";
import SearchBar from "../../components/searchBar";
import { Container, Header, Grid, Pressable } from './styles';

const AllCountries = () => {
    const { countriesList } = useCountries();
  
 
    const handleDetail = (country) => {
        
    }

    return (
        <Container>
            <Header>
                <SearchBar />
                <Filter />
            </Header>
            <Grid>
                {
                    countriesList.map((country, index) => (
                        <Pressable key={index} onClick={() => handleDetail(country)}>
                            <CountryView  country={country}/>
                        </Pressable>
                    )) 
                }
            </Grid>
        </Container>
    )
}

export default AllCountries;