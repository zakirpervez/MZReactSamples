function BookShow({ book, onDelete }) {
    return (
        <div className="book-show">
            {book.title}
            <div className="actions">
                <button className="delete" onClick={()=> {
                    onDelete(book.id)
                }}></button>
            </div>
        </div>
    );
}

export default BookShow;