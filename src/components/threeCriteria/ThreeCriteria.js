import React from "react";
import DifficultyAssessment from "./DifficultyAssessment";

function ThreeCriteria(  ){
    return(
        <>
            <div className="threeCriteria">
                <label htmlFor="firstCriteria">1st Criteria : </label>
                <input className="firstCriteria" type="text"></input>
                <DifficultyAssessment />
            </div>
            <div className="threeCriteria">
                <label htmlFor="secondCriteria">2nd Criteria : </label>
                <input className="secondCriteria" type="text"></input>
                <DifficultyAssessment />
            </div>
            <div className="threeCriteria">
                <label htmlFor="thirdCriteria">3rd Criteria : </label>
                <input className="thirdCriteria" type="text"></input>
                <DifficultyAssessment />
            </div>
        </>
    );
}


export default ThreeCriteria;