import React from "react";



function InterviewCriteria({ criteriaTitle, value }){

    return(
        <>
            <label> {criteriaTitle} : 
            <input 
            type="text">
            </input>
            <select>
                <option value="3">Easy</option>
                <option value="2">Average</option>
                <option value="1">Difficult</option>
                </select>
                {value}
            </label> 
        </>
    )
    
};

export default InterviewCriteria;