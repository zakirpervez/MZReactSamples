import {useState} from "react";
import useBooksContext from "../hooks/use-book-hook"

function BookCreate() {
    const [bookTitle, setBookTitle] = useState('')
    const { createBook } = useBooksContext()
    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(bookTitle);
        setBookTitle('');
    };

    return (
        <div className="book-create">
           <form onSubmit={ handleFormSubmit }>
               <label>Book Title</label>
               <input className="input" value={bookTitle} type="text" onChange={(event) => {
                   setBookTitle(event.target.value)
               }}/>
               <button className="button">Create</button>
           </form>
        </div>
    );
}

export default BookCreate;