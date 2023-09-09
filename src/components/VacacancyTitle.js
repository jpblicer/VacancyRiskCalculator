import React from "react";

function Title(){
    return(
        <>
            <div className="vacancyTitle">
                <label htmlFor="clientName">Client : </label>
                <input className="clientName" type="text"></input>
            </div>
            <div className="vacancyTitle">
                <label htmlFor="vacancyName">Vacancy : </label>
                <input className="vacancyName" type="text"></input>
            </div>
        </>
    );
}


export default Title;