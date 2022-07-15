import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

import swal from "sweetalert";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();
  const navigate = useNavigate();

  // Reset Password procedure
  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (email) {
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
          resetPassword(email).then(
            swal({
              title: "Email has been sent!",
              text: `Please check your email. Sent instructions to ${email}`,
            }),
            navigate("/login")
          );
        } else {
          setError("Please input a valid email address below!");
        }
      } else {
        setError("Please provide an email address!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="p-4 box">
          <h2 className="mb-3 text-center" id="evenimed-header">
            {" "}
            Forgot Password?
          </h2>

          <p className="reset-instructions">
            Enter the email associated with your account
          </p>
          <p className="reset-instructions">
            and we'll send you an email with instructions
          </p>
          <p className="reset-instructions">to reset your password.</p>

          {error && (
            <Alert className="mt-3 mb-2" variant="danger">
              {error}
            </Alert>
          )}
          <Form>
            <Form.Group className="mt-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>

          <div className="p-4 text-center d-grid gap-2">
            <Button className="btn login-button" onClick={resetPasswordHandler}>
              Send instructions
            </Button>
          </div>

          <div className=" text-center text-btn-signup-recover">
            Already have an account?{" "}
            <Link className="btn-signup-recover" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
