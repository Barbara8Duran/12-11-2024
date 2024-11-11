import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
const [query, setQuery] = useState('');

const handleInputChange = (event) => {
    setQuery(event.target.value);
};

const handleSearch = () => {
    console.log('Searching for:', query);
};

return (
    <div className="search-container">
        <input
        type="text"
        className="search-input"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
    />
        <button className="search-button" onClick={handleSearch}>Buscar</button>
    </div>
    );
};

export default SearchBar;