import React from "react";
import styled from "styled-components";

const Filter = styled.input`
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    border: none;
    outline: none;
    padding: 15px 20px;
    width: 300px;

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

const SearchBar = ({setFilter}) => {
    return (
        <>
            <Filter 
                placeholder="Search country" 
                onChange={(e) => setFilter(e.target.value)} 
            />
        </>
    )
}

export default SearchBar;