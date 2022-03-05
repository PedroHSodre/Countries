import axios from "axios";
import React, { useEffect } from "react";
import SearchBar from "../searchBar";

async function getCountries(){
    await axios.get('https://restcountries.com/v2/all')
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

const AllContries = ({setCountryDetail}) => {
    useEffect(() => {
        getCountries();
    }, []);
    return (
        <>
            <SearchBar />
            <div>
                
            </div>
        </>
    )
}

export default AllContries;