import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import user from "../Images/user.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sublocation from "./Sublocation";
import { Review } from "./Testimonials";

const ProductPage = () => {
  var id = useParams();
  // console.log(id);
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `https://parkhyamapps.co.in/scott_shoot/api/a1/getSubLocationDetail/?sub_location_id=${id.sublocationid}`
    );
    setdata(response.data.data);
    console.log("response111", response.data.data);
    // console.log("response", response.data.data);
  };

  useEffect(() => {
    console.log("id.sublocationid", id.sublocationid);
    fetchData();
  });

  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleBooking = () => {
    // Use the 'date' value and other data to construct the URL
    const url = `/booking?property=${data?.sub_location_id}&country=${data?.country_name}&state=${data?.state_name}&city=${data?.city_name}&category_id=${data?.category_id}&location_id=${data?.location_id}&property_owner=${data?.property_owner}&sub_location_id=${data?.sub_location_id}&propertyName=${data?.sub_location_name}&country_id=${data?.country_id}&state_id=${data?.state_id}&city_id=${data?.city_id}&property_owner_id=${data?.property_owner_id}&date=${date}`;

    // Perform any other actions or navigation here
  };

  return (
    <div className="container py-4">
      <div className="row my-5">
        <div className="col-sm-6">
          <Carousel
            showThumbs={true}
            thumbWidth={100}
            infiniteLoop={true}
            showArrows={true}
          >
            {data?.image?.map((val, index) => (
              <div key={index} className="image-slider">
                <img src={val} alt="" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="col-sm-6">
          <h1 className="top-heading-section text-start  ">
            <span> {data?.sub_location_name} </span>
          </h1>
          <div className="star-rating d-flex gap-3 mb-3">
            <div className="d-flex gap-1">
              <span className="fal fa-star checked"></span>
              <span className="fal fa-star checked"></span>
              <span className="fal fa-star checked"></span>
              <span className="fal fa-star"></span>
              <span className="fal fa-star"></span>
            </div>
            <p className="mb-0">2 Reviews</p>
          </div>

          <div className="price-date d-flex  gap-5 mb-2">
            <h3>₹{data?.price}</h3>
            <div>
              <i className="fal fa-calendar-alt me-1"> </i>{" "}
              <span>Calender</span>
              <input
                type="date"
                name=""
                id=""
                value={date}
                onChange={handleDateChange}
              />
            </div>
          </div>

          <div className="about-section">
            <p>{data?.sub_description}</p>
            <Link
              className="btn btn-booknow px-5"
              to={{
                pathname: "/bookings",
                search: `/bookings?property=${data?.sub_location_id}&date=${date}&country=${data?.country_name}&state=${data?.state_name}&city=${data?.city_name}&category_id=${data?.category_id}&location_id=${data?.location_id}&property_owner=${data?.property_owner}&sub_location_id=${data?.sub_location_id}&propertyName=${data?.sub_location_name}&country_id=${data?.country_id}&state_id=${data?.state_id}&city_id=${data?.city_id}&property_owner_id=${data?.property_owner_id}`,
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <Review />

      <Sublocation locationid={`${data?.location_id}`} />
    </div>
  );
};

export default ProductPage;
