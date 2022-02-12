import React from "react";
import Card from "./Card";
import books from "../../testDB";

function createCard(book){
    return <Card 
            title={book.title} 
            src={book.coverImage} 
            alt={book.alt} 
            views={book.views}
            author={book.author}/>
}

function BookSelect(props){
    return(
        <div className="containers book-select-div">
            <div className="row d-flex justify-content-center">
                {books.map(createCard)}
            </div>
        </div>
    );
}

export default BookSelect;
