import Form from "react-bootstrap/Form";
import React from "react";
import Slider from "./Slider";
import "../../css/SearchSidebar.css";

function searchSidebar(props) {
  const handleRadioClick = (type, value) => {
    props.setFilter((prevState) => {
      //console.log({ type, value });
      let temp = {
        ...prevState,
        [type]: prevState[type] === value ? "" : value,
      };
      return JSON.parse(JSON.stringify(temp));
    });
  };

  return (
    <div>
      <>
        <Form className="mt-45">
          <Form.Label className="mt-3">Category</Form.Label>

          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicEmail">
            <Form.Check
              reverse="true"
              label="Conference"
              name="category"
              id="Conference"
              //type='radio'
              className="form__fields"
              checked={props.filter.category === "Conference"}
              onChange={(e) => handleRadioClick("category", "Conference")}
            />
            <Form.Check
              reverse="true"
              label="Congress"
              name="category"
              id="Congress"
              //type='radio'
              className="form__fields"
              checked={props.filter.category === "Congress"}
              onChange={(e) => handleRadioClick("category", "Congress")}
            />
            <Form.Check
              reverse="true"
              label="Summit"
              name="category"
              id="Summit"
              //type='radio'
              className="form__fields"
              checked={props.filter.category === "Summit"}
              onChange={(e) => handleRadioClick("category", "Summit")}
            />
            <Form.Check
              reverse="true"
              label="Course"
              name="category"
              id="Course"
              //type='radio'
              className="form__fields"
              checked={props.filter.category === "Course"}
              onChange={(e) => handleRadioClick("category", "Course")}
            />
            <Form.Check
              reverse="true"
              label="Webinar"
              name="category"
              id="Webinar"
              //type='radio'
              className="form__fields"
              checked={props.filter.category === "Webinar"}
              onChange={(e) => handleRadioClick("category", "Webinar")}
            />
          </Form.Group>

          {/* location */}
          <Form.Label>Location</Form.Label>
          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicEmail">
            <Form.Check
              reverse="true"
              label="Online"
              name="location"
              id="Online"
              className="form__fields"
              checked={props.filter.location === "Online"}
              onChange={(e) => handleRadioClick("location", "Online")}
            />
            <Form.Check
              reverse="true"
              label="Physical"
              name="location"
              id="Physical"
              className="form__fields"
              checked={props.filter.location === "Physical"}
              onChange={(e) => handleRadioClick("location", "Physical")}
            />

            <Form.Check
              reverse="true"
              label="Hybrid"
              name="Hybrid"
              id="Hybrid"
              className="form__fields"
              checked={props.filter.location === "Hybrid"}
              onChange={(e) => handleRadioClick("location", "Hybrid")}
            />
          </Form.Group>
          {/* Address to */}
          <Form.Label>Addressed to</Form.Label>
          <Form.Group className="mb-3 ml-3 " controlId="formBasicEmail">
            <Form.Check
              reverse="true"
              label="Student"
              name="Student"
              id="Student"
              className="form__fields"
              checked={props.filter.addressTo === "Student"}
              onChange={(e) => handleRadioClick("addressTo", "Student")}
            />
            <Form.Check
              reverse="true"
              label="Professor"
              name="Professor"
              id="Professor"
              className="form__fields"
              checked={props.filter.addressTo === "Professor"}
              onChange={(e) => handleRadioClick("addressTo", "Professor")}
            />
            <Form.Check
              reverse="true"
              label="Medic"
              name="Medic"
              id="Medic"
              className="form__fields"
              checked={props.filter.addressTo === "Medic"}
              onChange={(e) => handleRadioClick("addressTo", "Medic")}
            />
            <Form.Check
              reverse="true"
              label="Everyone"
              name="EveryOne"
              id="EveryOne"
              className="form__fields"
              checked={props.filter.addressTo === "EveryOne"}
              onChange={(e) => handleRadioClick("addressTo", "EveryOne")}
            />
          </Form.Group>

          {/* Topic */}
          <Form.Label>Topic</Form.Label>
          <Form.Group className="mb-3 ml-3 " controlId="formBasicEmail">
            <Form.Check
              reverse="true"
              label="Surgical"
              name="Surgical"
              id="Surgical"
              className="form__fields"
              checked={props.filter.topic === "Surgical"}
              onChange={(e) => handleRadioClick("topic", "Surgical")}
            />

            <Form.Check
              reverse="true"
              label="Internal Medicine"
              name="Internal Medicine"
              id="Internal Medicine"
              className="form__fields"
              checked={props.filter.topic === "Internal Medicine"}
              onChange={(e) => handleRadioClick("topic", "Internal Medicine")}
            />

            <Form.Check
              reverse="true"
              label="Cardiology"
              name="Cardiology"
              id="Cardiology"
              className="form__fields"
              checked={props.filter.topic === "Cardiology"}
              onChange={(e) => handleRadioClick("topic", "Cardiology")}
            />

            <Form.Check
              reverse="true"
              label="Neurology"
              name="Neurology"
              id="Neurology"
              className="form__fields"
              checked={props.filter.topic === "Neurology"}
              onChange={(e) => handleRadioClick("topic", "Neurology")}
            />

            <Form.Check
              reverse="true"
              label="Oncology"
              name="Oncology"
              id="Oncology"
              className="form__fields"
              checked={props.filter.topic === "Oncology"}
              onChange={(e) => handleRadioClick("topic", "Oncology")}
            />

            <Form.Check
              reverse="true"
              label="Gynecology"
              name="Gynecology"
              id="Gynecology"
              className="form__fields"
              checked={props.filter.topic === "Gynecology"}
              onChange={(e) => handleRadioClick("topic", "Gynecology")}
            />

            <Form.Check
              reverse="true"
              label="Pediatrics"
              name="Pediatrics"
              id="Pediatrics"
              className="form__fields"
              checked={props.filter.topic === "Pediatrics"}
              onChange={(e) => handleRadioClick("topic", "Pediatrics")}
            />

            <Form.Check
              reverse="true"
              label="Ophthalmology"
              name="Ophthalmology"
              id="Ophthalmology"
              className="form__fields"
              checked={props.filter.topic === "Ophthalmology"}
              onChange={(e) => handleRadioClick("topic", "Ophthalmology")}
            />

            <Form.Check
              reverse="true"
              label="Psychiatry"
              name="Psychiatry"
              id="Psychiatry"
              className="form__fields"
              checked={props.filter.topic === "Psychiatry"}
              onChange={(e) => handleRadioClick("topic", "Psychiatry")}
            />

            <Form.Check
              reverse="true"
              label="Dental"
              name="Dental"
              id="Dental"
              className="form__fields"
              checked={props.filter.topic === "Dental"}
              onChange={(e) => handleRadioClick("topic", "Dental")}
            />

            <Form.Check
              reverse="true"
              label="Multiple Topics"
              name="Multiple Topics"
              id="Multiple Topics"
              className="form__fields"
              checked={props.filter.topic === "Multiple Topics"}
              onChange={(e) => handleRadioClick("topic", "Multiple Topics")}
            />

            <Form.Check
              reverse="true"
              label="Other Topic"
              name="Other Topic"
              id="Other Topic"
              className="form__fields"
              checked={props.filter.topic === "Other Topic"}
              onChange={(e) => handleRadioClick("topic", "Other Topic")}
            />
          </Form.Group>

          <Form.Group className="mb-3 ml-3 p-20" controlId="formBasicCheckbox">
            <label for="customRange3" className="form-label special-price-range">
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
