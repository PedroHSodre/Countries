import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllContries from "../components/allCountries";
import CountryDetail from "../components/countryDetail";

export default function MainRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllContries />} />
        <Route path="/country/:id" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}
