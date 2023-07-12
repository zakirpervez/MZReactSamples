import './App.css';
import BookEdit from "./components/BookEdit";
import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

   const deleteBookById = (id) => {
     const updatedBooks = books.filter((book, index) => {
        return id !== book.id
     }) ;
     setBooks(updatedBooks);
   };

   const editBookById = ({id, title}) => {
        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return { ...book, title }
            }
            return book;
        });

        setBooks(updatedBook);
   }

    const createBook = (title) => {
        const updatedBook = [...books, {id: Math.round(Math.random() * 99999), title}];
        setBooks(updatedBook)
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={ deleteBookById } onEdit={ editBookById }/>
            <BookCreate onCreate={ createBook }/>
        </div>
    );
}

export default App;
