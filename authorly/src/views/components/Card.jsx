import React from 'react';

function Card(props){
    return (
        <div className=" col-3 card bg-dark mx-5 my-3 p-3">
            {/* optional */}
            <img className='card-image' src={props.src} alt={props.alt}/>
            <h2 className='card-title'>{props.title}</h2>
            <div className="row card-detail">
                <p className='card-views col-6'>views: {props.views}</p>
                <p className='card-author col-6'>by: {props.author}</p>
            </div>
            <button class="btn bg-transparent stretched-link home-button" type="submit" name="submit">Send Money</button>
        </div>
    );
}

export default Card;