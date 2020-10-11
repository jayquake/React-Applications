import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const PatientTests = () => {
    return (

        <Tab.Container as={'div'} id="left-tabs-example"  className={'patienttests '} defaultActiveKey="first">
                    <ButtonGroup   className="btn-group btn-group-toggle ">
                        <Button size="sm"  variant={'btn btn-outline-secondary '}
                                className={'w-20 button-text-ctr '}>
                           <Nav.Link eventKey="first" className={'small text-secondary button-text-size'}>Monitoring</Nav.Link>
                        </Button>
                          <Button size="sm" variant={'btn btn-outline-secondary'}
                                className={' w-20 button-text-ctr  '}>
                            <Nav.Link eventKey="second" className={'small text-secondary button-text-size'}>Labs</Nav.Link>
                        </Button>
                         <Button  size="sm" variant={'btn btn-outline-secondary'}
                                className={' w-20 button-text-ctr '}>
                            <Nav.Link eventKey="third" className={'small text-secondary button-text-size'}>Imaging</Nav.Link>
                        </Button>
                        <Button  size="sm" variant={'btn btn-outline-secondary'}
                                className={'w-20 button-text-ctr'}>
                            <Nav.Link eventKey="fourth" className={'small text-secondary button-text-size'}>Treatment</Nav.Link>
                        </Button>
                        <Button  size="sm" variant={'btn btn-outline-secondary'}
                                className={' w-20 button-text-ctr '}>
                            <Nav.Link eventKey="fifth" className={'small text-secondary button-text-size'}>Admit</Nav.Link>
                        </Button>
                    </ButtonGroup>




                    <Tab.Content as={'div'}>
                        <Tab.Pane className={'patient_test_tab'}eventKey="first">
                              <div className={'patient_test_tab'}>
                            <h3 className={'patient_test_tab'}>Monitoring</h3>
                                  <p className={'patient_test_tab'}>some shit</p>
                                  <p>some shit</p>
                                  <p>some shit</p>
                                  <p>some shit</p>

                                  </div>
                        </Tab.Pane>
                        <Tab.Pane className={'patient_test_tab'} eventKey="second">
                            <h3 className={'patient_test_tab'}>Labs</h3>
                        </Tab.Pane>
                        <Tab.Pane className={'patient_test_tab'} eventKey="third">
                            <h3 className={'patient_test_tab'}>Imaging</h3>
                        </Tab.Pane>
                        <Tab.Pane className={'patient_test_tab'} eventKey="fourth">
                            <h3 className={'patient_test_tab'}>Treatment</h3>
                        </Tab.Pane>
                        <Tab.Pane className={'patient_test_tab'} eventKey="fifth">
                            <h3 className={'patient_test_tab'} >Admit</h3>
                        </Tab.Pane>

                    </Tab.Content>


        </Tab.Container>

    )

}
export default PatientTests