import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { Image } from "react-bootstrap";

const Bestdeals = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/getLocationList/"
      );
      const data = response.data.data;
      const bestDeals = data.filter(
        (item) => item.tag_name === "Best deals for you"
      );
      setdata(bestDeals);
      console.log("bestDeals", bestDeals);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="top-heading-section my-5">
        <span>Best Deals</span> for you
      </h1>

      <OwlCarousel
        className="owl-theme-1"
        loop
        margin={20}
        items={4}
        dots={true}
        nav={true}
        navText={[
          "<i class='fas fa-chevron-left'></i>",
          "<i class='fas fa-chevron-right'></i>",
        ]}
      >
        {data.map((location, index, exact) => (
          <Link
            to={`/locationdetalis/${location.location_id}`}
            exact={`${exact}`}
            key={index}
          >
            <div className="best-deal-item">
              <Image src={location.image[0]} alt="" />
              <div>
                <Link
                  to={`/locationdetalis/${location.location_id}`}
                  className="btn"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </OwlCarousel>
    </div>
  );
};
export default Bestdeals;
