import React from "react";
import Cardbox from "./Card";
import { useEffect } from "react";
import { getEvent } from "../../Redux/Action/EventAction";
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

  const getFilteredEvents = () => {
    return events.filter((temp) => {
      if (Object.entries(props.filter).every(filter => filter[1] === '') && props.priceRange[0] === 0 && props.priceRange[1] === 0) {
        return temp;
      }
      else if (
        (props.filter.category === "" || props.filter.category === temp.category) &&
        (props.filter.location === "" || props.filter.location === temp.location) &&
        (props.filter.addressTo === "" || props.filter.addressTo === temp.addressed_to) &&
        (props.filter.topic === "" || props.filter.topic === temp.topic) &&
        (props.priceRange[0] === 0 || props.priceRange[1] === 0 || (props.priceRange[0] <= Number(temp.price) && props.priceRange[1] >= Number(temp.price)))
      ) {
        return temp;
      }
    })
      .filter((temp) => {
        if (props.search === "") {
          return temp;
        } else if (
          temp.title.toLowerCase().includes(props.search.toLowerCase())
        ) {
          return temp;
        }
      })
  }

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
          {getFilteredEvents().length === 0 ? <div className="pt-3 fw-bold d-flex align-items-center justify-content-center">No event found with reference to your criteria</div> :
            getFilteredEvents()
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
