// RegionContext.js
import React, { createContext, useContext, useState } from 'react';
import data from '../data/data.json';

const RegionContext = createContext();

export const useRegionContext = () => useContext(RegionContext);

export const RegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const filterCountryByRegion = (region) => {
    return data.filter((country) => country.region === region);
  };

  const filteredCountries = selectedRegion ? filterCountryByRegion(selectedRegion) : data;

  return (
    <RegionContext.Provider value={{ selectedRegion, setSelectedRegion, filteredCountries }}>
      {children}
    </RegionContext.Provider>
  );
};
