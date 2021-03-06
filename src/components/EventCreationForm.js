import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "../css/EventCreationForm.css";
import { FormGroup, Label, Col, Input, FormText } from "reactstrap";
import { useState } from "react";
// import { createEvent } from "./Redux/Action/EventAction";
import { useNavigate } from "react-router-dom";
import {
  createEvent,
  myEventCreationLoader,
} from "../Redux/Action/EventAction";

import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";




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
    dispatch(createEvent(obj, () => {
      setEvent('');
      setPrice('');
      setOrganizerName('');
      setCatagories('');
      setLocation('');
      setAddressed('');
      setTopic('');
      navigate("/home");
      
    }));
  }

  return (
    <>
      <div className="row sticky-top">
        <NavigationBar />
      </div>
      <h3 className="mt-3 text-center overflow-hidden">Event Creation Form</h3>
      <br />
      <Form className="w-50  mx-auto" onSubmit={SubmitEventForm}>
        <FormGroup row>
          <Label sm={2}>Enter Event</Label>
          <Col sm={10}>
            <Input
              id="exampleInput"
              name="text"
              value={Event}
              onChange={(e) => setEvent(e.target.value)}
              placeholder="Enter Event"
              type="text"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Catagories
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
              <option>Select Catagories</option>
              <option value={"Conference"}>Conference</option>
              <option value={"Congress"}>Congress</option>
              <option value={"Submmit"}>Summit</option>
              <option value={"Course"}>Course</option>
              <option value={"Webinar"}>Webinar</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Price</Label>
          <Col sm={10}>
            <Input
              id="exampleNumber"
              name="number"
              placeholder="Enter Price"
              type="number"
              value={Price}
              onChange={(z) => setPrice(z.target.value)}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Location
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
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Organizer's Name</Label>
          <Col sm={10}>
            <Input
              id="exampleInput"
              name="text"
              placeholder="Enter Organizers Name"
              type="text"
              value={OrganizerName}
              onChange={(x) => setOrganizerName(x.target.value)}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Addressed to
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
              <option>Select Address</option>
              <option value={"Student"}>Student</option>
              <option value={"Medic"}>Medic</option>
              <option value={"EveryOne"}>EveryOne</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Topic
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
              <option value={"Non-Surgical"}>Non-Surgical</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button type="Submit">
              {myCreationLoader ? (
                <Spinner
                  // ssclassName="d-flex mx-auto mt-5 align-items-center justify-content-center overflow-hidden"
                  size="sm"
                  color="white"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Col>
        </FormGroup>
      </Form>

      {/* Footer */}
      <div className="row  mt-5 footerr">
        <Footer />
      </div>
    </>
  );
}

export default EventCreationForm;
