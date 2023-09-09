import React from "react";

function CalculateFee(){
    return(
        <>
            <div className="expectedFee">
                <label htmlFor="feePercentage">Fee Percentage : </label>
                <input className="feePercentage" type="number"></input>
            </div>
            <div className="expectedFee">
                <label htmlFor="expectedBill">Expected Billable Revenue : </label>
                <input className="expectedBill" type="number"></input>
            </div>
        </>
    );
}


export default CalculateFee;