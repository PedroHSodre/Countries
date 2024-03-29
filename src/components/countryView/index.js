import React from "react";
import { Container, Image, Description, Item, Subtitle } from "./styles";

const CountryView = ({country}) => {
    return (
        <Container>    
            <Image src={country.flags.png} alt="country flag" height={170} />
            
            <Description>
                <span style={{fontWeight: 700}}>
                    {country.name}
                </span>
                <div style={{marginBottom: 20}}/>
                <Item>
                    <Subtitle>População: </Subtitle> <span>{country.population}</span>
                </Item>
                <Item>
                    <Subtitle>Região: </Subtitle> <span>{country.region}</span>
                </Item>
                <Item>
                    <Subtitle>Capital: </Subtitle> <span>{country.capital}</span>
                </Item>
            </Description>
        </Container>
    )
};

export default CountryView;
