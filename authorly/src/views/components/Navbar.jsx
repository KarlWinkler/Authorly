import React from 'react';

function Navbar(props){
    return(
        <div id="home">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container">
                    
                    <a className="navbar-brand" href="./index.html"><i style={{color: "white"}} className="far fa-file-alt"/> Authorly</a>

                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-auto">

                        <a className="nav-link " aria-current="page" href="#home">Home</a>
                        <a className="nav-link active mx-5" href="#Trending">Trending</a>
                        <a className="nav-link active" href="#new">New</a>

                    </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;