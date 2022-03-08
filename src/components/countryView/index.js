import React from "react";
import { Container, Image, Description, Item } from "./styles";

const CountryView = ({country}) => {
    return (
        <Container>    
            <Image src={country.flags.png} alt="country flag" height={170} />
            
            <Description>
                <span style={{fontWeight: "bold"}}>
                    {country.name}
                </span>
                <div style={{marginBottom: 20}}/>
                <Item>
                    Popularion: <span>{country.population}</span>
                </Item>
                <Item>
                    Region: {country.region}
                </Item>
                <Item>
                    Captal: {country.capital}
                </Item>
            </Description>
        </Container>
    )
};

export default CountryView;
