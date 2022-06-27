import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useDispatch, useSelector } from "react-redux";
// import { getmyEvent } from "./Redux/Action/EventAction";
import { getmyEvent } from "../Redux/Action/EventAction";
// import { getFavourite } from "./Redux/Action/favouriteAction";
import { getFavourite } from "../Redux/Action/favouriteAction";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import Cardbox from "./Search Form/Card";
import MyEventCards from "./Search Form/MyEventCards";
import FavouriteCards from "./Search Form/FavouriteCards";
import { Spinner } from "reactstrap";

function Home() {
  const dispatch = useDispatch();
  const { myEvents, myEventsLoader } = useSelector((state) => state.event); 

  const { logOut } = useUserAuth();

  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    try {
      e.preventDefault();
      await logOut();
      swal({
        title: "Signing out...",
        text: `You have been logged out!`,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackToMainPage = async (e) => {
    try {
      e.preventDefault();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };



  const { favourites, myFavouriteLoader } = useSelector(
    (state) => state.favourite
  );

  useEffect(() => {
    dispatch(getmyEvent());
    dispatch(getFavourite());
  }, []);

  return (
    <>
      <div className="home-root">
        <div className="home-box">
          <p id="home-welcome">Welcome to your profile!</p>
          <p id="home-text">Favorite events:</p>
          {myFavouriteLoader ? ( 
         <Spinner
              className="d-flex mx-auto mt-5 align-items-center justify-content-center"
              size="lg"
              color="primary"
              overflow="hidden"
            /> 
         ) : ( 
          <div className="row">
            {favourites &&
              favourites.map((data) => {
                return (
                  <div className="col-lg-4 mb-3">
                    <FavouriteCards data={data && data.Event} />
                  </div>
                );
              })}
          </div>
         )}
          <div id="home-text">
            <Link className="btn-signup-recover" to="/search">
              Find a new event{" "}
            </Link>
          </div>
          <p id="home-text">Created events:</p>
          <div id="home-text">
            {/* //FavoriteLoader */}
            {myEventsLoader ? (
              <Spinner
                className="d-flex mx-auto mt-5 align-items-center justify-content-center"
                size="lg"
                color="primary"
                overflow="hidden"
              />
            ) : (
              // <div className="row">
              //   {myEvents.map((data) => {
              //     return (
              //       <div className="col-lg-4 mb-3">
              //         <MyEventCards data={data} />
              //       </div>

              //   );
              // })}
              // </div>
              <div className="row">
                {myEvents.map((data) => {
                  return (
                    <div className="col-lg-4 mb-3">
                      <MyEventCards data={data} />
                    </div>
                  );
                })}
              </div>
            )}
            <Link className="btn-signup-recover" to="/event_creation_form">
              Create a new event{" "}
            </Link>
          </div>
          <div className="wrapper-for-sign-out">
            <Button
              className="btn-back-to-main-page "
              onClick={handleBackToMainPage}
            >
              Back to main page{" "}
            </Button>
          </div>
          <div className="wrapper-for-sign-out">
            <Button className="btn-sign-out" onClick={handleLogOut}>
              Sign Out{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
