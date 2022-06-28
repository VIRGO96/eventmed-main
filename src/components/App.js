import "../css/App.css";
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "../context/UserAuthContext";

// Import the developed components
import Evenimed from "./Evenimed";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import AboutUs from "./AboutUs";
import EventCreationForm from "./EventCreationForm";
import Search from "./Search";
import PrivacyPolicy from "./PrivacyPolicy";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    // <ProtectedRoute>
                    <Evenimed />
                    // </ProtectedRoute>
                  }
                />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset_password" element={<ResetPassword />} />
                <Route path="/privacy_policy" element={<PrivacyPolicy />} />
                <Route path="/contact_us" element={<ContactUs />} />
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      {" "}
                      <Home />{" "}
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/event_creation_form"
                  element={
                    <ProtectedRoute>
                      <EventCreationForm />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <ProtectedRoute>
                      <Search />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
