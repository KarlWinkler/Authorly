import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";

function TitleSection(props){
    return(
        <div className="py-5 main-title-div">
            <div className="shadow title-div title-header"><Header text={props.headerText}/></div>
            <div className="shadow title-div title-paragraph"><Paragraph text={props.paragraphText} /></div>
        </div>
    )
}

export default TitleSection;