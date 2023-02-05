import React from "react";
import { Container, Select } from './styles';
import { useState } from "react";
import { useCountries } from "../../hooks/countries";
import { useEffect } from "react";

const Filter = () => {
    const [filter, setFilter] = useState('');
    
    const { filterCountries } = useCountries();
    
    useEffect(() => {
        filterCountries(filter)
    }, [filter]);

    return (
        <Container>
            <Select onChange={(e) => setFilter(e.target.value)}>
                <option selected disabled>Filtrar por continente</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Oceania</option>
                <option>Europe</option>
            </Select>
        </Container>
    )
};

export default Filter;