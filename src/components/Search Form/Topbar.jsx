import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import { Input } from "reactstrap";
// import "../../css/Topbar.css";

function Topbar(props) {
  return (
    <>
      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
        <Form.Control
          value={props.search}
          onChange={(e)=>props.setSearch(e.target.value)}
         
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      {/* <div className="Input_field d-inline d-flex">
        <span>
          <i className="fas fa-search"></i>{" "}
        </span>
        <Input bsSize="lg" className="mb-3" placeholder="WoodlandHills" />
      </div> */}
    </>
  );
}

export default Topbar;
