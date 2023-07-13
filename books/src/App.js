import './App.css';
import {useEffect, useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    //Don't call this here because app component multiple times which call every time.
    // fetchBooks();
    // Solution to this problem is following.
    useEffect(() => {
        fetchBooks()
    }, []);

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book, index) => {
            return id !== book.id
        });
        setBooks(updatedBooks);
    };

    const editBookById = async ({id, title}) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title
        });

        console.log(response.data);

        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data}
            }
            return book;
        });

        setBooks(updatedBook);
    }

    const createBook = async (title) => {
        // const updatedBook = [...books, {id: Math.round(Math.random() * 99999), title}];
        // setBooks(updatedBook)
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        const updatedBook = [...books, response.data];
        setBooks(updatedBook)
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;
