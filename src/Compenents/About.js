import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import about from "../Images/about.png";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getAboutUs"
      );
      setData([response.data.data]);

      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Container className="py-5">
      <h1 className="top-heading-section my-5">
        <span>About</span> us
      </h1>
      <Row className="align-items-center">
        <Col sm={6}>
          <Image src={about} fluid alt="" />
        </Col>
        <Col sm={6}>
          <div className="about-section">
            {data.map((item) => (
              <p key={item.id}>{item.policy_content}</p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
