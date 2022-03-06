import React from "react";
import { Container, Image, Description } from "./styles";

const CountryView = ({country}) => {
    return (
        <Container>    
            <Image src={country.flags.png} alt="country flag" height={170} />
            
            <Description>
                <span>
                    {country.name}
                </span>
                <div style={{marginTop: 20}}>
                    Popularion: {country.population}
                </div>
                <div>
                    Region: {country.region}
                </div>
                <div>
                    Captal: {country.capital}
                </div>
            </Description>
        </Container>
    )
};

export default CountryView;
