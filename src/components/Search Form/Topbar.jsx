import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
          onChange={(e) => props.setSearch(e.target.value)}
          placeholder="Search by event title"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </>
  );
}

export default Topbar;
