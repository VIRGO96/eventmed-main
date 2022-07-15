import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";

import { Tooltip } from "@mui/material";

import {
  createFavourite,
  removeFavourite,
} from "../../Redux/Action/favouriteAction";
import { useDispatch } from "react-redux";

import { useUserAuth } from "../../context/UserAuthContext";

import swal from "sweetalert";

const Cardbox = (props) => {
  const dispatch = useDispatch();
  let { user } = useUserAuth();

  // Handle CLick
  function handleClick() {
    if (user != null) {
      let temp =
        props.favourites &&
        props.favourites.find((data) => data.event_id === props.data.id);
      if (temp) {
        dispatch(removeFavourite(props.data.id));
      } else {
        let obj = {
          event_id: props.data && props.data.id,
        };
        dispatch(createFavourite(obj));
      }
    } else {
      swal({
        title: "Please log in first!",
        text: `You need to log into your account to add an event to your favorites.`,
      });
    }
  }

  let getFavorites = (id) => {
    let temp =
      props.favourites && props.favourites.find((data) => data.event_id === id);
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
          <CardBody className="bg-light ">
            <CardText>
              <Tooltip title="The event will be added to your Favorites. It will take a second for this to take effect.">
                <i
                  onClick={handleClick}
                  className={`${
                    getFavorites(props.data && props.data.id)
                      ? "fas fa-heart fa-2x text-danger"
                      : "far fa-heart "
                  }`}
                ></i>
              </Tooltip>
            </CardText>

            <CardTitle>
              <span className="card-text">Event Title</span> :{" "}
              {props.data ? props.data.title : "N/A"}
            </CardTitle>

            <CardSubtitle>
              <span className="card-text">Catagory</span> :{" "}
              {props.data ? props.data.category : "0.0"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Price</span> :{" "}
              {props.data ? props.data.price : "OrganizerName"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Location</span> :{" "}
              {props.data ? props.data.location : "Props Catagory"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text"> Organizer's Name </span> :{" "}
              {props.data ? props.data.organizer_name : "Location Empty"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Date</span> : To be decided
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Addressed to</span> :{" "}
              {props.data ? props.data.addressed_to : "AddressNotFound"}
            </CardSubtitle>

            <CardSubtitle>
              <span className="card-text">Topic</span> :{" "}
              {props.data ? props.data.topic : "N/A"}
            </CardSubtitle>

            <CardText>
              <Tooltip title="Ask us anything!">
                <a
                  className="card-text"
                  href="/contact_us"
                >
                  Contact the organizer
                </a>
              </Tooltip>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default Cardbox;
