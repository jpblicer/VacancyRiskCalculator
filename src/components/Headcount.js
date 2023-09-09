import React from "react";

function Headcount(){
    return(
        <>
            <div className="headcount">
                <label htmlFor="headcount">Number of Headcount : </label>
                <select className="headcount" id="headcount-select">
                    <option value="0">1</option>
                    <option value="5">2-3</option>
                    <option value="10">4-7</option>
                    <option value="20">7+</option>
                </select>
            </div>
        </>
    );
}


export default Headcount;