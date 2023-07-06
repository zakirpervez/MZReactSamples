import {useState} from "react";

function BookCreate({ onCreate }) {
    const [bookTitle, setBookTitle] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCreate(bookTitle);
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