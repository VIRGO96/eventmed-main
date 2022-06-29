import Form from "react-bootstrap/Form";
import React from "react";
import Slider from "./Slider";
import "../../css/SearchSidebar.css";
import { useState } from "react";



function searchSidebar(props) {
  const handleCheckboxChange = (name) => {
    let newArray = [...props.Catagory, name];
    if (props.Catagory.includes(name)) {
      newArray = newArray.filter((n) => n !== name);
    }
    props.setCategory(newArray);
  };

  return (
    <div>
      <>
        <Form className="mt-45">
          <Form.Label className="mt-3">Category</Form.Label>

          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicEmail">
            <Form.Check
              reverse
              label="Conference"
              name="Conference"
              id="Conference"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Conference")}
            />
            <Form.Check
              reverse
              label="Congress"
              name="Congress"
              id="Congress"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Congress")}
            />
            <Form.Check
              reverse
              label="Summit"
              name="Submit"
              id="Submit"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Summit")}
            />
            <Form.Check
              reverse
              label="Course"
              name="Course"
              id="Course"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Course")}
            />
            <Form.Check
              reverse
              label="Webinar"
              name="Webinar"
              id="Webinar"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Webinar")}
            />
          </Form.Group>

          {/* location */}
          <Form.Label>Location</Form.Label>
          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicEmail">
            <Form.Check
              reverse
              label="Online"
              name="Online"
              id="Online"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Online")}
            />
            <Form.Check
              reverse
              label="Physical"
              name="Physical"
              id="Physical"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Physical")}
            />
          </Form.Group>
          {/* Address to */}
          <Form.Label>Address to</Form.Label>
          <Form.Group className="mb-3 ml-3 " controlId="formBasicEmail">
            <Form.Check
              reverse
              label="Student"
              name="Student"
              id="Student"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Student")}
            />
            <Form.Check
              reverse
              label="Medic"
              name="Medic"
              id="Medic"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Medic")}
            />
            <Form.Check
              reverse
              label="EveryOne"
              name="EveryOne"
              id="EveryOne"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("EveryOne")}
            />
          </Form.Group>

          {/* Topic */}
          <Form.Label>Topic</Form.Label>
          <Form.Group className="mb-3 ml-3 " controlId="formBasicEmail">
            <Form.Check
              reverse
              label="Surgical"
              name="Surgical"
              id="Surgical"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Surgical")}
            />
            <Form.Check
              reverse
              label="Non-Surgical"
              name="Non-Surgical"
              id="Non-Surgical"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Non-Surgical")}
            />
          </Form.Group>

          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicCheckbox">
            <label for="customRange3" className="form-label">
              Price Range
            </label>
            {/* Slider */}
            <Slider
              priceRange={props.priceRange}
              setPriceRange={props.setPriceRange}
            />
          </Form.Group>
        </Form>
      </>
    </div>
  );
}

export default searchSidebar;
