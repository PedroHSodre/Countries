import React from "react";
import BackButton from "../buttons/backButton";
import { Container, Detail, Image, Description, Text, Content } from "./styles";
import tt from "@tomtom-international/web-sdk-maps";

const CountryDetail = ({ setCountryDetail, country }) => {
  return (
    <Container>
      <div>
        <BackButton setCountryDetail={setCountryDetail} />
      </div>
      <Detail>
        <div style={{ width: "100%", maxWidth: "500px", minWidth: 250 }}>
          <Image src={country.flags.png} alt="country flag" />
        </div>
        <div style={{ width: "100%" }}>
          <Description>
            <h2>{country.name}</h2>
            <Content>
              <div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Native Name : <Text>{country.nativeName}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Population : <Text>{country.population}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  SubRegion : <Text>{country.subregion}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Capital : <Text>{country.capital}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Currencies :{" "}
                  <Text>
                    {country.currencies.map((curremcy) => curremcy.name)}
                  </Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Language :{" "}
                  <Text>{country.languages.map((lang) => `${lang.name}`)}</Text>
                </div>
              </div>
              <div>Maps</div>
            </Content>
          </Description>
        </div>
      </Detail>
    </Container>
  );
};

export default CountryDetail;
