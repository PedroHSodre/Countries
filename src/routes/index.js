import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "../pages/CountryDetail";
import AllCountries from "../pages/AllCountries";

export default function MainRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/country" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}
