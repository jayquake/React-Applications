import React from 'react';
import logo from './logo.svg';
import './App.css';
import Path from "./components/path";
import Home from "./components/Home";
import Patient from "./components/Patient";
import Error from "./components/Error";
import {Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import NavbarBootstrap from "./components/partials/NavbarBootstrap";
import MobileFooter from "./components/partials/MobileFooter";
import GeneralReminderCard from "./components/AssessmentScreen/GeneralReminderCard";
import Container from "react-bootstrap/Container";


function App() {
    return (
        <div>
            <NavbarBootstrap/>
            <div>

                <Switch>
                    <Route path={'/'} component={Home} exact/>
                    <Route path={'/about'} component={Path}/>
                    <Route path={'/management'} component={Patient}/>
                    <Route component={Error}/>
                </Switch>

            </div>
            <MobileFooter/>
        </div>
    );
}

export default App;
