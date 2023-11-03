import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const LocationType = () => {
  var id = useParams();
  console.log(id);
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `https://parkhyamapps.co.in/scott_shoot/api/a1/getLocationType`
    );
    setdata(response.data.data);
    console.log("response", response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="top-heading-section my-5">
        Have a specific <br /> <span>property</span>in mind
      </h1>
      <Row className="p-0">
        {data.map((location, index) => (
          <Col sm={6} key={index} className="mb-4">
            <Link to={`/findproperties/${location.category_name}`}>
              <div className="specific-pro">
                <Image src={location.category_img} alt="" />
                <div className="box-speci">
                  <div>
                    <p>{location.category_name}</p>
                    <button className="btn btn-view">view more</button>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LocationType;
