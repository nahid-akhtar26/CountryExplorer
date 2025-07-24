import React, { useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }

  // const filterCountries=countriesData.filter((country)=>country.name.common.toLowerCase().includes('india'))
  // console.log(filterCountries)

  return (
    <div className="countries-Container">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
      ) 
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          );
        })}
    </div>
  );
}
