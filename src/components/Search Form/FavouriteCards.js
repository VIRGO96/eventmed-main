import React from "react";
import {
  Card,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";


const FavouriteCards = (props) => {

  return (
    <>
      <CardGroup>
        <Card>
          <CardBody>

            <CardTitle>
              <span className="card-text">Event Title</span> : {props.data ? props.data.title : "N/A"}
            </CardTitle>

            <CardSubtitle>
              <span className="card-text">Catagory</span> : {props.data ? props.data.category : "0.0"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Price</span> : {props.data ? props.data.price : "OrganizerName"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Location</span> : {props.data ? props.data.location : "Props Catagory"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">  Organizer's Name </span> :{" "} {props.data ? props.data.organizer_name : "Location Empty"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Date</span> : To be decided
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Addressed to</span>  :{" "} {props.data ? props.data.addressed_to : "AddressNotFound"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Topic</span> : {props.data ? props.data.topic : "N/A"}
            </CardSubtitle>

          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default FavouriteCards;
