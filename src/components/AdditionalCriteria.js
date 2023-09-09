import React from "react";

function AdditionalCriteria(){
    return(
        <>
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
        </>
    );
}


export default AdditionalCriteria;