import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
 import { getFavourite } from "../../Redux/Action/favouriteAction";
// import {
//   createFavourite,
//   removeFavourite,
// } from "../Redux/Action/favouriteAction";
import { createFavourite, removeFavourite } from "../../Redux/Action/favouriteAction";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { version } from "react-dom";

const FavouriteCards = (props) => {

  return (
    <>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle>
              Event Title : {props.data ? props.data.title : "N/A"}
            </CardTitle>
            <CardSubtitle>
              Catagory : {props.data ? props.data.category : "0.0"}
            </CardSubtitle>
            <CardSubtitle>
              Price : {props.data ? props.data.price : "OrganizerName"}
            </CardSubtitle>
            <CardSubtitle>
              Location : {props.data ? props.data.location : "Props Catagory"}
            </CardSubtitle>
            <CardSubtitle>
              Organizer's Name :{" "}
              {props.data ? props.data.organizer_name : "Location Empty"}
            </CardSubtitle>
            <CardSubtitle>
              Addressed to :{" "}
              {props.data ? props.data.addressed_to : "AddressNotFound"}
            </CardSubtitle>
            <CardSubtitle>
              Topic: {props.data ? props.data.topic : "N/A"}
            </CardSubtitle>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default FavouriteCards;
