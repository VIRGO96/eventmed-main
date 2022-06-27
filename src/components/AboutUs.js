import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <NavigationBar />

      <div className="about-us-body">
        <div className="about-us-section1">
          <p className="the-evenimed-story">The EveniMed Story</p>
        </div>
        <div className="about-us-section2">
          <div className="message-box-1">
            <div className="message-box-1-chenar">
              <p>
                {" "}
                Helping you choose the right medical events for{" "}
                <b className="you-italic">you.</b>
              </p>
            </div>
          </div>

          <div className="message-box-2">
            <div className="message-box-2-message">
              {" "}
              <div className="mission-goals">Mission, Goals & Values</div>
              It all started from the desire to create a{" "}
              <span className="white">seamless experience</span> for both the
              users and the event organizers. After discussing with several
              medical enthusiasts, we saw the need for a{" "}
              <span className="white">centralized space</span> for all your
              favorite events. <br></br> <br></br>At EveniMed, we make it a
              priority to provide you with the most comprehensive list of
              medical events available, allowing you to select the ones that
              best suit your needs. We value{" "}
              <span className="white">efficiency</span>, therefore we
              enhanced the filter option to assist you in making a more informed
              decision quicker and easier. <br></br> <br></br> <br></br>
              <span className="you-italic">
                "Loved this idea, so easy to use!" - Otilia, medical student
              </span>
              <br></br>
              <br></br>{" "}
              <span className="you-italic">
                "I appreciate how much time this website has saved me!" - Prof.
                MD. Bruckner, university professor
              </span>
              <br></br>
              <br></br>
              <span className="you-italic">
                "Great marketing platform for our events!" - IMSCB Team, medical
                event organizer
              </span>

              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
