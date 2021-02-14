import React from "react";
import { Col } from 'react-bootstrap';

const EventsComponent = (props) =>{
    return(
        <Col className="text-center">
            <div className="float-left">
                <span className="ourblockbg">{props.date}</span>
            </div>
            <div className="text-left displat-t">
                <h3 className="covidbheader">{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </Col>
    )
}

export default EventsComponent;
 