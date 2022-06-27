import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import swal from "sweetalert";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  // function that handles the account creation procedure + custom errors
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (password === password2) {
        await signUp(email, password);
        navigate("/login");
        swal({
          title: "Account creation",
          text: `The account has been created!`,
        });
      } else {
        setError("Passwords do not match!");
      }
    } catch (err) {
      var errorCode = err.code;
      if (errorCode === "auth/email-already-in-use") {
        setError("Email is already in use!");
      } else if (errorCode === "auth/invalid-email") {
        setError("Please enter a valid email address!");
      } else if (errorCode === "auth/weak-password") {
        setError("The Password should be at least 6 characters!");
      } else if (errorCode === "auth/internal-error") {
        setError("Password field must not be empty!");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="p-4 box">
          <h2 className="mb-3 text-center" id="evenimed-header">
            Create your account
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Control
                type="password"
                placeholder="Retype Password"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button type="Submit" className="btn login-button ">
                Sign up
              </Button>
            </div>
          </Form>

          <div className="p-4 text-center text-btn-signup-recover">
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

export default Signup;
