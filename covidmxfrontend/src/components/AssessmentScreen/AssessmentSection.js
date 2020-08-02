import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Severity from "./Severiety";


const AssessmentSection = (props) => {
    return (
        <div className="card w-100 h-50 column assessment border-light">
            <fieldset className="lead">
                <legend className=" text-secondary">Assessment</legend>

                    <div className="ml-auto form-group text-secondary small assessment-txt"> Severe Respiratory Distress
                        Or Shock
                        <ButtonGroup className="mb-2 btn-group btn-group-toggle float-right rounded small column">
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option2"> No</Button>
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option3"> Yes </Button>
                        </ButtonGroup>
                    </div>
                    <div className="ml-auto form-group text-secondary small assessment-txt"> Appearance
                        <ButtonGroup className="mb-2 btn-group btn-group-toggle float-right rounded small column">
                            <Button className="btn btn-sm rounded btn-white btn-outline-primary active"
                                    name="options" id="option1">Well
                            </Button>
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option2">
                                Borderline
                            </Button>
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option3">Unwell
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="ml-auto  form-group text-secondary small assessment-txt small text-secondary"> Risk
                        Factors
                        <ButtonGroup className="mb-2 btn-group btn-group-toggle float-right rounded small column">
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active"
                                    name="options" id="option2"> No
                            </Button>
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option3"> Yes
                            </Button>
                        </ButtonGroup>
                    </div>

                    <div className="ml-auto  form-group text-secondary small assessment-txt small text-secondary"> Risk
                        Factors
                        <ButtonGroup className="mb-2 btn-group btn-group-toggle float-right rounded small column">
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active"
                                    name="options" id="option2"> No
                            </Button>
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option3"> Yes
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="ml-auto  form-group text-secondary small assessment-txt small text-secondary"> O2
                        Saturation
                        <ButtonGroup className="mb-2 btn-group btn-group-toggle float-right rounded small column">
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active"
                                    name="options" id="option2"> 92%
                            </Button>
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option3"> > 92%
                            </Button>
                        </ButtonGroup>
                    </div>

                    <div className="ml-auto  form-group text-secondary small assessment-txt small text-secondary"> Respiratory
                        Rate
                        <ButtonGroup className="mb-2 btn-group btn-group-toggle float-right rounded small column">
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active"
                                    name="options" id="option2"> 22
                            </Button>
                            <Button className="btn btn-sm btn-white  rounded btn-outline-primary active" name="options"
                                    id="option3"> > 22
                            </Button>
                        </ButtonGroup>
                    </div>
                    <Severity/>


            </fieldset>

        </div>


    )
}

export default AssessmentSection