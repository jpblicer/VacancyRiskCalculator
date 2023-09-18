import React from "react";
import { useState } from "react";



function RiskCalculator(){
    const [feePercentage, setFeePercentage] = useState('');
    const [expectedBill, setExpectedBill] = useState('');    
    const [selectedHeadcount, setSelectedHeadcount] = useState('0')
    const [interviewCriteriaOne, setInterviewCriteriasOne] = useState('2');
    const [interviewCriteriaTwo, setInterviewCriteriasTwo] = useState('2');
    const [interviewCriteriaThree, setInterviewCriteriasThree] = useState('2');
    const [clientCommunication, setClientCommunication] = useState(false)
    const [coreArea, setCoreArea] = useState(false);
    const [exclusive, setExclusive] = useState(false);
    const [priorPlacements, setPriorPlacements] = useState(false);
    const [urgent, setUrgent] = useState(false);
    
    const totalFee = (expectedBill * (feePercentage/100));

    
    
    let totalFeeRisk;
        
    if(totalFee < 2000001)
        totalFeeRisk = 0;
    else if((totalFee >= 2000001) && (totalFee < 3000000)) 
        totalFeeRisk = 5; 
    else if(totalFee >= 3000000)
        totalFeeRisk = 10;
    

    const threeCriteriaScore = ((Number(interviewCriteriaOne) + Number(interviewCriteriaTwo) + Number(interviewCriteriaThree)) / 3);
    
    const totalRisk = 0
        +(totalFeeRisk)
        +(clientCommunication ? 10 : 0) 
        +(coreArea ? 10 : 0)
        +(exclusive ? 5 : 0)
        +(priorPlacements ? 5 : 0)
        +(urgent ? 10 : 0);

return(
    <form>
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
            <label> 1st Criteria : 
            <input 
            type="text">
            </input>
            <select
                value={interviewCriteriaOne}
                onChange={e=> setInterviewCriteriasOne(e.target.value)}>
                <option value="3">Easy</option>
                <option value="2">Average</option>
                <option value="1">Difficult</option>
                </select>
                {interviewCriteriaOne}
            </label>
        </div>
        <div className="threeCriteria">
            <label> 2nd Criteria : 
            <input 
            type="text">
            </input>
            <select
                value={interviewCriteriaTwo}
                onChange={e=> setInterviewCriteriasTwo(e.target.value)}>
                <option value="3">Easy</option>
                <option value="2">Average</option>
                <option value="1">Difficult</option>
                </select>
                {interviewCriteriaTwo}
            </label>
        </div>
        <div className="threeCriteria">
            <label> 3rd Criteria : 
            <input 
            type="text">
            </input>
            <select
                value={interviewCriteriaThree}
                onChange={e=> setInterviewCriteriasThree(e.target.value)}>
                <option value="3">Easy</option>
                <option value="2">Average</option>
                <option value="1">Difficult</option>
                </select>
                {interviewCriteriaThree}
            </label> 
        </div>
        {threeCriteriaScore}
        <div className="additionalCriteria">
            <input 
            className="clientCommunication" 
            type="checkbox" 
            checked={clientCommunication}
            onChange={e=>setClientCommunication(!clientCommunication)} />
            <label htmlFor="clientCommunication">Client Communicates Well</label>
        </div>
        
        <div className="additionalCriteria">
            <input 
            className="coreArea" 
            type="checkbox" 
            checked={coreArea}
            onChange={e=>setCoreArea(!coreArea)} />
            <label htmlFor="coreArea">Vacancy is in Core Area</label>
        </div>
        <div className="additionalCriteria">
            <input 
            className="exclusive" 
            type="checkbox" 
            checked={exclusive}
            onChange={e=>setExclusive(!exclusive)} />
            <label htmlFor="exclusive">Exclusive</label>
        </div>
        <div className="additionalCriteria">
            <input 
            className="priorPlacements" 
            type="checkbox" 
            checked={priorPlacements}
            onChange={e=>setPriorPlacements(!priorPlacements)} />
            <label htmlFor="priorPlacements">Prior Placements made with Client</label>
        </div>
        <div className="additionalCriteria">
            <input 
            className="urgent" 
            type="checkbox" 
            checked={urgent}
            onChange={e=>setUrgent(!urgent)} />
            <label htmlFor="urgent">Urgent to Fill</label>
        </div>
        <h2>This Vacancy has a {totalRisk}% chance to be filled</h2> 
        </form>
    );
};


export default RiskCalculator;