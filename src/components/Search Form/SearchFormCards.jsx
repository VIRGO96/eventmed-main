import React from "react";
import Cardbox from "./Card";
import { useEffect } from "react";
// import { getEvent } from "../Redux/Action/EventAction";
import { getEvent } from "../../Redux/Action/EventAction";
// import { getFavourite } from "../Redux/Action/favouriteAction";
import { getFavourite } from "../../Redux/Action/favouriteAction";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";

function SearchFormCards(props) {
  const dispatch = useDispatch();
  const { events, getEventsLoader } = useSelector((state) => state.event);

  const { favourites } = useSelector((state) => state.favourite);

  useEffect(() => {
    dispatch(getFavourite());
    dispatch(getEvent());
  }, []);

  return (
    <div className="container">
      {getEventsLoader ? (
        <Spinner
          className="d-flex mx-auto mt-5 align-items-center justify-content-center overflow-hidden"
          size="lg"
          color="primary"
         
        />
      ) : (
        <div className="row">
          {events
            .filter((temp) => {
              if (props.search === "") {
                return temp;
              } else if (
                temp.title.toLowerCase().includes(props.search.toLowerCase())
              ) {
                return temp;
              }
            })
            .map((data) => {
              return (
                <div className="col-lg-4 mb-3">
                  <Cardbox data={data} favourites={favourites} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default SearchFormCards;
