import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";
import Slider from "./Slider";
import "../../css/SearchSidebar.css";
import { useState } from "react";
// import MultiRangeSlider from "../Search Form/multiSlider";


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
        <Form>
          <Form.Label>Category</Form.Label>

          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicEmail">
            <Form.Check
              reverse
              label="Conference"
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Conference")}
            />
            <Form.Check
              reverse
              label="Congress"
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Congress")}
            />
            <Form.Check
              reverse
              label="Summit"
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Summit")}
            />
            <Form.Check
              reverse
              label="Course"
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Course")}
            />
            <Form.Check
              reverse
              label="Webinar"
              name="group1"
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
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Online")}
            />
            <Form.Check
              reverse
              label="Physical"
              name="group1"
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
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Student")}
            />
            <Form.Check
              reverse
              label="Medic"
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Medic")}
            />
            <Form.Check
              reverse
              label="EveryOne"
              name="group1"
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
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Surgical")}
            />
            <Form.Check
              reverse
              label="Non-Surgical"
              name="group1"
              className="form__fields"
              onChange={(e) => handleCheckboxChange("Non-Surgical")}
            />
          </Form.Group>

          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicCheckbox">
            <label for="customRange3" className="form-label">
              Price Range
            </label>
            {/* Slider */}
            <Slider priceRange={props.priceRange} setPriceRange={props.setPriceRange} />
            {/* <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            /> */}
          </Form.Group>
        </Form>
      </>
    </div>
  );
}

export default searchSidebar;
