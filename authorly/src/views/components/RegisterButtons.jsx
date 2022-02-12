import React from 'react';

function RegisterButtons(props){
    return(
        <div>
            <button className="btn btn-secondary register-btn" onClick={props.func1}>{props.b1}</button>
            <button className="btn btn-primary register-btn" onClick={props.func2}>{props.b2}</button>
        </div>
    );
}

export default RegisterButtons;