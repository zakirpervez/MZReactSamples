import {useState} from "react";

function SearchBar({ onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(query)
    };
    const [query, setQuery] = useState('')

    return <div>
        <form onSubmit={ handleFormSubmit }>
            <input  value={ query } onChange={ (event) => {
                setQuery(event.target.value)
            } }/>
        </form>
    </div>;
}

export default SearchBar;