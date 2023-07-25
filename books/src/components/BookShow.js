import {useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-book-hook";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById, editBookById } = useBooksContext()
    let content = <h3>{ book.title }</h3>

    const onBookEdit = ({id, title}) => {
        setShowEdit(false);
        editBookById({id, title})
    };

    if (showEdit) {
        content = <BookEdit book={ book } onSubmit={ onBookEdit }/>
    }

    return (
        <div className="book-show">
            <img alt="book-show" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            { content }
            <div className="actions">
                <button className="edit" onClick={()=> {
                    setShowEdit(!showEdit);
                }}></button>
                <button className="delete" onClick={()=> {
                    deleteBookById(book.id)
                }}></button>
            </div>
        </div>
    );
}

export default BookShow;