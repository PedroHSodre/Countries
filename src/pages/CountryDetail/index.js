import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BackButton from "../../components/buttons/backButton";

import { Container, Detail, Image, Description, Text, Content } from "./styles";

const CountryDetail = () => {
  const { state } = useLocation();
  const [country, setCountry] = useState(state.country || {});

  const navigate = useNavigate()
  return (
    <Container>
      <div>
        <BackButton handleClick={() => navigate(-1)} />
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
                  Nome nativo : <Text>{country.nativeName}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  População : <Text>{country.population}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Região : <Text>{country.subregion}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Capital : <Text>{country.capital}</Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Moedas :{" "}
                  <Text>
                    {country.currencies.map((curremcy) => `${curremcy.name}, `)}
                  </Text>
                </div>
                <div style={{ marginTop: 20, display: "flex" }}>
                  Linguas :{" "}
                  <Text>{country.languages.map((lang) => `${lang.name}, `)}</Text>
                </div>
              </div>
            </Content>
          </Description>
        </div>
      </Detail>
    </Container>
  );
};

export default CountryDetail;
