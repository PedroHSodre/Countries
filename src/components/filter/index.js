import React from "react";
import { Container, Select } from './styles';

const Filter = ({setFilter}) => {

    return (
        <Container>
            <Select onChange={(e) => setFilter(e.target.value)}>
                <option selected disabled>Filter by Region</option>
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