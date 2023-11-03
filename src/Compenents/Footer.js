import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Footer = () => {
  const [email_id, email_idchange] = useState();

  let handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();

    data.append("email_id", email_id);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://parkhyamapps.co.in/scott_shoot/api/a1/getSubscribeUs",
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

  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col sm={3}>
            <div className="footer-box">
              <p>quick links</p>
              <ul>
                <li>
                  <a href="/About"> About Scoutt shoot </a>
                </li>
                <li>
                  <a href=""> Best Locations </a>
                </li>
                <li>
                  <a href="/Booking"> Booking </a>
                </li>
                <li>
                  <a href="/Contact"> contact us </a>
                </li>
                <li>
                  <a href="/privacypolicy"> privacy policy </a>
                </li>
                <li>
                  <a href="/termscondition"> terms of service </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={3}>
            <div className="footer-box">
              <p>support</p>
              <ul>
                <li>
                  <a href=""> help center </a>
                </li>
                <li>
                  <a href="/faq"> FAQ </a>
                </li>
                <li>
                  <a href=""> cancellation options </a>
                </li>
                <li>
                  <a href=""> safety information </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={3}>
            <div className="footer-box">
              <p>Subscribe Us</p>
              <form onSubmit={handleSubmit}>
                <Form.Group className="formfield">
                  <Form.Control
                    type="text"
                    required
                    value={email_id}
                    onChange={(e) => email_idchange(e.target.value)}
                    placeholder="Enter your Email ID"
                  />
                </Form.Group>
                <Button type="sumbit" className="px-5">
                  Submit
                </Button>
              </form>
            </div>
          </Col>
          <Col sm={3}>
            <div className="footer-box">
              <p>connect with us</p>
              <div className="d-flex gap-5">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
              <Button variant="primary" className="px-3 mt-5">
                get in touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
