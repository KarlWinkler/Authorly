import React from 'react';
import Card from "./Card";
import books from "../../testDB";

function createCard(book){
    return (
            <div className="carousel-item">
                <Card 
                    title={book.title} 
                    src={book.coverImage} 
                    alt={book.alt} 
                    views={book.views}
                    author={book.author}
                />
            </div>
        );
}

function BookCarousel(){
    return(
        <div className="carousel slide py-2 bg-light" data-ride="carousel">
            <div className="carousel-inner">
                {/* {books.map(createCard)} */}
                <div className="carousel-item">
                    <img class="d-block w-100" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="img" />
                </div>
                <div className="carousel-item">
                    <img class="d-block w-100" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="img" />
                </div>
                <div className="carousel-item">
                    <img class="d-block w-100" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="img" />
                </div>
            </div>
        </div>

    );
}

export default BookCarousel;