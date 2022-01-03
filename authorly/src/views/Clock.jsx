import React, { useState } from "react";

function Clock(){
    setInterval(updateTime, 1000);

    var time = new Date().toLocaleTimeString();

    const [state, setState] = useState(time);
    
    function updateTime(){
        setState(new Date().toLocaleTimeString());
    }

    return (
        <div className="container text-center clock-bg ">
            <div className="row clock-bg">
                <div className="col-4"></div>
                <h1 className='col-4 time py-5'>{state}</h1>
            </div>
        </div>
    );
    

}

export default Clock;