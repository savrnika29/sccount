import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const TVAds = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getLocationList/"
      );
      const data = response.data.data;
      const bestDeals = data.filter((item) => item.tag_name === "TV Ads");
      setdata(bestDeals);
      console.log("TV Ads", bestDeals);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-sm-8">
          <h1 className="top-heading-section my-5 text-start">
            Properties best for<span> TV Ads </span>
          </h1>
        </div>
        <div className="col-4 text-end">
          <div>
            <a href="" className="view-link">
              View all
            </a>
          </div>
        </div>
        {data.map((location, index, exact) => (
          <div className="col-sm-3 mb-4">
            <div className="bestlocation">
              <Link to={`/locationdetalis/${location.location_id}`}>
                <Image src={location.image[0]} alt="" />
                <div className="position-relative">
                  <p>{location.location_name}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-comman px-5">View all</button>
      </div>
    </div>
  );
};
export default TVAds;
