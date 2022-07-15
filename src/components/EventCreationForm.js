import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "../css/EventCreationForm.css";
import { FormGroup, Label, Col, Input } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../Redux/Action/EventAction";

import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { Tooltip } from "@mui/material";

function EventCreationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { myCreationLoader } = useSelector((state) => state.event);
  const [Event, setEvent] = useState("");
  const [Price, setPrice] = useState("");
  const [OrganizerName, setOrganizerName] = useState("");
  const [Catagories, setCatagories] = useState("");
  const [Location, setLocation] = useState("");
  const [Addressed, setAddressed] = useState("");
  const [Topic, setTopic] = useState("");

  function SubmitEventForm(e) {
    e.preventDefault();
    let obj = {
      title: Event,
      price: Price,
      organizer_name: OrganizerName,
      category: Catagories,
      location: Location,
      addressed_to: Addressed,
      topic: Topic,
    };
    dispatch(
      createEvent(obj, () => {
        setEvent("");
        setPrice("");
        setOrganizerName("");
        setCatagories("");
        setLocation("");
        setAddressed("");
        setTopic("");
        navigate("/home");
      })
    );
  }

  return (
    <>
      <div className="everything-on-event-creation-form">
        <div className="row sticky-top">
          <NavigationBar />
        </div>

        <br />
        <div>
          <h3 className="mt-4 mb-5 text-center overflow-hidden event-creation-form">
            Event Creation Form
          </h3>

          <Form className="mx-auto form-creation" onSubmit={SubmitEventForm}>
            <FormGroup row>
              <Label className="event-creation-form" sm={2}>
                Event Title*
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleInput"
                  name="text"
                  value={Event}
                  onChange={(e) => setEvent(e.target.value)}
                  placeholder="Input Event Title"
                  type="text"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="event-creation-form" for="exampleSelect" sm={2}>
                Catagory*
              </Label>
              <Col sm={10}>
                {/* Conference, Congress, Summit, Course, Webinar */}
                <Input
                  value={Catagories}
                  onChange={(e) => setCatagories(e.target.value)}
                  id="exampleSelect"
                  name="select"
                  type="select"
                  required
                >
                  <option>Select Catagory</option>
                  <option value={"Conference"}>Conference</option>
                  <option value={"Congress"}>Congress</option>
                  <option value={"Course"}>Course</option>
                  <option value={"Summit"}>Summit</option>
                  <option value={"Webinar"}>Webinar</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label className="event-creation-form" sm={2}>
                Price (€)*
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleNumber"
                  name="number"
                  placeholder="Input Price"
                  type="number"
                  value={Price}
                  onChange={(z) => setPrice(z.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="event-creation-form" for="exampleSelect" sm={2}>
                Location*
              </Label>
              <Col sm={10}>
                {/* Conference, Congress, Summit, Course, Webinar */}
                <Input
                  value={Location}
                  onChange={(e) => setLocation(e.target.value)}
                  id="exampleSelect"
                  name="select"
                  type="select"
                  required
                >
                  <option>Select Location</option>
                  <option value={"Online"}>Online</option>
                  <option value={"Physical"}>Physical</option>
                  <option value={"Hybrid"}>Hybrid</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="event-creation-form" sm={2}>
                Organizer's Name*
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleInput"
                  name="text"
                  placeholder="Input Organizer's Name"
                  type="text"
                  value={OrganizerName}
                  onChange={(x) => setOrganizerName(x.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className="event-creation-form" for="exampleSelect" sm={2}>
                Addressed to*
              </Label>
              <Col sm={10}>
                {/* Conference, Congress, Summit, Course, Webinar */}
                <Input
                  value={Addressed}
                  onChange={(e) => setAddressed(e.target.value)}
                  id="exampleSelect"
                  name="select"
                  type="select"
                  required
                >
                  <option>Select who the event addresses to</option>
                  <option value={"Student"}>Student</option>
                  <option value={"Professor"}>Professor</option>
                  <option value={"Medic"}>Doctor</option>
                  <option value={"EveryOne"}>Everyone</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label className="event-creation-form" for="exampleSelect" sm={2}>
                Topic*
              </Label>
              <Col sm={10}>
                {/* Conference, Congress, Summit, Course, Webinar */}
                <Input
                  value={Topic}
                  onChange={(e) => setTopic(e.target.value)}
                  id="exampleSelect"
                  name="select"
                  type="select"
                  required
                >
                  <option>Select Topic</option>
                  <option value={"Surgical"}>Surgical</option>
                  <option value={"Internal Medicine"}>Internal Medicine</option>
                  <option value={"Cardiology"}>Cardiology</option>
                  <option value={"Neurology"}>Neurology</option>
                  <option value={"Oncology"}>Oncology</option>
                  <option value={"Gynecology"}>Gynecology</option>
                  <option value={"Pediatrics"}>Pediatrics</option>
                  <option value={"Ophthalmology"}>Ophthalmology</option>
                  <option value={"Psychiatry"}>Psychiatry</option>
                  <option value={"Dental"}>Dental</option>
                  <option value={"Multiple Topics"}>Multiple Topics</option>
                  <option value={"Other Topic"}>Other Topic</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup check row>
              <Col className="button-container">
                <Tooltip title="Make sure that you completed all of the above fields.">
                  <Button className="btn-submit mt-3" type="Submit">
                    {myCreationLoader ? (
                      <Spinner size="sm" color="white" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Tooltip>
              </Col>
            </FormGroup>
          </Form>
        </div>

        {/* Footer */}
        <div className="row  mt-5 footerr">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default EventCreationForm;
