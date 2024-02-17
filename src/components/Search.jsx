import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = (term) => {
    if (term.length < 4) {
      setSearchResults([]);
      return;
    }
    const filteredResults = data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  

  return (
    <div className='search-container'>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a Country.."
        value={searchTerm}
        onChange={handleChange}
        
      />
      {searchResults.length > 0 && (
        <ul className="search-lista">
          {searchResults.map((result) => (
            <Link className='search-text' to={`/country/${encodeURIComponent(result.name)}`}>
            {result.name}
          </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
