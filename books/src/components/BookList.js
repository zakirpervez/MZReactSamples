import {useContext} from "react";
import BooksContext from "../context/Books";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
    const {count, incrementCount} = useContext(BooksContext)

    const renderedBooks = books.map((book) => {
        return <BookShow key={ book.id } book={ book } onDelete={ onDelete } onEdit={ onEdit }/>
    });

    return (
        <div className="book-list">
            <h1>{ count }</h1>
            <button onClick={ incrementCount }>Click</button>
            { renderedBooks }
        </div>
    );
}

export default BookList;