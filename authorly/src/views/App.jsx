import React, { useState } from "react";
import Clock from "./Clock";

function App(){

    const [clockState, setState] = useState(true);

    function toggle(){
        setState(!clockState);
    }
    
    return (
        <div className="">
            {clockState && <Clock />}
            <div className="row">
                <button className="btn btn-primary col-2 toggle-button" onClick={toggle}> Toggle Time</button>
            </div>
            
        </div>
        
    );
    

}

export default App;