import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useCountries } from "../hooks/countries";

const Filter = styled.input`
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    border: none;
    outline: none;
    padding: 15px 20px;
    width: 300px;
    font-weight: ${props => props.theme.fonts.normal.fontWeight};

    &:focus{
        outline: none;
    }

    @media(max-width: 600px){
        width: 200px;
    }

    @media(max-width: 450px){
        width: 125px;
    }
`

const SearchBar = () => {
    const [filter, setFilter] = useState('');

    const { filterCountries } = useCountries();


    useEffect(() => {
        filterCountries(filter);
    }, [filter]);
    
    return (
        <>
            <Filter 
                placeholder="Search country" 
                value={filter}
                onChange={(e) => setFilter(e.target.value)} 
            />
        </>
    )
}

export default SearchBar;