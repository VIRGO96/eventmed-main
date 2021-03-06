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


import {
  createFavourite,
  removeFavourite,
} from "../../Redux/Action/favouriteAction";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { version } from "react-dom";
import { getFavourite } from "../../Redux/Action/favouriteAction";
import { useUserAuth } from "../../context/UserAuthContext";

const Cardbox = (props) => {
  const dispatch = useDispatch();
  const [aFavorite, setaFavorite] = useState(false);
  let { user } = useUserAuth();

  // Handle CLick
  function handleClick() {
    if (user != null) {
      let temp =
        props.favourites &&
        props.favourites.find((data) => data.event_id == props.data.id);
      if (temp) {
        dispatch(removeFavourite(props.data.id));
      } else {
        let obj = {
          event_id: props.data && props.data.id,
        };
        dispatch(createFavourite(obj));
      }
    } else {
      alert("You need to login to add event to favorite");
    }
  }

  let getFavorites = (id) => {
    let temp =
      props.favourites && props.favourites.find((data) => data.event_id == id);
    if (temp) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <CardGroup>
        <Card>
          <CardBody>

            <CardText>
              <i
                onClick={handleClick}
                className={`${getFavorites(props.data && props.data.id)
                    ? "fas fa-heart fa-2x text-danger"
                    : "far fa-heart "
                  }`}
              ></i>
            </CardText>
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

export default Cardbox;
