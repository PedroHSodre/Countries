import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/index";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/Themes/light";
import dark from "./styles/Themes/dark";
import { CountriesProvider, useCountries } from "./hooks/countries";
import MainRoute from "./routes";

function App() {
  const [theme, setTheme] = useState(dark);
  const [countryDetail, setCountryDetail] = useState({});

  const keys = Object.keys(countryDetail);

  const handleChangeLight = () =>
    theme === dark ? setTheme(light) : setTheme(dark);

  return (
    <ThemeProvider theme={theme}>
      <CountriesProvider>
        <GlobalStyle />
        <MainRoute />
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;
