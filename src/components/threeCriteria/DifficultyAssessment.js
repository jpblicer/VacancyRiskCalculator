import React from "react";


function DifficultyAssessment( {DifficultyAssessment} ){
    return(
        <>
                <select id="difficulty-select">
                    <option value="3">Easy</option>
                    <option value="2">Average</option>
                    <option value="1">Difficult</option>
                </select>
        </>
    );
}


export default DifficultyAssessment;