import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Thailand1, Thailand2, Thailand3, Thailand4, banner2 } from "./imgUrl";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sublocation from "./Sublocation";

const Locationdetails = () => {
  var id = useParams();
  console.log(id);
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://parkhyamapps.co.in/scott_shoot/api/a1/getLocationDetail/?location_id=${id.locationid}`
    );
    setdata(response.data.data);
    // console.log("responseasdasd", response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* <h1 className="top-heading-section my-5">
        AS <span>Thailand </span> 01
      </h1> */}

      <OwlCarousel
        className="owl-theme"
        margin={20}
        loop
        items={1.5}
        center={true}
        nav={true}
      >
        {data?.image?.map((val, index) => (
          <div className="image-slider">
            <img src={val} alt="" />
          </div>
        ))}
      </OwlCarousel>
      <Container>
        <Row>
          <Col sm={8}>
            <h1 className="top-heading-section  text-start">
              AS <span> {data?.location_name} </span> 01
            </h1>

            <div className="location-dsescition">
              <p>{data?.description}</p>
            </div>
            <Row>
              <Col sm="auto" className="ps-0">
                <div className="size-area">
                  <h6>Size/Area</h6>
                  <p>2 sqft</p>
                </div>
              </Col>
              <Col sm="auto">
                <div className="size-area">
                  <h6>Height</h6>
                  <p>12 ft</p>
                </div>
              </Col>
              <Col sm="auto">
                <div className="size-area">
                  <h6>Light condition</h6>
                  <p>Good</p>
                </div>
              </Col>
            </Row>

            <div className="facilities">
              <h5>Most popular facilities</h5>
              <ul>
                <li>Free WiFi</li>
                <li>Restaurant</li>
                <li>Airport shuttle</li>
                <li>Non-smoking rooms</li>
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="Google Maps"
                  width="100%"
                  height="100%"
                  src={`https://maps.google.com/maps?q=${data?.location_name}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>

                <style>
                  {`.mapouter{position:relative;text-align:right;height:100%;width:100%;}`}
                </style>

                <style>
                  {`.gmap_canvas{overflow:hidden;background:none!important;height:100%;width:100%;}`}
                </style>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Sublocation locationid={id.locationid} />
    </>
  );
};

export default Locationdetails;
