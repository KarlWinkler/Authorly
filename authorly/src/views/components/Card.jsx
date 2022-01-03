import React from 'react';

function Card(props){
    return (
        <div className="card">
            {/* optional */}
            <img className='cardImage' src={props.src} alt={props.alt}/>
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardDescription'>{props.description}</p>
        </div>
    );
}

export default Card;