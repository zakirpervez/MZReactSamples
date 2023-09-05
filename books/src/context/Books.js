import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    const stableFetchBook = useCallback (fetchBooks, [])

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

    const valuesToShare = {
        books, stableFetchBook, fetchBooks, createBook, deleteBookById, editBookById
    }

    return <BooksContext.Provider value={ valuesToShare }>
        { children }
    </BooksContext.Provider>
};

export { Provider };
export default BooksContext;