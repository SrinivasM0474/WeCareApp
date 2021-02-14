import React from "react";
import { Col } from 'react-bootstrap';

const ProgramsComponent = (props) =>{
    return(
        <Col className="text-center">
            <a href="#">
			    <i><img src={props.img} alt={props.title} width="110" height="100" /></i></a>
            <div className="blockbg"><h4 className="ourprogramsheader">{props.title}</h4>
                <p className="covidbcon">{props.desc}</p>
			</div>
        </Col>
    )
}

export default ProgramsComponent;
 