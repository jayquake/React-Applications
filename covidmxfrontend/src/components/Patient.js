import React from "react";
import PatientCondition from "./PatientScreen/PatientCondition";
import PatientTests from "./PatientScreen/PatientTests";
import Container from "react-bootstrap/Container";

const Patient = () => {
    return(
        <div className={'patienttests'}>

            <PatientCondition/>

        <PatientTests/>

        </div>
)
}

export default Patient