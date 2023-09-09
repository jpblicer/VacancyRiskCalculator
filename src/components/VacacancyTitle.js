import React from "react";

function Title(){
    return(
        <>
            <div class="vacancyTitle">
                <label for="clientName">Client : </label>
                <input name="clientName" type="text"></input>
            </div>
            <div class="vacancyTitle">
                <label for="vacancyName">Vacancy : </label>
                <input name="vacancyName" type="text"></input>
            </div>
        </>
    );
}


export default Title;