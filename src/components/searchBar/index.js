import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCountries } from "../../hooks/countries";
import { Filter } from "./styled";



const SearchBar = () => {
    const [filter, setFilter] = useState('');

    const { filterCountries } = useCountries();


    useEffect(() => {
        filterCountries(filter);
    }, [filter]);

    return (
        <>
            <Filter 
                placeholder="Pesquisar..." 
                value={filter}
                onChange={(e) => setFilter(e.target.value)} 
            />
        </>
    )
}

export default SearchBar;