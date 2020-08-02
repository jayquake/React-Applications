import React from "react";
import Form from "react-bootstrap/Form";


const NewPatientForm=(props)=>{
    return(

    <div className="">
        <fieldset className="lead">
            <legend className=" text-secondary ml-auto">New Patient</legend>
                <Form>
  {['checkbox'].map((type) => (
    <div key={`default-`} className="mb-3  text-secondary small assessment-txt">
      <Form.Check id={``}label={`Take Symptoms`}/>
      <Form.Check id={``}label={`Take Vitals`}/>
      <Form.Check id={``}label={`Risk Factors`}/>
      <Form.Check id={``}label={`Level of Hypoxia`}/>

    </div>
  ))}
</Form>

            </fieldset>
    </div>
    )
}

export default NewPatientForm