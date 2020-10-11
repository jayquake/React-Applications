import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import {CardBody} from "react-bootstrap/Card";

[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));

function App() {
  const [patient_info, setInfo] = useState([])

    useEffect(() =>{
    //  Lookups for Backend
      const patientItems = [{"content": "tests"}, {"content":"Hello"}]
      setInfo(patientItems)
    }, [])

  return (
      <>
      <Card variant="success" className="card w-100 h-25 reminder column">
        <Card.Title>
          <fieldset className="lead">
            <legend className="border-bottom text-secondary">General Reminders</legend>
            </fieldset>
          </Card.Title>
        <Card.Body>
            <ul>
            <li className="small text-secondary">Avoid Stethoscope</li>
            <li className="small text-secondary">Wear PPE</li>
            <li className="small text-secondary">Patient Mask</li>
          </ul>
          </Card.Body>

        <hr />
        <div className="d-flex justify-content-end">
          <button onClick={() => delete true} className="btn btn-transparent text-secondary btn-outline-dark  bg-white rounded closebtn"
               >Got it: Hide From Now On
          </button>
        </div>
      </Card>

    </>
  );
}

export default App;
