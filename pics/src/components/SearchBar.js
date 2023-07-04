import {useState} from "react";
import './SearchBar.css'
function SearchBar({ onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(query)
    };
    const [query, setQuery] = useState('')

    return <div className="search-bar">
        <form onSubmit={ handleFormSubmit } className="search-bar">
            <label>Search here</label>
            <input  value={ query } onChange={ (event) => {
                setQuery(event.target.value)
            } }/>
        </form>
    </div>;
}

export default SearchBar;