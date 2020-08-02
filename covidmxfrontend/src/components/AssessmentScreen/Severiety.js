import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


const Severity=()=>{
    return(
      <div className="card w-100 h-25  column assessment border-light">

          <Button variant="warning" className={'text-white'} size="lg" active>
            <Link className={'text-light'} to={'/shop'}> Moderate
            </Link>
         </Button>
       </div>
    )
}
export default Severity