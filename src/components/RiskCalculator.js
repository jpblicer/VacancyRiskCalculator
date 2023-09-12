import React from "react";
import { useState } from "react";




function RiskCalculator(){
    const [feePercentage, setFeePercentage] = useState('');
    const [expectedBill, setExpectedBill] = useState('');    
    const [selectedHeadcount, setSelectedHeadcount] = useState('0')

    const totalFee = (expectedBill * (feePercentage/100));


    const totalRisk = 50;

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
        <div className="expectedFee">
            <label htmlFor={feePercentage}>Fee Percentage : </label>
            <input 
                id={feePercentage} 
                type="number"
                onChange={event=>setFeePercentage(event.target.value)}
            >
            </input>
        </div>
        <div className="expectedFee">
            <label htmlFor={expectedBill}>Expected Billable Revenue : </label>
            <input 
                id={expectedBill} 
                type="number"
                onChange={event=>setExpectedBill(event.target.value)}
            >
            </input>
        </div>
        { totalFee !== 0 ? <p>Your expected Placement value is ￥{totalFee}</p> : null }
        <div className="headcount">
            <label> 
                Number of Headcount :
                <select 
                    value={selectedHeadcount}
                    onChange={e=> setSelectedHeadcount(e.target.value)}>
                    <option value="0">1</option>
                    <option value="5">2-3</option>
                    <option value="10">4-7</option>
                    <option value="20">7+</option>
                </select>
            </label>
            {selectedHeadcount}
        </div>
        <div className="threeCriteria">
            <label htmlFor="firstCriteria">1st Criteria : </label>
            <input className="firstCriteria" type="text"></input>
                <select id="difficulty-select">
                    <option value="3">Easy</option>
                    <option value="2">Average</option>
                    <option value="1">Difficult</option>
                </select>
        </div>
        <div className="threeCriteria">
            <label htmlFor="secondCriteria">2nd Criteria : </label>
            <input className="secondCriteria" type="text"></input>
                <select id="difficulty-select">
                    <option value="3">Easy</option>
                    <option value="2">Average</option>
                    <option value="1">Difficult</option>
                </select>
        </div>
        <div className="threeCriteria">
            <label htmlFor="thirdCriteria">3rd Criteria : </label>
            <input className="thirdCriteria" type="text"></input>
                <select id="difficulty-select">
                    <option value="3">Easy</option>
                    <option value="2">Average</option>
                    <option value="1">Difficult</option>
                </select>
        </div>
        <div className="additionalCriteria">
            <input className="clientCommunication" type="checkbox" value="10"></input>
            <label htmlFor="clientCommunication">Client Communicates Well</label>
        </div>
        <div className="additionalCriteria">
            <input className="coreArea" type="checkbox" value="10"></input>
            <label htmlFor="coreArea">Vacancy is in Core Area</label>
        </div>
        <div className="additionalCriteria">
            <input className="exclusive" type="checkbox" value="5"></input>
            <label htmlFor="exclusive">Exclusive</label>
        </div>
        <div className="additionalCriteria">
            <input className="priorPlacements" type="checkbox" value="5"></input>
            <label htmlFor="priorPlacements">Made placements with this client in past</label>
        </div>
        <div className="additionalCriteria">
            <input className="urgent" type="checkbox" value="10"></input>
            <label htmlFor="urgent">Urgent to Fill</label>
        </div>   
        <h2>This Vacancy has a {totalRisk}% chance to be filled</h2> 
    </>
    );
};


export default RiskCalculator;