import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import swal from "sweetalert";

import { Accordion } from "react-bootstrap";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_bbv9hx3",
      "template_shykybs",
      e.target,
      "ASfGNrc2-v6KMe2ye"
    )
    .then(
      () => {
        swal({
          title: "The email has been sent!",
          text: `We will get back to you as soon as possible! Stay tuned!`,
        });
        e.target.reset();
      },
      (error) => {
        swal({
          title: `The email has not been sent! Error: ${error}`,
          text: `Please re-check your message and try again!`,
        });
      }
    );
}

//+set input as mandatory + validations
function ContactUs() {
  return (
    <>
      <NavigationBar />

      <div className="contact-us-body">
        <div className="contact-us-form">
          <p id="how-can-we-help">Contact Form</p>

          <form onSubmit={sendEmail} className="contact-form">
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                  name="name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address*"
                  name="email"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject*"
                  name="subject"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message*"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn-send-message btn"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>

        <div className="contact-us-info">
          <p id="how-can-we-help">How Can We Help?</p>

          <p id="please-select">
            Please select a topic below related to your inquiry. If you don't
            find what you need, fill out our contact form and we'll get back to
            you as soon as possible.
          </p>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How can I register a new account?
              </Accordion.Header>
              <Accordion.Body>
                In order to register a new account, you should press{" "}
                <a href="/signup" target="_blank" rel="noreferrer">
                  here
                </a>
                .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How can I log into my account?
              </Accordion.Header>
              <Accordion.Body>
                In order to log into your account, you should press {""}
                <a href="/login" target="_blank" rel="noreferrer">
                  here
                </a>
                .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>How can I reset my password?</Accordion.Header>
              <Accordion.Body>
                In order to change your password, you should press{" "}
                <a href="/reset_password" target="_blank" rel="noreferrer">
                  here
                </a>
                , and we will send you an email with the necessary steps.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How can I find an event that suits my needs?
              </Accordion.Header>
              <Accordion.Body>
                In order to find an event that suits your needs, you should
                press{" "}
                <a href="/" target="_blank" rel="noreferrer">
                  here
                </a>{" "}
                and apply the embedded filters.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Where can I see my favorite events?
              </Accordion.Header>
              <Accordion.Body>
                In order to see your favorite events, you should check the
                favorites section by logging into your account.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>How can I create a new event?</Accordion.Header>
              <Accordion.Body>
                Firstly, log into your account. Afterwards, you should press{" "}
                <a href="/event_creation_form" target="_blank" rel="noreferrer">
                  here
                </a>
                {""}.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                How can I contact you outside of this website?
              </Accordion.Header>
              <Accordion.Body>
                There are a few ways to contact us. You can access the social
                media pictograms from the footer, or email us at{" "}
                <span id="contact-ways">mateicristiansandu21@gmail.com</span>.
                If none of this works for you, you can also call us at{" "}
                <span id="contact-ways">+(40)726039795</span>.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div id="jump-to-id"></div>
      <Footer />
    </>
  );
}

export default ContactUs;
