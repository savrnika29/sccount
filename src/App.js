import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Compenents/Header";
import Home from "./Compenents/Home";
import Footer from "./Compenents/Footer";
import About from "./Compenents/About";
import Location from "./Compenents/Location";
import Booking from "./Compenents/Booking";
import Login from "./Compenents/Login";
import Register from "./Compenents/Register";
import Sublocation from "./Compenents/Sublocation";
import Locationdetails from "./Compenents/Locationdetails";
import Contact from "./Compenents/Contact";
import ProductPage from "./Compenents/ProductPage";
import Findproperties from "./Compenents/Findproperties";
import { ToastContainer } from "react-toastify";
import PrivacyPolicy from "./Compenents/PrivacyPolicy";
import TermsCondition from "./Compenents/TermsCondition";
import Faq from "./Compenents/Faq";
import ForgotPasswordPage from "./Compenents/ResetPasswordPage";
import VerifyMailPage from "./VerifyMailPage";
import ResetPasswordPage from "./Compenents/ResetPasswordPage";
import Bookings from "./Compenents/Bookings";

const App = () => {
  return (
    <>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route
            path="/locationdetalis/:locationid"
            element={<Locationdetails />}
          />
          <Route path="/sublocation" element={<Sublocation />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookings" element={<Bookings />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/verify" element={<VerifyMailPage />} />
          <Route
            exact
            path="/reset-password/:customer_id"
            element={<ResetPasswordPage />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productpage/:sublocationid" element={<ProductPage />} />
          <Route
            path="/findproperties/:category_type"
            element={<Findproperties />}
          />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termscondition" element={<TermsCondition />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
