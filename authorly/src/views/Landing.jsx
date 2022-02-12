import React from 'react';
import Navbar from './components/Navbar';
import TitleSection from './components/TitleSection';
import RegisterButtons from './components/RegisterButtons';
import Header from './components/Header';
import BookSelect from './components/BookSelect';
// import BookCarousel from './components/BookCarousel'
// import Footer from './components/Footer'

//@input username passed to the navbar to repalce the sign up button if a user is 
//signed in
//  
function Landing(props){
    return (
    <div className='mainDiv'>
        <Navbar name={props.username} likes={props.likes}></Navbar>
        <div className='home-title'><TitleSection headerText="Write Your Story Here" paragraphText="Experience a more modular aproach to writing, something closer to object oriented writing!"/></div>
        <RegisterButtons func1={props.func1} func2={props.func2} b1="Sign Up" b2="Log In"/>
        <hr className='w-100'/>
        <div className='bg-dark header-div'><Header text="Trending Books"/></div>
        <div className="bg-dark pb-5"><BookSelect></BookSelect></div>
        <hr className='w-100'/>
        <div className='bg-dark header-div'><Header text="New Books"/></div>
        <div className="bg-dark pb-5"><BookSelect></BookSelect></div> {/*change to a carousel later */}
        <TitleSection headerText="Become an author" paragraphText="write something new!"/>
        <RegisterButtons func1={props.func1} func2={props.func2} b1="Sign Up" b2="Log In" />
        {/*<Footer></Footer> */}
    </div>
    )
}

export default Landing;