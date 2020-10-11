import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const MobileFooter = (props) =>{
    return(
        <nav className="mobile-bottom-nav">
            <Button className={'btn btn-lg btn-light text-black  my-btnleft my-btn btn'}>
            <Link className={'text-dark'} to={'/'}>Patient
            </Link>
             </Button>
            <div>
                <Link to={'/about'}>
                <input type="button" className="my-btn-center btn-outline-dark btn-circle btn-xl child bg"/>
                       </Link>
            </div>
            <Button className={'btn btn-lg btn-light lead text white  my-btnright  btn'}>
            <Link className={'text-dark'} to={'/management'}> Information
            </Link>
            </Button>
        </nav>
    )
}
export default MobileFooter