import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  // Async function that handles the Login with Email and Password Procedure
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      setTimeout(() => {
        navigate("/home");
      }, 4000);
    } catch (err) {
      var errorCode = err.code;
      if (errorCode === "auth/invalid-email") {
        setError("Please input a valid email address below!");
      } else if (errorCode === "auth/wrong-password") {
        setError("Password is incorrect!");
      } else if (errorCode === "auth/internal-error") {
        setError("Password field must not be empty!");
      } else if (errorCode === "auth/user-not-found") {
        setError(`The user named ${email} doesn't exist!`);
      } else {
        setError(err.message);
      }
    }
  };

  // Async function that handles the Google Login procedure
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      var errorCode = err.code;
      if (errorCode === "auth/popup-closed-by-user") {
        setError("Please do not close the popup before loggin in!");
      } else setError(err.message);
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="p-4 box">
          <h2 className="mb-3 text-center" id="evenimed-header">
            EveniMed
          </h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button className="btn login-button" type="Submit">
                Sign In
              </Button>
            </div>
          </Form>
          <hr />

          <div>
            <GoogleButton
              className="google-btn"
              type="dark"
              onClick={handleGoogleSignin}
            />
          </div>

          <div className="p-4 mt-3 text-center text-btn-signup-recover">
            Don't have an account?{" "}
            <Link className="btn-signup-recover" to="/signup">
              Sign Up
            </Link>
          </div>

          <div className="text-center text-btn-signup-recover">
            Forgot your password?{" "}
            <Link className="btn-signup-recover" to="/reset_password">
              Reset Password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
