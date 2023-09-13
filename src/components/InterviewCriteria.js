import React from "react";
import { useState } from "react";



function InterviewCriteria({ criteriaTitle }){
    
    const [interviewCriterias, setInterviewCriterias] = useState('2');

    return(
        <>
            <label> {criteriaTitle} : 
            <input 
            type="text">
            </input>
            <select 
                value={interviewCriterias}
                onChange={e=> setInterviewCriterias(e.target.value)}>
                <option value="3">Easy</option>
                <option value="2">Average</option>
                <option value="1">Difficult</option>
                </select>
                {interviewCriterias}
            </label> 
        </>
    )
    
};

export default InterviewCriteria;