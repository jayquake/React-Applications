import React from "react";

const PatientCondition=()=>{
    return(
           <div className="btn-group btn-group-toggle m-auto condition">
        <input type="button" className="panel panel-heading  btn-outline-success lead text white mild   btn "
               onclick="location.href={% url 'information' %};" value="Mild"/>
        <input type="button" className="panel panel-heading btn-outline-warning lead text white  moderate  btn " checked
               onclick="location.href={% url 'information' %};" value="Moderate"/>
        <input type="button" className="panel panel-heading btn-outline-danger lead text white  severe  btn "
               onclick="location.href={% url 'information' %};" value="Severe"/>
    </div>
    )

}
export default PatientCondition