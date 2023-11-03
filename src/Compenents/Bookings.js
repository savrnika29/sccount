import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Bookings = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const property = queryParams.get("property");
  const country = queryParams.get("country");
  const state = queryParams.get("state");
  const city = queryParams.get("city");
  const property_owner = queryParams.get("property_owner");
  const propertyName = queryParams.get("propertyName");
  const sub_location_id = queryParams.get("sub_location_id");
  const country_id = queryParams.get("country_id");
  const state_id = queryParams.get("state_id");
  const city_id = queryParams.get("city_id");
  const property_owner_id = queryParams.get("property_owner_id");
  const location_id = queryParams.get("location_id");
  const category_id = queryParams.get("category_id");
  const booking_date = queryParams.get("date");
  const full_name = localStorage.getItem("customer_name"); // Get username
  const email_id = localStorage.getItem("email_id"); // Get username
  const [mobile_number, setMobile_number] = useState("");
  const [time_slot, setTime_slot] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("full_name", full_name);
    data.append("mobile_number", mobile_number);
    data.append("email_id", email_id);
    data.append("booking_date", booking_date);
    data.append("time_slot", time_slot);
    data.append("message", message);
    data.append("country", country);
    data.append("state", state);
    data.append("country_id", country_id);
    data.append("state_id", state_id);
    data.append("city_id", city_id);
    data.append("location_id", location_id);
    data.append("property_owner", property_owner);
    data.append("propertyName", propertyName);
    data.append("sub_location_id", sub_location_id);
    data.append("category_id", category_id);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://parkhyamapps.co.in/scott_shoot/api/a1/bookingRequest",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success("SuccessFull");
        // navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("falied " + error.message);
      });
  };

  const [dataAll, setDataAll] = useState([]);
  const [selectedSubLocation, setSelectedSubLocation] = useState("");

  useEffect(() => {
    const fetchDataAll = async () => {
      try {
        const response = await axios.get(
          "https://parkhyamapps.co.in/scott_shoot/api/a1/getAllFilter"
        );
        setDataAll(response.data.data.sub_location_data);
        console.log(response.data.data.sub_location_data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAll();
  }, []);

  const handleSubLocationChange = (e) => {
    setSelectedSubLocation(e.target.value);
  };

  // Find the selected sub location object
  const selectedSubLocationObject = dataAll.find(
    (item) => item.sub_location_name === selectedSubLocation
  );

  return (
    <>
      <h1 className="top-heading-section mt-5">
        <span>Tell us</span> what you need!
      </h1>
      <p className="top-para-section">We will customize & call you back.</p>
      <Container>
        <form onSubmit={handleSubmit}>
          <Row className="my-5">
            <Col sm={6}>
              <div className="formfield">
                <Form.Control
                  type="text"
                  name="full_name"
                  required
                  placeholder="Full Name*"
                  // onChange={(e) => setFull_name(e.target.value)}
                  value={full_name}
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Control
                  type="number"
                  name="mobile_number"
                  required
                  placeholder="Mobile No."
                  onChange={(e) => setMobile_number(e.target.value)}
                  value={mobile_number}
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Control
                  type="email"
                  name="email_id"
                  required
                  placeholder="Email ID"
                  // onChange={(e) => setEmail_id(e.target.value)}
                  value={email_id}
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Control
                  type="date"
                  name="booking_date"
                  required
                  placeholder="Date"
                  // onChange={(e) => setBooking_date(e.target.value)}
                  value={booking_date}
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Control
                  type="time"
                  name="time_slot"
                  required
                  placeholder="Time Slots"
                  onChange={(e) => setTime_slot(e.target.value)}
                  value={time_slot}
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Select name="">
                  <option disabled>Property name</option>
                  <option value={location_id}>{propertyName}</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Select name="">
                  <option disabled>Sub Location Id</option>
                  <option value={sub_location_id}>{sub_location_id}</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Select name="" id="country" value={country}>
                  <option disabled>Country</option>
                  <option value={country_id}>{country}</option>
                </Form.Select>
              </div>
            </Col>

            <Col sm={6}>
              <div className="formfield">
                <Form.Select name="" id="state" value={state}>
                  <option disabled>state</option>
                  <option value={state_id}>{state}</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield">
                <Form.Select name="" id="city" value={city}>
                  <option disabled>City</option>
                  <option value={city_id}>{city}</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={6}>
              <div className="formfield d-none">
                <Form.Select name="" id="category_id" value={category_id}>
                  <option disabled>City</option>
                  <option value={category_id}>{category_id}</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={12}>
              <div className="formfield">
                <Form.Select name="">
                  <option disabled>Property owner</option>
                  <option value={property_owner_id}>{property_owner}</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={12}>
              <div className="formfield">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  value={message}
                ></Form.Control>
              </div>
            </Col>
            <Col sm={12}>
              <div className="text-center mb-5">
                <Button type="submit" className="btn btn-comman px-5">
                  Send request
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Bookings;
