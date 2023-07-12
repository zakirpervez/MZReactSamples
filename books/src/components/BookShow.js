import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    let content = <h3>{ book.title }</h3>

    const onBookEdit = ({id, title}) => {
        setShowEdit(false);
        onEdit({id, title})
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
                    onDelete(book.id)
                }}></button>
            </div>
        </div>
    );
}

export default BookShow;