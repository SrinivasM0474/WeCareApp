import React from "react";
import { Col } from "react-bootstrap";

const HealthComponent = (props) => {
  return (
    <Col className="text-center">
      <img src={props.img} alt={props.title} width="110" height="100" />
      <h3 className="covidbheader">{props.title}</h3>
      <p className="covidbcon"> {props.desc}</p>
    </Col>
  );
};

export default HealthComponent;
