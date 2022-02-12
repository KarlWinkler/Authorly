import React, { useState } from "react";
import Clock from "./Clock";
import Landing from "./Landing"
import Browse from "./Browse"

function getView(state){
    switch(state)
    {
        case 0:
            // landing page uses username of user logged in (link to home page) (or link to log in if not logged in) and number of user likes or -
            return <Landing username = "Log in" likes = "-"/>
            break;
        case 1:
            return <Browse/>
            break;
        default:
            break;
    }
}

function App(){

    const [clockState, setState] = useState(true);

    function toggle(){
        setState(!clockState);
    }
    
    return (
        <div className="">
            {/* {clockState && <Landing username = "Log in" likes = "-"/>} */}
            {getView(1)}
            <div className="row">
                <button className="btn btn-primary col-2 toggle-button" onClick={toggle}> Toggle Clock</button>
            </div>
            
        </div>
        
    );
    

}

export default App;