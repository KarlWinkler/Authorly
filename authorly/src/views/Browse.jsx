import React from 'react';
import Navbar from './components/Navbar';
// import TitleSection from './components/TitleSection';
import Header from './components/Header';
import Card from './components/Card';
import books from '../testDB';
import SearchBar from './components/SearchBar';

function createBooks(book){
    return <Card 
            title={book.title} 
            src={book.coverImage} 
            alt={book.alt} 
            views={book.views}
            author={book.author}/>
}

function Browse(props){
    return(
        <div>
            <Navbar />
            <Header text="Browse all of these great books!" />
            <SearchBar/>
            <div className="containers book-select-div">
                <div className="row d-flex justify-content-center">
                    {books.map(createBooks)}
                </div>
            </div>
        </div>
    );
}

export default Browse;