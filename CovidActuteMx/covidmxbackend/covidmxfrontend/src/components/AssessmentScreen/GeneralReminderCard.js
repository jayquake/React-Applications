import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

const GeneralReminderCard= (props)=>{
    const [ setShow] = useState(true);
    const [ generalreminder,handleDisplay ] = useState( 'display-on')

    return(

<div  className={`card w-100 h-25 reminder column ${generalreminder}`} style={{ width: '18rem' }}>
        <Alert.Heading>
            <fieldset className="lead">
                <legend className="border-bottom text-secondary">General Reminders</legend>
            </fieldset>
        </Alert.Heading>

          <ul>
                <li className="small text-secondary">Avoid Stethoscope</li>
                <li className="small text-secondary">Wear PPE</li>
                <li className="small text-secondary">Patient Mask</li>
          </ul>




          <Button className="btn btn-transparent text-secondary btn-outline-dark active  bg-white rounded closebtn"
               onClick={()=>handleDisplay('display-off')}>Got it: Hide From Now On</Button>
    </div>
    );
  }




export default GeneralReminderCard