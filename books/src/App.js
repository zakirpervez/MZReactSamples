import './App.css';
import React, {useContext, useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/Books";

function App() {
    const { fetchBooks } = useContext(BooksContext)

    //Don't call this here because app component multiple times which call every time.
    // fetchBooks();
    // Solution to this problem is following.
    useEffect(() => {
        fetchBooks()
    }, []);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
