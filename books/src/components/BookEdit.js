import {useState} from "react";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    return (
        <div>
            <form onSubmit={(event)=> {
                event.preventDefault();
                onSubmit({id: book.id, title: title})
            }}>
                <label className="label">{book.title}</label>
                <input  className="input" value={ title } onChange={(event) => {
                    setTitle(event.target.value);
                }}/>
                <button className="button is-primary" style={{ marginTop: '10px' }}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default BookEdit;