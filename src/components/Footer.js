import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

// Be sure to utilize container fluid!
function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section>
          <p id="footer-message">
            <span id="footer-logo">EveniMed</span> is a proud member of the
            Medical Community. We strive to empower our users to make educated
            decisions about which medical events they should attend. Let's
            collaborate!
          </p>
        </section>

        <section>
          <p id="footer-message">
            By signing up you are agreeing to our{" "}
            <a href="/privacy_policy" className="privacy-policy-link">
              Privacy Policy.
            </a>
          </p>
        </section>

        <section className="">
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/matei.sandu.1/"
            role="button"
          >
            <AiFillFacebook />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/MateiSandu21"
            role="button"
          >
            <AiOutlineTwitter />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/matei_sandu/"
            role="button"
          >
            <AiFillInstagram />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/matei-cristian-sandu/"
            role="button"
          >
            <AiFillLinkedin />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/MateiSandu"
            role="button"
          >
            <AiFillGithub />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        © 2022 Copyright: <span id="footer-logo">EveniMed</span>
      </div>
    </MDBFooter>
  );
}

export default Footer;
