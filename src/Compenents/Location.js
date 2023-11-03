import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";


const Location = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getLocationList/"
      );
      const data = response.data.data;
      const bestDeals = data.filter((item) => item.tag_name === "Exclusive offer\r\n");
      setdata(bestDeals);
      console.log("Exclusive offer", bestDeals);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Container className="py-5 my-5">
      <Row>
        {data.map((location, index , exact) => (
          <Col sm={3} key={index}  exact={`${exact}`} className="mb-4">
            <Link to={`/locationdetalis/${location.location_id}`}>
              <div className="bestlocation">
                <Image src={location.image[0]} alt="" />
                <div className="position-relative">
                  <p>{location.location_name}</p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Location;
