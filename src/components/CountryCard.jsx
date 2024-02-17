import React from 'react';
import { Link } from 'react-router-dom';
import { useRegionContext } from './RegionContext';

const CountryCard = () => {
  const { filteredCountries } = useRegionContext();

  const countryCards = filteredCountries.map((country) => (
    <Link to={`/country/${encodeURIComponent(country.name)}`} key={country.id} className="country-card">
      <img src={country.flag} alt="" />
      <h2>{country.name}</h2>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </Link>
  ));

  return <div className="cards">{countryCards}</div>;
};

export default CountryCard;
